// var monster = {
//     id: 1,
//     name: "Bulbasaur",
//     types: ["poison", "grass"]
// };
// console.log(monster.name)
// console.log(monster.types[1])

function pokemonStuff() {
    var pokemon = [
        { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
        { "id": 5, "name": "Charmeleon", "types": ["fire"] },
        { "id": 9, "name": "Blastoise", "types": ["water"] },
        { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
        { "id": 23, "name": "Ekans", "types": ["poison"] },
        { "id": 24, "name": "Arbok", "types": ["poison"] },
        { "id": 25, "name": "Pikachu", "types": ["electric"] },
        { "id": 37, "name": "Vulpix", "types": ["fire"] },
        { "id": 52, "name": "Meowth", "types": ["normal"] },
        { "id": 63, "name": "Abra", "types": ["psychic"] },
        { "id": 67, "name": "Machamp", "types": ["fighting"] },
        { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
        { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
        { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
        { "id": 98, "name": "Krabby", "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
        { "id": 133, "name": "Eevee", "types": ["normal"] },
        { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair", "types": ["dragon"] }
    ];
    //1.
    for (let i = 0; i < pokemon.length; i++) {
        if (pokemon[i].id % 3 === 0) {
            console.log("Divisible by 3:", pokemon[i])
        }
    }
    //1. 
    pokemon.forEach(function (poke, index) {
        if (poke.id % 3 === 0) {
            console.log(poke, "Index", index);
        }
    })
    //2.
    for (let i = 0; i < pokemon.length; i++) {
        if (pokemon[i].types.length > 1) {
            console.log("More than 1 type:", pokemon[i])
        }
    }
    //3.
    for (let i = 0; i < pokemon.length; i++) {
        if (pokemon[i].types.length === 1 && pokemon[i].types[0] == "poison") {
            console.log(pokemon[i].name)
        }
    }
    //4.
    for (let i = 0; i < pokemon.length; i++) {
        if (pokemon[i].types.length === 2 && pokemon[i].types[1] == "flying") {
            console.log(pokemon[i].name + " : 1st type " + pokemon[i].types[0])
        }
    }
    //bonus: reverse the names of pokemon whose only type is poison
    // not working 
    // for (let i = 0; i < pokemon.length; i++) {
    //     if (pokemon[i].types.length === 1 && pokemon[i].types[0] == "poison") {
    //         var name = "";
    //         for (let j = pokemon[i].name.length; j >= 0; j--) {
    //             name += pokemon.name[j];
    //         }
    //         console.log(pokemon[i].name)
    //     }
    // }
}
pokemonStuff();
