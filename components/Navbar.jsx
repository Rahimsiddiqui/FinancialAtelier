"use client";

// Third party imports
import { useEffect, useRef, useState } from "react";
import { Wallet, Menu, X, Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import Link from "next/link";

// Components
import { useTheme } from "@/context/ThemeContext";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1024);

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return isDesktop;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dragStartYRef = useRef(0);
  const sheetRef = useRef(null);
  const { theme, toggleTheme, mounted: themeMounted } = useTheme();
  const [portalTarget, setPortalTarget] = useState(null);
  const isDesktop = useIsDesktop();
  const pathname = usePathname();

  const getClass = (path) =>
    pathname === path ? "text-primary" : "text-secondary/80 hover:text-primary";

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPortalTarget(document.body);
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen && !isDesktop) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isMenuOpen, isDesktop]);

  const handleTouchStart = (e) => {
    dragStartYRef.current = e.touches[0].clientY;
    if (sheetRef.current) sheetRef.current.style.transition = "none";
  };

  const handleTouchMove = (e) => {
    const deltaY = e.touches[0].clientY - dragStartYRef.current;
    if (deltaY > 0 && sheetRef.current) {
      sheetRef.current.style.transform = `translateY(${deltaY}px)`;
    }
  };

  const handleTouchEnd = (e) => {
    if (!sheetRef.current) return;

    const deltaY = e.changedTouches[0].clientY - dragStartYRef.current;
    const sheetHeight = sheetRef.current.offsetHeight;
    const shouldClose = deltaY > sheetHeight * 0.3;

    if (shouldClose) setIsMenuOpen(false);

    sheetRef.current.style.transition = "transform 0.3s ease";
    sheetRef.current.style.transform = shouldClose
      ? "translateY(100%)"
      : "translateY(0)";
  };

  return (
    <>
      {isMenuOpen && (
        <div className="absolute inset-0 min-w-screen min-h-screen backdrop-blur-md"></div>
      )}
      <section className="fixed w-full h-20 bg-neutral flex items-center justify-between px-4 sm:px-7 md:px-10 lg:px-12 border-b border-border z-50 transition-colors duration-300 ease">
        <div className="flex justify-center items-center gap-30">
          <Link
            href="/"
            className="flex justify-center items-center text-lg sm:text-xl font-extrabold text-primary leading-tight font-manrope cursor-pointer gap-3 sm:gap-3.5"
          >
            <Wallet className="w-6 h-6 sm:w-7 sm:h-7" /> Financial Atelier
          </Link>

          <div className="hidden lg:flex justify-center items-center gap-10 text-sm">
            <Link
              href="/features"
              className={`font-medium transition-colors duration-200 tracking-wide ${getClass(
                "/features",
              )}`}
            >
              Features
            </Link>

            <Link
              href="/about"
              className={`font-medium transition-colors duration-200 tracking-wide ${getClass(
                "/about",
              )}`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`font-medium transition-colors duration-200 tracking-wide ${getClass(
                "/contact",
              )}`}
            >
              Contact
            </Link>
          </div>
        </div>

        <div>
          <div className="lg:hidden cursor-pointer flex items-center gap-5 sm:gap-7">
            {themeMounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-secondary/10 transition-colors duration-200 text-secondary cursor-pointer"
                aria-label="Toggle dark mode"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </button>
            )}

            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-block cursor-pointer z-50 relative"
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                <Menu className="w-5 h-5 mr-1" />
              ) : (
                <X className="w-5 h-5 mr-1" />
              )}
            </button>
          </div>
        </div>

        {portalTarget &&
          createPortal(
            <div
              className="fixed inset-0 z-40 transition-opacity transition-colors duration-200 ease flex flex-col items-center justify-end bg-background/40 lg:hidden"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                pointerEvents: isMenuOpen ? "auto" : "none",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              <div
                className="fixed z-50 left-0 bottom-0 w-full h-[70vh] border-t border-border rounded-t-[2.5rem] shadow-[0_-10px_30px_rgba(0,0,0,0.15)] text-center pointer-events-auto backdrop-blur-none flex flex-col justify-between"
                ref={sheetRef}
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                  backgroundColor: "var(--color-neutral)",
                  transform: isMenuOpen ? "translateY(0)" : "translateY(100%)",
                  transition: "transform 0.3s ease-out",
                }}
              >
                <p className="w-16 md:w-20 h-1.5 mt-8 mb-4 mx-auto rounded-xl bg-secondary/70"></p>

                <ul className="flex-1 pt-2 flex flex-col text-base items-center justify-center gap-6">
                  <li>
                    <Link
                      href="/features"
                      className={`font-medium transition-colors duration-200 tracking-wide ${getClass(
                        "/features",
                      )}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Features
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/about"
                      className={`font-medium transition-colors duration-200 tracking-wide ${getClass(
                        "/about",
                      )}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact"
                      className={`font-medium transition-colors duration-200 tracking-wide ${getClass(
                        "/contact",
                      )}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>

                <div className="pt-6 pb-8 flex flex-col text-[1rem] items-center justify-center gap-4">
                  <Link
                    href="/auth?mode=login"
                    className="px-6 py-3.5 text-secondary/80 hover:text-secondary font-medium transition-colors duration-200 rounded-lg leading-widest hover:bg-secondary/8 dark:hover:bg-surface"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>

                  <Link
                    href="/auth?mode=signup"
                    className="border-none rounded-lg px-12 md:px-14 py-3.5 text-[0.95rem] text-white dark:text-white/90 bg-linear-to-r from-blue-700/90 to-blue-700 hover:scale-[1.01] transition-transform font-bold font-manrope tracking-wide transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>,
            document.body,
          )}

        <div className="hidden lg:flex text-center items-center text-sm justify-center gap-4">
          {themeMounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary/8 transition-[background-color] duration-200 text-secondary cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          )}

          <Link
            href="/auth?mode=login"
            className="px-6 py-3.5 text-secondary/80 hover:text-secondary font-medium transition-colors duration-200 rounded-lg leading-widest hover:bg-secondary/8 dark:hover:bg-surface"
          >
            Login
          </Link>

          <Link
            href="/auth?mode=signup"
            className="border-none rounded-lg px-8 py-3.5 text-white dark:text-white/90 bg-linear-to-r from-blue-700/90 to-blue-700 hover:scale-[1.01] transition-transform font-bold font-manrope tracking-wide transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
