import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      {/* <section id="contact" class="contact reveal fade-bottom"> */}
      <div className="w-full mt-2.5 mb-10 h-auto items-center align-middle justify-center">
        <h2 className="page-headings">&lt;/Contact&gt;</h2>
      </div>
      <h2>Let's Talk!</h2>
      <p>Please reach out to me via email!</p>
      <a href="mailto: fredhong.to@gmail.com" className="home-buttons">
        Send email
      </a>
    </section>
  );
}

export default Contact;
