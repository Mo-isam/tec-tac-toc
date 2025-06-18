"use client";
import picture from "./1906598586063650816.jpg";
import Image from "next/image";
import stayle from "./page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

function Home() {
    const [secc, setsecc] = useState(false);
    const [counter, setcounter] = useState(0);

    const increment = () => {
        setcounter(counter + 1);
        if (counter === 10) {
            setsecc(true);
        }
    };
    useEffect(() => {
        console.log("hallo");
        
    }, []);
    return (
        <div className={stayle.page}>
            <div>
                <Link href={"./about"}>about</Link>
            </div>
            <div className={stayle.card}>
                <Image
                    src={picture}
                    alt="Mohammed Isam profile picture"
                    className={stayle.im}
                />
                <h1 className="ss">Mohammed isam</h1>
                <p>i am a student </p>
            </div>
            <div>
                <h3>counter : {counter}</h3>
                <button onClick={increment}>click</button>
            </div>
        </div>
    );
}
export default Home;
