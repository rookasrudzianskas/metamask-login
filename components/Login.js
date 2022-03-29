import React from 'react';
import Image from "next/image";

const Login = () => {
    return (
        <div className="bg-black relative text-white">
            <div>
            {/*    logo plus login button */}
                <Image src="https://yt3.ggpht.com/-CDERLAq3BNY7murpWzg3z9Qde3c9ZrRx59LlLEb1UzKDKZ_ckpTAOlYVQ5TJo9XTgJl2kh9bw=s900-c-k-c0x00ffffff-no-rj " width={200} height={200} />
            </div>
            <div className="w-full h-screen">
            {/*    the background */}
                <Image src="https://links.papareact.com/55n"
                    layout="fill" objectFit="cover"
                />
            </div>
        </div>

    );
};

export default Login;
