function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkToken() {
    var cookie = getCookie("zaroPhoto");
    if (cookie != "") {
        cookie = cookie.split("|");
        var form = new FormData();
        form.append("user", cookie[0]);
        form.append("token", cookie[1]);
        envio(form);
    } else {
        window.location = "index.html";
    }
}

function envio(formData) {
    $.ajax({
        method: 'POST',
        data: formData,
        url: './php/main/checkToken.php',
        contentType: false,
        cache: false,
        processData: false,
        success: function (response) {
            if (!response) {
                window.location = "index.html";
            }
        },
        error: function () {
            M.toast({ html: "¡Ha ocurrido un error!" });
        }
    });
    setTimeout(function () { flag = true }, 3000);
}

checkToken();