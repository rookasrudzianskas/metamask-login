import React from 'react';
import Image from "next/image";

const Login = () => {
    return (
        <div className="bg-black relative text-white">
            <div>
            {/*    logo plus login button */}
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
