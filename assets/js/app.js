$(document).ready(function(){

//Numeros de Slides
	var imgItems = $(".slider li").length;
	var imgPos = 1;

//Agregando Paginacion
	for(i = 1; i <= imgItems; i++){
		$(".pagination").append('<li><span class="fa fa-circle"></span></li>');
	}

	$(".slider li").hide();//ocultamos todos los slides
	$(".slider li:first").show();//mostramos el primer slide
	$(".pagination li:first").css({"color":"#a3ef51"});//damos estilos al primer item de la paginacion

	//Ejecutando todas las funciones
	$(".pagination li").click(pagination);
	$(".right span").click(nextSlider);
	$(".left span").click(prevSlider);

//funciones

function pagination(){

	var paginationPos = $(this).index() + 1;

	$(".slider li").hide();
	$(".slider li:nth-child(' + pagination + ')").fadeIn();
	$(".pagination li").css({"color":"#858585"});
	$(this).css({"color":"#a3ef51"});
	imgPos = pagination;
}

function nextSlider(){
	if(imgPos >= imgItems){
		imgPos = 1;
	}else{
		imgPos++;
	}

	$(".pagination li").css({"color":"#858585"});
	$(".pagination li:nth-child(' + imgPos + ')").css({"color":"#a3ef51"});
	$(".slider li").hide();//oculta todos los slides
	$(".slider li:nth-child(' + imgPos + ')").fadeIn();
}

function prevSlider(){
	if(imgPos <= 1){
		imgPos = imgItems;
	}else{
		imgPos--;
	}

	$(".pagination li").css({"color":"#858585"});
	$(".pagination li:nth-child('+imgPos+')").css({"color":"#a3ef51"});
	$(".slider li").hide();//oculta todos los slides
	$(".slider li:nth-child('+imgPos+')").fadeIn();
}

});