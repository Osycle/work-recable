"use strict";



(function() {
	$(function() {



		/*AOS*/
		if( "AOS" in window ){
			AOS.init({
				offset: 100,
				once: true,
				duration: 1100,
				delay: 150
			});
			setTimeout(function() { AOS.refresh(); }, 1);
		}


		/* SELECT2 */
		if ( $(".js-select").length )
			$(".js-select").select2({
				placeholder: "Выберите...",
				// ajax: {
				//   url: 'https://api.github.com/search/repositories',
				//   dataType: 'json'
				//   // Additional AJAX parameters go here; see the end of this chapter for the full code of this example
				// },
				allowClear: false
			});
		
		if ( $(".js-select").length )
		$(".js-select.search-hide").select2({
			minimumResultsForSearch: Infinity
		});


		/*Owl carousel*/
		var owlBtn = [
			'<span class="owl-btn previous">'+
				'<svg viewBox="0 0 100 100"><path d="M 30,50 L 55,75 L 60,70 L 40,50  L 60,30 L 55,25 Z" class="arrow"></path></svg>'+
			'</span>', 
			'<span class="owl-btn next">'+
				'<svg viewBox="0 0 100 100"><path d="M 30,50 L 55,75 L 60,70 L 40,50  L 60,30 L 55,25 Z" class="arrow"></path></svg>'+
			'</span>'
		]



		$(".certifications-items.owl-carousel").owlCarousel({
			nav: true,
			//items: 3,
			dots: false,
			dotsEach: true,
			autoplay: true,
			touchDrag: checkSm(),
			responsive:{
				0:{items:1},
				991:{items:4}
			},
			navText : owlBtn,
			margin: 30
		});


		/* short-news owl carousel*/
		window.newsOwl = $(".short-news-items.owl-carousel").owlCarousel({
			nav: true,
			//items: 3,
			dots: false,
			dotsEach: true,
			autoplay: false,
			touchDrag: false,
			loop: false,
			center: true,
			responsive:{
				0:{items:1},
				991:{items:3},
				1199:{items:4},
				1420:{items:4}
			},
			navText : owlBtn,
			margin: 30
		});

		var deconOwlItem = undefined;
		var owlItemWidth = undefined;
		newsOwl.on('changed.owl.carousel', function(event) {
			if( checkSm() )
				return;
    	setTimeout(function(){
	    	var itemCenter = newsOwl.find(".center");
	    	if( deconOwlItem ){
	    		deconOwlItem.removeClass("center");
	    		deconOwlItem.css({
	    			width: owlItemWidth
	    		})
	    	}
	    	else{
	    		//newsOwl.find(".owl-stage").css({"width": "+=600px"})
	    		owlItemWidth = itemCenter.css("width");
	    	}


	    	itemCenter.css({
	    		width: "+=350px"
	    	})
	    	deconOwlItem = itemCenter;
	   
    	}, 1)

		})
		newsOwl.trigger('changed');





		/*FANCYBOX*/
		if ($("[data-fancybox]").length != 0)
			$("[data-fancybox]").fancybox({
				afterShow: function(instance, current) {},
				animationEffect : "zoom",
				animationDuration : 800,
				thumbs : {
					autoStart   : true
				},
				touch : false,
				transitionDuration : 366,
				transitionEffect: "zoom-in-out"
			});
		// SMOTHSCROLL-LINK
		if( "smoothScroll" in window )
			smoothScroll.init({
				easing: 'easeInOutCubic',
				offset: 85
			});
		/*ELEVATEZOOM*/
		if ( !checkSm() && $("[data-zoom-image]:not([group])").length )
			var x = $("[data-zoom-image]:not([group])").elevateZoom({
				scrollZoom: true,
				zoomWindowFadeIn: 500,
				zoomWindowFadeOut: 500,
				lensFadeIn: 300,
				lensFadeOut: 300,
				//cursor: 'pointer', 
				tint: true,
				tintColour: '#000',
				tintOpacity: 0.5,
				//zoomType        : "lens",
				//lensShape : "round",
				//lensSize    : 200,
				imageCrossfade: true,
				easing: true
			});



		//MIN-MENU
		$("#min-menu").mmenu({
			extensions: [
				"wrapper-bg", // wrapper-bg black
				//"theme-dark",
				"theme-white",
				//"fullscreen",
				"listview-50",
				"fx-panels-slide-up",
				"fx-listitems-drop",
				"border-offset",
				"position-front",
				"position-right"
			],
			navbar: {
				title: "Меню"
			},
			navbars: [{
					height: 0,
					content: [
						// '<div class="close-btn close-content bar">' +
						// '<a  href="#page" ><span class="icon-bar"></span><span class="icon-bar"></span></a>' +
						// '</div>'
					]
				},
				{
					content: ["prev", "title"]
				}
			]
		}, {});







		/*FLIKITY*/
		var arrowStyle = "M 30,50 L 55,75 L 60,70 L 40,50  L 60,30 L 55,25 Z";

		/*bnr-carousel*/
		if( $(".bnr-carousel .carousel-items figure").length ){
			window.bnrCarousel = $(".bnr-carousel").children(".carousel-items").flickity({
				imagesLoaded: true,
				autoPlay: 6000,
				pauseAutoPlayOnHover: true,
				arrowShape: arrowStyle,
				initialIndex: 0,
				friction: 0.5,
				//selectedAttraction: 1,
				prevNextButtons: true,
				draggable: false,
				wrapAround: true,
				pageDots: false,
				contain: false,
				percentPosition: true,
				cellSelector: 'figure',
				cellAlign: "center"
			});
			bnrCarousel.data("flickity");

			//$(".bnr-carousel .carousel-items").append("<div class='container-arrows'></div>").find(".container-arrows").append($(".bnr-carousel .carousel-items .flickity-prev-next-button"))
			//$(".bnr-carousel .container-arrows").append('<button class="flickity-prev-next-button previous" type="button" aria-label="previous"><svg viewBox="0 0 100 100"><path d="M 30,50 L 55,75 L 60,70 L 40,50  L 60,30 L 55,25 Z" class="arrow"></path></svg></button><button class="flickity-prev-next-button next" type="button" aria-label="next"><svg viewBox="0 0 100 100"><path d="M 30,50 L 55,75 L 60,70 L 40,50  L 60,30 L 55,25 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg></button>');




		}

		if ($(".carousel-article").length >= 0) {
			window.carouselArticle = function() {
				var carouselMain = $(".carousel-article .carousel-main"),
					carouselNav = $(".carousel-article .carousel-nav");

				for (var i = 0; i < carouselMain.length; i++) {
					var crs = $(carouselMain)
						.eq(i)
						.flickity({
							imagesLoaded: true,
							prevNextButtons: checkSm(),
							cellAlign: "center",
							bgLazyLoad: 1,
							friction: 1,
							selectedAttraction: 1,
							initialIndex: 0,
							draggable: false,
							//contain: true,
							pageDots: false
						});
					var flkty = crs.data("flickity");

					$(carouselNav).eq(i).flickity({
						imagesLoaded: true,
						initialIndex: 0,
						asNavFor: $(carouselMain)[i],
						prevNextButtons: true,
						draggable: true,
						percentPosition: true,
						//wrapAround: true,
						cellAlign: "center",
						//adaptiveHeight: true,
						contain: true,
						pageDots: false
					});
          $("[data-fancybox]").fancybox({
            afterShow: function(instance, current) {
              this.$content.find(".carousel-main").flickity("resize");
              this.$content.find(".carousel-nav").flickity("resize");
            }
          });
				}
			}
		};
		carouselArticle();
		

    // Прибавление-убавление значении
    (function(){
      var form = $("[data-counter]") || null;;
      if( !form )
        return;
      var cntfactor = form.attr("data-counter")*1;

      $(document).on("click", "[data-counter-btn]", function(){
        var cntVal;
        var cntInput = $(this).closest( form ).find("[data-counter-input]");
        
        cntVal = (cntInput.val()*1);

        if( $(this).hasClass("plus") )
          cntVal = cntVal + cntfactor;
        if( $(this).hasClass("minus") & cntVal > 0 )
          cntVal = cntVal - cntfactor;
        if( isNaN( cntVal ) || cntVal < 0) cntVal = 0;
        cntInput.val( cntVal ).attr("value", cntVal)
      })
      $(".cnt-input").on( "keypress", function(e){
        //console.log(this, e);
      } )

    })();

    // Проверка на заполненность
    $(".form-control").on("keyup", function(){
    	var that = $(this);
    	if( that.val().length )
    		that.addClass("filled")
    	else
    		that.removeClass("filled");
    })



		function onLoaded() {
			/*MASONRY*/
			if ($(".grid-img").length != 0) {
				var $grid = $(".grid-img").masonry({
					itemSelector: ".grid-img-item",
					columnWidth: ".grid-img-sizer",
					percentPosition: true
				});
			}
			$(window).trigger("resize");
		}

		//Лимит текста
		$("[data-text-limit]").map(function( i, el ){
			el = $(el);
			var text = el.text();
			var textLimit = el.attr("data-text-limit");

			if( text.length > textLimit*1 ){
				text = text.substring(0, textLimit )
				el.text( text+ " ..." );
			}
		})


		//var scene = $(".product-img");
		$(".parallax-scene").map(function(i, el){
			var parallaxInstance = new Parallax(el);
		})

		//SCROLL
		var minMenu = $(".header-scroll") || null;
		var headerRange = false;
		var staffProgressStatus = false;
		$(window).on("scroll", function(e) {

			//Адаптация хедера при скролинге
			if ($(window).scrollTop() > 100 && headerRange == false) {

				headerRange = true;
				if (minMenu) minMenu.addClass("scrolled");

			} else if ($(window).scrollTop() < 100 && headerRange == true) {
				headerRange = !true;
				if (minMenu) minMenu.removeClass("scrolled");
			} //.originalEvent.wheelDelta


		});
		$(window).trigger("scroll");





		$(document).on('click', '.click-bar', function() {
			if( $(".click-bar").hasClass("on") )
				runmenu(false);
			else	
				runmenu(true);

			$(".click-bar").toggleClass('off on');
			console.log(true);
		});


		function runmenu(what) {
			if (what === true) {
				tl.play().timeScale(1);
			} else {
				tl.reverse().timeScale(2);
			}
		}

		var tl = new TimelineMax();
		tl.pause();
		tl.to('.menudrop', .3, {
				top:0,
				right: 0,
				width:"100%",
				borderRadius: "0 0 0 0",
				ease: Power4.easeOut
		})
		tl.to('menu ul li:nth-child(1)', .5, {
			  opacity:1,
					y:0,
					ease: Power4.easeOut
			},'-=0.1')
		tl.to('menu ul li:nth-child(2)', .5, {
			  opacity:1,
					y:0,
					ease: Power4.easeOut
			},'-=0.4')
		tl.to('menu ul li:nth-child(3)', .3, {
			  opacity:1,
					y:0,
					ease: Power4.easeOut
			},'-=0.4')
		tl.to('menu ul li:nth-child(4)', .3, {
			  opacity:1,
					y:0,
					ease: Power4.easeOut
			},'-=0.3')
		tl.to('menu ul li:nth-child(5)', .2, {
			  opacity:1,
					y:0,
					ease: Power4.easeOut
			},'-=0.3')


		//Прилоудер
		window.preLoader = {
		  preBox: "#prebox",
		  enter: true,
		  status: $("#prebox").hasClass("in"),

		  preToggle: function(bool, func) {

		    var endtime = 600;
		    //if (!this.enter) return;
		    if (typeof func === "function")
		      setTimeout(function() {
		        func();
		      }, endtime);
		    var preBox = $(this.preBox);
		    if (bool || this.status) {
		    	setTimeout(function(){
			      preBox.removeClass("in");
		    	}, endtime)
		     } else {
			     	preBox
			      	.show()
			      	.addClass("in")
			      	.find(".box-content");
				      setTimeout(function() {
					      $(preLoader.preBox).fadeOut();
				      }, 1000);
		     }
		    return (this.status = !this.status);

		  },

		  preImg: function(img) {
		    var images = img || document.images,
		      imagesTotalCount = images.length,
		      imagesLoadedCount = 0,
		      preloadPercent = $(".percent").text("0 %");
		      
		    if (imagesTotalCount == 0) {
		      preOnload();
		      $(preloadPercent).text("100 %");
		    }

		    for (var i = 0; i < imagesTotalCount; i++) {
		      var image_clone = new Image();
		      image_clone.onload = image_loaded;
		      image_clone.onerror = image_loaded;
		      image_clone.src = images[i].src;
		    }

		    function preOnload() {
		      onLoaded();
		      //preLoader.preToggle();
		    }

		    function image_loaded() {
		      imagesLoadedCount++;

		      var per = (100 / imagesTotalCount * imagesLoadedCount) << 0;

		      setTimeout(function() {
		        console.log(per);
		        $(preloadPercent).text(per + "%");
		        $(".text-shadow").css("left", per + "%")
		        $(".svg-animate .stroke-logo").css("stroke-dasharray", 9110 + (per * 91.1)+"" );
		        if( per == 100 )
		        	//$(".svg-animate .stroke-logo").css("stroke-width", "55px" );
		        	setTimeout(function(){
		        		$("#prebox").addClass("loaded");
		        	}, 1600);
		      }, 300);

		      if (imagesLoadedCount >= imagesTotalCount) preOnload();
		    }
		  }
		};
		preLoader.preImg();







		//if(top!=0){
		//  body.animate({scrollTop:0}, '500');
		//}

	if( $("html").find(".index").length > 0 ){
		$("body").addClass("ov-hidden");
		setTimeout(function(){
			$("html").animate({scrollTop:0 }, '0');
		}, 500)

		window.currentIndexBlock = 1;
		window.scrollBlockLength = $("[data-scroll-block]").length;
		window.stopScroll = false;
		$("[data-scroll-block]").addClass("atom");
		window.switchScroll = function (prevnext){
			stopScroll = true;
			if( !prevnext )
				++currentIndexBlock;
			else
				--currentIndexBlock;
			
			if( scrollBlockLength <= currentIndexBlock || currentIndexBlock <= 0){
				currentIndexBlock = 1;
			}
			if (currentIndexBlock == 1){
				$("#header").removeClass("sliding-hide");
			}else{
				$("#header").addClass("sliding-hide");
			}
			console.log("currentIndexBlock", currentIndexBlock);

				
			var index = currentIndexBlock;
			var currentBlock = $("[data-scroll-block]").eq(currentIndexBlock-1);
			var currentBlockTop = currentBlock.offset().top // Get position of the body
			var textPreload = currentBlock.attr("data-text-preload")

			$("[data-scroll-block]").removeClass("is-selected");
			currentBlock.addClass("is-selected");

			$("#prebox").addClass("loadedstep");


			$("#prebox .text-preload").text(textPreload);

			setTimeout(function(){
				$("html").animate({scrollTop:currentBlockTop }, '0');
			}, 800)
			setTimeout(function(){
				$("#prebox").removeClass("loadedstep");
			}, 1300)
			setTimeout(function(){
				stopScroll = false;
			}, 2000)
		}

		var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
    $("html").bind(mousewheelevt, function(e){
		    var evt = window.event || e //equalize event object     

		    evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible               
		    var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF

		    if( (delta > 0) ) {
	       	console.log("up");
	       	if( !stopScroll && currentIndexBlock > 1)
	       		switchScroll(true);
		    }
		    else if( (delta < 0) ){
	       	console.log("down");
	       	if( !stopScroll )
	       		switchScroll();
		    }   

    });
	}











		if( !checkSm() ){
			if( !$(".rev-slider").length )
				return;
	  	window.revslider = $(".rev-slider").revolution({
				delay:9999999999999,
				//startwidth:"100vw",
				startheight: $( window ).height(),
				autoHeight:"off",
				fullScreenAlignForce:"off",

				onHoverStop:"off",

				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:3,

				hideThumbsOnMobile:"on",
				hideBulletsOnMobile:"on",
				hideArrowsOnMobile:"on",
				hideThumbsUnderResoluition:0,

				hideThumbs: -1,
				hideTimerBar:"on",

				keyboardNavigation:"off",

				navigationType:"none",
				navigationArrows:"solo",	//solo
				navigationStyle:"round",

				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset: 0,
				navigationVOffset: 30,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:30,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:30,
				soloArrowRightVOffset:0,


				touchenabled: "off",
				swipe_velocity:"0.7",
				swipe_max_touches:"1",
				swipe_min_touches:"1",
				drag_block_vertical: "false",

				stopAtSlide:-1,
				stopAfterLoops:-1,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				hideSliderAtLimit:0,

				fullWidth:"off",
				fullScreen:"off",
				fullScreenOffsetContainer: "#header",

				dottedOverlay:"none",
				forceFullWidth:"off",

	      shadow:0

	    });
			revslider.on("revolution.slide.onchange",function (e,data) {
				if( data.slideIndex != 1 )
					$("#header").addClass("sliding-hide");
				else
					$("#header").removeClass("sliding-hide");
			});

			function scrollPage(){
		  	if( scrollDown )
		  		revslider.revnext()
		  	else
		  		revslider.revprev();
		  }

			window.scrollDown = false;
			var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x

	    $(".rev-slider").bind(mousewheelevt, function(e){
		       
			    var evt = window.event || e //equalize event object     
			    evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible               
			    var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF

			    if( (delta > 0) ) {
		       	console.log("up");
			      scrollDown = false;
			      scrollPage();
			    }
			    else if( (delta < 0) ){
		       	console.log("down");
		       	scrollDown = true;
		       	scrollPage();
			    }   

	    });
	  } // end if















	});
})(jQuery);

