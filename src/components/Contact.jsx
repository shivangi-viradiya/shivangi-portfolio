import "../contact.css";
const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <p className="section-label">
        06 / CONTACT
      </p>
      <div className="contact-header">
        <h2 className="contact-title">
          HAVE AN
          <br />
          OPPORTUNITY?
          <br />
          LET'S CONNECT.
        </h2>
        <div className="contact-intro">
          <p>
            I'm currently exploring Frontend and React opportunities
            where I can contribute, continue learning, and build
            meaningful user experiences.
          </p>
          <a
            href="https://www.linkedin.com/in/shivangiviradiya"
            target="_blank"
            className="contact-cta"
          >
            LET'S TALK
            <span>↗</span>
          </a>
        </div>
      </div>
      <div className="contact-details">
        <div className="contact-detail">
          <span className="contact-detail-label">
            EMAIL
          </span>
          <a href="mailto:shivangiviradiya2986@gmail.com">
            shivangiviradiya2986@gmail.com
          </a>
        </div>
        <div className="contact-detail">
          <span className="contact-detail-label">
            LINKEDIN
          </span>
          <a
            href="https://www.linkedin.com/in/shivangiviradiya"
            target="_blank"
            rel="noreferrer"
          >
            CONNECT ↗
          </a>
        </div>
        <div className="contact-detail">
          <span className="contact-detail-label">
            GITHUB
          </span>
          <a
            href="https://github.com/shivangi-viradiya"
            target="_blank"
            rel="noreferrer"
          >
            VIEW PROFILE ↗
          </a>
        </div>
      </div>
      <div className="contact-footer">
        <p>
          SHIVANGI VIRADIYA
        </p>
        <p>
          FRONTEND DEVELOPER
        </p>
        <p>
          © 2026
        </p>
      </div>
    </section>
  );
};
export default Contact;