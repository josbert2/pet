"use strict";function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function toggleClassMenu2(){console.log("blub"),myMenu2.classList.add("menu--animatable2"),myMenu2.classList.contains("menu--visible2")?myMenu2.classList.remove("menu--visible2"):myMenu2.classList.add("menu--visible2")}function OnTransitionEnd2(){myMenu2.classList.remove("menu--animatable2")}function scroll(){var e=$(window).scrollTop(),t=$(window).height(),n=e+t;$(".reveal").each(function(){var t=$(this);if(!t.hasClass("reveal_visible")){var i=t.offset().top;i<=n&&(i+t.height()<e?t.removeClass("reveal_pending").addClass("reveal_visible"):(t.addClass("reveal_pending"),rafId||requestAnimationFrame(reveal)))}})}function reveal(){rafId=null;var e=performance.now();if(e-lTime>delay){lTime=e;var t=$(".reveal_pending");$(t.get(0)).removeClass("reveal_pending").addClass("reveal_visible")}$(".reveal_pending").length>=1&&(rafId=requestAnimationFrame(reveal))}function ready(){for(var e=document.getElementsByTagName("dt"),t=0;t<e.length;t++)e[t].addEventListener("click",function(){accordionClick(event)})}function handleCarouselsHeight(){if(window.matchMedia("(min-width: 1024px)").matches){var e=$(".gallery2").height();$left.css("height",e)}else $left.css("height","auto")}var _$gl$slick;$(".item-open").click(function(e){e.preventDefault(),$(this).next().slideToggle()}),$(".close-cart-float").length>0&&$(".cart-btn-fixed ").hide(),$(".header-drop").click(function(e){e.stopPropagation(),$(this).next().toggleClass("show"),$(this).find(".dropdown-content").toggleClass("show")}),$("body").not("#myDropdown").off("click").on("click",function(){$("#myDropdown").removeClass("show")}),$(".search-bar").click(function(){$(".content-search-bar").addClass("active")}),$(".close-search-bar").click(function(){$(".content-search-bar").removeClass("active")}),$(".cart-button").click(function(){$(this).parent().find(".number").removeClass("hidden"),$(this).hide();var e=$("#total-items").html();e++,$("#total-items").html(e)}),$(".reusecore__button").click(function(){$(this).parent().find(".number").removeClass("hidden"),$(this).hide();var e=$("#total-items").html();e++,$("#total-items").html(e)}),$(document).ready(function(){$(".minus").click(function(){var e=$(this).parent().find("input"),t=parseInt(e.val())-1;return t=t<1?0:t,e.val(t),e.change(),0==t&&($(this).parent().addClass("hidden"),$(this).parent().prev().show()),!1}),$(".plus").click(function(){var e=$(this).parent().find("input");return e.val(parseInt(e.val())+1),e.change(),!1})}),$(".label-input").click(function(){$(".label-input").removeClass("active"),$(this).addClass("active")}),$(".have-cupon").click(function(){$(this).removeClass("hidden"),$("#showing-cupon").hasClass("hidden")?$("#showing-cupon").removeClass("hidden"):$("#showing-cupon").addClass("hidden")});var log=document.querySelector(".log");if(window.addEventListener("scroll",function(){if($(".main-grid").length>0){var e=document.querySelector(".main-grid").getBoundingClientRect(),t=document.querySelector(".me_sticky").getBoundingClientRect();e.top<=t.top+t.height&&e.top+e.height>t.top?(document.querySelector(".aside-left").classList.add("tofixed"),document.querySelector(".aside-left").style.top=document.querySelector(".me_sticky").offsetHeight+"px"):(document.querySelector(".aside-left").classList.remove("tofixed"),document.querySelector(".aside-left").style.top="0px")}}),$(document).ready(function(){function e(e){n.classList.add("menu--animatable"),n.classList.contains("menu--visible")?n.classList.remove("menu--visible"):n.classList.add("menu--visible")}function t(){n.classList.remove("menu--animatable")}if(null==document.querySelector(".menu"));else{var n=document.querySelector(".menu"),i=document.querySelector(".menu-icon");document.querySelector(".card-close"),document.querySelector(".close-mobile-modal");n.addEventListener("transitionend",t,!1),i.addEventListener("click",e,!1),$(".card-close").click(function(){e()}),$(".close-mobile-modal").click(function(){e()}),$(".btn-cart-floating").click(function(){e()})}}),null==document.querySelector(".menu2"));else{var myMenu2=document.querySelector(".menu2"),oppMenu2=document.querySelector(".dLFRil");myMenu2.addEventListener("transitionend",OnTransitionEnd2,!1),oppMenu2.addEventListener("click",toggleClassMenu2,!1),myMenu2.addEventListener("click",toggleClassMenu2,!1),$(".card-close-header").click(function(){myMenu2.classList.contains("menu--visible2")?myMenu2.classList.add("menu--visible2"):myMenu2.classList.remove("menu--visible2")})}$(".item-link").click(function(e){e.preventDefault()});var rafId=null,delay=200,lTime=0;$(scroll),$(window).scroll(scroll);var modalTriggers=document.querySelectorAll(".product-image"),modalCloseTrigger=document.querySelector(".popup-modal__close"),bodyBlackout=document.querySelector(".body-blackout");modalTriggers.forEach(function(e){e.addEventListener("click",function(){var t=e.dataset.popupTrigger,n=document.querySelector('[data-popup-modal="'+t+'"]');n.classList.add("is--visible"),bodyBlackout.classList.add("is-blacked-out"),n.querySelector(".popup-modal__close").addEventListener("click",function(){n.classList.remove("is--visible"),bodyBlackout.classList.remove("is-blacked-out")})})});var $navbar=$(".me_sticky"),y_pos=$navbar.offset().top,height=$navbar.height();$(document).scroll(function(){var e=$(this).scrollTop();e>y_pos+height?$navbar.addClass("navbar-fixed").animate({top:0}):e<=y_pos&&$navbar.removeClass("navbar-fixed").clearQueue().animate({},0)}),$(".me_sticky").css("top","0"),$(".trigger-mobi").click(function(){$(this).next().toggle()}),"loading"!==document.readyState?(console.log("ready!"),ready()):document.addEventListener("DOMContentLoaded",ready);var accordionClick=function(e){console.log(e);var t=event.target;console.log(t);var n=t.classList;for(console.log("target clicked: "+t),console.log(n[0]);"description-title"!=n[0];)console.log("parent element: "+t.parentElement),t=t.parentElement,n=t.classList,console.log("target clicked while in loop:"+t),console.log("class clicked while in loop: "+n);var i=t.nextElementSibling;console.log(i);var o=t.children[0];if(i.style.maxHeight)i.style.maxHeight=null,o.innerHTML="&#10133;";else{for(var l=document.getElementsByTagName("dd"),s=0;s<l.length;s++)console.log("current description: "+l[s]),l[s].style.maxHeight&&(console.log("there is a description already open"),l[s].style.maxHeight=null,l[s].previousElementSibling.children[0].innerHTML="&#10133;");i.style.maxHeight=i.scrollHeight+45+"px",o.innerHTML="&#10134;"}},$left=$(".left"),$gl=$(".gallery"),$gl2=$(".gallery2"),$photosCounterFirstSpan=$(".photos-counter span:nth-child(1)");$gl2.on("init",function(e,t){$photosCounterFirstSpan.text(t.currentSlide+1+"/"),$(".photos-counter span:nth-child(2)").text(t.slideCount)}),$gl.slick((_$gl$slick={rows:0,slidesToShow:3,arrows:!1,infinite:!1,draggable:!0},_defineProperty(_$gl$slick,"slidesToShow",3),_defineProperty(_$gl$slick,"mobileFirst",!0),_defineProperty(_$gl$slick,"responsive",[{breakpoint:768,settings:{slidesToShow:3}}]),_$gl$slick)),$gl2.slick({rows:0,useTransform:!1,prevArrow:".arrow-left",nextArrow:".arrow-right",fade:!0,asNavFor:$gl}),$(window).on("load",function(){handleCarouselsHeight(),setTimeout(function(){$(".loading").fadeOut(),$("body").addClass("over-visible")},300)}),$(".slider-pay").slick({infinite:!1,dots:!1,slidesToShow:3,nextArrow:"<div class=\"icon-slick-nav next-arrow\"><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 512 512'><title>ionicons-v5-a</title><polyline points='184 112 328 256 184 400' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px'/></svg></div>",prevArrow:"<div class=\"icon-slick-nav prev-arrow\"><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 512 512'><title>ionicons-v5-a</title><polyline points='328 112 184 256 328 400' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px'/></svg></div>",slidesToScroll:1,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,infinite:!1,dots:!1}}]}),$(".gallery .item").on("click",function(){var e=$(this).attr("data-slick-index");$gl2.slick("slickGoTo",e)}),$gl2.on("afterChange",function(e,t,n){$photosCounterFirstSpan.text(t.currentSlide+1+"/")}),$(window).scroll(function(){var e=$(".me_sticky"),t=$(".aside-left"),n=e.offset().top;if($(".aside-left").length>0)var i=t.offset().top;var o=n+e.height(),l=i+t.height(),s=e.outerHeight();o>=i&&n<l?(t.addClass("tofixed"),t.css("top",s+"px")):(t.removeClass("tofixed"),t.css("top","0px"))});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInRvZ2dsZUNsYXNzTWVudTIiLCJjb25zb2xlIiwibG9nIiwibXlNZW51MiIsImNsYXNzTGlzdCIsImFkZCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiT25UcmFuc2l0aW9uRW5kMiIsInNjcm9sbCIsInNjcm9sbFRvcCIsIiQiLCJ3aW5kb3ciLCJoZWlnaHQiLCJ2aXNpYmxlVG9wIiwiZWFjaCIsIiR0IiwidGhpcyIsImhhc0NsYXNzIiwidG9wIiwib2Zmc2V0IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInJhZklkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmV2ZWFsIiwibm93IiwicGVyZm9ybWFuY2UiLCJsVGltZSIsImRlbGF5IiwiJHRzIiwiZ2V0IiwibGVuZ3RoIiwicmVhZHkiLCJhY2NvcmRpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhY2NvcmRpb25DbGljayIsImV2ZW50IiwiaGFuZGxlQ2Fyb3VzZWxzSGVpZ2h0IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJnbDJIIiwiJGxlZnQiLCJjc3MiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5leHQiLCJzbGlkZVRvZ2dsZSIsImhpZGUiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2dnbGVDbGFzcyIsImZpbmQiLCJub3QiLCJvZmYiLCJvbiIsInBhcmVudCIsInQiLCJodG1sIiwiJGlucHV0IiwiY291bnQiLCJwYXJzZUludCIsInZhbCIsImNoYW5nZSIsInByZXYiLCJzaG93IiwicXVlcnlTZWxlY3RvciIsImIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJhIiwic3R5bGUiLCJvZmZzZXRIZWlnaHQiLCJ0b2dnbGVDbGFzc01lbnUiLCJteU1lbnUiLCJPblRyYW5zaXRpb25FbmQiLCJvcHBNZW51Iiwib3BwTWVudTIiLCJtb2RhbFRyaWdnZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1vZGFsQ2xvc2VUcmlnZ2VyIiwiYm9keUJsYWNrb3V0IiwiZm9yRWFjaCIsInRyaWdnZXIiLCJwb3B1cFRyaWdnZXIiLCJkYXRhc2V0IiwicG9wdXBNb2RhbCIsIiRuYXZiYXIiLCJ5X3BvcyIsImFuaW1hdGUiLCJjbGVhclF1ZXVlIiwidG9nZ2xlIiwicmVhZHlTdGF0ZSIsImV2ZW50SGFwcGVuZWQiLCJ0YXJnZXRDbGlja2VkIiwidGFyZ2V0IiwiY2xhc3NDbGlja2VkIiwicGFyZW50RWxlbWVudCIsImRlc2NyaXB0aW9uIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZXhwYW5kZXIiLCJjaGlsZHJlbiIsIm1heEhlaWdodCIsImlubmVySFRNTCIsImFsbERlc2NyaXB0aW9ucyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJzY3JvbGxIZWlnaHQiLCIkZ2wiLCIkZ2wyIiwiJHBob3Rvc0NvdW50ZXJGaXJzdFNwYW4iLCJzbGljayIsInRleHQiLCJjdXJyZW50U2xpZGUiLCJzbGlkZUNvdW50IiwiXyRnbCRzbGljayIsInJvd3MiLCJzbGlkZXNUb1Nob3ciLCJhcnJvd3MiLCJpbmZpbml0ZSIsImRyYWdnYWJsZSIsIl9kZWZpbmVQcm9wZXJ0eSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInVzZVRyYW5zZm9ybSIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImZhZGUiLCJhc05hdkZvciIsInNldFRpbWVvdXQiLCJmYWRlT3V0IiwiZG90cyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImluZGV4IiwiYXR0ciIsImRpdjEiLCJkaXYyIiwiZGl2MV90b3AiLCJkaXYyX3RvcCIsImRpdjFfYm90dG9tIiwiZGl2Ml9ib3R0b20iLCJoIiwib3V0ZXJIZWlnaHQiXSwibWFwcGluZ3MiOiJtSkFzSkEsUUFBQUEsb0JBQ0FDLFFBQUFDLElBQUEsUUFDQUMsUUFBQUMsVUFBQUMsSUFBQSxxQkFDQUYsUUFBQUMsVUFBQUUsU0FBQSxrQkFHQUgsUUFBQUMsVUFBQUcsT0FBQSxrQkFGQUosUUFB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QUFBLGdUQUNBRCxVQUFBQSxnVEFDQU8sZUFBQSxFQUNBQyxhQUVBWCxXQUFBLElBQ0FDLFVBQ0FOLGFBQUEsRUFDQWUsZUFBQSxFQUNBYixVQUFBLEVBQ0FZLE1BQUEsT0FNQXpILEVBQUEsa0JBQUErQyxHQUFBLFFBQUEsV0FDQSxHQUFBNkUsR0FBQTVILEVBQUFNLE1BQUF1SCxLQUFBLG1CQUNBMUIsTUFBQUUsTUFBQSxZQUFBdUIsS0FHQXpCLEtBQUFwRCxHQUFBLGNBQUEsU0FBQWxCLEVBQUF3RSxFQUFBRSxHQUNBSCx3QkFBQUUsS0FBQUQsRUFBQUUsYUFBQSxFQUFBLE9BUUF2RyxFQUFBQyxRQUFBSCxPQUFBLFdBQ0EsR0FBQWdJLEdBQUE5SCxFQUFBLGNBQ0ErSCxFQUFBL0gsRUFBQSxlQUNBZ0ksRUFBQUYsRUFBQXJILFNBQUFELEdBQ0EsSUFBQVIsRUFBQSxlQUFBcUIsT0FBQSxFQUNBLEdBQUE0RyxHQUFBRixFQUFBdEgsU0FBQUQsR0FHQSxJQUFBMEgsR0FBQUYsRUFBQUYsRUFBQTVILFNBQ0FpSSxFQUFBRixFQUFBRixFQUFBN0gsU0FDQWtJLEVBQUFOLEVBQUFPLGFBQ0FILElBQUFELEdBQUFELEVBQUFHLEdBQ0FKLEVBQUFwSCxTQUFBLFdBQ0FvSCxFQUFBNUYsSUFBQSxNQUFBaUcsRUFBQSxRQUVBTCxFQUFBckgsWUFBQSxXQUNBcUgsRUFBQTVGLElBQUEsTUFBQSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJCgnLml0ZW0tb3BlbicpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAkKHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xyXG59KVxyXG5pZiAoJCgnLmNsb3NlLWNhcnQtZmxvYXQnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAkKCcuY2FydC1idG4tZml4ZWQgJykuaGlkZSgpXHJcbn1cclxuXHJcbiQoJy5oZWFkZXItZHJvcCcpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAkKHRoaXMpLm5leHQoKS50b2dnbGVDbGFzcygnc2hvdycpXHJcbiAgICAkKHRoaXMpLmZpbmQoJy5kcm9wZG93bi1jb250ZW50JykudG9nZ2xlQ2xhc3MoJ3Nob3cnKVxyXG59KTtcclxuXHJcblxyXG4kKCdib2R5Jykubm90KFwiI215RHJvcGRvd25cIikub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIiNteURyb3Bkb3duXCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKVxyXG59KTtcclxuXHJcbiQoJy5zZWFyY2gtYmFyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICQoJy5jb250ZW50LXNlYXJjaC1iYXInKS5hZGRDbGFzcygnYWN0aXZlJylcclxufSlcclxuJCgnLmNsb3NlLXNlYXJjaC1iYXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgJCgnLmNvbnRlbnQtc2VhcmNoLWJhcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG59KVxyXG5cclxuLy9Db3VudGVyXHJcbiQoJy5jYXJ0LWJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcubnVtYmVyJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJCh0aGlzKS5oaWRlKClcclxuXHJcbiAgICB2YXIgdCA9ICQoJyN0b3RhbC1pdGVtcycpLmh0bWwoKVxyXG4gICAgdCsrXHJcbiAgICAkKCcjdG90YWwtaXRlbXMnKS5odG1sKHQpXHJcbn0pXHJcblxyXG4kKCcucmV1c2Vjb3JlX19idXR0b24nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykucGFyZW50KCkuZmluZCgnLm51bWJlcicpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICQodGhpcykuaGlkZSgpXHJcblxyXG4gICAgdmFyIHQgPSAkKCcjdG90YWwtaXRlbXMnKS5odG1sKClcclxuICAgIHQrK1xyXG4gICAgJCgnI3RvdGFsLWl0ZW1zJykuaHRtbCh0KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcubWludXMnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCdpbnB1dCcpO1xyXG4gICAgICAgIHZhciBjb3VudCA9IHBhcnNlSW50KCRpbnB1dC52YWwoKSkgLSAxO1xyXG4gICAgICAgIGNvdW50ID0gY291bnQgPCAxID8gMCA6IGNvdW50O1xyXG4gICAgICAgICRpbnB1dC52YWwoY291bnQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICRpbnB1dC5jaGFuZ2UoKTtcclxuICAgICAgICBpZiAoY291bnQgPT0gMCl7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2hpZGRlbicpXHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucHJldigpLnNob3coKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICAgICQoJy5wbHVzJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcykucGFyZW50KCkuZmluZCgnaW5wdXQnKTtcclxuICAgICAgICAkaW5wdXQudmFsKHBhcnNlSW50KCRpbnB1dC52YWwoKSkgKyAxKTtcclxuICAgICAgICAkaW5wdXQuY2hhbmdlKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiQoXCIubGFiZWwtaW5wdXRcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLmxhYmVsLWlucHV0XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgLy8gJChcIi50YWJcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7IC8vIGluc3RlYWQgb2YgdGhpcyBkbyB0aGUgYmVsb3cgXHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG59KTtcclxuXHJcbiQoJy5oYXZlLWN1cG9uJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKVxyXG4gICAgaWYgKCQoJyNzaG93aW5nLWN1cG9uJykuaGFzQ2xhc3MoJ2hpZGRlbicpKSB7XHJcbiAgICAgICAgJCgnI3Nob3dpbmctY3Vwb24nKS5yZW1vdmVDbGFzcygnaGlkZGVuJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI3Nob3dpbmctY3Vwb24nKS5hZGRDbGFzcygnaGlkZGVuJylcclxuICAgIH1cclxuXHJcbn0pXHJcbnZhciBsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nJyk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG5pZiAoJCgnLm1haW4tZ3JpZCcpLmxlbmd0aCA+IDApe1xyXG4gICAgdmFyIGIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ncmlkJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lX3N0aWNreScpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIFxyXG4gIFxyXG4gIGlmIChiLnRvcCA8PSBhLnRvcCArIGEuaGVpZ2h0ICYmIGIudG9wICsgYi5oZWlnaHQgPiBhLnRvcCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWxlZnQnKS5jbGFzc0xpc3QuYWRkKCd0b2ZpeGVkJylcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1sZWZ0Jykuc3R5bGUudG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lX3N0aWNreScpLm9mZnNldEhlaWdodCArICdweCdcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWxlZnQnKS5jbGFzc0xpc3QucmVtb3ZlKCd0b2ZpeGVkJylcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1sZWZ0Jykuc3R5bGUudG9wID0gMCArICdweCdcclxuICB9XHJcbn1cclxuXHJcblxyXG59KTtcclxuLy9NZW51IGNhcnRcclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cdGZ1bmN0aW9uIHRvZ2dsZUNsYXNzTWVudShlKSB7XHJcbiAgICAgXHJcbiAgICAgICBcclxuICAgICAgICBteU1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnUtLWFuaW1hdGFibGVcIik7XHJcbiAgICAgICAgaWYgKCFteU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudS0tdmlzaWJsZVwiKSkge1xyXG4gICAgICAgICAgICBteU1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnUtLXZpc2libGVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbXlNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtLXZpc2libGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gT25UcmFuc2l0aW9uRW5kKCkge1xyXG4gICAgICAgIG15TWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS0tYW5pbWF0YWJsZVwiKTtcclxuICAgIH1cclxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKSA9PSBudWxsICkge1xyXG4gXHJcblxyXG5cdH1lbHNle1xyXG5cdCAgIFxyXG5cclxuXHQgICAgdmFyIG15TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcclxuXHQgICAgdmFyIG9wcE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtaWNvblwiKTtcclxuICAgICAgICB2YXIgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmQtY2xvc2VcIik7XHJcbiAgICAgICAgdmFyIGNsb3NlMiA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1tb2JpbGUtbW9kYWxcIik7IFxyXG5cdCAgICBteU1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgT25UcmFuc2l0aW9uRW5kLCBmYWxzZSk7XHJcblx0ICAgIG9wcE1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUNsYXNzTWVudSwgZmFsc2UpO1xyXG5cdCAgICAkKCcuY2FyZC1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRvZ2dsZUNsYXNzTWVudSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmNsb3NlLW1vYmlsZS1tb2RhbCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRvZ2dsZUNsYXNzTWVudSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmJ0bi1jYXJ0LWZsb2F0aW5nJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdG9nZ2xlQ2xhc3NNZW51KClcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcblxyXG5cdH1cclxufSlcclxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3NNZW51MigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdibHViJyk7XHJcbiAgICBteU1lbnUyLmNsYXNzTGlzdC5hZGQoXCJtZW51LS1hbmltYXRhYmxlMlwiKTtcclxuICAgIGlmICghbXlNZW51Mi5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51LS12aXNpYmxlMlwiKSkge1xyXG4gICAgICAgIG15TWVudTIuY2xhc3NMaXN0LmFkZChcIm1lbnUtLXZpc2libGUyXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBteU1lbnUyLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtLXZpc2libGUyJyk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gT25UcmFuc2l0aW9uRW5kMigpIHtcclxuICAgIG15TWVudTIuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtLWFuaW1hdGFibGUyXCIpO1xyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUyJykgPT0gbnVsbCkge1xyXG4gIFxyXG59ZWxzZXtcclxuXHQgIFxyXG5cclxuICAgXHJcbiAgICB2YXIgbXlNZW51MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudTJcIik7XHJcbiAgICB2YXIgb3BwTWVudTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRMRlJpbFwiKTtcclxuXHJcbiAgICBteU1lbnUyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIE9uVHJhbnNpdGlvbkVuZDIsIGZhbHNlKTtcclxuICAgIG9wcE1lbnUyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVDbGFzc01lbnUyLCBmYWxzZSk7XHJcbiAgICBteU1lbnUyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVDbGFzc01lbnUyLCBmYWxzZSlcclxuXHJcbiAgICAkKCcuY2FyZC1jbG9zZS1oZWFkZXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICghbXlNZW51Mi5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51LS12aXNpYmxlMlwiKSkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIG15TWVudTIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS0tdmlzaWJsZTInKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBteU1lbnUyLmNsYXNzTGlzdC5hZGQoXCJtZW51LS12aXNpYmxlMlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcbn1cclxuJCgnLml0ZW0tbGluaycpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vUmV2ZWFsIHNjcm9sbFxyXG52YXIgcmFmSWQgPSBudWxsO1xyXG52YXIgZGVsYXkgPSAyMDA7XHJcbnZhciBsVGltZSA9IDA7XHJcblxyXG5mdW5jdGlvbiBzY3JvbGwoKSB7XHJcbiAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgdmFyIGhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKVxyXG4gICAgdmFyIHZpc2libGVUb3AgPSBzY3JvbGxUb3AgKyBoZWlnaHQ7XHJcbiAgICAkKCcucmV2ZWFsJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgJHQgPSAkKHRoaXMpO1xyXG4gICAgICAgIGlmICgkdC5oYXNDbGFzcygncmV2ZWFsX3Zpc2libGUnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0b3AgPSAkdC5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgaWYgKHRvcCA8PSB2aXNpYmxlVG9wKSB7XHJcbiAgICAgICAgICAgIGlmICh0b3AgKyAkdC5oZWlnaHQoKSA8IHNjcm9sbFRvcCkge1xyXG4gICAgICAgICAgICAgICAgJHQucmVtb3ZlQ2xhc3MoJ3JldmVhbF9wZW5kaW5nJykuYWRkQ2xhc3MoJ3JldmVhbF92aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkdC5hZGRDbGFzcygncmV2ZWFsX3BlbmRpbmcnKTtcclxuICAgICAgICAgICAgICAgIGlmICghcmFmSWQpIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZXZlYWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldmVhbCgpIHtcclxuICAgIHJhZklkID0gbnVsbDtcclxuICAgIHZhciBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICBpZiAobm93IC0gbFRpbWUgPiBkZWxheSkge1xyXG4gICAgICAgIGxUaW1lID0gbm93O1xyXG4gICAgICAgIHZhciAkdHMgPSAkKCcucmV2ZWFsX3BlbmRpbmcnKTtcclxuICAgICAgICAkKCR0cy5nZXQoMCkpLnJlbW92ZUNsYXNzKCdyZXZlYWxfcGVuZGluZycpLmFkZENsYXNzKCdyZXZlYWxfdmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoJCgnLnJldmVhbF9wZW5kaW5nJykubGVuZ3RoID49IDEpIHJhZklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJldmVhbCk7XHJcbn1cclxuXHJcbiQoc2Nyb2xsKTtcclxuJCh3aW5kb3cpLnNjcm9sbChzY3JvbGwpO1xyXG5cclxuXHJcblxyXG5jb25zdCBtb2RhbFRyaWdnZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtaW1hZ2UnKVxyXG5jb25zdCBtb2RhbENsb3NlVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1tb2RhbF9fY2xvc2UnKVxyXG5jb25zdCBib2R5QmxhY2tvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keS1ibGFja291dCcpXHJcbm1vZGFsVHJpZ2dlcnMuZm9yRWFjaCh0cmlnZ2VyID0+IHtcclxuICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBwb3B1cFRyaWdnZXJcclxuICAgICAgICB9ID0gdHJpZ2dlci5kYXRhc2V0XHJcbiAgICAgICAgY29uc3QgcG9wdXBNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwLW1vZGFsPVwiJHtwb3B1cFRyaWdnZXJ9XCJdYClcclxuICAgICAgICBwb3B1cE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2lzLS12aXNpYmxlJylcclxuICAgICAgICBib2R5QmxhY2tvdXQuY2xhc3NMaXN0LmFkZCgnaXMtYmxhY2tlZC1vdXQnKVxyXG5cclxuICAgICAgICBwb3B1cE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1tb2RhbF9fY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgcG9wdXBNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy0tdmlzaWJsZScpXHJcbiAgICAgICAgICAgIGJvZHlCbGFja291dC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1ibGFja2VkLW91dCcpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxuXHJcbnZhciAkbmF2YmFyID0gJChcIi5tZV9zdGlja3lcIiksXHJcbiAgICB5X3BvcyA9ICRuYXZiYXIub2Zmc2V0KCkudG9wLFxyXG4gICAgaGVpZ2h0ID0gJG5hdmJhci5oZWlnaHQoKTtcclxuXHJcbiQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgIHZhciBzY3JvbGxUb3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGlmIChzY3JvbGxUb3AgPiB5X3BvcyArIGhlaWdodCkge1xyXG4gICAgICAgICRuYXZiYXIuYWRkQ2xhc3MoXCJuYXZiYXItZml4ZWRcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHRvcDogMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChzY3JvbGxUb3AgPD0geV9wb3MpIHtcclxuICAgICAgICAkbmF2YmFyLnJlbW92ZUNsYXNzKFwibmF2YmFyLWZpeGVkXCIpLmNsZWFyUXVldWUoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgLy90b3A6IFwiLTQ4cHhcIlxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG59KTtcclxuJChcIi5tZV9zdGlja3lcIikuY3NzKCd0b3AnLCcwJylcclxuXHJcbiQoJy50cmlnZ2VyLW1vYmknKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykubmV4dCgpLnRvZ2dsZSgpO1xyXG59KVxyXG5cclxuXHJcbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVhZHkhXCIpO1xyXG4gICAgcmVhZHkoKTtcclxufSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCByZWFkeSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWR5KCkge1xyXG4gICAgdmFyIGFjY29yZGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZHRcIik7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGk8YWNjb3JkaW9uLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBhY2NvcmRpb25baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBhY2NvcmRpb25DbGljayhldmVudCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBhY2NvcmRpb25DbGljayA9IChldmVudEhhcHBlbmVkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudEhhcHBlbmVkKTtcclxuICAgIHZhciB0YXJnZXRDbGlja2VkID1ldmVudC50YXJnZXQ7XHJcbiAgICBjb25zb2xlLmxvZyh0YXJnZXRDbGlja2VkKTtcclxuICAgIHZhciBjbGFzc0NsaWNrZWQgPSB0YXJnZXRDbGlja2VkLmNsYXNzTGlzdDtcclxuICAgIGNvbnNvbGUubG9nKFwidGFyZ2V0IGNsaWNrZWQ6IFwiICsgdGFyZ2V0Q2xpY2tlZCk7XHJcbiAgICBjb25zb2xlLmxvZyhjbGFzc0NsaWNrZWRbMF0pO1xyXG4gICAgd2hpbGUgKChjbGFzc0NsaWNrZWRbMF0gIT1cImRlc2NyaXB0aW9uLXRpdGxlXCIpKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmVudCBlbGVtZW50OiBcIiArIHRhcmdldENsaWNrZWQucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgdGFyZ2V0Q2xpY2tlZCA9IHRhcmdldENsaWNrZWQucGFyZW50RWxlbWVudDtcclxuICAgICAgICBjbGFzc0NsaWNrZWQgPSB0YXJnZXRDbGlja2VkLmNsYXNzTGlzdDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRhcmdldCBjbGlja2VkIHdoaWxlIGluIGxvb3A6XCIgKyB0YXJnZXRDbGlja2VkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsYXNzIGNsaWNrZWQgd2hpbGUgaW4gbG9vcDogXCIgKyBjbGFzc0NsaWNrZWQpO1xyXG4gICAgfVxyXG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGFyZ2V0Q2xpY2tlZC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICBjb25zb2xlLmxvZyhkZXNjcmlwdGlvbik7XHJcbiAgICB2YXIgZXhwYW5kZXIgPSB0YXJnZXRDbGlja2VkLmNoaWxkcmVuWzBdO1xyXG4gICAgaWYgKGRlc2NyaXB0aW9uLnN0eWxlLm1heEhlaWdodCl7XHJcbiAgICAgICAgZGVzY3JpcHRpb24uc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcclxuICAgICAgICBleHBhbmRlci5pbm5lckhUTUwgPSBcIiYjMTAxMzM7XCJcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBhbGxEZXNjcmlwdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRkXCIpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsRGVzY3JpcHRpb25zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IGRlc2NyaXB0aW9uOiBcIiArIGFsbERlc2NyaXB0aW9uc1tpXSk7XHJcbiAgICAgICAgICAgIGlmIChhbGxEZXNjcmlwdGlvbnNbaV0uc3R5bGUubWF4SGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhlcmUgaXMgYSBkZXNjcmlwdGlvbiBhbHJlYWR5IG9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICBhbGxEZXNjcmlwdGlvbnNbaV0uc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGFsbERlc2NyaXB0aW9uc1tpXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNoaWxkcmVuWzBdLmlubmVySFRNTCA9IFwiJiMxMDEzMztcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uLnN0eWxlLm1heEhlaWdodCA9IGRlc2NyaXB0aW9uLnNjcm9sbEhlaWdodCArIDQ1ICsgXCJweFwiO1xyXG4gICAgICAgIGV4cGFuZGVyLmlubmVySFRNTCA9IFwiJiMxMDEzNDtcIjtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiAgICAvLyBwcm9kdWN0IEdhbGxlcnkgYW5kIFpvb21cclxuXHJcbiAgICAvLyBhY3RpdmF0aW9uIGNhcm91c2VsIHBsdWdpblxyXG4gICAgICAgIGNvbnN0ICRsZWZ0ID0gJChcIi5sZWZ0XCIpO1xyXG4gICAgICAgIGNvbnN0ICRnbCA9ICQoXCIuZ2FsbGVyeVwiKTtcclxuICAgICAgICBjb25zdCAkZ2wyID0gJChcIi5nYWxsZXJ5MlwiKTtcclxuICAgICAgICBjb25zdCAkcGhvdG9zQ291bnRlckZpcnN0U3BhbiA9ICQoXCIucGhvdG9zLWNvdW50ZXIgc3BhbjpudGgtY2hpbGQoMSlcIik7XHJcblxyXG4gICAgICAgICRnbDIub24oXCJpbml0XCIsIChldmVudCwgc2xpY2spID0+IHtcclxuICAgICAgICAkcGhvdG9zQ291bnRlckZpcnN0U3Bhbi50ZXh0KGAke3NsaWNrLmN1cnJlbnRTbGlkZSArIDF9L2ApO1xyXG4gICAgICAgICQoXCIucGhvdG9zLWNvdW50ZXIgc3BhbjpudGgtY2hpbGQoMilcIikudGV4dChzbGljay5zbGlkZUNvdW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJGdsLnNsaWNrKHtcclxuICAgICAgICByb3dzOiAwLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJGdsMi5zbGljayh7XHJcbiAgICAgICAgcm93czogMCxcclxuICAgICAgICB1c2VUcmFuc2Zvcm06IGZhbHNlLFxyXG4gICAgICAgIHByZXZBcnJvdzogXCIuYXJyb3ctbGVmdFwiLFxyXG4gICAgICAgIG5leHRBcnJvdzogXCIuYXJyb3ctcmlnaHRcIixcclxuICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgIGFzTmF2Rm9yOiAkZ2xcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ2Fyb3VzZWxzSGVpZ2h0KCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDEwMjRweClcIikubWF0Y2hlcykge1xyXG4gICAgICAgICAgICBjb25zdCBnbDJIID0gJChcIi5nYWxsZXJ5MlwiKS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgJGxlZnQuY3NzKFwiaGVpZ2h0XCIsIGdsMkgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRsZWZ0LmNzcyhcImhlaWdodFwiLCBcImF1dG9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlQ2Fyb3VzZWxzSGVpZ2h0KCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICQoXCIubG9hZGluZ1wiKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwib3Zlci12aXNpYmxlXCIpO1xyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5zbGlkZXItcGF5Jykuc2xpY2soe1xyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogYDxkaXYgY2xhc3M9XCJpY29uLXNsaWNrLW5hdiBuZXh0LWFycm93XCI+PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5pb25pY29ucy12NS1hPC90aXRsZT48cG9seWxpbmUgcG9pbnRzPScxODQgMTEyIDMyOCAyNTYgMTg0IDQwMCcgc3R5bGU9J2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjQ4cHgnLz48L3N2Zz48L2Rpdj5gLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6IGA8ZGl2IGNsYXNzPVwiaWNvbi1zbGljay1uYXYgcHJldi1hcnJvd1wiPjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48dGl0bGU+aW9uaWNvbnMtdjUtYTwvdGl0bGU+PHBvbHlsaW5lIHBvaW50cz0nMzI4IDExMiAxODQgMjU2IDMyOCA0MDAnIHN0eWxlPSdmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDo0OHB4Jy8+PC9zdmc+PC9kaXY+YCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKFwiLmdhbGxlcnkgLml0ZW1cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9ICQodGhpcykuYXR0cihcImRhdGEtc2xpY2staW5kZXhcIik7XHJcbiAgICAgICAgJGdsMi5zbGljayhcInNsaWNrR29Ub1wiLCBpbmRleCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRnbDIub24oXCJhZnRlckNoYW5nZVwiLCAoZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUpID0+IHtcclxuICAgICAgICAkcGhvdG9zQ291bnRlckZpcnN0U3Bhbi50ZXh0KGAke3NsaWNrLmN1cnJlbnRTbGlkZSArIDF9L2ApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDbGljayBjb2xsYXBzZVxyXG4gICAgICAgXHJcblxyXG4vL0ZJWEVEIHNjcm9sbCBuYXZcclxuXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgZGl2MSA9ICQoXCIubWVfc3RpY2t5XCIpO1xyXG4gICAgdmFyIGRpdjIgPSAkKFwiLmFzaWRlLWxlZnRcIik7XHJcbiAgICB2YXIgZGl2MV90b3AgPSBkaXYxLm9mZnNldCgpLnRvcDtcclxuICAgIGlmICgkKCcuYXNpZGUtbGVmdCcpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgIHZhciBkaXYyX3RvcCA9IGRpdjIub2Zmc2V0KCkudG9wO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2YXIgZGl2MV9ib3R0b20gPSBkaXYxX3RvcCArIGRpdjEuaGVpZ2h0KCk7XHJcbiAgICB2YXIgZGl2Ml9ib3R0b20gPSBkaXYyX3RvcCArIGRpdjIuaGVpZ2h0KCk7XHJcbiAgICB2YXIgaCA9IGRpdjEub3V0ZXJIZWlnaHQoKTtcclxuICAgIGlmIChkaXYxX2JvdHRvbSA+PSBkaXYyX3RvcCAmJiBkaXYxX3RvcCA8IGRpdjJfYm90dG9tKSB7XHJcbiAgICAgICAgZGl2Mi5hZGRDbGFzcygndG9maXhlZCcpXHJcbiAgICAgICAgZGl2Mi5jc3MoJ3RvcCcsIGggKyAncHgnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkaXYyLnJlbW92ZUNsYXNzKCd0b2ZpeGVkJylcclxuICAgICAgICBkaXYyLmNzcygndG9wJywgMCArICdweCcpXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuIl19
