import { init, subscribeChat } from "../socketApi";
import { useEffect } from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import { useChat } from "../context/ChatContext"


function Container() {
    const {setMessages} = useChat();

    useEffect(() => {
        init();
        subscribeChat((message) => {
            setMessages((prevState) => [...prevState, {message}])
        });
    }, [])


    return (
        <div className="App" >
            <ChatList></ChatList>
            <ChatForm></ChatForm>
        </div>
    )
}

export default Container
