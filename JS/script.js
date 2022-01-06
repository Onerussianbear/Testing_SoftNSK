/* плавная якорная ссылка */
$(document).ready(function() {
	$('a[href^="#"]').click(function(){
	var el = $(this).attr('href');
	$('body').animate({
	scrollTop: $(el).offset().top}, 1500);
	return false;
	});
});

/* хедер-бургер меню */
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__list').toggleClass('active');
		$('body').toggleClass('lock');
    });
});

/* выпадающее меню выбора системы */
$(document).ready(function() {
    $('.sistems').click(function(event) {
        $('.sistems, .sistems__menu, .arrow').toggleClass('active');
    });
});
/* закрытие вне блока */
$(document).mouseup(function() { 
	var div = $('.sistems'); 
	if (!div.is(e.target) 
	    && div.has(e.target).length === 0) { 
        $('.sistems, .sistems__menu, .arrow').removeClass('active'); 
	}
});

/* вывод значения бегунка input */
$('.result').html($('input[type="range"]').val());

$(document).on('input change', 'input[type="range"]', function() {
  $('.result').html($(this).val());
});





