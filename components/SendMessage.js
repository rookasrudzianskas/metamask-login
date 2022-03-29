import React from 'react';
import {useMoralis} from "react-moralis";

const SendMessage = () => {
    const {user, Moralis } = useMoralis();
    return (
        <form className="flex fixed bottom-10 bg-black opacity-80 px-6 py-4  max-w-2xl w-11/12 shadow-xl rounded-full border-4 border-blue-400">
            <input type="text" className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5" placeholder={`Enter a Message ${user.getUsername()}...`}/>
            <button className="font-bold text-pink-500">Send</button>
        </form>
    );
};

export default SendMessage;
