"use client";

// Third party imports
import { useEffect, useRef, useState } from "react";
import { Wallet, Menu, X, Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

// Theme Context
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

  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";
  const user = session?.user;

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

    requestAnimationFrame(() => {
      const sheetHeight = sheetRef.current.offsetHeight;
      const shouldClose = deltaY > sheetHeight * 0.3;

      if (shouldClose) setIsMenuOpen(false);

      sheetRef.current.style.transition = "transform 0.3s ease";
      sheetRef.current.style.transform = shouldClose
        ? "translateY(100%)"
        : "translateY(0)";
    });
  };

  return (
    <>
      {isMenuOpen && (
        <div className="absolute inset-0 min-w-screen min-h-screen backdrop-blur-md"></div>
      )}
      <section className="fixed w-full mt-4 sm:mt-4.5 px-4 min-[400px]:px-7 md:px-10 xl:px-0 z-50 transition-colors duration-300 ease">
        <div className="w-full mx-auto lg:max-w-6xl bg-neutral/80 border border-border/80 dark:border-border/70 p-4 min-[400px]:px-10 md:px-12 lg:px-14 rounded-full flex items-center justify-between backdrop-blur-sm transition-colors duration-300 ease">
          <div className="flex justify-center items-center gap-10 min-[1200px]:gap-30">
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

              <Link
                href="/terms"
                className={`font-medium transition-colors duration-200 tracking-wide ${getClass(
                  "/terms",
                )}`}
              >
                Terms
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
                  className="relative z-50 left-0 bottom-0 w-screen h-[70vh] border-t border-border rounded-t-[2.5rem] shadow-[0_-10px_30px_rgba(0,0,0,0.15)] text-center pointer-events-auto backdrop-blur-none flex flex-col justify-between"
                  ref={sheetRef}
                  onClick={(e) => e.stopPropagation()}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  style={{
                    backgroundColor: "var(--color-neutral)",
                    transform: isMenuOpen
                      ? "translateY(0)"
                      : "translateY(100%)",
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

                    <li>
                      <Link
                        href="/terms"
                        className={`font-medium transition-colors duration-200 tracking-wide ${getClass(
                          "/terms",
                        )}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Terms
                      </Link>
                    </li>
                  </ul>

                  <div className="pt-6 pb-8 flex flex-col text-[1rem] items-center justify-center gap-4">
                    {isLoading ? (
                      <div className="flex flex-col items-center justify-center gap-4 w-full">
                        {/* Avatar skeleton */}
                        <div className="w-10 h-10 rounded-full bg-secondary/20 animate-pulse" />

                        {/* Button skeletons */}
                        <div className="w-48 h-12 rounded-xl bg-secondary/20 animate-pulse" />
                        <div className="w-48 h-12 rounded-xl bg-secondary/20 animate-pulse" />
                      </div>
                    ) : !isAuthenticated ? (
                      <>
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
                      </>
                    ) : (
                      <Link
                        href="/dashboard"
                        className="w-10 h-10 bg-surface-highlight rounded-full border-none"
                      >
                        {user?.image ? (
                          <Image
                            className="rounded-full object-cover object-center dark:brightness-90 bg-linear-to-r from-blue-500/70 to-primary/90"
                            src={user?.image}
                            alt={user?.name}
                            title={user?.name}
                            width={40}
                            height={40}
                            priority
                          />
                        ) : (
                          <div className="w-10 h-10 font-bold flex justify-center items-center text-xl rounded-full bg-linear-to-r from-blue-500/60 to-primary/80 font-manrope text-white">
                            {user?.name.slice(0, 1).toUpperCase()}
                          </div>
                        )}
                      </Link>
                    )}
                  </div>
                </div>
              </div>,
              document.body,
            )}

          <div className="hidden lg:flex text-center items-center text-sm justify-center gap-4">
            {isLoading ||
              (themeMounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-secondary/8 transition-[background-color] duration-200 text-secondary cursor-pointer"
                  aria-label="Toggle dark mode"
                >
                  {theme === "light" ? (
                    <Moon className="w-4.5 h-4.5" />
                  ) : (
                    <Sun className="w-4.5 h-4.5" />
                  )}
                </button>
              ))}

            {isLoading ? (
              <div className="hidden lg:flex items-center gap-5">
                <div className="w-8 h-8 rounded-full bg-secondary/20 animate-pulse" />
                <div className="w-20 h-10 rounded-lg bg-secondary/20 animate-pulse" />
                <div className="w-37 h-11.5 rounded-lg bg-secondary/20 animate-pulse" />
              </div>
            ) : !isAuthenticated ? (
              <>
                <Link
                  href="/auth?mode=login"
                  className="px-6 py-3.25 text-secondary/80 hover:text-secondary font-medium transition-colors duration-200 rounded-lg leading-widest hover:bg-secondary/8 dark:hover:bg-surface"
                >
                  Login
                </Link>

                <Link
                  href="/auth?mode=signup"
                  className="border-none rounded-lg px-8 py-3.25 text-white dark:text-white/90 bg-linear-to-r from-blue-700/90 to-blue-700 hover:scale-[1.01] transition-transform font-bold font-manrope tracking-wide transition-colors duration-200"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <Link
                href="/dashboard"
                className="w-11.5 h-11.5 flex overflow-hidden bg-surface-highlight rounded-full ml-5 border-none"
              >
                {user?.image ? (
                  <Image
                    className="rounded-full object-cover object-center dark:brightness-90 bg-linear-to-r from-blue-500/70 to-primary/90"
                    src={user?.image}
                    alt={user?.name}
                    title={user?.name}
                    width={46}
                    height={42}
                    priority
                  />
                ) : (
                  <div className="w-12 h-12 font-bold flex justify-center items-center text-xl rounded-full bg-linear-to-r from-blue-500/60 to-primary/80 font-manrope text-white">
                    {user?.name.slice(0, 1).toUpperCase()}
                  </div>
                )}
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
