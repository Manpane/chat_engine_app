import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [username , setUsername ] = useState('');
    const [password , setPassword] = useState('');
    const [error , setError ] = useState('');
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const authObject = { 'Project-ID': "aa61da18-53f0-4bf0-8780-106e6c9aa7e4" , 'User-Name' : username , 'User-Secret':password };
        try{
            await axios.get("https://api.chatengine.io/chats",{headers : authObject});
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.reload();
        }catch(error){
            setError('Wrong credentials');
        }
    }
    return (
        <div className = "wrapper">
            <div className = "form" >
                <h1 className = "title" >Chat Login</h1>
                <h3 className = "error" >{error}</h3>
                <form onSubmit = {handleSubmit}>
                    <input type="text" value = {username} onChange = {(e)=>setUsername(e.target.value)} className = "input" placeholder = "Username" required></input>
                    <input type="password" value = {password} onChange = {(e)=>setPassword(e.target.value)} className = "input" placeholder = "Password" required></input>
                    <div align="center">
                        <button type='submit' className="button">
                            <span>Login</span>
                        </button>
                    </div>
                    <Link to = {`/sign_up`}>
                        <center>
                            <div style = {{color : '#dddddd' , margin: '5px',cursor:"pointer"}}>Create new account</div>
                        </center>
                    </Link>
                </form>

            </div>
        </div>
    )


}
export default LoginForm;