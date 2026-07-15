import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className="flex-shrink-0">
            <a href="#" className={styles.logo}>        {/*Change logo soon*/}
              YourLogo
            </a>
          </div> 
          

          <div className={styles.desktopLinks}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={styles.navLink}>
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button className={styles.ctaButton}>Get Started</button>
          </div>

          <div className={styles.mobileMenuBtn}>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className={styles.ctaButton}>Get Started</button>
        </div>
      )}
    </nav>
  );
}