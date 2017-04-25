$(document).ready(function(){

	//Navigation

	$("#mobile-btn").click(function() {
  	$("#mobile-btn").toggleClass("mobile-btn-slide");
  	$("#list").toggleClass("mobile-list-slide")
 	});

  $(function() {      
	  var width = $('.slider-box').width();                     // Ширина слайдера.
	  interval = 4000;                                    // Интервал смены слайдов.
	 
	  $('.slides-list .slide:last').clone().prependTo('.slider-list');     // Копия последнего слайда помещается в начало.
	  $('.slider-list .slide').eq(1).clone().appendTo('.slider-list');     // Копия первого слайда помещается в конец.  
	  $('.slider-list').css('margin-left', -width);                // Контейнер .slider сдвигается влево на ширину одного слайда.
	  setInterval('animation()',interval);                    // Запускается функция animation(), выполняющая смену слайдов.
	});

	function animation(){
 
	  var margin = parseInt($('.slider-list').css('marginLeft'));  // Текущее смещение блока .slider
	      width = $('.slider-box').width(),                     // Ширина слайдера.
	      slidersAmount=$('.slider-list').children().length;       // Количество слайдов в слайдере.
	  
	  if (margin != (-width*(slidersAmount-1)))                  // Если текущий слайд не последний,
	  {
	    margin = margin - width;                                  // то значение margin уменьшается на ширину слайда.
	  } else {                                                  // Если показан последний слайд,
	    $('.slider-list').css('margin-left', -width);              // то блок .slider возвращается в начальное положение,
	    margin=-width*2;         
	  }
	  $('.slider-list').animate({marginLeft:margin},1000);          // Блок .slider смещается влево на 1 слайд.
	};
});