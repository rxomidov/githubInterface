import React from 'react';
import {FaChevronRight} from "react-icons/all";
import {Link, useParams} from "react-router-dom";

export default function Repo(repo) {
    const {id} = useParams();
    return (
        <div>
            {repo.name}
            <Link to={`/users/${id}/${repo.name}`}>
                <div>
                    View Repo
                    <FaChevronRight/>
                </div>
            </Link>
        </div>
    );
}
