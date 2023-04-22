let productos = [
    { srcImagen: 'imagenes/notebook1.jpg', nombre: 'Notebook Dell Inspiron 3505', precio: "$85.680" },
    { srcImagen: 'imagenes/notebook2.jpg', nombre: 'Notebook Dell Inspiron 3506', precio: "$84.999" },
    { srcImagen: 'imagenes/notebook3.webp', nombre: 'Notebook Dell Inspiron 3507', precio: "$56.000" },
    { srcImagen: 'imagenes/iphone13.png', nombre: 'Iphone 13 Pro 264GB', precio: "530 USD" },
    { srcImagen: 'imagenes/intel.jpg', nombre: 'Procesador Intel Core i3 9th Gen', precio: "$63.000" },
    { srcImagen: 'imagenes/razer.png', nombre: 'Auriculares Razer 870', precio: "$45.599" }

];

for (let producto of productos) {

    let contenedor = document.createElement('div');
    contenedor.className = 'col-sm-6 col-md-4';

    let productItem = document.createElement('div');
    productItem.className = 'product-item';

    let productThumb = document.createElement('div');
    productThumb.className = 'product-thumb';

    let imagen = document.createElement('img');
    imagen.src = producto.srcImagen;

    let link = document.createElement('a');
    link.href = 'producto.html';
    link.appendChild(imagen);
    productThumb.appendChild(link);

    let productInfo = document.createElement('div');
    productInfo.className = 'product-info';

    let texto = document.createTextNode(producto.nombre);
    let strong = document.createElement('strong');
    strong.appendChild(texto);
    productInfo.appendChild(strong);

    let p = document.createTextNode(producto.precio);
    let precio = document.createElement('p');
    precio.appendChild(p);
    productInfo.appendChild(precio);

    productItem.appendChild(productThumb);
    productItem.appendChild(productInfo);
    contenedor.appendChild(productItem);

    document.getElementById('listado-productos').appendChild(contenedor);


}


document.addEventListener("keyup", e=>{
    if(e.target.matches("#search")){

        if(e.key === "Escape")e.target.value = ""

        document.querySelectorAll(".product-item").forEach(producto =>{
            producto.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) 
            ? producto.classList.remove("filtro") : producto.classList.add("filtro");
        })

    }

})