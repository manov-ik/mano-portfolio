import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ManoResume from "../assets/manovikram_k_resume.pdf";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: "64px", // 64px is the height of your navbar (h-16 = 4rem = 64px)
      transition: { staggerChildren: 0.1 },
    },
    exit: { opacity: 0, y: "-100%" },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="w-full h-16 flex items-center justify-between px-6 font-mono text-white z-50 fixed top-0 left-0 backdrop-blur-md border-b border-[#484851]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <motion.div
        className="font-black text-center"
        whileHover={{ scale: 1.05 }}
      >
        <a
          href="/"
          className="hover:text-[#BB77FF] transition-all duration-300"
          onClick={closeMenu}
        >
          <h1 className="text-2xl leading-none">MA</h1>
          <h1 className="text-2xl -mt-2">NO</h1>
        </a>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center">
        <NavLink href="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink href="/skill" onClick={closeMenu}>
          Skill
        </NavLink>
        <NavLink href="/projects" onClick={closeMenu}>
          Project
        </NavLink>
        <NavLink href="/#connect" onClick={closeMenu}>
          Contact
        </NavLink>
        <NavLink href="/more" onClick={closeMenu}>
          More
        </NavLink>
        <motion.a
          href={ManoResume}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <p className="text-xs p-2 border rounded-lg hover:bg-white hover:text-[#1A191D] transition-all">
            open resume
          </p>
        </motion.a>
      </div>

      {/* Mobile Menu Toggle */}
      <motion.div
        className="md:hidden z-50 cursor-pointer"
        onClick={toggleMenu}
        whileTap={{ scale: 0.9 }}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-[#1A191D] flex flex-col justify-center items-center space-y-8 text-xl z-40"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <MobileLink href="/" onClick={closeMenu} variants={linkVariants}>
              Home
            </MobileLink>
            <MobileLink
              href="/skill"
              onClick={closeMenu}
              variants={linkVariants}
            >
              Skill
            </MobileLink>
            <MobileLink
              href="/projects"
              onClick={closeMenu}
              variants={linkVariants}
            >
              Project
            </MobileLink>
            <MobileLink
              href="/#connect"
              onClick={closeMenu}
              variants={linkVariants}
            >
              Contact
            </MobileLink>
            <MobileLink
              href="/more"
              onClick={closeMenu}
              variants={linkVariants}
            >
              About
            </MobileLink>
            <motion.a
              href={ManoResume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="px-4 py-2 border rounded hover:bg-white hover:text-[#1A191D] transition-all text-sm"
              variants={linkVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              open resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function NavLink({ href, children, onClick }: any) {
  return (
    <motion.a
      href={href}
      className="text-sm font-bold hover:bg-[#BB77FF] p-2 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.a>
  );
}

function MobileLink({ href, onClick, children, variants }: any) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="hover:text-[#BB77FF] transition-all text-lg"
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

export default NavBar;
