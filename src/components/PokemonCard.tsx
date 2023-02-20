import { useState, useEffect } from "react"

export default function PokemonCard(props: {image: string, name: string, gameboardCB: any, gridCB: any}) {
    const [count, setCount] = useState(0)

    return (
    <button className="w-[150px] sm:w-[200px] rounded-sm h-[200px] sm:h-[300px] border-[5px] border-[#ffe165] bg-[#90c34d] inline-block transition hover:scale-110 active:scale-90 shadow-2xl" onClick={() => {
        setCount(count + 1)
        setTimeout(() => {
            props.gameboardCB(count)
            if (count >= 1) setCount(0)
        })
    } }>
        <div className="w-full h-full flex flex-col jusitfy-start items-center">
            <div className="w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] border-2 border-gray-400 shadow-md my-4"><img src={props.image} alt="PokeMon" className="object-fill"/></div>
            <div className="font-['Pokemon_Solid'] text-lg">{props.name}</div>
        </div>
    </button>)
}