var isWebkit = /Webkit/i.test(navigator.userAgent),
		isChrome = /Chrome/i.test(navigator.userAgent),
		isMac = /Mac/i.test(navigator.userAgent),
		isMobile = !!("ontouchstart" in window),
		isAndroid = /Android/i.test(navigator.userAgent),
		isEdge = /Edge/i.test(navigator.userAgent);


// COMMON FUNCTION

setTimeout(function() {
	//jQuery FUNCITON
	$.fn.onResized = function() {
		onResized(function() {
			this;
		});
		return this;
	};
}, 10);

/*Отмена копирования*/
// document.addEventListener('copy', function(e){
//   e.preventDefault(); // default behaviour is to copy any selected text
//   e.clipboardData.setData('text/plain', '');
// });



function checkSm() {
	return $(document).width() <= 991;
}

function checkMd() {
	return $(document).width() < 1199 && !checkSm();
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntFloat(min, max) {
	return Math.random() * (max - min) + min;
}

function onResized(f) {
	if (typeof f === "function") f();
	$(window).on("resize", function(e) {
		if (typeof f === "function") f();
	});
	return this;
}

function scrolledDiv(el) {
	try {
		var docViewTop = $(window).scrollTop(),
			docViewBottom = docViewTop + $(window).height(),
			elTop = $(el).offset().top,
			elBottom = elTop + $(el).height() / 1.8;
	} catch (err) {
		console.error();
	}

	return elBottom <= docViewBottom && elTop >= docViewTop;
}

function intSpace( n, char ){
	var char = char || " ";
	if( isNaN(n*1) )
		return false;
	n += "";
	n = new Array(4 - n.length % 3).join("U") + n;
	var newInt = (n.replace(/([0-9U]{3})/g, "$1"+char).replace(/U/g, "")).trim();
	if( newInt.substring(newInt.length-1) == char)
		newInt = newInt.substring(0, newInt.length-1);
	if( newInt.substring(0, 1) == char)
		newInt = newInt.substring(1);

	return newInt;
}
function roundFix( num, cnt, space ){
	num += "";
	if( !(/\./.test(num)) ){
		if( space )
			return intSpace(num);
		return num;
	}
	var int = num.split(".")[0];
	var float = num.split(".")[1];
	if(space){
		int = intSpace(int);
		return (int+"."+float.substring( 0,  cnt));
	}
	return (int+"."+float.substring( 0,  cnt)) * 1;
}

