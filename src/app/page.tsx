"use client";
import picture from "./1906598586063650816.jpg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import one from "./one";
// import "./page.module.css"

function Home() {
    const [next, setnext] = useState(true);
    const [XOlist, setXO] = useState<string[]>([]);
    const [win, setwin] = useState(false);
    const [winner, setwinner] = useState("");
    const [winline, setwinline] = useState<number[]>([3].fill(-1));

    
    function XorO(position: number) {
        if (!win) {
            if (XOlist[position] == undefined) {
                XOlist[position] = next ? "X" : "O";
                setnext(!next);
            }

            checkwinner(XOlist);
        }
    }
    function checkwinner(bord: string[]) {
        const winpattern = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (const pattern of winpattern) {
            const [a, b, c] = pattern;
            if (bord[a] === bord[b] && bord[a] === bord[c] && bord[c]) {
                setwin((winer) => true);
                setwinner(bord[a]);
                setwinline((winline) => [a, b, c]);
                return;
            }
        }
    }
    function reset() {
        setXO((numbers) => []);
        setwin(false);
        setwinner("");
    }
    return (
        <>
            <div className={win ? "boarmd board" : "board"}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <div  className={!win?"cell":winline.includes(num)?"wincell":"cell"} onClick={(e) => XorO(num)} key={num}>
                        {XOlist[num]}
                    </div>
                ))}
            </div>
            <div className="controls">
                <button onClick={reset}>reset</button>
                <h3>{win ? `winner:${winner}` : ""}</h3>
            </div>
        </>
    );
}

export default Home;
