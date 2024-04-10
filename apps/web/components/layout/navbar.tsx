"use client";
import { useState, useEffect } from "react";

const Navbar = ({}: {}) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 h-14 z-50 bg-slate-50 transition duration-300 ${scroll < 50 ? "bg-opacity-0" : "bg-opacity-70 border-b backdrop-blur-md duration-500"}`}
      />
      <nav className="fixed left-0 right-0 top-0 z-50 mx-auto flex h-14 items-center w-full max-w-screen-xl justify-between px-2">
        <h1 className="text-3xl font-semibold">CallMap</h1>
      </nav>
    </>
  );
};

export default Navbar;
