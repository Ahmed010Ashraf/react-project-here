import React, { useEffect, useState } from "react";
import "./nav.css";
import { Link } from "react-scroll";
const Navbar = () => {
  let [moveul, setmoveul] = useState(false);

  function toggleul() {
    setmoveul(!moveul);
  }

  const [move, setmove] = useState(false);

  useEffect(function () {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 500) {
        setmove(true);
      } else {
        setmove(false);
      }
    });
  }, []);

  return (
    <nav className={move ? "nav-move" : ""}>
      <div className="container nav">
        <h2>tobo</h2>
        <ul className={moveul ? "mobile-ul" : ""}>
          <li>
            <Link
              to="hero"
              smooth={true}
              offset={-250}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li><Link
              to="about"
              smooth={true}
              offset={-150}
              duration={500}
            >
              about
            </Link></li>
          <li><Link
              to="contact"
              smooth={true}
              offset={-250}
              duration={500}
            >
              contact
            </Link></li>
          <li><Link
              to="testmonials"
              smooth={true}
              offset={-250}
              duration={500}
            >
              testmonials
            </Link></li>
        </ul>
        {moveul ? (
          <i onClick={toggleul} className="fa-solid fa-xmark icon"></i>
        ) : (
          <i onClick={toggleul} className="fa-solid fa-bars icon"></i>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
