import Avatar from "./senderAvatar";
const TheirMessage = ({lastMessage , message} )=>{
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    const scrollToBottom = () => {
        const view = document.getElementById("messages-list");
        view?.scroll(0,view.scrollHeight);
    }
    scrollToBottom()
    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <Avatar username={message?.sender?.username} avatar = {message?.sender?.avatar}/>
            )}
            {message?.attachments?.length > 0
                ? (
                    <img
                        src= {message.attachments[0].file}
                        alt = "message-attachment"
                        className = "message-image"
                        style = {{marginLeft : isFirstMessageByUser ? '4px' : '48px' , marginTop : isFirstMessageByUser ? "20px" : "2px"}}
                    />
                ):(
                    <div className = "message" style = {{float : 'left' , backgroundColor : '#CABCDC' , marginLeft : isFirstMessageByUser ? '4px' : '48px' ,marginTop : isFirstMessageByUser ? "20px" : "2px"}}>
                        {message.text}
                    </div> 
                )
            }
                
        </div>
    );
}
export default TheirMessage;