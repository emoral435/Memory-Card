export default function RestartButton() {
    let restart = () => {
        let pokegrid = document.getElementById('PokeGrid')!
        pokegrid.classList.remove('hidden')
        let restartBtn = document.getElementById('restart')!
        restartBtn.classList.add('hidden')
    }

  return (
    <div className="w-full h-full hidden" id="restart">
        <div className="flex justify-center items-center"><button className="rounded-[10px] text-7xl px-2 py-3 bg-yellow-300 font-[Ubuntu] my-24" onClick={restart}>Restart ?</button></div>
    </div>
  )  
}