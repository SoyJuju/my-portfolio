import '../../styles/main.css';

import twitter_logo from '../../assets/icon-twitter.svg';
import leetcode_logo from '../../assets/icon-leetcode.svg';
import mail_logo from '../../assets/icon-mail.svg';

export default function ContactMe() {
  return (
    <section className="contact | container">
      <div className="contact--introduction">
        <h1 className="contact-heading | fs-small-950 fw-bold">
          Let's chat. <br />
          Tell me about your project.
        </h1>
        <p className="contact--subintro | fs-small-600 fw-medium padding-block-300">
          Let's create something together.
        </p>
        <div className="contact--email-container">
          <img className="contact--icon" src={mail_logo} alt="" />
          <div>
            <h3 className="contact--email-heading | fs-smsll-400 fw-bold">
              Mail me at
            </h3>
            <a
              href="mailto:julianthant@gmail.com"
              className="contact--email | fw-regular fs-small-200"
            >
              julianthant@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="contact--information | text-primary-400 bg-neutral-100">
        <p className="contact--text | fs-small-200">GET IN TOUCH</p>
        <h1 className="contact-heading | fs-primary-heading fw-black">
          Contact Me
        </h1>
        <p className="contact--subheading | padding-block-200 fw-bold">
          Your Name
        </p>
        <form
          target="_self"
          action="https://formsubmit.co/5385df37b9c3edd6ea761a3900d0f923"
          method="POST"
          className="contact--form"
        >
          <input
            type="text"
            name="name"
            className="contact--input | padding-block-100"
            placeholder="What is your name?"
            required
          />
          <p className="contact--subheading | padding-block-200 fw-bold">
            Your Email
          </p>
          <input
            type="email"
            name="email"
            className="contact--input | padding-block-100"
            placeholder="What is your email?"
            required
          />
          <p className="contact--subheading | padding-block-200 fw-bold">
            Your Message
          </p>
          <textarea
            name="message"
            id=""
            rows="5"
            className="contact--input padding-block-100"
            placeholder="What is your message?"
            required
          ></textarea>
          <input
            type="hidden"
            name="_next"
            value="https://julianhein.netlify.app/contact"
          ></input>
          <button type="submit" className="contact--submit | square-button">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
