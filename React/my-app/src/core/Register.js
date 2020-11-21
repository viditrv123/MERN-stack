import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import './Register.css';
import register from "../auth/helper/index";



const Register = () => {

    const [values, setValues] = useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success:false
    });

    const {name, email, password, error, success}=values;

    const handleChange=name=>event=>{
        setValues({...values,error:false, [name]:event.target.value})
    }

    const onSubmit=event=>{
        event.preventDefault();
        setValues({...values,error:false});
        register({name,email,password})
        .then(data=>{
            if(data.error)
            setValues({...values, error:data.error, success:false})
            else
            setValues({
                ...values,
                name:"",
                email:"",
                password:"",
                error:"",
                success:true});
        }
        )
        .catch(err=>console.log("Error in Signup"));
    };

    return (<div>
        <row>
            <div className="col-md-3"></div>
            <div className="col-md-6 offset-sm-3">
                <form>
                <h1>Register</h1>
                    <label>Name</label>
                    <input className="form-control" 
                        type="text" 
                        onChange={handleChange("name")} 
                        placeholder="Enter name"
                        value={name}
                     />
                    <br />
                    <label>Email</label>
                    <input className="form-control" 
                        type="email" 
                        placeholder="Enter email" 
                        onChange={handleChange("email")}
                        value={email}
                    />
                    <br />
                    <label>Password</label>
                    <input className="form-control" 
                        type="Password"
                        placeholder="Enter password" 
                        onChange={handleChange("password")}
                        value={password}
                    />
                    <br/>
                    <Button variant="primary" onClick={onSubmit}>Register</Button>
                    <br/>
                    <a href="/Login">Already A Member? Redirect to Login</a>

                </form>
            </div>
            <div className="col-md-3"></div>
        </row>
        <p className="text-white text-center">{JSON.stringify(values)}</p>
    </div>);
}

export default Register;