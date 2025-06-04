import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-pink-400 to-yellow-100 flex flex-col items-center justify-center px-4 md:px-10 lg:px-64 py-20"
    >
      <div className="max-w-md w-full bg-white bg-opacity-80 rounded-xl shadow-xl p-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent text-center">
          Contact Me
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-pink-700 text-sm font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border border-pink-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 bg-yellow-50 text-pink-700"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-pink-700 text-sm font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-pink-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 bg-yellow-50 text-pink-700"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-pink-700 text-sm font-medium mb-1"
            >
              Message
            </label>
            <textarea
              rows="4"
              id="message"
              className="w-full px-4 py-2 rounded-lg border border-pink-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 bg-yellow-50 text-pink-700"
              placeholder="How can I help you?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-bold hover:to-yellow-500 hover:text-pink-700 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;