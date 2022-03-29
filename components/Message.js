import React from 'react';
import {useMoralis} from 'react-moralis';

const Message = ({message}) => {
    const {user} = useMoralis();
    const isUserMessage = message.get('ethAddress') === user.get('ethAddress');

    return (
        <div className="">
            <p>{message.get('message')}</p>
        </div>
    );
};

export default Message;
