$("input").click(function(){
    alert('onClick');
});

/*
 * Proposito: Saca del query string el parametro de nombre 'variable'.
 */
function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

/*
 * Proposito: Carga la pagina 'urlArchivoHTML'.
 */
function irPagina(urlArchivoHTML) {
   location.href = urlArchivoHTML ;
}

function irPaginaConSessionId(urlArchivoHTML, sessionId) {
   location.href = urlArchivoHTML + "?idSession=" + sessionId;  
}

/*
 * Proposito: Mostrar y ocultar el menu principal.
 */
function onClickMenu() {
   if ( $('#opcionesMenu').css('display') === 'none' ) {
      $('#opcionesMenu').css('display',  'block' );
      $("#iconoMenu2").css('display',  'inline-block' );
      $("#iconoMenu1").css('display',  'none' );
   } 
   else {
      cerrarMenu();
   }
}
/*
   $('#opcionesMenu').css('display', $('#opcionesMenu').css('display') === 'none' ? 'block' : 'none');
*/

function cerrarMenu() {
    if ( $('#opcionesMenu').css('display') === 'block'  ) {
       $('#opcionesMenu').css('display', 'none');     
       $("#iconoMenu1").css('display',  'inline-block' );
       $("#iconoMenu2").css('display',  'none' );      
    }
}


/*
 * Proposito: Desplegar un error tecnico en una caja de dialogo.
 */


function cerrarVentana() {
    $( "#dialogError").dialog("close");
}

function mostrarError(response, error, excepcion ) {

// dialogError
    $( "#dialogEnProceso" ).dialog( "close" );
    
    $( "#textoDialogError").html( errorComunicaciones );
    
    /*
    $( "#dialogError").html( '<p>' + errorComunicaciones + '</p>'  );        
    */
   
    $( "#dialogError").dialog("open");    
    
}




function mostrarVentanaError( mensajeError ) {

    /*
    console.log('mi error');
    console.log('response >' + response );
    console.log('error >' + error );
    console.log('excepcion >' + excepcion );

    */
// dialogError
/*    $( "#dialogEnProceso" ).dialog( "close" );*/
    $( "#textoDialogError").html( mensajeError ); 
    $( "#dialogError").dialog("open");    
    
    /*
    mostrarTooltip( errorComunicaciones );    
    */
}

/*
 * Proposito: Desplegar un tooltip en una caja de dialogo.
 */
function mostrarTooltip( stringTooltip ) {
   $( "#dialog" ).html( "<p>" + stringTooltip + "</p>" ); 
   $( "#dialog" ).dialog( "open" );
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
  var words = text.split(' ');
  var line = '';

  for(var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    }
    else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
  return y;
}




