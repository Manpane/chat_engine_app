import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
const scrollToBottom = (event) => {
    const view = document.getElementById("messages-list");
    view?.scroll(0,view.scrollHeight);
}
const ChatFeed = (props) =>{
    const {chats, activeChat , userName , messages } = props;
    const chat = chats && chats[activeChat];
    
    // const renderReadReceipts = (message , isMyMessage) => {
    //     return chat.people.map( ( person , index ) => person.last_read === message.id && (
    //             <div
    //                 key = {`read_${index}`}
    //                 className = "read-receipt"
    //                 style={{
    //                     float : isMyMessage ? 'right' : 'left' ,
    //                     backgroundImage : `url(${person?.person?.avatar})`,
    //                     fontStyle : 'normal',
    //                     fontSize : '8px'
    //                 }}
    //             >{ person.person.avatar ? '' : `${person.person.username.trim().split(" ")[0]} `}</div>
    //         )
    //     )
    // }
    const renderMessages = () =>{
        const keys = Object.keys(messages);
        return keys.map((key,index)=>{
            const message = messages[key];
            const lastMessageKey = index ===0 ? null : keys[index-1];
            const isMyMessage = userName === message.sender.username;
        
            return (
                <div key = {`msg_${index}`} style = {{width: '100%'}} >
                    <div className = "message-block">
                        {
                            isMyMessage 
                            ? <MyMessage message = {message}/>
                            :<TheirMessage message = {message} lastMessage = {messages[lastMessageKey]}/>
                        }
                    </div>
                    <div className="read-receipts" 
                        style={{marginRight : isMyMessage ? '18px' : "0px" , marginLeft : isMyMessage ? '0px' : '68px'}} >
                            {/* {renderReadReceipts(message,isMyMessage)} */}
                    </div>
                </div>
            );
        });
    }
    if (!chat) {
        
        return (
            <center>
                <div style = {{alignSelf : 'center' }}>No chat</div> 
            </center>
        );
    }
    return(
        <div className = "chat-feed" id = "messages-list" onLoad = {scrollToBottom}>
            <div className="chat-title-containers">
                <div className="chat-title" style={ {position : 'relative' , width : '100%' ,  backgroundColor : "#dddddddd" , padding : "10px" , marginBottom : '10px' , textAlign : 'center' } }>{chat?.title} </div>
            </div>
            {renderMessages()}
            <div style ={{height:'100px'}}/>
            <div className="message-form-container">
                <MessageForm {...props} chatId = {activeChat}/>
            </div>
        </div>
    );
}
export default ChatFeed;