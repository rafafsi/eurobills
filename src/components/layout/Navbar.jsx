import { useState } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { dataMenu as data } from "../../data/dataMenu";
import Input from "../form/Input";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  const transitionAnimation = startAnimation
    ? {
        marginTop: "70px",
        opacity: 1,
        transitionDelay: "2s",
        transitionProperty: "margin-top, opacity",
      }
    : {};

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setStartAnimation(!startAnimation);
  };

  return (
    <>
      <Nav>
        <Title>EuroBills</Title>
        <FormMenu>
          <Input
            type="text"
            placeHolder="what are you looking for?"
            name="home-search"
          />
          <MenuIcon onClick={toggleMenu}>
            {!showMenu ? <ImMenu3 /> : <ImMenu4 />}
          </MenuIcon>
        </FormMenu>
      </Nav>

      <NavbarStyle>
        {showMenu && (
          <NavList style={transitionAnimation}>
            {data.map((item) => (
              <NavItem to={`/${item.name}`} key={item.id}>
                {item.name}
              </NavItem>
            ))}
          </NavList>
        )}
      </NavbarStyle>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: aliceblue;
  justify-content: space-around;
  width: 100%;
  padding: 0 20px 0 20px;
  box-shadow: -3px -3px 11px 1px;
  position: relative;
  width: 100%;
`;

const Title = styled.h1`
  font-family: "Yeon Sung", cursive;
  text-align: center;
  font-size: 1.5em;
  color: var(--strongYellow);
`;

const FormMenu = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: space-evenly;
`;

const NavbarStyle = styled.div`
  background: rgba(240, 248, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  position: absolute;
  margin-top: 4px;
  opacity: 0;
  width: 100%;
  align-items: center;
  background: rgba(240, 248, 255, 0.5);
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 5px;
  margin: 5px;
  text-decoration: none;
  font-family: "Andika", sans-serif;
  background-color: aliceblue;
  padding: 7px;
  border-radius: 5px;
  color: var(--strongYellow);

  &:hover {
    transition: all 500ms;
    background-color: var(--mainYellow);
    color: white;
  }

  * {
    margin: 2px;
  }

  & span {
    color: var(--strongYellow);
    font-size: 1em;
  }
`;

const MenuIcon = styled.div`
  font-size: 2em;
  color: var(--strongYellow);
  padding: 0 20px 0 20px;

  &:hover {
    cursor: pointer;
  }
`;
