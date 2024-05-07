$(document).ready(function() {
    // Cuando se haga clic en cualquier botón de red social
    $("a[id^='redSocial']").click(function(event) {
      event.preventDefault(); // Evita que el enlace redirija a otra página
      var id = $(this).attr('id');
      switch(id) {
        case 'redSocial1':
          window.location.href = "https://www.facebook.com/intecapoficial/?locale=es_LA";
          break;
        case 'redSocial2':
          window.location.href = "https://twitter.com/intecapoficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor";
          break;
        case 'redSocial3':
          window.location.href = "https://www.instagram.com/intecapoficial/?hl=es";
          break;
        case 'redSocial4':
          window.location.href = "https://www.youtube.com/intecapoficial";
          break;
        case 'redSocial5':
          window.location.href = "https://gt.linkedin.com/school/intecapoficial/";
          break;
        default:
      }
    });
  });
  


$(document).ready(function() {
    $('#employeeForm').submit(function(event) {
        event.preventDefault();
        var nombre = $('#nombre').val();
        var fecha = $('#fecha').val();
        var puesto = $('#puesto').val();
        var salario = $('#salario').val();

        // Agregar empleado 
        $('#employeeList').append('<li class="list-group-item">' + nombre + ' - ' + fecha + ' - ' + puesto + ' - Q' + salario + '</li>');

        // Limpiar campos del formulario
        $('#nombre').val('');
        $('#fecha').val('');
        $('#puesto').val('');
        $('#salario').val('');
    });

    //Boton de Eliminar primer elemento de la lista
    $('#eliminarPrimero').click(function() {
        $('#employeeList li:first').remove();
    });

    //Boton de Eliminar último elemento de la lista
    $('#eliminarUltimo').click(function() {
        $('#employeeList li:last').remove();
    });
});
