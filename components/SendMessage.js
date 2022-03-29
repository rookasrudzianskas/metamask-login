import React from 'react';
import {useMoralis} from "react-moralis";

const SendMessage = ({endOfMessagesRef}) => {
    const {user, Moralis } = useMoralis();
    const [message, setMessage] = React.useState('');
    const [error, setError] = React.useState('');
    const sendMessage = (e) => {
        e.preventDefault();
        if(!message) {
            setError('Message is required');
            return;
        }

        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress'),

        }).then((message) => {
            console.log(message);
            setMessage('');
        }).catch((error) => {
            console.log(error);
        });

        endOfMessagesRef.current.scrollIntoView({behavior: 'smooth'});
        setMessage('');
    }

    return (
        <form className="flex fixed bottom-10 bg-black opacity-80 px-6 py-4  max-w-2xl w-11/12 shadow-xl rounded-full border-4 border-blue-400">
            <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5" placeholder={`Enter a Message ${user.getUsername()}...`}/>
            <button onClick={sendMessage} type={'submit'} className="font-bold text-pink-500">Send</button>
        </form>
    );
};

export default SendMessage;
