import React from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import Repo from "./Repo";
import styled from "styled-components";

export default function UserDetails(props) {
    const {id} = useParams();
    const [loading, setLoading] = React.useState(false);
    const [user, setUser] = React.useState([]);
    const [repos, setRepos] = React.useState([]);
    React.useEffect(()=>{
        setLoading(true);
        axios.get(`https://api.github.com/users/${id}`)
            .then(response=>{
                console.log(response);
                setUser(response.data);
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
                        <div className="user-avatar">
                            <img src={user.avatar_url} alt="avatar"/>
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
  .user-avatar{
    img{
     width: 100%; 
    }
  }
`;

