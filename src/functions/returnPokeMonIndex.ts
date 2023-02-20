const makeMon = (name: string, url: string) => {
    return {
        name,
        url
    }
}

interface Pokemon {
    name: string,
    url: string
}

const PokeDex: Pokemon[] = [makeMon("Squirtle", "/pokemon/squirtle.png"), makeMon("Raikou", "/pokemon/raikou.png"), makeMon("Mudkip", "/pokemon/mudkip.png"), makeMon("Lugia", "/pokemon/lugia.png"), makeMon("Lucario","/pokemon/lucario.png"), makeMon("Litten", "/pokemon/litten.png"),makeMon("Leafyeon", "/pokemon/leafyeon.png"), makeMon("Haxorus","/pokemon/haxorus.png"), makeMon("Gyrados","/pokemon/gyrados.png"), makeMon("Gengar","/pokemon/gengar.png"), makeMon("Charizard","/pokemon/charizard.png"), makeMon("Arcanine","/pokemon/arcanine.png")]

export default PokeDex