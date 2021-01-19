import React from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import Repo from "./Repo";
import styled from "styled-components";
import {FaUsers, FaLocationArrow} from "react-icons/all";

export default function UserDetails(props) {
    const {id} = useParams();
    const [loading, setLoading] = React.useState(false);
    const [user, setUser] = React.useState([]);
    const [repos, setRepos] = React.useState([]);
    const [starred, setStarred] = React.useState([]);
    React.useEffect(()=>{
        setLoading(true);
        axios.get(`https://api.github.com/users/${id}`)
            .then(response=>{
                console.log(response);
                setUser(response.data);
            });
        axios.get(`https://api.github.com/users/${id}/starred`)
            .then(response=>{
                console.log(response);
                setStarred(response.data);
            });
        axios.get(`https://api.github.com/users/${id}/repos`)
            .then(response=>{
                console.log(response);
                setRepos(response.data);
                setLoading(false);
            })
        return()=>{

        }
    },[]);

    if (loading){
        return <h1>Loading...</h1>
    }
    return (
        <UserDetailsWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="user-info">
                            <div className="user-avatar">
                                <img src={user.avatar_url} alt="avatar"/>
                            </div>
                            <div>Bio: {user.bio}</div>
                            <div>{user.following} following</div>
                            <div><FaUsers/> {user.followers} followers</div>
                            <div>⭐ {starred.length}</div>
                            <div><FaLocationArrow/> {user.location}</div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h1>{user.login}</h1>
                        {repos.map(repo=>(
                            <Repo {...repo} key={repo.id}/>
                        ))}
                    </div>
                </div>
            </div>
        </UserDetailsWrapper>
    );
}
const UserDetailsWrapper = styled.div`
  margin-bottom: 6.5rem;
  .user-avatar{
    img{
     width: 100%; 
     border-radius: 50%;
     margin: 4rem 0;
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
`;

