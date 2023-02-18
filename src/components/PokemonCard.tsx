export default function PokemonCard(props: {image: string, name: string}) {
    <div className="w-[200px] h-[300px] border-[4px] border-[#ffe165] bg-[#90c34d] inline-block transition hover:scale-110 focus:scale-90 shadow-2xl">
        <div className="flex flex-col jusitfy-start items-center">
            <div className="w-[150px] h-[150px] border border-gray-400 shadow-md my-4"><img src={props.image} alt="PokeMon" className="object-fill"/></div>
            <div className="font-['Pokemon_Solid'] text-lg">{props.name}</div>
        </div>
    </div>
}