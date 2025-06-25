import { Mail, Linkedin, Github } from 'lucide-react';

interface Props {
    isOutOfCollege?: boolean;
}

const Footer: React.FC<Props> = ({ isOutOfCollege }) => {
    return (
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl text-white p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to collaborate on something amazing? I'm always excited to
              discuss new opportunities and innovative projects.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="khokharmaaz@gmail.com"
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              {isOutOfCollege && (
                <a
                  href="https://linkedin.com/MyLinkedinProfile"
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              )}
              <a
                href="https://github.com/coolestcoder655"
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </section>
    );
};

export default Footer;