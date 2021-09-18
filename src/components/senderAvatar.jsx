const Avatar = ({username , avatar } )=>{
    if (avatar){
        return (
            <div 
                className="message-avatar"
                style = {{backgroundImage : `url(${avatar})` ,  marginTop : '30px'}}
            />
        )
    }
    return (
        <div 
            className="message-avatar"
            style = {{color : '#555555' ,fontSize : '10px' , fontStyle : 'oblique' , fontWeight : 'bold', marginTop : '30px'}}
        >{`${username.trim().split(" ")[0]}`}</div>
    )
}
export default Avatar;