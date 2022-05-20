import React from "react";
import { useState, useEffect } from "react";


export default function InfomationList() {

    const [users, setUsers] = useState([]);

    useEffect(() => { async function fetchData() {
            const req = await fetch("https://random-data-api.com/api/users/random_user?size=10")
            const res = await req.json()
            setUsers(res)
            // console.log(res)
        } fetchData()
    },[]);


    return (
        <div>
            {users && users.map(obj => {
                return <div className='user' key={obj.id + obj.username}>
                    <p>First name: {obj.first_name}</p>
                    <p>Username: {obj.username}</p>
                </div>;
            })}
        </div>


    );
}