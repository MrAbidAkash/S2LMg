const ContactPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        Please fill out the form below to get in touch with us:
      </p>

      <form className="w-full max-w-lg">
        <div className="mb-4">
          <label className="block 700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow bg-transparent outline outline-primary-content  outline-4 rounded w-full py-2 px-3 "
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label className="block 700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow bg-transparent outline outline-primary-content  outline-4 rounded w-full py-2 px-3 700 leading-tight "
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label className="block 700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow bg-transparent outline outline-primary-content  outline-4 rounded w-full py-2 px-3 700 leading-tight "
            id="message"
            placeholder="Your Message"
            rows={4}
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="btn btn-primary font-bold py-2 px-4 rounded "
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
