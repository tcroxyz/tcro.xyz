import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "../images/avatar.jpg";

function Navigation() {
  return (
    <NavigationStyle>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink
            to="/home"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/resume"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/portfolio"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/blog"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>@2022 TCRO</p>
      </footer>
    </NavigationStyle>
  );
}

const NavigationStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem;
    img {
      width: 70%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;
    .active {
      background-color: var(--primary-color);
    }
    li {
      display: block;
      a {
        display: block;
        padding: 0.2rem 0;
        position: relative;
        z-index: 4;
        &:hover {
          cursor: pointer;
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 75%;
          background-color: var(--primary-color);
          transition: all 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          z-index: 3;
          opacity: 0.2;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  .footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 2rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
`;

export default Navigation;
