export default function Header() {
    return (
        <div className='w-full font-["Pokemon_Solid"] bg-[#333536] flex flex-col'>
            <div className="flex justify-around">
                <div className="bg-[#daa73b] sm:w-[20%]"></div>
                <div className="flex flex-col">
                    <div className='min-h-[25%] sm:min-h-[30%] bg-[#daa73b]'></div>
                    <div className="relative my-12">
                        <div className="text-blue-600 text-[47px] sm:text-8xl whitespace-nowrap">Poke-Guesser</div>
                        <div className="text-yellow-400 absolute text-[46px] sm:text-[94px] left-1 -top-[12px] whitespace-nowrap">Poke-Guesser</div>
                    </div>
                </div>
                <div className="bg-[#daa73b] sm:w-[20%]"></div>
            </div>
            <div className="w-full min-h-[4rem] bg-[#2a2c2b]">
                <div className="flex justify-center relative">
                    <div className="absolute top-7">
                        <span className="rounded-[50%] h-16 w-16 bg-[#323433] inline-block relative">
                            <div className="flex justify-center relative">
                                <div className="absolute top-[9px]">
                                    <span className="rounded-[50%] h-12 w-12 inline-block bg-white">
                                        <div className="flex justify-center relative">
                                            <div className="absolute top-[4px]">
                                                <span className="rounded-[50%] h-10 w-10 inline-block bg-[#323433]"></span>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}