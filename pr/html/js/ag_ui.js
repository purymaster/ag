$(document).ready(function(){

	// display reset Gnb
	Gnb_act();
	$(window).resize(function(){
		Gnb_act();
		if ( $('.show_tab_mo').css('display') == 'none')
		{
			//alert('z');
			Show_reset();
		}
	});

	function Gnb_act() {
		if ($('#gnb-wrap_mo').css('display') == 'none')
		{
			$('.btn_mb_menu').removeClass('on');
			$('.gnb_mobile > ul > li > a').removeClass('on');
			$('#gnb-wrap_mo').find('.mb_menu').css('display','none');
			$('#gnb-wrap_mo').find('.mb_menu').children('li').children('ul').css('display','none');
		}
	}

	// GNB
	$('.btn_mb_menu').click(function(){
		if ($('.gnb_mobile > ul').css('display') == 'none')
		{
			$('.gnb_mobile > ul').stop().slideDown('300');
			$(this).addClass('on');
		} else if ($('.gnb_mobile > ul').css('display') == 'block')
		{
			$('.gnb_mobile > ul > li > ul').stop().slideUp('100');
			$('.gnb_mobile > ul').stop().slideUp('300');
			$('.gnb_mobile > ul > li > a').removeClass('on');
			$(this).removeClass('on');
		}
	});

	$('.gnb_mobile > ul > li > a').each(function(i){
		$(this).click(function(){
			if ($(this).parent('li').children('ul').css('display') == 'none')
			{
				$('.gnb_mobile > ul > li > ul').stop().slideUp('300');
				$(this).parent('li').children('ul').stop().slideDown('300');
				$('.gnb_mobile > ul > li > a').removeClass('on');
				$(this).addClass('on');
			} else if ($(this).parent('li').children('ul').css('display') == 'block')
			{
				$('.gnb_mobile > ul > li > a').removeClass('on');
				$('.gnb_mobile > ul > li > ul').stop().slideUp('300');
			}
		});
	});

	$('.gnb_pc > ul > li').bind('mouseenter focusin', function() {
		$('#gnb-wrap').stop().animate({'height':'132px'},200);
		$(this).addClass('on').siblings().removeClass('on');
	});
	$('.gnb_pc > ul > li').bind('mouseleave focusout', function() {
		$('#gnb-wrap').stop().animate({'height':'27px'},200);
		$(this).removeClass('on');
	});

	//메인페이지 슬라이드
	$(function(){
		$(".bxslider").bxSlider({
			auto : true,
			controls : true,
			pause : 5000 //이미지 롤링 인터벌 : 5초
		});
	});

	// history tab mo
	his_Cnt = 0;
	var Mo_his_tab = $('.history_tab_mo > ul > li > a');
	$('.his_mo').click(function(e){
		e.preventDefault();
		if (his_Cnt == 0)
		{
			Mo_his_tab.css('display','block');
			his_Cnt++;
		} else if (his_Cnt != 0)
		{
			Mo_his_tab.css('display','none');
			$('.history_tab_mo').children('ul').find('.on').children('a').css('display','block');
			his_Cnt = 0;
		}
	});

	// show_tab_pc
	var Show_T_P = $('.show_tab_pc > ul > li > a');
	Show_T_P.bind('click focusin', function(e) {
		e.preventDefault();
		Show_T_P.removeClass('on');
		Show_T_P.parent('li').children('div').hide();
		$(this).addClass('on').parent('li').children('div').show();
	});

	// show_mo
	var show_mo_cnt = 0;
	var show_Mo = $('.show_tab_mo > ul > li');
	$('.show_mo').click(function(e){
		e.preventDefault();
		show_mo_cnt++;
		if (show_mo_cnt == 1)
		{
			show_Mo.show();
			show_Mo.children('div').hide();
		} else if (show_mo_cnt != 1)
		{
			show_Mo.hide();
			$('.show_tab_mo').children('ul').find('.fix').css('display','block').children('div').show();
			show_Mo.removeClass('on');
			show_mo_cnt = 0;
		}
	});

	show_Mo.click(function(e){
		e.preventDefault();
		show_Mo.removeClass('on').children('div').hide();
		$(this).addClass('on').children('div').show();
	});

	function Show_reset() {
		show_Mo.hide();
		show_Mo.removeClass('on').children('div').hide();
		$('.show_tab_mo').children('ul').find('.fix').css('display','block').children('div').show();
		show_mo_cnt = 0;
	}


// script
});