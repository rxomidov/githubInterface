import React from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

export default function Commit(commit) {
    const {id, repo} = useParams();

    return (
        <div>
            {commit.commit.message}
        </div>
    );
}
