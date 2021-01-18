import React from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import aos from 'aos';
import 'aos/dist/aos.css'

export default function Commit(commit) {
    React.useEffect(() => {
        aos.init({duration: 1000});
    }, []);

    const {id, repo} = useParams();

    return (
        <div data-aos="fade-up">
            {commit.commit.message}
        </div>
    );
}
