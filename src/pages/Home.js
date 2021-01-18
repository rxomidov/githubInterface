import React from 'react';
import UserList from "../components/UserList";
import User from "../components/User";


export default function Home(props) {
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState({});
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
        <div>
            <div>
                <form action="">
                    <input type="text"
                           className="form-control"
                           value={username}
                           onChange={handleChange}
                           placeholder="enter username"/>
                    <button type="submit"
                            className="btn btn-outline-danger"
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
            {/*<UserList loading={loading} data={data}/>*/}
        </div>
    );
}
