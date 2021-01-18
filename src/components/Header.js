import React from 'react';
import {Link} from "react-router-dom";
import logo from '../assets/githublogo.jpg';
import {FaGithub} from "react-icons/all";
import styled from "styled-components";

export default function Header(props) {
    return (
        <HeaderWrapper>
            <nav>
                <ul>
                    <div className="header-logo">
                        <FaGithub/>
                        Github
                    </div>
                </ul>
                <ul>
                    <div className="header-middle-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">All</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.section`
  nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #efefef;
  }
  .header-middle-links{
    display:flex;
    justify-content: space-between;
    list-style: none;
    li{
      margin: 1rem;
    }
  }
  .header-logo{
    display:flex;
    align-items: center;
  }
`