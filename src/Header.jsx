import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Header = ({searchValue, searchState}) => {
  return (
    <header className="header">
      <NavLink to={"/"}>
        <section>'Logo'</section>
      </NavLink>
      <section>
        <input onChange={({target}) => searchState(target.value)} type="text" />
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
