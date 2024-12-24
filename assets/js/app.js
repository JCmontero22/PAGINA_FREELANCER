function init() {
    
}

function obtenerCampos() {
    return {
        'nombre' :      $("#nombre").val(),
        'telefono':     $("#telefono").val(),
        'email':        $("#email").val(),
        'mensaje':      $("#mensaje").val()
    }
}

function validarEmailUsuario(email) {
    const exprecionCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return exprecionCorreo.test(email);
}

function validarFormularioContacto() {

    let campos = obtenerCampos();
    console.log(campos.telefono);
    
    if (!campos.nombre || !campos.email || !campos.mensaje || !campos.telefono) {
        Swal.fire({
            icon: "warning",
            title: "Cuidado",
            text: "Debe llenar todos los campos para poder enviar el mensaje",
        });

        return false;
    }

    if (!validarEmailUsuario(campos.email)) {
        Swal.fire({
            icon: "warning",
            title: "Cuidado",
            text: "El email no tiene un formato correcto",
        }); 

        return false;
    }

    return campos;
}

function envioEmail(formData) {
    $.ajax({
        'method': 'POST',
        'url': './mail/envioCorreo.php',
        'data': formData,
        'dataType': 'json',
        'success': function(response){
            if (response.status == true) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: response.mensaje,
                    showConfirmButton: false,
                    timer: 1500
                });

                $("#formularioContacto")[0].reset();
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: response.mensaje,
                }); 
            }
            
        }
    }); 
}

function gestionEnvioEmail() {
    let camposValidados = validarFormularioContacto();
    if (camposValidados) {
        envioEmail(camposValidados);
    }
}



init();