import '../../styles/main.css';

export default function ContactMe() {
  return (
    <section className="contact | container">
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
            value="https://julianhein.netlify.app/"
          ></input>
          <button type="submit" className="contact--submit | square-button">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
