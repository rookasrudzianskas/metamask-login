import React from 'react';
import {useMoralis} from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
    const {user} = useMoralis();

    return (
        <div className="sticky top-0 p-5 z-50 text-pink-500">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image className="rounded-full object-cover" layout="fill" src="https://yt3.ggpht.com/-CDERLAq3BNY7murpWzg3z9Qde3c9ZrRx59LlLEb1UzKDKZ_ckpTAOlYVQ5TJo9XTgJl2kh9bw=s900-c-k-c0x00ffffff-no-rj" />
                </div>
                <div className="text-left lg:text-center col-span-4">
                    <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full">
                        <Avatar logoutOnPress={true} />
                    </div>
                    <h1 className="text-3xl ">Welcome to cloud METAVERSE</h1>
                    <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

                    <ChangeUsername />
                </div>
            </div>
        </div>
    );
};

export default Header;
