export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Andres Niño</h1>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
            Software Engineer
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-8">
            Passionate about technology, software development, and solving real-world problems through code.
            I am currently studying software engineering at the Pedagogical and Technological University of Colombia.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 dark:hover:bg-blue-500transition duration-300"
          >
            Contact Me
          </a>
        </div>

        <section id="contact" className="mt-20">
          <h3 className="text-2xl font-semibold text-center  dark:bg-black mb-6">Get in Touch</h3>
          <form
            onSubmit={(e) => {
            e.preventDefault();
            console.log("Formulario enviado");
          }}
            method="POST"
            className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 dark:bg-black">
        <div className="text-center">
          <p>© {new Date().getFullYear()} Andres Niño</p>
          <p>Email: andresalejandroninoaraujo@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
