"use client";

import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      className="bg-white/7 text-white py-6 px-8"
      style={{ marginTop: "5.5rem" }}>
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm">&copy; All Rights Reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaTwitter
              className="text-white hover:text-blue-400 transition ml-4"
              size={24}
            />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaDiscord
              className="text-white hover:text-purple-400 transition ml-4"
              size={24}
            />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub
              className="text-white hover:text-gray-400 transition ml-4"
              size={24}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
