export default function About() {
  const data = [
    {
      name: "Languages",
      icon1: "./assets/code-icon.png",
      icon2: "./assets/code-icon-dark.png",
      description: "HTML, CSS, JavaScript React Js, Next Js",
    },
    {
      name: "Education",
      icon1: "./assets/edu-icon.png",
      icon2: "./assets/edu-icon-dark.png",
      description:
        "Bsc in Computer Engineering from University of Ruhuna, Sri Lanka",
    },
  ];
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ramishka">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center sm:items-start gap-20 my-20">
        <div className="max-w-max mx-auto relative">
          <img
            src="./assets/user-image.png"
            alt=""
            className="w-64 sm:w-80 rounded-3xl max-w-none"
          />

          <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
            <img
              src="./assets/circular-text.png"
              alt=""
              className="w-full animate-spin_slow"
            />
            <img
              src="./assets/dev-icon.png"
              alt=""
              className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="mb-4 max-w-2xl font-Ovo">
            I’m a Computer Engineering student and founder focused on building
            scalable systems that connect software with the real world.
          </p>
          <p className="mb-4 max-w-2xl font-Ovo">
            My work spans large-scale Learning Management Systems serving
            thousands of users, e-commerce platforms, and industrial IoT
            solutions for factories. I’m particularly interested in system
            architecture, multi-tenant platforms, and integrating hardware with
            cloud-based software to solve real operational problems.
          </p>
          <p className="mb-4 max-w-2xl font-Ovo">
            I enjoy transforming complex, messy workflows into structured,
            automated systems. Whether it’s optimizing backend architecture,
            designing APIs for scalability, or deploying IoT infrastructure, I
            approach problems with a systems-thinking mindset.
          </p>
          <p className="mb-4 max-w-2xl font-Ovo">
            Currently, I’m exploring advanced industrial software, AI-driven
            automation, and scalable SaaS architectures. Long term, I aim to
            contribute to high-impact engineering fields including large-scale
            infrastructure systems and space-related technologies.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
