var flag = true;
$(document).ready(function () {

    $("#iniciar").click(function () {
        var user = $("#user").val();
        var pass = $("#password").val();
        if (!isEmpty(user)) {
            if (!isEmpty(pass)) {
                if (flag) {
                    envio(formulario(user, pass));
                    flag = false;
                }
            } else {

            }
        } else {

        }
    });
});

function isEmpty(variable) {
    if ($.trim(variable) == "") {
        return true;
    } else {
        return false;
    }
}

function formulario(user, pass) {
    var formulario = new FormData();
    formulario.append('user', user);
    formulario.append('password', pass);
    return formulario;
}

function envio(formData) {
    $.ajax({
        method: 'POST',
        data: formData,
        url: './php/login.php',
        contentType: false,
        cache: false,
        processData: false,
        success: function (response) {
            var datos = JSON.parse($.trim(response));
            document.cookie = "zaroPhoto=" + datos.user + "|" + datos.token + ";";
            window.location = datos.ruta;
        },
        error: function () {
            M.toast({html: "¡Ha ocurrido un error!"});
        }
    });
    setTimeout(function () { flag = true}, 3000);
}

