import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FaChevronRight} from "react-icons/all";
import aos from 'aos';
import 'aos/dist/aos.css'

export default function User(user) {
    React.useEffect(() => {
        aos.init({duration: 1000});
    }, []);
    return (
        <UserWrapper>
            <div className="container">
                <div className="user-card" data-aos="fade-up">
                    <img src={user.avatar_url} alt="avatar"/>
                    <h3 className="username">Username: <span>{user.login}</span></h3>
                    <Link className="view" to={`/users/${user.login}`}>
                        <div>
                            <span>View Profile</span>
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
    padding: 1.2rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    margin-bottom: 1rem;
    .username{
      span{
        color:#27784e;
      }
    }
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
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
  @media screen and (max-width: 768px){
    .view{
      padding: 1rem!important;
      div{
       display:flex;
        align-items: center; 
        span{
            display: none;
          }
          svg{
            margin-left: 0!important; 
          }
      }
    }
  }
`;