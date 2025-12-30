import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <motion.nav className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <a href="#">
                    <img className="size-7 w-auto" src="/logo.svg" />
                </a>
                <div className="hidden md:flex items-center gap-8 transition duration-500">
                    <RouterLink to={"/"} className="hover:text-pink-300 transition">Home</RouterLink>
                    <RouterLink to={"/generate"} className="hover:text-pink-300 transition">Generate</RouterLink>
                    <RouterLink to={"/my-generation"} className="hover:text-pink-300 transition">My Generation</RouterLink>
                    <Link smooth to="/#contact" className="hover:text-pink-300 transition">Contact</Link>
                </div>
                <button onClick={() => navigate("/login")} className="hidden md:block px-6 py-2.5 bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all rounded-full">
                    Start free trial
                </button>
                <button onClick={() => setIsOpen(true)} className="md:hidden">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </motion.nav>

            <div
  className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex flex-col items-start justify-start p-4 text-lg gap-8 md:hidden transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  {/* Close Button */}
  <div className="w-full flex justify-end">
    <button
      onClick={() => setIsOpen(false)}
      className="flex items-center justify-center w-10 h-10 bg-pink-600 hover:bg-pink-700 text-white rounded-md transition focus:outline-none focus:ring-2 focus:ring-pink-400"
    >
      <XIcon size={20} />
    </button>
  </div>

  {/* Menu Links */}
  <div className="flex flex-col w-full space-y-6 mt-6">
    <RouterLink
      onClick={() => setIsOpen(false)}
      to="/"
      className="px-4 py-2 rounded-lg hover:text-pink-300 hover:bg-pink-800/20 transition"
    >
      Home
    </RouterLink>

    <RouterLink
      onClick={() => setIsOpen(false)}
      to="/generate"
      className="px-4 py-2 rounded-lg hover:text-pink-300 hover:bg-pink-800/20 transition"
    >
      Generate
    </RouterLink>

    <RouterLink
      onClick={() => setIsOpen(false)}
      to="/my-generation"
      className="px-4 py-2 rounded-lg hover:text-pink-300 hover:bg-pink-800/20 transition"
    >
      My Generation
    </RouterLink>

    <Link
      smooth
      onClick={() => setIsOpen(false)}
      to="/#contact"
      className="px-4 py-2 rounded-lg hover:text-pink-300 hover:bg-pink-800/20 transition"
    >
      Contact
    </Link>
  </div>
</div>

        </>
    );
}   