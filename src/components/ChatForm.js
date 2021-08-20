import {useState} from 'react'
import styles from "./styles.module.css"

function ChatForm() {

    const [messages , setMessages] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(messages)

        setMessages("")
    }

    return (
        <div>
           <form onSubmit={handleSubmit} >
               <input
               onChange={(e) => setMessages(e.target.value)}
               value={messages}
               className={styles.textInput} />
           </form>
        </div>
    )
}

export default ChatForm
