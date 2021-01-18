import React from 'react';
import styled from "styled-components";
import {socialData} from "../data/socialData";

export default function Footer(props) {
    return (
        <FooterWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 tt">
                        Copyright &copy; GitHub Interface {new Date().getFullYear()}.
                        All rights reserved by RX{" "}
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="footer-icons">
                            {socialData.map(item =>
                                <a href={item.url} key={item.id}>
                                    {item.icon}
                                </a>)}
                        </div>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
   margin: 1rem 0 0;
   padding: 2rem 0;
   background:#efefef;
   position:fixed;
   bottom: 0;
   width: 100%;
   z-index: 9;
   .footer-icons{
    display:flex;
    width: 100%;
    justify-content:space-around;
    
    a{
      color:#000;
      transition: 0.3s;
      :hover{
        color:#27784e;
      }
    }
   }
`;