function init() {
    
}

function envioEmail() {

   /*  if ($("#nombre").val() == '' || $("#telefono").val() == '' || $("#email").val() == '') {
        Swal.fire({
            icon: "warning",
            title: "Cuidado",
            text: "Debe llenar todos los campos para poder enviar el mensaje",
        });
    }else{ */
        let data = {
            'nombre' :      $("#nombre").val(),
            'telefono':     $("#telefono").val(),
            'email':        $("#email").val(),
        }
    
        $.ajax({
            'method': 'POST',
            'url': './mail/envioCorreo.php',
            'data': data,
            'dataType': 'json',
            'success': function(response){
                console.log(response);
                
            }
        });
   /*  } */

    
}

init();