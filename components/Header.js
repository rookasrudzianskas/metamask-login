import React from 'react';
import {useMoralis} from "react-moralis";

const Header = () => {
    const {user} = useMoralis();

    return (
        <div>
            <h1>I am the header</h1>
        </div>
    );
};

export default Header;
