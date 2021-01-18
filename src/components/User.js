import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FaChevronRight} from "react-icons/all";

export default function User(user) {
    return (
        <UserWrapper>
            <div className="container">
                <div className="user-card">
                    <img src={user.avatar_url} alt="avatar"/>
                    <h3 className="username">Username: {user.login}</h3>
                    <Link className="view" to={`/users/${user.login}`}>
                        <div>
                            View Profile
                            <FaChevronRight/>
                        </div>
                    </Link>
                </div>

            </div>
        </UserWrapper>
    );
}

const UserWrapper = styled.div`
  .user-card{
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    .view{
      background:#2d8b5b;
      border: none;
      padding: 0.5rem 2rem;
      text-decoration:none;
      color:#fff;
      text-transform:uppercase;
      div{
       display:flex;
      align-items: center; 
      }
      transition: 0.3s;
      svg{
        margin-left: 0.5rem;
        
      }
      :hover{
        background:#27784e;
      }
    }
  }
  img{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
`;