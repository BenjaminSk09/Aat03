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
  