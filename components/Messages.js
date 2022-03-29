import React from 'react';
import {ByMoralis, useMoralis, useMoralisQuery} from 'react-moralis';
const Messages = () => {
    const {user} = useMoralis();

    return (
        <div className="pb-56">
            <div className="my-5">
                <ByMoralis variant="dark" style={{marginLeft: 'auto', marginRight: 'auto'}} />
            </div>
            <div className="">
            {/*    Message */}

            </div>
            <div>
                {/*<SendMessage />*/}
            </div>
            <div>
                <p>You're up to date {user.getUsername()}! 🥳</p>
            </div>
        </div>
    );
};

export default Messages;
