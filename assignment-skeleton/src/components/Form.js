import { useState } from "react";

export default function Form() {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");

    function handleLogin() {
        alert("Hello, " + firstName + " " + lastName + "!");
    }

    function handleFirstNameChange(event) {
        const firstName = event.target.value;
        setfirstName(firstName);
    }

    function handleLastNameChange(event) {
        const lastName = event.target.value;
        setlastName(lastName);
    }

    return (
        <div className="login-container">
            <input type="text" placeholder="First name" value={firstName} onChange={handleFirstNameChange}></input>
            <input type="text" placeholder="Last name" value={lastName} onChange={handleLastNameChange}></input>
            <button onClick={handleLogin}>Greet Me</button>
        </div>
    );
}