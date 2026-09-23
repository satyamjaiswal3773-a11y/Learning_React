import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";
import Logo from "./assets/App.logo.png";

const navigation = [
  { to: "/", label: "Home", icon: "home" },
  { to: "/about", label: "About", icon: "info" },
  { to: "/contact", label: "Contact", icon: "phone" },
];

function MenuIcon({ name }) {
  if (name === "home") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z" />
      </svg>
    );
  }

  if (name === "info") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 10v6M12 7h.01" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 16.5v3a1.5 1.5 0 0 1-1.64 1.5A17.8 17.8 0 0 1 3 4.64 1.5 1.5 0 0 1 4.5 3h3a1.5 1.5 0 0 1 1.5 1.29c.1.8.3 1.58.6 2.33a1.5 1.5 0 0 1-.34 1.58L8 9.46a12 12 0 0 0 6.54 6.54l1.26-1.26a1.5 1.5 0 0 1 1.58-.34c.75.3 1.53.5 2.33.6A1.5 1.5 0 0 1 21 16.5Z" />
    </svg>
  );
}

function Sidebar() {
  const [isOpen, setIsOpen] = useState(() => window.innerWidth > 768);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape" && window.innerWidth <= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMobileMenu = () => {
    if (window.innerWidth <= 768) setIsOpen(false);
  };

  return (
    <>
      <aside className={`sidebar ${isOpen ? "sidebar--open" : "sidebar--collapsed"}`}>
        <div className="sidebar-header">
          <NavLink className="sidebar-brand" to="/" aria-label="OneTrip home" onClick={closeMobileMenu}>
            <img src={Logo} alt="" />
            <span className="sidebar-brand-name">One<span>Trip</span></span>
          </NavLink>
          <button
            className="sidebar-toggle"
            type="button"
            aria-label={isOpen ? "Collapse navigation" : "Expand navigation"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className="sidebar-menu" aria-label="Primary navigation">
          {navigation.map(({ to, label, icon }) => (
            <NavLink
              className={({ isActive }) => `sidebar-link${isActive ? " sidebar-link--active" : ""}`}
              key={to}
              to={to}
              onClick={closeMobileMenu}
            >
              <span className="sidebar-link-icon"><MenuIcon name={icon} /></span>
              <span className="sidebar-link-label">{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <button
        className="sidebar-mobile-toggle"
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>

      <button
        className={`sidebar-backdrop${isOpen ? " sidebar-backdrop--visible" : ""}`}
        type="button"
        aria-label="Close navigation menu"
        tabIndex={isOpen ? 0 : -1}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}

export default Sidebar;
