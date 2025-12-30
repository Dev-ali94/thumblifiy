import {DribbbleIcon,LinkedinIcon,TwitterIcon,YoutubeIcon} from "lucide-react";
import { footerData } from "../data/footer";
import { motion } from "motion/react";
import type { IFooterLink } from "../types";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-40 py-10 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-400">
      <div className="flex flex-col md:flex-row justify-between gap-16">
        {/* LEFT: Logo + Description */}
        <motion.div
          className="max-w-xs space-y-4"
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 60 }}
        >
          <a href="#" className="inline-block">
            <img
              src="/logo.svg"
              alt="footer logo"
              className="w-28"
            />
          </a>
          <p className="text-gray-500 leading-relaxed -mt-3">
            Building modern, fast and intractive thembnails with us
          </p>
        </motion.div>

        {/* CENTER: Footer Links */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-10"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 60 }}
        >
          {footerData.map((section, index) => (
            <div key={index}>
              <p className="text-slate-100 font-semibold mb-3">
                {section.title}
              </p>
              <ul className="space-y-2">
                {section.links.map((link: IFooterLink, i: number) => (
                  <li key={i}>
                    <Link
                      to={link.href}
                      className="hover:text-pink-600 transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* RIGHT: Social Icons */}
        <motion.div
          className="flex md:flex-col items-center md:items-start gap-4"
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 60 }}
        >
          <p className="text-slate-100 font-semibold">Follow Me</p>
          <div className="flex items-center gap-4">
            <a href="#"><DribbbleIcon className="size-5 hover:text-pink-500 transition" /></a>
            <a href="#"><LinkedinIcon className="size-5 hover:text-pink-500 transition" /></a>
            <a href="#"><TwitterIcon className="size-5 hover:text-pink-500 transition" /></a>
            <a href="#"><YoutubeIcon className="size-6 hover:text-pink-500 transition" /></a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
