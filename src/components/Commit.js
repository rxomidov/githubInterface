import React from 'react';
//import axios from "axios";
//import {useParams} from "react-router-dom";
import aos from 'aos';
import 'aos/dist/aos.css'
import styled from "styled-components";

export default function Commit(commit) {
    React.useEffect(() => {
        aos.init({duration: 1000});
    }, []);

    //const {id, repo} = useParams();

    return (
        <CommitWrapper data-aos="fade-up">
            <div className="commit-details">
                <div>
                    {commit.commit.message}
                </div>
                <div>
                    {commit.committer.login}
                </div>
            </div>
        </CommitWrapper>
    );
}
const CommitWrapper = styled.div`
  .commit-details{
    display:flex;
    justify-content:space-between;
  }
`;
