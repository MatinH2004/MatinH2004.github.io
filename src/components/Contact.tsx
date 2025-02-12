export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-black text-white font-sans">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <p className="mb-8 text-gray-400">Feel free to reach out via any of the following methods:</p>

        <div className="space-y-6">
          <div className="flex justify-center items-center space-x-3">
            <span className="text-lg font-semibold">📞</span>
            <a href="tel:+17783234696" className="text-[#0070f3] hover:text-white text-lg">
              +1 (778) 323-4696
            </a>
          </div>

          <div className="flex justify-center items-center space-x-3">
            <span className="text-lg font-semibold">📧</span>
            <a href="mailto:matinhp04@gmail.com" className="text-[#0070f3] hover:text-white text-lg">
              matinhp04@gmail.com
            </a>
          </div>

          <div className="flex justify-center items-center space-x-3">
            <span className="text-lg font-semibold">📸</span>
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#0070f3] hover:text-white text-lg">
              @matinh04
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
