"use client";

interface BtnBorderProps {
  name: string;
  path: string;
}

export function BtnBorder({ name, path }: BtnBorderProps) {
  return (
    <a className="group relative flex h-9 w-fit items-center justify-center gap-2 overflow-hidden whitespace-pre rounded-md bg-zinc-800 px-2 py-2  font-medium text-white shadow transition-all duration-300 ease-out hover:bg-black/90 hover:ring-2 hover:ring-black hover:ring-offset-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 md:flex">
      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
      <div className="flex items-center">
        <svg viewBox="0 0 50 50" className="size-5 fill-current">
          <image href={path} />
        </svg>
        <span className="ml-1.5 font-baskerville text-lg text-white">{name}</span>
      </div>
    </a>
  );
}
