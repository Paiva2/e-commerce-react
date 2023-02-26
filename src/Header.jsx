import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingBag} from "react-icons/hi";
import { AiOutlineHeart} from "react-icons/ai";

const Header = ({searchState}) => {
  return (
    <header className="header">
      <NavLink to={"/"}>
        <section className="logo-title"><span>e</span>-commerce<span>C</span>oncept</section>
      </NavLink>

      <div className="search-input">
        <label htmlFor="">
          <FontAwesomeIcon className="icon-search" icon={faSearch} />
        </label>
        <input placeholder="Search!" onChange={({target}) => searchState(target.value)} type="text" />
      </div>

      <section className="header-buttons">
        <div className="wish-list">
          <NavLink to={"/wish-list"}>
            <button className="wish-list-header">
              <AiOutlineHeart />
            </button>
          </NavLink>
        </div>
        <div className="cart">
          <NavLink to={"/cart"}>
            <button className="cart-header">
              <HiOutlineShoppingBag />
            </button>
          </NavLink>
        </div>
      </section>
    </header>
  );
};

export default Header;
