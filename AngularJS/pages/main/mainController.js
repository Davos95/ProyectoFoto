app.controller("mainController", function ($scope, $route) {

    function aparecer(elemento, tiempo) {
        var elem = document.getElementById(elemento);
        var opacity = 0;
        elem.style.opacity = opacity;
        setTimeout(function () { var id = setInterval(frame, 2); }, tiempo);

        function frame() {
            if (opacity >= 1) {
                clearInterval(this);
            } else {
                opacity += 0.01;
                elem.style.opacity = opacity;
            }
        }
    }
    aparecer("subirImagen", 100);
    aparecer("editarImagen", 200);
    aparecer("crearSesion", 400);
    aparecer("editarSesion", 600);
    aparecer("crearComision", 800);
    aparecer("editarComision", 1000);
});