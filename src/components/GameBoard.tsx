import ScoreBoard from "./ScoreBoard"
import { useState, useEffect } from "react"

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

    return (
        <div className="h-full w-full" id="gameboard">
            <ScoreBoard currentScore={currScore} bestScore={bestScore}/>
            {/* <PokeGrid /> */}
        </div>
    )
}