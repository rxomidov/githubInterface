import React from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Commit from "./Commit";

export default function RepoDetails(props) {
    const {id, repo} = useParams();
    const [loading, setLoading] = React.useState(false);
    const [repository, setRepository] = React.useState([]);
    const [commits, setCommits] = React.useState([]);
    React.useEffect(()=>{
        setLoading(true);
        axios.get(`https://api.github.com/repos/${id}/${repo}`)
            .then(response=>{
                //console.log(response);
                setRepository(response.data);
            });
        axios.get(`https://api.github.com/repos/${id}/${repo}/commits`)
            .then(response=>{
                //console.log(response);
                setCommits(response.data);
                setLoading(false);
            });
        return()=>{

        }
    },[]);

    return (
        <div>
            <div>
                Repository Name:
                {repository.name}
            </div>
            <div>
                Created At:
                {repository.created_at}
            </div>
            <h4>Last Commits:</h4>
            <div>
                {commits.map(commit=>(
                    <Commit key={commit.sha} {...commit}/>
                ))}
            </div>
            <div>
                Contributions:
                {commits.length}
            </div>
        </div>
    );
}
