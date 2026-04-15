$(document).ready(function() {
    $("#lista").append("<li>Elemento4</li>"); //agregar elemento
    $("#lista li").css("color","pink");//cambia a color rosa

    $("#btnAlternar").click(function() { // Muestra/Oculta la lista
        $("#lista").toggle();
        let texto = $("#lista").is(":visible") ? "Ocultar lista" : "Mostrar lista"; // Cambia el texto: si la lista es visible, dice "Ocultar", si no, "Mostrar"
        $(this).text(texto);
    });

    // Inicializar el carrusel con opciones personalizadas
    $('#miCarrusel').carousel({
        interval: 3000, // Cambia cada 2 segundos
        pause: "hover"  // Se detiene si pones el mouse encima
    })

    
});