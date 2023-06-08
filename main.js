const productos = [ 
    {
        nombre: "bondiola",
        precio: 3500,
        descripción: "La bondiola o bondiolita es un producto de charcutería (similar a la coppa o capicola italiana, o capocollo en italiano) originario​ de la región de Emilia-Romaña y difundido por la inmigración italiana en países de América del Sur como Argentina, Paraguay y Uruguay.",
        stock: 20,
        urlImg:"https://www.shutterstock.com/image-photo/some-delicious-pork-bondiola-fetas-260nw-2101389478.jpg", 
    },
    {
        nombre: "panceta",
        precio: 2500,
        descripción:"La panceta, también conocida como «tocino» o «tocineta», es un producto cárnico que comprende la piel y las capas que se encuentran bajo la piel del cerdo, específicamente de los músculos ventrales. Está compuesta de la piel y tocino entreverado de carne magra.",
        stock: 0,
        urlImg: "https://www.shutterstock.com/image-photo/smoked-bacon-tasty-sliced-pork-260nw-2255709351.jpg", 
    },
    {
        nombre: "panceta ahumada",
        precio: 3000,
        descripción:"La panceta ahumada es conocida popularmente como bacon y suele utilizarse mucho como aperitivo frito o para acompañar unos huevos u otros platos de cocina rápida. En la cocina, la panceta suele emplearse preferentemente para el relleno de carnes. Da un resultado más jugoso.",
        stock: 30,
        urlImg: "https://www.shutterstock.com/image-photo/smoked-bacon-tasty-sliced-pork-260nw-2255709351.jpg",
    },
    {
        nombre: "bresaloa",
        precio: 4500,
        descripción:"La bresaola es un fiambre consistente en finas lonchas de carne de ternera curada durante dos o tres meses, desde su etapa cruda, en la que es oscura, hasta que toma un color púrpura. Tiene su origen en el valle de Valtellina al norte de Italia, en la región de Lombardía, en las comarcas cercanas de los Alpes.",
        stock: 8,
        urlImg:"https://www.shutterstock.com/image-photo/half-smoked-bresaola-cut-pieces-260nw-1383904331.jpg", 
    },
]

const verProducto = ({nombre,precio,descripción,stock,urlImg}) =>{
    const contenedorTarjetas = document.querySelector("#contenedorTarjetas")
    const tarjeta = document.createElement("div")
    tarjeta.classname = "tarjeta"
    tarjeta.innerHTML = `
                        <img src="${urlImg}" alt="">
                        <h3>${nombre}</h3>
                        <p>${descripción}</p>
                        <span><b>${precio}</b> $ <b>Stock:</b> ${stock}</span>
                        <button>"agregar al carrito"</button>
                        `
    contenedorTarjetas.append(tarjeta)

}
const verProductos = () => {
    productos.forEach(productos => {
        if(productos.stock =! 0){
        verProducto(productos)
        }
    })
}

verProductos()