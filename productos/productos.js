const input = document.querySelector("#inputpro");
const button = document.querySelector("#botonpro");
const productoContainer = document.querySelector(".produc");

button.addEventListener('click', (e) => {
    e.preventDefault();
    traerproducto(input.value)

})

function traerproducto(Producto) {
    fetch(`https://api.escuelajs.co/api/v1/products/${Producto}/`)
        .then((res) => res.json())
        .then((data) => {
            crearProducto(data);
        });
}


function crearProducto(Producto) {
    const img = document.getElementById('imag');
    img.src = Producto.images[0];

    const h3 = document.getElementById('nom');
    h3.textContent = Producto.title;

    const h2 = document.getElementById('precio');
    h2.textContent = Producto.price;

    const p = document.getElementById('descripcion');
    p.textContent = Producto.description;

    const h4 = document.getElementById('categoria');
    h4.textContent = Producto.category;

}

function añadirpro() {

    fetch('https://fakestoreapi.com/products', {
        method: "POST",
        body: JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        )
    })
        .then(res => res.json())
        .then(json => console.log(json))
}

function actualizarpro() {

    fetch('https://fakestoreapi.com/products/7', {
        method: "PUT",
        body: JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        )
    })
        .then(res => res.json())
        .then(json => console.log(json))

}

function eliminarpro() {

    fetch('https://fakestoreapi.com/products/6',{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

}

function listar(){

    const input = document.getElementById('listar')
}