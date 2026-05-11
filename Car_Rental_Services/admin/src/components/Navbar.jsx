import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import { CalendarCheck, Car, PlusCircle } from "lucide-react";
import logo from "../assets/carlogo.svg";
import { navbarStyles as styles } from "../assets/dummyStyles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const navLinks = [
    { to: "/", label: "Add Car", icon: PlusCircle },
    { to: "/manage-cars", label: "Manage Cars", icon: Car },
    { to: "/bookings", label: "Bookings", icon: CalendarCheck },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    // Add logout logic if needed for admin
    console.log("Admin Logout");
    // navigate("/login");
  };

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`${styles.nav.base} ${
        scrolled ? styles.nav.scrolled : styles.nav.notScrolled
      }`}
      aria-label="Admin navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center z-[101]">
            <div className={styles.logoContainer}>
              <img src={logo} alt="GCB Logo" className="h-10 w-auto" />
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
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* User Actions */}
          <div className={styles.userActions}>
            <button onClick={handleLogout} className={styles.authButton}>
              <FaSignOutAlt className="text-base" />
              <span className={styles.authText}>Logout</span>
            </button>
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
                <link.icon className="w-8 h-8" />
                {link.label}
              </Link>
            ))}

            <div className={styles.divider} />

            <button onClick={handleLogout} className={styles.mobileAuthButton}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
