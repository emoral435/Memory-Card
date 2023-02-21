import ScoreBoard from "./ScoreBoard"
import { useState, useEffect } from "react"
import PokemonCard from "./PokemonCard"
import PokeDex from "../functions/returnPokeMonIndex"
import shuffle  from "lodash.shuffle"
import RestartButton from "./RestartButton"

export default function GameBoard() {
    const [currScore, setCurrScore] = useState(0)
    const [bestScore, setBestScore] = useState(0) // NOTE DONT FORGET TO UPDATE THESE ACCORDING TO THE CLICKINGS
    const [clicked, setClicked] = useState(0)
    
    let restartScoring = () => {
        for (let i = 0; i < PokeDex.length; i++) {
            PokeDex[i].count = 0
        }
    }
    useEffect(() => {
        if (currScore > bestScore) {
            setBestScore(currScore)
        }

        if (bestScore == 12) {
            restartScoring()
            let pokeGrid = document.getElementById('PokeGrid')!
            pokeGrid.classList.add('hidden')
            setCurrScore(0)
            setBestScore(0)
            let restart = document.getElementById('restart')!
            restart.classList.remove('hidden')
        }

        
    }, [currScore, bestScore])


    let updateScore = (index: number) => {
        let currentScore = PokeDex[index].count
        if (currentScore < 1) {
            PokeDex[index].count += 1
            setCurrScore(currScore + 1)
        } else {
            restartScoring()
            setCurrScore(0)
        }
    }

    const wasClicked = () => {
        setClicked(clicked + 1)
    }

    // this ensures that we have the same cards, just moved them around!
    let cards: any = []
    for (let i  = 0; i < 12; i++) {
        cards.push(<PokemonCard name={PokeDex[i].name} currentScore={currScore} index={i} image={PokeDex[i].url} gameboardCB={updateScore} gridCB={wasClicked} key={i + clicked}/>)
    }

    cards = shuffle(cards)

    return (
        <div className="h-full w-full">
            <ScoreBoard currentScore={currScore} bestScore={bestScore}/>
            <div className="flex justify-center items-center" id="PokeGrid">
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-6">
                    {cards}
                </div>
            </div>
            <RestartButton />
        </div>
    )
}