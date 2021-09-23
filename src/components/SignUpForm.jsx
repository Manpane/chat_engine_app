import axios from "axios";
import { useState } from "react"



const SignUpForm = () => {
    const [username , setUsername ] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName, setLastname] = useState('');
    const [successMsg , setSuccessMsg] = useState('');

    const [error , setError ] = useState('');
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('password : ',password);
        console.log('confirm password : ',confirmPassword);

        if (password!==confirmPassword){
            setError("Passwords don't match");
        }else{
            var data = {  "username": username, 'secret' : password ,"first_name": firstName,  "last_name":lastName};
            console.log(data);
            var config = {
            method: 'post',
            url: 'https://api.chatengine.io/users/',
            headers: { 
                'PRIVATE-KEY': 'e9ce19eb-5889-438c-ace7-f01fd5c03e28',
            },
            data : data
            };
            axios(config)
            .then(function (response) {
                if (response.data.is_authenticated){
                    window.localStorage.clear()
                    window.localStorage.setItem('username',username);
                    window.localStorage.setItem('password',password);
                    setSuccessMsg(`Account ${username} successfully created`);
                }
            })
            .catch(function (error) {
            console.log("From the Sign Up Form",error);
            });
        
        }
    }
    return (
        <div>
            <div className = "wrapper">
                <div className = "form" >
                    <h1 className = "title" >Create Account</h1>
                    <h3 className = "error" >{error}</h3>
                    <h3 style = {{color : "#22cc33" , margin:"5px",padding : "2px"}}>{successMsg}</h3>
                    <form onSubmit = {handleSubmit}>
                        <input type="text" value = {username} onChange = {(e)=>setUsername(e.target.value)} className = "input" placeholder = "Username" required></input>
                        <input type="password" value = {password} onChange = {(e)=>setPassword(e.target.value)} className = "input" placeholder = "Password" required></input>
                        <input type="password" value = {confirmPassword} onChange = {(e)=>setConfirmPassword(e.target.value)} className = "input" placeholder = "Confirm Password" required></input>
                        <input type="text" value = {firstName} onChange = {(e)=>setFirstName(e.target.value)} className = "input" placeholder = "First Name"></input>
                        <input type="text" value = {lastName} onChange = {(e)=>setLastname(e.target.value)} className = "input" placeholder = "Last Name"></input>
                        <div align="center">
                            <button type='submit' className="button">
                                <span>Create</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )


}
export default SignUpForm;