import React from 'react';
import {useMoralis} from "react-moralis";
import Image from "next/image";

const Header = () => {
    const {user} = useMoralis();

    return (
        <div>
            <div>
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image className="rounded-full object-cover" layout="fill" src="https://yt3.ggpht.com/-CDERLAq3BNY7murpWzg3z9Qde3c9ZrRx59LlLEb1UzKDKZ_ckpTAOlYVQ5TJo9XTgJl2kh9bw=s900-c-k-c0x00ffffff-no-rj" />
                </div>
            </div>
        </div>
    );
};

export default Header;
