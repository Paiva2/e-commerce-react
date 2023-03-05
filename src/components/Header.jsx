import { React, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import "./styles/Header.css";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

const Header = () => {
  const { setSearchValue } = useContext(GlobalContext);
  const inputRef = useRef();
  const mobileBtn = useRef();

  const resetInput = () => {
    inputRef.current.value = "";
    setSearchValue("");
  };

  const toggleMenu = () => {
    mobileBtn.current.classList.toggle("is-active");
  };

  return (
    <header className="header">
      <NavLink onClick={resetInput} to={"/"}>
        <section className="logo-title">
          <span>e</span>-commerce<span>C</span>oncept
        </section>
      </NavLink>
      <div className="search-input">
        <label htmlFor="">
          <FontAwesomeIcon className="icon-search" icon={faSearch} />
        </label>
        <input
          ref={inputRef}
          placeholder="Search!"
          onChange={({ target }) => setSearchValue(target.value)}
          type="text"
        />
      </div>
      <TiThMenu id="menu-mobile" onClick={toggleMenu} />
      <section ref={mobileBtn} className="header-buttons">
        <div className="wish-list">
          <NavLink onClick={resetInput} to={"/wish-list"}>
            <button className="wish-list-header">
              <AiOutlineHeart />
            </button>
          </NavLink>
        </div>
        <div className="cart">
          <NavLink onClick={resetInput} to={"/cart"}>
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
