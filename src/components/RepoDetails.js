import React from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Commit from "./Commit";
import styled from "styled-components";

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
        <RepoDetailsWrapper>
            <div className="container">
                <div  className="repo-name">
                    <h4>
                        Repository Name:
                        <span>{repository.name}</span>
                    </h4>
                </div>
                <div className="repo-name">
                    <h4>
                        Created At:
                        <span>{repository.created_at}</span>
                    </h4>
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
        </RepoDetailsWrapper>
    );
}
const RepoDetailsWrapper = styled.section`
  margin-bottom: 6rem;
  .repo-name{
    margin: 2rem 0;
    h4{
      span{
        margin-left: 0.5rem;
        color: #27784e;
      }
    }
  }
`;
