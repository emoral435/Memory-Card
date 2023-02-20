import PokemonCard from "./PokemonCard"
import { useState, useEffect } from "react"
import getRandom from "../functions/getRandom"
import PokeDex from "../functions/returnPokeMonIndex"
import shuffle  from "lodash.shuffle"

export default function PokeGrid(props: {updateScore: any}) {
    const [clicked, setClicked] = useState(0)

    const wasClicked = () => {
        setClicked(clicked + 1)
    }

    // this ensures that we have the same cards, just moved them around!
    let cards: any = []
    for (let i  = 0; i < 12; i++) {
        cards.push(<PokemonCard name={PokeDex[i].name} image={PokeDex[i].url} gameboardCB={props.updateScore} gridCB={wasClicked} key={i}/>)
    }
    
    cards = shuffle(cards)


    return (
        <div className="flex justify-center items-center">
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-6">
                {cards}
                {/* {PokeDex.map((value, index) => (
                    <PokemonCard key={index} name={PokeDex[index].name} image={PokeDex[index].url} gameboardCB={props.updateScore} gridCB={wasClicked}/>
                ))} */}
                {/* <PokemonCard name={PokeDex[0].name} image={PokeDex[0].url} gameboardCB={props.updateScore} gridCB={wasClicked}/> */}
            </div>
        </div>
    )
}