import "../behindCode.css";
const process = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "Understand the problem, user needs, requirements, and the APIs or data involved before starting development.",
  },
  {
    number: "02",
    title: "BUILD",
    description:
      "Break the interface into reusable React components, establish clear data flow, and manage state intentionally.",
  },
  {
    number: "03",
    title: "REFINE",
    description:
      "Debug edge cases, improve performance, and refine responsive behavior, accessibility, and the overall user experience.",
  },
  {
    number: "04",
    title: "TEST & SHIP",
    description:
      "Validate important user flows, test critical functionality, and prepare reliable frontend features for production.",
  },
];
const exploring = [
  "Next.js",
  "Motion",
  "GSAP",
  "Three.js",
  "React Three Fiber",
  "3D Interfaces",
  "Creative Web Animations",
];
const BehindCode = () => {
  return (
    <section id="behind-code" className="behind-section">
      <p className="section-label">
        05 / BEHIND THE CODE
      </p>
      <div className="behind-layout">
        {/* LEFT SIDE */}
        <div className="behind-left">
          <div className="behind-sticky">
            <h2 className="behind-title">
              HOW I
              <br />
              BUILD.
            </h2>
            <p className="behind-intro">
              I enjoy turning ideas into responsive, maintainable
              frontend experiences while continuously exploring new
              ways to make web experiences more interactive.
            </p>
            <div className="exploring">
              <span className="exploring-label">
                CURRENTLY EXPLORING
              </span>
              <div className="exploring-tech">
                {exploring.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="behind-process">
          {process.map((step) => (
            <div
              className="process-step"
              key={step.number}
            >
              <span className="process-number">
                {step.number}
              </span>
              <div className="process-content">
                <h3>
                  {step.title}
                </h3>
                <p>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BehindCode;