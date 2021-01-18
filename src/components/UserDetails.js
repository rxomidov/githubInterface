import React from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import Repo from "./Repo";

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
        <div>
            <img src={user.avatar_url} alt="avatar"/>
            <h1>{user.login}</h1>
            {repos.map(repo=>(
                <Repo {...repo} key={repo.id}/>
            ))}
        </div>
    );
}
