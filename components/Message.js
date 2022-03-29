import React from 'react';
import {useMoralis} from 'react-moralis';

const Message = ({message}) => {
    return (
        <div className="">
            <p>{message.get('message')}</p>
        </div>
    );
};

export default Message;
