import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Equality or Bias Logo" className="h-10 w-auto" />
              <span className="font-semibold" style={{ fontFamily: 'var(--heading-font)' }}>
                Equality or Bias?
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              A critical media initiative that questions modern feminist narratives while advocating fairness, dialogue, and inclusive equality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg" style={{ fontFamily: 'var(--heading-font)' }}>
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                About
              </Link>
              <Link to="/documentary" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Documentary
              </Link>
              <Link to="/articles" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Articles
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Quote */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg" style={{ fontFamily: 'var(--heading-font)' }}>
              Our Mission
            </h4>
            <blockquote className="text-primary-foreground/80 text-sm italic border-l-2 border-primary-foreground/30 pl-4">
              "Critiquing a movement does not mean rejecting equality — it means protecting it."
            </blockquote>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Laiba Nazeer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
