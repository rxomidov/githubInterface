import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FaChevronRight} from "react-icons/all";

export default function User(user) {
    return (
        <UserWrapper>
            <img src={user.avatar_url} alt="avatar"/>
            <h3 className="username">{user.login}</h3>
            <Link to={`/users/${user.login}`}>
                <div>
                    View Profile
                    <FaChevronRight/>
                </div>
            </Link>
        </UserWrapper>
    );
}

const UserWrapper = styled.div`
  img{
    width: 2rem;
    height: 2rem;
  }
`;