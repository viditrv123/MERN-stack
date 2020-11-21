import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Redirect} from 'react-router-dom';
import './Login.css';
import { isAuthenticated, login, authenticate } from '../auth/helper';
import { withRouter } from 'react-router';

const Login = () => {
    
    const [values,setValues]=useState({
        email:"",
        password:"",
        error:"",
        loading:false,
        didRedirect:false
    })

    const {email, password, error, loading, didRedirect}=values;
    const {user}=isAuthenticated();

    const handleChange=name=>event=>{
        setValues({...values,error:false, [name]:event.target.value})
    }

    const onSubmit=event=>{
        event.preventDefault();
        setValues({...values,error: false,loading: true})
        login({email,password})
            .then(data=>{
                if(data.error)
                setValues({...values,error: data.error,loading: false})
                else{
                    authenticate(data,()=>{
                        setValues({...values,didRedirect:true})
                        console.log(data);
                    })
                }
            })
            .catch(err=>console.log("signin failed"));
    }

    const performRedirect=()=>{
        if(didRedirect)
        {
            if(user&&user.role==1)
            {
                return <p className="text-white text-center">Redirect to admin</p>
            }
            else{
                return <p className="text-white text-center">Redirect to User Dashboard</p>
            }
        }
        if(isAuthenticated())
        {
            return <Redirect to="/" />
        }
        
    }


    return (<div>
        
            
            <div className="col-md-6 offset-sm-3">
                <form>
                <h1>Login</h1>
                    <label>Email</label>
                    <input className="form-control" type="email" placeholder="Enter email" value={email} onChange={handleChange("email")}/>
                    <br />
                    <label>Password</label>
                    <input className="form-control" type="Password" placeholder="Enter password" value={password} onChange={handleChange("password")}/>
                    <br/>
                    <Button variant="primary" onClick={onSubmit}>Login</Button>
                    <br/>
                    <a href="/Register">Not A Member? Register first</a>

                </form>
            </div>
           
        
        <p className="text-white text-center">{JSON.stringify(values)}</p>
        {performRedirect()}
    </div>);
}

export default Login;