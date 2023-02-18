export default function ScoreOutput(props: {score: number, type: string}) {

    let color: string = (props.type == "CurrentScore") ? "bg-[#d64937]" : "bg-[#5ba2cc]" 
    let title: string = (props.type == "CurrentScore") ? "Current Score: " : "Best Score: " 

    return (
        <div className={"rounded-[8px] sm:text-2xl font-[Ubuntu] px-3 py-4 " + color}>
            {title + props.score.toString()}
        </div>  
    )
}