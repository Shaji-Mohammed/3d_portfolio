import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  forwardRef,
} from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
}

export const AnimatedThemeToggler = forwardRef<
  HTMLButtonElement,
  AnimatedThemeTogglerProps
>(({ className, duration = 400, onClick, ...props }, ref) => {
  const [isDark, setIsDark] = useState(false);
  const internalRef = useRef<HTMLButtonElement>(null);

  // Sync internal ref with external ref (from TooltipTrigger)
  const setRefs = useCallback(
    (node: HTMLButtonElement | null) => {
      internalRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        // @ts-ignore
        ref.current = node;
      }
    },
    [ref],
  );

  useEffect(() => {
    // 1. Check if a theme is stored; if not, default to "dark"
    if (!localStorage.getItem("theme")) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    // 2. Update internal state based on the DOM
    const updateTheme = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      // Call external onClick first (important for Tooltip/Radix behavior)
      onClick?.(e);

      const newTheme = !isDark;

      // Fallback for browsers without View Transitions
      if (!document.startViewTransition) {
        setIsDark(newTheme);
        document.documentElement.classList.toggle("dark", newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
        return;
      }

      const transition = document.startViewTransition(() => {
        flushSync(() => {
          setIsDark(newTheme);
          document.documentElement.classList.toggle("dark", newTheme);
          localStorage.setItem("theme", newTheme ? "dark" : "light");
        });
      });

      await transition.ready;
      if (!internalRef.current) return;

      const { top, left, width, height } =
        internalRef.current.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      const maxRadius = Math.hypot(
        Math.max(left, window.innerWidth - left),
        Math.max(top, window.innerHeight - top),
      );

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    },
    [isDark, duration, onClick],
  );

  return (
    <button
      ref={setRefs}
      onClick={toggleTheme}
      className={cn(className)}
      {...props}
    >
      {isDark ? (
        <Sun className="size-5 transition-transform hover:rotate-180 duration-500" />
      ) : (
        <Moon className="size-5 transition-transform hover:-rotate-12 duration-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
});

AnimatedThemeToggler.displayName = "AnimatedThemeToggler";
