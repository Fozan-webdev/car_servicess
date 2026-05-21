// src/components/Navbar.jsx
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from "react-icons/fa";
import logo from "../assets/carlogo.svg";
import { navbarStyles as styles } from "../assets/dummyStyles";
import axios from "axios";

const LOGOUT_ENDPOINT = "/api/auth/logout";
const ME_ENDPOINT = "/api/auth/me"; // Added missing endpoint constant

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("token")
  );
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const abortRef = useRef(null);

  const base = "http://localhost:5000";
  const api = axios.create({
    baseURL: base,
    headers: { Accept: "application/json" },
  });

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/cars", label: "Cars" },
    { to: "/contact", label: "Contact" },
    { to: "/bookings", label: "My Bookings" },
    { to: "/recommendations", label: "Recommendation" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const validateToken = useCallback(
    async (signal) => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLoggedIn(false);
        setUser(null);
        return;
      }

      try {
        const res = await api.get(ME_ENDPOINT, {
          signal,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const profile = res?.data?.user ?? res?.data ?? null;
        if (profile) {
          setIsLoggedIn(true);
          setUser(profile);
          try {
            localStorage.setItem("user", JSON.stringify(profile));
          } catch {}
        } else {
          setIsLoggedIn(true);
          setUser(null);
        }
      } catch (err) {
        if (
          axios.isAxiosError(err) &&
          err.response &&
          err.response.status === 401
        ) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setIsLoggedIn(false);
          setUser(null);
        } else {
          setUser(null);
        }
      }
    },
    [api]
  );

  useEffect(() => {
    if (abortRef.current) {
      try {
        abortRef.current.abort();
      } catch {}
    }
    const controller = new AbortController();
    abortRef.current = controller;
    validateToken(controller.signal);

    return () => {
      try {
        controller.abort();
      } catch {}
      abortRef.current = null;
    };
  }, [validateToken]);

  const handleLogout = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        await api.post(
          LOGOUT_ENDPOINT,
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
            timeout: 2000,
          }
        );
      } catch {}
    }

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    setIsOpen(false);

    navigate("/", { replace: true });
  }, [api, navigate]);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`${styles.nav.base} ${
        scrolled ? styles.nav.scrolled : styles.nav.notScrolled
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center z-[101]">
              <div className={styles.logoContainer}>
                {/* <img
                  src={logo}
                  alt="GCB Logo"
                  className="h-10 w-auto"
                /> */}
                <span className={styles.logoText}>GCB Services</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className={styles.navLinksContainer}>
              <div className={styles.navLinksInner}>
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`${styles.navLink.base} ${
                      isActive(link.to)
                        ? styles.navLink.active
                        : styles.navLink.inactive
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* User Actions */}
            <div className={styles.userActions}>
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className={styles.authButton}
                >
                  <FaSignOutAlt className="text-base" />
                  <span className={styles.authText}>Logout</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  className={styles.authButton}
                >
                  <FaUser className="text-base" />
                  <span className={styles.authText}>Login</span>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-[101]">
              <button
                ref={buttonRef}
                onClick={() => setIsOpen((p) => !p)}
                className={styles.mobileMenuButton}
              >
                {isOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      <div
        className={`${styles.mobileMenu.container} ${
          isOpen ? styles.mobileMenu.open : styles.mobileMenu.closed
        }`}
      >
        <div className={styles.mobileMenuInner}>
          <div className={styles.mobileGrid}>
            {navLinks.map((link, idx) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`${styles.mobileLink.base} ${
                  isActive(link.to)
                    ? styles.mobileLink.active
                    : styles.mobileLink.inactive
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {link.label}
              </Link>
            ))}
            
            <div className={styles.divider} />

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className={styles.mobileAuthButton}
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className={styles.mobileAuthButton}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;