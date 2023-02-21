import { useState, useEffect } from "react"
import PokeDex from "../functions/returnPokeMonIndex"

export default function PokemonCard(props: {image: string, name: string, index: number, currentScore:number, gameboardCB: any, gridCB: any}) {
    const [count, setCount] = useState(0)

    return (
    <button className="w-[150px] sm:w-[200px] rounded-sm h-[200px] sm:h-[300px] border-[5px] border-[#ffe165] bg-[#90c34d] inline-block transition hover:scale-110 active:scale-90 shadow-2xl" onClick={() => {
        PokeDex[props.index].count = PokeDex[props.index].count + 1
        setCount(count + 1)
        setTimeout(() => {
            console.log(count)
            console.log(PokeDex[props.index].count)
            props.gameboardCB(count)
            if (count > 1) {
                setCount(0)
            }
            if (PokeDex[props.index].count > 1) {
                PokeDex[props.index].count = 0
            }
            props.gridCB()
        }, 10)
    } }>
        <div className="w-full h-full flex flex-col jusitfy-start items-center">
            <div className="w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] border-2 border-gray-400 shadow-md my-4"><img src={props.image} alt="PokeMon" className="object-fill"/></div>
            <div className="font-['Pokemon_Solid'] text-lg">{props.name}</div>
        </div>
    </button>)
}