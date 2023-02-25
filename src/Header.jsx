import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <section>'Logo'</section>
      <section>
        <input type="search" />
      </section>
      <section className="actions">
        <div className="wish-list">
          <NavLink to={"/wish-list"}>
            <button>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </NavLink>
        </div>
        <div className="cart">
          <NavLink to={"/cart"}>
            <button>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </NavLink>
        </div>
      </section>
    </header>
  );
};

export default Header;
