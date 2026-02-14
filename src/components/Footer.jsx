import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Social Links */}
            <div className="flex items-center space-x-5">
              <a
                href="https://github.com/amitsah02"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/amit-kumar-sah-120265251"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </a>

              {/* Optional: Keep these only if you have profiles */}
              <a
                href="#"
                className="opacity-60 cursor-not-allowed"
                aria-label="Facebook"
                title="Facebook (add link)"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="opacity-60 cursor-not-allowed"
                aria-label="Twitter"
                title="Twitter (add link)"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="opacity-60 cursor-not-allowed"
                aria-label="Instagram"
                title="Instagram (add link)"
              >
                <FaInstagram size={24} />
              </a>
            </div>

            {/* Contact */}
            <div className="mt-6 flex items-center gap-2 text-sm opacity-90">
              <FaEnvelope />
              <a
                href="mailto:aks.amit113@gmail.com"
                className="hover:underline"
              >
                aks.amit113@gmail.com
              </a>
            </div>

            {/* Bottom Text */}
            <div className="mt-8 border-t border-gray-700/50 pt-6 w-full flex flex-col items-center gap-2">
              <p className="text-sm opacity-80">
                © {new Date().getFullYear()} Amit Kumar Sah. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
