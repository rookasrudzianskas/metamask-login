import React from 'react';
import {useMoralis} from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";

const Header = () => {
    const {user} = useMoralis();

    return (
        <div className="text-pink-500">
            <div className="grid">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image className="rounded-full object-cover" layout="fill" src="https://yt3.ggpht.com/-CDERLAq3BNY7murpWzg3z9Qde3c9ZrRx59LlLEb1UzKDKZ_ckpTAOlYVQ5TJo9XTgJl2kh9bw=s900-c-k-c0x00ffffff-no-rj" />
                </div>
                <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full">
                    <Avatar logoutOnPress={true} />
                </div>
                <h1 className="text-3xl ">Welcome to cloud METAVERSE</h1>
                <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
            </div>
        </div>
    );
};

export default Header;
