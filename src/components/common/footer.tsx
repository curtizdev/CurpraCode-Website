import React from "react";
import Image from "next/image";
import styles from "@/app/home.module.css";
import { FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16 px-4 md:px-10">
      <a href="/" className="flex text-center items-center space-x-4">
        <Image
          aria-hidden
          src={"/logo.png"}
          alt="icon"
          width={50}
          height={50}
          className="w-8 lg:w-10"
        />
        <h3 className={`${styles.heading} text-white text-md lg:text-xl`}>
          CurpraCode
        </h3>
      </a>

      {/* Social Media Links */}
      <div className="flex space-x-6 mt-6">
        <a
          href="https://x.com/curpracode_hq"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:scale-110 hover:rotate-6 transition-transform duration-300"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://linkedin.com/company/curpracode-technologies/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:scale-110 hover:rotate-6 transition-transform duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/curpracode_tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:scale-110 hover:rotate-6 transition-transform duration-300"
        >
          <FaInstagram />
        </a>
      </div>

      <div className="text-center mt-4">
        <div className="flex flex-row text-md space-x-4">
          <p>
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
          </p>
          <p>
            <a href="mailto:hello@curpracode.com" className="hover:underline">
              hello@curpracode.com
            </a>
          </p>
        </div>
        <div className="mt-4">
          <p>&copy; {new Date().getFullYear()} CurpraCode Ltd.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
