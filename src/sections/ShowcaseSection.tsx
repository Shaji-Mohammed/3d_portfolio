const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>On-Demand Rides made simple</h2>
              <p className="text-white-50 md:text-xl">
                An App built with React Native, Expo, TailwindCSS
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project">
                <div className="image-wrapper bg-[#ffefdb]">
                    <img src="/images/project2.png" alt="Lyft" />
                </div>
                <h2>
                    Management tool
                </h2>
            </div>

            <div className="project">
                <div className="image-wrapper bg-[#ffe7eb]">
                    <img src="/images/project3.png" alt="Lyft" />
                </div>
                <h2>TC Directory - Start-up showcase</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
