import React from 'react';
import UserList from "../components/UserList";
import User from "../components/User";
import styled from "styled-components";


export default function Home(props) {
    const [loading, setLoading] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [users, setUsers] = React.useState([]);

    const handleChange = async (e) => {
        setUsername(e.target.value)
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await fetch(`https://api.github.com/search/users?q=${username}`);
        const data = await response.json();
        console.log(data);
        setUsers(data.items);
        console.log(users);
        setLoading(false);
    };

    return (
        <HomeWrapper>
            <div className="container">
                <form action=""  className="search-form">
                    <input type="text"
                           className="form-control"
                           value={username}
                           onChange={handleChange}
                           placeholder="Enter username..."/>
                    <button type="submit"
                            className="btn btn-success btn-search"
                            onClick={handleSubmit}>Search
                    </button>
                </form>
            </div>
            {loading && (
                <h1>Loading...</h1>
            )}
            {users.map(user => (
                <User {...user} key={user.login}/>
            ))}
        </HomeWrapper>
    );
}
const HomeWrapper = styled.section`
  .search-form{
    display:flex;
    margin: 4rem 0;
    input{
      border-radius: 0;
      padding: 0 2rem;
    }
  }
  .btn-search{
    border-radius: 0;
    padding: 0 2rem;
  }
`;