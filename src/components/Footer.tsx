interface FooterProps {
  isDarkMode: boolean;
  scrollToSection: (sectionId: string) => void;
  textClasses: string;
  cardClasses: string;
}

const Footer = ({
  isDarkMode,
  scrollToSection,
  textClasses,
  cardClasses,
}: FooterProps) => {
  return (
    <footer
      className={`py-12 ${
        isDarkMode ? "bg-black/40" : "bg-gray-900/10"
      } backdrop-blur-lg border-t ${
        isDarkMode ? "border-white/10" : "border-gray-300/30"
      }`}
    >
      <div className="max-w-6xl px-6 mx-auto text-center">
        <div className="mb-8">
          <h3 className="mb-4 text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
            Let's Connect
          </h3>
          <p className={`${textClasses} mb-6`}>
            Ready to collaborate on exciting projects or discuss opportunities?
          </p>
        </div>

        <div className="text-center">
          <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
            © 2025 Maaz Khokhar. All rights reserved.
          </p>
          <a
            href="mailto:khokharmaaz@gmail.com"
            className={`block mt-2 underline hover:text-cyan-400 transition-colors duration-200 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            khokharmaaz@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
