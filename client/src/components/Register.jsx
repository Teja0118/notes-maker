import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Register(){

    //navigate method for routes
    const navigate = useNavigate();

    //state variable to store registration details as an object
    const [registerDetails, setRegisterDetails] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    function handleChange(event){
        const {name, value} = event.target;
        setRegisterDetails(prevValue => {
            return(
                {
                    ...prevValue,
                    [name]: value,
                }
            )
        });
    }

    function handleRegister(){
        const data = {
            userName: registerDetails.userName,
            email: registerDetails.email,
            password: registerDetails.password,
        };
        if(registerDetails.password === registerDetails.confirmPassword){
            fetch("/register", {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(data)
            })
            .catch(error => {
                alert(error);
            })          
        }
        setRegisterDetails({
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
        navigate("/regSucess");
    }

    return(
        <div>
            <Header />
            <div className="register">
                <h2>Register</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type = "text"
                            name = "userName"
                            value = {registerDetails.userName}
                            placeholder = "User Name"
                            onChange = {handleChange}
                        />
                    </Form.Group>
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" 
                            name = "email"
                            value = {registerDetails.email}
                            onChange = {handleChange}
                        />
                    </Form.Group>
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" 
                            name = "password"
                            value = {registerDetails.password}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" 
                            name = "confirmPassword"
                            value = {registerDetails.confirmPassword}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit"
                        onClick = {handleRegister}
                    >
                        Register
                    </Button>
                </Form>
                {/*
                    <form>
                    <input 
                        type = "text"
                        name = "userName"
                        value = {registerDetails.userName}
                        placeholder = "User Name"
                        onChange = {handleChange}
                    />
                    <br /><br />
                    <input 
                        type = "email"
                        name = "email"
                        value = {registerDetails.email}
                        placeholder = "Email"
                        onChange = {handleChange}
                    />
                    <br /><br />
                    <input 
                        type = "password"
                        name = "password"
                        value = {registerDetails.password}
                        placeholder = "Password"
                        onChange={handleChange}
                    />
                    <br /><br />
                    <input 
                        type = "password"
                        name = "confirmPassword"
                        value = {registerDetails.confirmPassword}
                        placeholder = "Confirm Password"
                        onChange={handleChange}
                    />
                    <br /><br />
                    <button onClick = {handleRegister}>Register</button>
                </form>
                */}
            </div>   
        </div>
    )
}

export default Register