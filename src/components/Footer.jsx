import React from 'react';

const Footer = () => {
    return (
     <div>
           <footer
      className="mt-24 border-t"
      style={{ backgroundColor: "#f5f7ff" }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-12">

        {/* TOP */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-10 text-center sm:text-left">

          {/* Brand */}
          <div>
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: "#1e2a78" }}
            >
              Ayat Alabi Lam
            </h2>

            <p
              className="text-base sm:text-lg mt-2"
              style={{ color: "#5b6bbf" }}
            >
              Frontend Developer | Next.js Enthusiast
            </p>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-base sm:text-lg font-semibold"
              style={{ color: "#1e2a78" }}
            >
              📞 016025-14628
            </p>

            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Available for freelance work & collaboration
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 text-center sm:text-left">

          {/* Copyright */}
          <p className="text-sm sm:text-base text-gray-600">
            © {new Date().getFullYear()} Ayat Alabi Lam. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex justify-center sm:justify-end gap-6 text-2xl">

            <a href="#" className="hover:scale-110 transition">
              📘
            </a>

            <a href="#" className="hover:scale-110 transition">
              📸
            </a>

            <a href="#" className="hover:scale-110 transition">
              💼
            </a>

            <a href="#" className="hover:scale-110 transition">
              🐦
            </a>

          </div>

        </div>

      </div>
    </footer>
        </div>
    );
};

export default Footer;