import React from 'react';
import {useMoralis} from 'react-moralis';

const Message = ({message}) => {
    const {user} = useMoralis();
    const isUserMessage = message.get('ethAddress') === user.get('ethAddress');

    return (
        <div className="">
            <div className={`flex space-x-4 px-3 py-3 rounded-lg ${isUserMessage ? 'rounded-bg-none bg-pink-300' : 'rounded-bl-none bg-blue-400'}`}>
                <p>{message.get('message')}</p>

            </div>
        </div>
    );
};

export default Message;
