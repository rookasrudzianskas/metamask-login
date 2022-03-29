import React from 'react';
import {ByMoralis, useMoralis, useMoralisQuery} from 'react-moralis';
const Messages = () => {
    return (
        <div className="pb-56">
            <div>
                <ByMoralis variant="dark" style={{marginLeft: 'auto', marginRight: 'auto'}} />
            </div>
        </div>
    );
};

export default Messages;
