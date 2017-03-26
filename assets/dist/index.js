!function($){"use strict";function initSlider(){var thumbString="";if(containers.forEach(function(item,index){thumbString+='<a href="javascript:;" '+(0===index?'class="active" ':"")+"></a>"}),containers.length>1){var ctrlString='<div class="ctrl"><a href="javascript:;" class="js-ctrl-left" ><svg class="icon icon-rewind"><use xlink:href="#icon-rewind"></use></svg></a><a href="javascript:;" class="js-ctrl-right icon-angle-right" ><svg class="icon icon-fast-forward"><use xlink:href="#icon-fast-forward"></use></svg></a></div>';$("#slideshow").append([ctrlString,'<div class="thumb">',thumbString,"</div>"].join("")),bindEvent()}pageTriggers=[].slice.call($(".thumb a")),$(containers[current]).addClass("slider--current")}function bindEvent(){$(".js-ctrl-left").on("click",function(){current>0&&navigate(pageTriggers[current-1])}),$(".js-ctrl-right").on("click",function(){containersCount-1>current&&navigate(pageTriggers[current+1])})}function navigate(pageTrigger){var oldcurrent=current,newcurrent=pageTriggers.indexOf(pageTrigger);if(!isAnimating&&oldcurrent!==newcurrent){isAnimating=!0;var currentPageTrigger=pageTriggers[current],nextContainer=containers[newcurrent],currentContainer=containers[current],dir=newcurrent>oldcurrent?"left":"right";$(currentPageTrigger).removeClass("active"),$(pageTrigger).addClass("active"),current=newcurrent,$(nextContainer).addClass("left"===dir?"slider--animInRight":"slider--animInLeft"),$(currentContainer).addClass("left"===dir?"slider--animOutLeft":"slider--animOutRight"),onEndAnimation(currentContainer,function(){$(currentContainer).removeClass("left"===dir?"slider--animOutLeft":"slider--animOutRight"),$(nextContainer).removeClass("left"===dir?"slider--animInRight":"slider--animInLeft"),$(currentContainer).removeClass("slider--current"),$(nextContainer).addClass("slider--current"),isAnimating=!1})}}var animEndEventNames={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},animEndEventName=animEndEventNames[Modernizr.prefixed("animation")],onEndAnimation=function(el,callback){var onEndCallbackFn=function(ev){ev.target==this&&(this.removeEventListener(animEndEventName,onEndCallbackFn),callback&&"function"==typeof callback&&callback.call())};el.addEventListener(animEndEventName,onEndCallbackFn)},$document=$(document),containers=[].slice.call($(".slide")),containersCount=containers.length,current=0,isAnimating=!1,pageTriggers=[];$document.ready(function(){$(".menu-icon").on("click",function(e){$("body").toggleClass("open"),$(this).toggleClass("open")}),initSlider()}),document.addEventListener("keydown",function(ev){var keyCode=ev.keyCode||ev.which,isNavOpen=$("body").hasClass("open");switch(keyCode){case 37:current>0&&!isNavOpen&&navigate(pageTriggers[current-1]);break;case 39:containersCount-1>current&&!isNavOpen&&navigate(pageTriggers[current+1])}})}(jQuery);