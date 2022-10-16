import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.header`
  border-bottom: 10px solid #222;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0px;
  height: 120px;
  background: #f8f8f8;

  .logo a {
    color: #333;
    font-size: 2em;
    text-decoration: none;
  }

  .nav {
    display: flex;

    ul {
      display: flex;

      li {
        padding: 0px 10px;
        color: #333;
      }

      a {
        text-decoration: none;
      }
    }
  }

  a.active {
    border-bottom: 3px solid #e6e6e6;
    padding-bottom: 0.3em;
  }
  .fa-bars {
    display: none;
  }

  @media only screen and (max-width: 580px) {
    height: auto;
    min-height: 100px;
    justify-content: center;
    flex-direction: column;
    padding-top: 1em;

    .nav {
      text-align: center;
    }

    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }

    ul.collapsed {
      margin-top: 1em;
      display: none;
      width: 100vw;

      li {
        border-top: 1px solid #ccc;
        padding: 1em;
        transition: 0.3s;

        &:hover {
          background: #e6e6e6;
        }
      }

      &.is-expanded {
        display: block;
      }
    }
  }
`;

export default function Nav() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Navigation>
      <div className="logo">
        <Link to="/">Patiphan.io</Link>
      </div>
      <nav className="nav">
        <i
          className="fa fa-bars"
          aria-hidden="true"
          onClick={() => setIsExpanded(!isExpanded)}
        ></i>
        <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
          <NavLink exact activeClassName="active" to="/">
            <li>Home</li>
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            <li>About</li>
          </NavLink>
          <NavLink activeClassName="active" to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </Navigation>
  );
}
