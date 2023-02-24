import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = () => {
  return (
    <header className="header">
      <section>'Logo'</section>
      <section>
        <input type="search" />
      </section>
      <section className="actions">
        <div className="cart">
          <button>
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
        <div className="wish-list">
          <button>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
