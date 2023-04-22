function agregarComentario(evento) {
    //Evito que recargue la página
    evento.preventDefault();

    //Obtengo los valores ingresados
    let textoComentario = document.getElementById('texto-comentario').value;
    let puntaje = document.getElementById('puntaje-feedback').value;

    //Agrego el feedback a la página
    let texto = document.createTextNode(textoComentario + ' - ' + puntaje + '/5');
    let parrafo = document.createElement('p')
    parrafo.appendChild(texto);

    document.getElementById('listado-comentarios').appendChild(parrafo);

    //Reinicio los valores de los input
    document.getElementById('texto-comentario').value = '';
    document.getElementById('puntaje-feedback').value = '1';
}

document.getElementById('boton-enviar-comentario').addEventListener('click', agregarComentario)
