const makeMon = (name: string, url: string, count: number = 0) => {
    return {
        name,
        url,
        count
    }
}

interface Pokemon {
    name: string,
    url: string,
    count: number
}

const PokeDex: Pokemon[] = [makeMon("Squirtle", "/pokemon/squirtle.png",0), makeMon("Raikou", "/pokemon/raikou.png",0), makeMon("Mudkip", "/pokemon/mudkip.png",0), makeMon("Lugia", "/pokemon/lugia.png",0), makeMon("Lucario","/pokemon/lucario.png",0), makeMon("Litten", "/pokemon/litten.png",0),makeMon("Leafyeon", "/pokemon/leafyeon.png",0), makeMon("Haxorus","/pokemon/haxorus.png",0), makeMon("Gyrados","/pokemon/gyrados.png",0), makeMon("Gengar","/pokemon/gengar.png",0), makeMon("Charizard","/pokemon/charizard.png", 0), makeMon("Arcanine","/pokemon/arcanine.png", 0)]

export default PokeDex