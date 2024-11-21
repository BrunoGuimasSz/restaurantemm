$(document).ready(function(){


 $("#owl-example").owlCarousel({
    // Most important owl features
    items : 4,
    pagination : true,
    paginationSpeed : 1000,
    navigation : true,
    navigationText : ["","<i class='fa fa-angle-right'></i>"],
    slideSpeed : 800,
 });

	$("#navigation").sticky({
		topSpacing : 75,
	});

	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 15000,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'easeInOutExpo'
	});

     $('#top-nav').onePageNav({
         currentClass: 'active',
         changeHash: true,
         scrollSpeed: 1200
    });
//Initiat WOW JS
    new WOW().init();

});

window.onload = function() {
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();  

        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var comentario = document.getElementById("comentario").value;

        if (nome === "" || email === "" || comentario === "" || nota.value === "") {
            return;
        }

        document.getElementById('enviado').style.display = 'block';

        setTimeout(function() {
            document.getElementById("myForm").reset();  // Limpa os campos do formulário
            document.getElementById('enviado').style.display = 'none';  // Esconde a mensagem de sucesso
        }, 5000);  // 5000ms = 5 segundos
    });
};
