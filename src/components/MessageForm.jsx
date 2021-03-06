import { useState } from "react";
import { sendMessage , isTyping } from "react-chat-engine";
import { SendOutlined , PictureOutlined } from "@ant-design/icons";

const MessageForm = (props)=>{
    const scrollToBottom = () => {
        const view = document.getElementById("messages-list");
        view?.scroll(0,view.scrollHeight);
    }
    const [value , setValue ] = useState('');
    const {chatId , creds} = props;
    const handleSubmit = (event) => {
        event.preventDefault();
        var text = value.trim();
        text = text.replace("<script>","not injection");
        text = text.replace("</script>","")
        if (text.length>0) sendMessage(creds,chatId,{text})
        setValue('');
        scrollToBottom();
    }
    const handleChange = (event) => {
        setValue(event.target.value);
        isTyping(props,chatId);
        scrollToBottom();
    }  
    const handleUpload = (event) => {
        sendMessage(creds,chatId,{files : event.target.files,text:""})
        scrollToBottom();
    } 
    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
               className = "message-input"
               placeholder = "Send a message ..."
               value = {value}
               onChange = {handleChange} 
               onSubmit = {handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon"/>
                </span>

            </label>
            <input 
                type= "file"
                multiple={false} 
                id="upload-button"
                style={{display:'none'}}
                onChange={handleUpload}>

            </input>
            <button type={'submit'} className="send-button">
                <SendOutlined  className="send-icon"/>
            </button>
        </form>
    );
}
export default MessageForm;