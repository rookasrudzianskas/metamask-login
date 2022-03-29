import React, {useRef} from 'react';
import {ByMoralis, useMoralis, useMoralisQuery} from 'react-moralis';
import SendMessage from "./SendMessage";


const Messages = () => {
    const {user} = useMoralis();
    const endOfMessagesRef = useRef(null);
    const {data, loading, error} = useMoralisQuery(
        'Messages',
        (query) => query.ascending('createdAt').limit(10),
        {
            onSuccess: (data) => {
                if (data.length > 0) {
                    endOfMessagesRef.current.scrollIntoView({behavior: 'smooth'});
                }
            }
        }
    )

    return (
        <div className="pb-56">
            <div className="my-5">
                <ByMoralis variant="dark" style={{marginLeft: 'auto', marginRight: 'auto'}} />
            </div>
            <div className="">
            {/*    Message */}

            </div>
            <div className="flex justify-center">
                {/*<SendMessage />*/}
                <SendMessage endOfMessagesRef={endOfMessagesRef} />
            </div>
            <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
                <p>You're up to date {user.getUsername()}! 🥳</p>
            </div>
        </div>
    );
};

export default Messages;
