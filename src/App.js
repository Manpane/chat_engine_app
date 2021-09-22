import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const App = () =>{

    if (!localStorage.getItem('username')){
        return <LoginForm />
    }
    
    const Username = localStorage.getItem('username');
    const Password = localStorage.getItem('password');
    
    const logout = function() {
        window.localStorage.clear();
        window.location.reload();
    }
    return(
        <div>
        <ChatEngine
            height = "100vh"
            projectID = "aa61da18-53f0-4bf0-8780-106e6c9aa7e4"
            userName = {Username}
            userSecret = {Password}
            renderChatFeed = {(ChatAppProps) => <ChatFeed {... ChatAppProps}/>}
        />
        <div id = 'logout_btn' onClick = {logout}>
            Log Out
        </div>

        </div>
    )
}
export default App;