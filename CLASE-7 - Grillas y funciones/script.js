const animes = [
    {titulo: "Attack on Titan",
     imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2022%2F01%2Fattack-on-titan.jpg&f=1&nofb=1&ipt=f248427fbdd7d11b189f2fd1be49d2bae744ea7abf08a308fdbdeedad52584af",
     genero: "Acción",
     rating: 9.0,
     sinopsis: "La humanidad sobrevive dentro de enormes murallas que los protegen de los Titanes."},
    {titulo: "Jujutsu Kaisen",
     imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2FuyyMrkDgjnpGFM9dnJEYlUya7O0.jpg&f=1&nofb=1&ipt=430ee389a0f867bc24b0cef5c0498fa5549937fb553919ee6e60f7c03999b7cb",
     genero:"Fantasia", 
     sinopsis: "Las emociones negativas creadas por los humanos se convierten en maldiciones y se esconden en la vida cotidiana.",
     rating:9.0},
    {titulo: "The promised neverland",  
     imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMGQ4ZGJhZTUtZDQ5Mi00NTI1LWEyYjItMzIxM2VlNmY4MDEyXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg&f=1&nofb=1&ipt=878f8032707f451d3e9d90507e87e77b1a0b1b69fd8ed4203ab9c6bda37bde2c",
     genero:"Thriller psicológico", 
     sinopsis: "La obra narra la historia de unos niños huérfanos, liderados por una joven de once años llamada Emma, que tratan de escapar del orfanato en el que vivían engañados y el cual esconde un oscuro secreto.",
     rating:9.0},
    {titulo: "Blue Lock",
     imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.gamerantimages.com%2Fwordpress%2Fwp-content%2Fuploads%2Fsharedimages%2F2024%2F04%2Fblue-lock-tv-series-poster.jpg&f=1&nofb=1&ipt=27c61127ae14f1d120f2b53c2d6a0f541834e563cd9bbd9577c5a97b18cbc29f",
     genero:"Deporte", 
     sinopsis: "Un joven futbolista llamado Yoichi Isagi ingresa a Blue Lock, un programa de entrenamiento donde cientos de delanteros compiten entre sí para convertirse en el mejor atacante de Japón y alcanzar la selección nacional.",
     rating:9.0},
    {titulo:"Haikyuu", 
     imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.gamerantimages.com%2Fwordpress%2Fwp-content%2Fuploads%2Fsharedimages%2F2024%2F04%2Fblue-lock-tv-series-poster.jpg&f=1&nofb=1&ipt=27c61127ae14f1d120f2b53c2d6a0f541834e563cd9bbd9577c5a97b18cbc29f",
     genero:"Deporte", 
     sinopsis: "El suplente de la escuela secundaria, Shōyō Hinata, siente un repentino amor por el voleibol a raíz de ver una coordenada del título nacional en la televisión.",
     rating:10.0},
    {titulo:"Wonder egg priority",
     imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fes.web.img2.acsta.net%2Fpictures%2F20%2F12%2F30%2F12%2F09%2F4927238.jpg&f=1&nofb=1&ipt=f48034f7177a1b76bf99aa45e7cf5c5e9dc3a5ecee1430f1557be283a0e6d1a3", 
     genero:"Drama psicologico", 
     sinopsis: "Una adolescente entra en un mundo extraño donde ayuda a otras chicas a enfrentar sus traumas mientras intenta superar la pérdida de una amiga.",
     rating:9.0}];

function crearCard(anime) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <img src ="${anime.imagen}" alt="${anime.titulo}">
    <div class="card-info">
    <span class="genero">${anime.genero}</span>
    <h2>${anime.titulo}</h2>
    <p>${anime.sinopsis}</p>oscura
    <span class="rating">★ ${anime.rating}</span>
    </div>
    `;
    return card;
}

function renderGrilla(lista) {
    const grilla = document.querySelector("#grilla");
    const contador = document.querySelector("#contador");

    grilla.innerHTML = "";

    lista.forEach (function(anime) {
        const card = crearCard(anime);
        grilla.appendChild(card);
});

contador.textContent = lista.length + "animes encontrados";

}
function buscar(lista,termino) {
    return lista.filter(function(anime){
        return anime.titulo.toLowerCase().includes(termino.toLowerCase());

    });
}
function filtrarPorGenero(lista, genero) {
  if (genero === "") return lista;

  return lista.filter(function(anime) {
    return anime.genero === genero;
  });
}

function buscarYFiltrar() {
  const termino = document.querySelector("#busqueda").value;
  const genero = document.querySelector("#genero").value;

  let resultado = buscar(animes, termino);
  resultado = filtrarPorGenero(resultado, genero);

  renderGrilla(resultado);
}

document.querySelector("#busqueda").addEventListener("input", buscarYFiltrar);
document.querySelector("#genero").addEventListener("change", buscarYFiltrar);

renderGrilla(animes);