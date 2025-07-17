export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Andres Niño</h1>
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Systems Engineer
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-8">
            Passionate about technology, software development, and solving real-world problems through code.
            I am currently studying software engineering at the Pedagogical and Technological University of Colombia.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4" id="contact">
        <div className="text-center">
          <p>© {new Date().getFullYear()} Andres Niño</p>
          <p>Email: andresalejandroninoaraujo@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
