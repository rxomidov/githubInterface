import React from 'react';

export default function UserList({loading, data}) {
    console.log(data);
    if (loading) {
        return <h2 className="section-title">Loading...</h2>
    }
    // if (username.length < 1) {
    //     return <h2 className="section-title">no cocktails matched
    //         your criteria</h2>
    // }
    return <section className="section">
        <h2 className="section-title">Users</h2>
        <div className="cocktails-center">
            {/*{data.items.map(item => (*/}
            {/*    <h1>{item.login}</h1>*/}
            {/*))}*/}
        </div>
    </section>;
}
