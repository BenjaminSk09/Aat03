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
    // Calcular total ganado al hacer clic en el botón correspondiente
    $('#calcularIngresos').click(function() {
        var salario = parseFloat($('#salario').val()) || 0;
        var bonificacion = parseFloat($('#bonificacion').val()) || 0;
        var comisiones = parseFloat($('#comisiones').val()) || 0;

        var totalGanado = salario + bonificacion + comisiones;
        $('#totalGanado').text('Total Ganado: Q' + totalGanado.toFixed(2));
    });

    
    $('#calcularEgresos').click(function() {
        var ahorro = parseFloat($('#ahorro').val()) || 0;
        var igss = parseFloat($('#igss').val()) || 0;
        var prestamos = parseFloat($('#prestamos').val()) || 0;

        var totalDescuentos = ahorro + igss + prestamos;
        $('#totalDescuentos').text('Total Descuentos: Q' + totalDescuentos.toFixed(2));
    });

   
    $('#obtenerSueldo').click(function() {
        var totalGanado = parseFloat($('#totalGanado').text().split('Q')[1]) || 0;
        var totalDescuentos = parseFloat($('#totalDescuentos').text().split('Q')[1]) || 0;

        var sueldoLiquido = totalGanado - totalDescuentos;
        $('#sueldoLiquido').text('Sueldo Líquido: Q' + sueldoLiquido.toFixed(2));
    });
});
