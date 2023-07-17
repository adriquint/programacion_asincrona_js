"use strict";

console.log("----------------------------------------");
console.log("Fetch Poke JSON");

const pedirInfo = async (rutaArchivo) => {
    const respuesta = await fetch(rutaArchivo);
    if (!respuesta.ok)
        throw new Error("WARN", respuesta.status);
    const data = await respuesta.json();
    return data;
}

const mostrarInfo = async () => {
    const rutaArchivo = ("./bulbasaur.json");
    const infoPoke = await pedirInfo(rutaArchivo);
    console.log(infoPoke);

    const nombrePoke = infoPoke.name.toUpperCase()
    
    const tiposPoke = infoPoke.types
    let recorridoTipos =""
    tiposPoke.forEach(element => {
        recorridoTipos += `<p>${element.type.name}</p>`        
    });

    const statsPoke = infoPoke.stats
    let recorridoStats = ""
    statsPoke.forEach(element => {
        recorridoStats += `
            <div>
                <span>${element.stat.name}</span>
                <span>${element.base_stat}</span>
            </div>
            `
    });

    document.getElementById("pokeName").innerHTML = `<h1>${nombrePoke}</h1>`
    document.getElementById("pokeTypes").innerHTML = recorridoTipos
    document.getElementById("pokeStats").innerHTML = recorridoStats    
}

mostrarInfo()