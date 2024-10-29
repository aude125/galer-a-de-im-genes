function filterSelection(category) {
    var items = document.getElementsByClassName('gallery-item');
    if (category === 'all') category = '';
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
        if (items[i].className.indexOf(category) > -1) {
            items[i].style.display = 'block';
        }
    }
}

// Mostrar todas las imágenes por defecto
filterSelection('all');