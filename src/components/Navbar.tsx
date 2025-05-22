
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, Box, Case, Info, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/routes";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 px-4 md:px-8 bg-white/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b">
      <div className="container-width flex items-center justify-between">
        <div className="flex items-center">
          <Link to={ROUTES.HOME} className="text-2xl font-bold text-homywork-darkPurple">
            homywork
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to={ROUTES.PRODUCTS}
            className="text-homywork-darkPurple/80 hover:text-homywork-purple transition-colors flex items-center gap-2"
          >
            <Box size={18} />
            Products
          </Link>
          <Link
            to={ROUTES.CASES}
            className="text-homywork-darkPurple/80 hover:text-homywork-purple transition-colors flex items-center gap-2"
          >
            <Case size={18} />
            Cases
          </Link>
          <Link
            to={ROUTES.ABOUT}
            className="text-homywork-darkPurple/80 hover:text-homywork-purple transition-colors flex items-center gap-2"
          >
            <Info size={18} />
            About Us
          </Link>
          <Link
            to={ROUTES.PRICING}
            className="text-homywork-darkPurple/80 hover:text-homywork-purple transition-colors flex items-center gap-2"
          >
            <DollarSign size={18} />
            Pricing
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-homywork-darkPurple hover:text-homywork-purple"
            onClick={() =>
              (window.location.href = "https://homywork.com/PublishLogin")
            }
          >
            Login
          </Button>
          <Button
            className="bg-homywork-purple hover:bg-homywork-purple/90 text-white"
            onClick={() =>
              (window.location.href = "https://calendly.com/tinshlee/30min")
            }
          >
            Book a Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-homywork-darkPurple"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg animate-fade-in">
          <div className="container-width py-4 px-4 flex flex-col gap-4">
            <Link
              to={ROUTES.PRODUCTS}
              className="py-2 text-homywork-darkPurple/80 hover:text-homywork-purple transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Box size={18} />
              Products
            </Link>
            <Link
              to={ROUTES.CASES}
              className="py-2 text-homywork-darkPurple/80 hover:text-homywork-purple transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Case size={18} />
              Cases
            </Link>
            <Link
              to={ROUTES.ABOUT}
              className="py-2 text-homywork-darkPurple/80 hover:text-homywork-purple transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Info size={18} />
              About Us
            </Link>
            <Link
              to={ROUTES.PRICING}
              className="py-2 text-homywork-darkPurple/80 hover:text-homywork-purple transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <DollarSign size={18} />
              Pricing
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Button
                variant="ghost"
                className="justify-start text-homywork-darkPurple hover:text-homywork-purple"
                onClick={() =>
                  (window.location.href = "https://homywork.com/PublishLogin")
                }
              >
                Login
              </Button>
              <Button 
                className="bg-homywork-purple hover:bg-homywork-purple/90 text-white w-full"
                onClick={() =>
                  (window.location.href = "https://calendly.com/tinshlee/30min")
                }
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
