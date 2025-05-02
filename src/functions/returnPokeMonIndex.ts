import SquirtlePNG from "../../pokemon/squirtle.png";
import RaikouPNG from "../../pokemon/raikou.png";
import MudkipPNG from "../../pokemon/mudkip.png";
import LugiaPNG from "../../pokemon/lugia.png";
import LucarioPNG from "../../pokemon/lucario.png";
import LittenPNG from "../../pokemon/litten.png";
import LeafyeonPNG from "../../pokemon/leafyeon.png";
import HaxorousPNG from "../../pokemon/haxorus.png";
import GyradosPNG from "../../pokemon/gyrados.png";
import GengarPNG from "../../pokemon/gengar.png";
import CharizardPNG from "../../pokemon/charizard.png";
import ArcaninePNG from "../../pokemon/arcanine.png";

const makeMon = (name: string, url: string, count: number = 0) => {
    return {
        name,
        url,
        count
    };
};

interface Pokemon {
    name: string,
    url: string,
    count: number
};

const PokeDex: Pokemon[] = [
    makeMon("Squirtle", SquirtlePNG, 0), 
    makeMon("Mudkip", MudkipPNG,0), 
    makeMon("Raikou", RaikouPNG, 0), 
    makeMon("Lugia", LugiaPNG, 0),
    makeMon("Lucario", LucarioPNG, 0),
    makeMon("Litten", LittenPNG, 0),
    makeMon("Leafyeon", LeafyeonPNG,0),
    makeMon("Haxorus", HaxorousPNG, 0),
    makeMon("Gyrados", GyradosPNG, 0),
    makeMon("Gengar", GengarPNG, 0),
    makeMon("Charizard", CharizardPNG, 0), 
    makeMon("Arcanine", ArcaninePNG, 0)
];

export default PokeDex;