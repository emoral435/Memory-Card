import ScoreOutput from "./ScoreOutput"

interface Scoring  {
    currentScore: number,
    bestScore: number
}

export default function ScoreBoard(props: Scoring) {
    return (
        <div className="flex justify-around my-2">
            <ScoreOutput type="CurrentScore" score={props.currentScore} /> {/* this is the current score output */}
            <ScoreOutput type="BestScore" score={props.bestScore} />
        </div>
    )
}