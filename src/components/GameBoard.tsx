import ScoreBoard from "./ScoreBoard"
import { useState, useEffect } from "react"
import PokeGrid from "./PokeGrid"

export default function GameBoard(props: any) {
    const [currScore, setCurrScore] = useState(0)
    const [bestScore, setBestScore] = useState(0) // NOTE DONT FORGET TO UPDATE THESE ACCORDING TO THE CLICKINGS

    useEffect(() => {
        if (currScore > bestScore) {
            setBestScore(currScore)
        }

        if (bestScore == 12) {
            let gameboard = document.getElementById('gameboard')!
            gameboard.classList.add('hidden')
        }
    }, [currScore, bestScore])

    let updateScore = (score: number) => {
        if (score < 1) {
            setCurrScore(currScore + 1)
        } else {
            setCurrScore(0)
        }
    }

    return (
        <div className="h-full w-full" id="gameboard">
            <ScoreBoard currentScore={currScore} bestScore={bestScore}/>
            <PokeGrid updateScore={updateScore}/>
        </div>
    )
}