import React from 'react';
import {FaChevronRight} from "react-icons/all";
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";
import aos from 'aos';
import 'aos/dist/aos.css'

export default function Repo(repo) {
    const {id} = useParams();
    React.useEffect(() => {
        aos.init({duration: 1000});
    }, []);
    return (
        <RepoWrapper>
            <div className="repo-card" data-aos="fade-up">
                <div className="repo-name">
                    <div>Repository: </div><span>{repo.name}</span>
                </div>
                <Link  className="view" to={`/users/${id}/${repo.name}`}>
                    <div>
                        <span>View Repository</span>
                        <FaChevronRight/>
                    </div>
                </Link>
            </div>
        </RepoWrapper>
    );
}
const RepoWrapper = styled.div`
  .repo-card{
    display:flex;
    justify-content:space-between;
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    padding: 1rem 2rem;
    margin: 1rem;
    .repo-name{
      display:flex;
      align-items: center;
      font-weight:bold;
      span{
        color:#2d8b5b;
        margin-left: 0.5rem;
      }
    }
    .view{
      background:#2d8b5b;
      border: none;
      padding: 0.5rem 2rem;
      text-decoration:none;
      color:#fff;
      text-transform:uppercase;
      font-size: 12px;
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
  @media screen and (max-width: 768px){
    .repo-name{
      div{
        display: none;
      }
    }
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
