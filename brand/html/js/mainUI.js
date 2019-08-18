$(function(){
	
	/////////////////////
	//브라우저 업데이트//
	/////////////////////

	if (navigator.userAgent.match(/MSIE 8/)) {
		$('.ie8').show();
    };

	///////////////////
	//스킵 네비게이션//
	///////////////////
	
	$('.skip a').click(function(){
		$('#content').attr('tabindex', '0').focus();
		return false;
	});
	
	////////////
	//GNB 제어//
	////////////

	gnbMobile();
	gnbPc();
	
	function gnbMobile(){
		var d1_menu = $("header.mobile nav .gnb > li > a"); //1depth 메뉴
		var d2_menu = $("header.mobile nav .gnb > li > ul > li > a"); //2depth 메뉴
		
		$("header.mobile .menu").click(function(){ //메뉴 열기 버튼 클릭시
			$("nav").stop().animate({left:"0"},300,function(){ //슬라이드 메뉴 우측 이동
				$("nav .close").fadeIn(150); //닫기 버튼 생성
			});
			$(".deemed").fadeIn(300); //배경 생성
		});
		
		$("nav .close").click(function(){ //메뉴 닫기 버튼 클릭시
			d1_menu.next('ul').slideUp().parent('li').removeClass('on');
			d2_menu.next('ul').slideUp().parent('li').removeClass('on');
			$("nav").stop().animate({left:"-260px"},300,function(){ //슬라이드 메뉴 좌측 이동
				$("nav .close").fadeOut(150); //닫기 버튼 감추기
			});
			$(".deemed").fadeOut(300); //배경 감추기
		});
		
		d1_menu.click(function(){ //1depth 메뉴 터치시
			if($(this).parent('li').hasClass('none')){ //하위목록 없는 메뉴일 경우
				d1_menu.next('ul').slideUp().parent('li').removeClass('on')
				d2_menu.next('ul').slideUp().parent('li').removeClass('on')
			} else { //하위목록 있는 메뉴일 경우
				if($(this).next('ul').css('display') == 'block'){ //하위목록이 펼쳐있을 경우
					d1_menu.next('ul').slideUp().parent('li').removeClass('on');
					d2_menu.next('ul').slideUp().parent('li').removeClass('on');
				} else { //하위목록이 접혀있을 경우
					d1_menu.next('ul').slideUp().parent('li').removeClass('on');
					d2_menu.next('ul').slideUp().parent('li').removeClass('on');
					$(this).next('ul').slideDown().parent('li').addClass('on');
				};
			};
		});
		
		d2_menu.click(function(){ //2depth 메뉴 터치시
			if($(this).parent('li').hasClass('none')){ //하위목록 없는 메뉴일 경우
				d2_menu.next('ul').slideUp().parent('li').removeClass('on');
			} else { //하위목록 있는 메뉴일 경우
				if($(this).next('ul').css('display') == 'block'){ //하위목록이 펼쳐있을 경우
					d2_menu.next('ul').slideUp().parent('li').removeClass('on');
				} else { //하위목록이 접혀있을 경우
					d2_menu.next('ul').slideUp().parent('li').removeClass('on');
					$(this).next('ul').slideDown().parent('li').addClass('on');
				};
			};
		});
	};
	
	function gnbPc(){
		
		var d1_menu = $("header.pc nav > ul > li > a"); //1depth 메뉴
		var d2_menu = $("header.pc nav > ul > li > ul > li > a"); //2depth 메뉴
		
		d1_menu.bind('click',function(){
			d2_menu.next('ul').slideUp(150);
			d2_menu.parent('li').removeClass('on');
			if($(this).parent('li').hasClass('none')){ //하위목록 없는 메뉴일 경우
				$('header.pc').stop().animate({width:"220px"},300);
				d1_menu.parent('li').removeClass('on').children('ul').hide();
				d2_menu.next('ul').slideUp(150).parent('li').removeClass('on');
			} else { //하위목록 있는 메뉴일 경우
				if($(this).next('ul').css('display') == 'block'){ //하위목록이 펼쳐있을 경우
					$('header.pc').stop().animate({width:"220px"},300);
					d1_menu.parent('li').removeClass('on').children('ul').hide();
				} else {
					$('header.pc').stop().animate({width:"440px"},300);
					d1_menu.parent('li').removeClass('on').children('ul').hide();
					$(this).next('ul').show().parent('li').addClass('on');
				}
			};
		});

		d2_menu.bind('click',function(e){
			if($(this).parent('li').hasClass('none')){ //하위목록 없는 메뉴일 경우
				d2_menu.next('ul').slideUp(150);
				d1_menu.next('ul').children('li').removeClass('on');
				$(this).parent('li').addClass('on');
			} else {
				if($(this).next('ul').css('display') == 'block'){ //하위목록이 펼쳐있을 경우
					d2_menu.next('ul').slideUp(150, function(){
						d2_menu.parent('li').removeClass('on');
					});
				} else { //하위목록이 접혀있을 경우
					d2_menu.next('ul').slideUp(150);
					d2_menu.parent('li').removeClass('on');
					$(this).next('ul').slideDown(150).parent('li').addClass('on');
				};
			};
		});
		
		$('h1').focusin(function(){ //포커스 들어갈시 
			$('header.pc').stop().animate({width:"220px"},300);
			d1_menu.parent('li').removeClass('on').children('ul').hide();
			d2_menu.next('ul').slideUp(150).parent('li').removeClass('on');
		});
		
		d2_menu.last().focusout(function(){ //포커스 빠져나갈시 
			$('header.pc').stop().animate({width:"220px"},300);
			d1_menu.parent('li').removeClass('on').children('ul').hide();
			d2_menu.next('ul').slideUp(150).parent('li').removeClass('on');
		});
		
		$('#content').bind('click focusin', function(){ //컨텐츠 클릭, 포커스 들어갈시 메뉴 닫기
			$('header.pc').stop().animate({width:"220px"},300);
			d1_menu.parent('li').removeClass('on').children('ul').hide();
			d2_menu.next('ul').slideUp(150).parent('li').removeClass('on');
		});
	};
	
	/////////////////
	//언어설정 제어//
	/////////////////
	
	$("footer.pc .lang > a").bind('click focusin',function(){ //언어메뉴 포커스 이동 또는 클릭시
		$("footer.pc .lang .lang_opt").show();
	});
	
	$("footer.pc .lang .lang_opt .close").bind('click focusout',function(){
		$("footer.pc .lang .lang_opt").hide();
	});
	
	$("footer.pc .lang .lang_opt ul li a").bind('click',function(){
		$("footer.pc .lang .lang_opt").hide();
	});
	
	////////////////////
	//제품 썸네일 제어//
	////////////////////
	
	var th_count = $("section .cont > div .prod_view .img_box .img_list ul li").length;
	if(th_count < 5){ //썸네일 갯수가 5개 미만이면 슬라이드 제어 버튼 삭제
		$("section .cont > div .prod_view .img_box .img_list > a").hide();
	}
	
	var th_show = $("section .cont > div .prod_view .img_box .view");
	var th_prev = $("section .cont > div .prod_view .img_box .img_list > a.prev");
	var th_next = $("section .cont > div .prod_view .img_box .img_list > a.next");
	var th_box = $("section .cont > div .prod_view .img_box .img_list ul");
	
	th_prev.click(function(){ //이전 버튼 클릭 시
		th_box.css('margin-left','0');
		return false;
	});
	
	th_next.click(function(){ //다음 버튼 클릭 시
		var w_width = $(window).width();
		if(w_width >= 1280){ //PC 사이즈일때
			th_box.css('margin-left','-344px');
			return false;
		} else { //모바일 사이즈일때
			th_box.css('margin-left','-232px');
			return false;
		}
	});
	
	$(window).resize(function(){ //윈도우 사이즈 조절 시, 썸네일 목록 위치 초기화(버튼 클릭 후, 윈도우 크기 변경시 레이아웃 틀어짐 방지)
		th_box.css('margin-left','0');
	});

	th_box.children('li:nth-child(4)').find('a').focusin(function(){ //썸네일 4번째 이미지에서 5번째 이미지로 포커스 이동 시, 썸네일 목록 위치 재정의(탭 메뉴 이동 시, 슬라이드 제어 버튼이 제대로 작동하기 위한 기능)
		th_box.css('margin-left','0');
		return false;
	});
	
	th_box.children('li:nth-child(5)').find('a').focusin(function(){ //썸네일 5번째 이미지에서 4번째 이미지로 포커스 이동 시, 썸네일 목록 위치 재정의
		var w_width = $(window).width();
		if(w_width >= 1280){ //PC 사이즈일때
			th_box.css('margin-left','-344px');
			return false;
		} else { //모바일 사이즈일때
			th_box.css('margin-left','-232px');
			return false;
		}
	});
		
	th_box.find('a').click(function(){ //썸네일 이미지 클릭 시, 메인 상품 이미지 변경
		var th_src = $(this).children('img').attr('src');
		th_show.attr('src',th_src);
		return false;
	});
	
	//////////////////
	//약관 동의 체크//
	//////////////////
	
	$("section .cont > div .term_box .agree a").click(function(){
		$(this).toggleClass("on");
		$(this).prev("span").toggleClass("on");
	});
	
	$("a.agree").click(function(){
		if(!$(".check1").hasClass("on")){
			alert('이용약관에 동의하여주시길 바랍니다.');
		} else if(!$(".check2").hasClass("on")){
			alert('개인정보취급방침에 동의하여주시길 바랍니다.');
		} else {
			alert('페이지 이동'); //여기에 회원정보입력 링크 이동 스크립트를 작성
		};
	});
	
	//////////////////
	//후기 평점 제어//
	//////////////////
	
	var star = $("section .cont > div .custom_write dl dd.point div a");
	var star_point = 5; //평점 기본값은 5점
	$("section .cont > div .custom_write dl dd.point div a").addClass("on"); //페이지 기본 점수 부여
	
	star.each(function(i){
		$(this).click(function(){
			$("section .cont > div .custom_write dl dd.point div a").removeClass("on");
			var value = i;
			$(this).add($(this).prevAll()).addClass("on");
			star_point = $(this).html();
			alert(star_point); //여기에서 불러오는 값(평점)을 DB로 전달
			return false;
		});
	});
	
	//////////////////////
	//개인정보 성별 제어//
	//////////////////////
	
	var gender_select = $("section .cont > div .custom_write dl dd.gender a");
	var gender = "m" //성별 기본값은 남자
	gender_select.eq(0).addClass("on");
	
	gender_select.click(function(){
		gender_select.removeClass("on");
		$(this).addClass("on");
		var gender_data = $(this).html();
		if(gender_data == "남자"){
			gender = "m"; //여기에서 불러오는 값(성별)을 DB로 전달
			alert(gender);
		} else {
			gender = "f";
			alert(gender);
		}
		return false;
	});
	
	////////////////////
	//연혁 탭메뉴 제어//
	////////////////////
	
	var his_tab = $("section .cont > div .history .his_tab ul");
	var his_text = $("section .cont > div .history .his_data");
	var his_prev = $("section .cont > div .history .his_tab > a:first-child");
	var his_next = $("section .cont > div .history .his_tab > a:last-child");
	var tab_num = 2015;
	
	his_prev.click(function(){
		if(tab_num < 2015 && tab_num >= 2003){
			tab_num++;
			his_show(tab_num);
			tab_move(tab_num);
		};
	});
	
	his_next.click(function(){
		if(tab_num <= 2015 && tab_num > 2003){
			tab_num--;
			his_show(tab_num);
			tab_move(tab_num);
		};
	});
	
	his_text.hide(); //데이터 전체 감추기
	his_tab.children('li:first-child').children('a').addClass("on"); //첫번째 텝메뉴에 on 클래스 부여
	$("section .cont > div .history select").val('2015').attr("selected", "selected"); //SELECT값 기본 2015로 설정
	$("section .cont > div .history .y2015").show(); //2015년 데이터 보이기
	
	his_tab.children('li').children('a').bind('click focusin',function(){
		var his_val = $(this).html();
		his_show(his_val);
		tab_move(his_val);
	});
	
	$("section .cont > div .history select").change(function(){ //SELECT값이 변할 때 마다
		var his_sel = "";
		$("section .cont > div .history select option:selected").each(function(){
			his_sel = $(this).text();
		});
		his_show(his_sel);
		tab_move(his_sel);
	});
	
	function his_show(year){
		his_text.hide();
		$("section .cont > div .history .y"+year).show(); //선택한 년도의 데이터 보이기
		$("section .cont > div .history .his_tab ul li a").removeClass("on"); //탭메뉴 전체 클래스 삭제
		$("section .cont > div .history .his_tab ul li a.t"+year).addClass("on"); //선택한 년도의 탭메뉴에 클래스 부여
		$("section .cont > div .history select").val(year).attr("selected", "selected"); //선택한 년도로 SELECT값 변경
	};
	
	function tab_move(year){
		if(year >= 2012){
			his_tab.css("margin-left", 35);
		} else if(year < 2012 && year > 2006){
			var his_move = 35 - 134 * (2012 - year);
			his_tab.css("margin-left", his_move);
		} else if(year <= 2006){
			his_tab.css("margin-left", -769);
		};
		tab_num = year;
	};
	
	////////////////////
	//HEADER 높이 제어//
	////////////////////
	
	expHeader();
	
	function expHeader(){
		var wr_height = $(".wrap").height();
		$("header.pc").css("height", wr_height);
	};
});