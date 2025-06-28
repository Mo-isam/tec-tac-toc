"use client";
import picture from "./1906598586063650816.jpg";
import Image from "next/image";
import stayle from "./page.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import one from "./one";

function Home() {
    const [counter, serCounter] = useState(0);
    let c:number=0 ;
    const incremnt = () => {
        c = c + 1;
        serCounter(counter + 1);
    };
    console.log(c);
    

    return (
        <div>
            Counter: {counter} c: {c}
            <button onClick={incremnt}>incremnt</button>
        </div>
    );
}

export default Home;
