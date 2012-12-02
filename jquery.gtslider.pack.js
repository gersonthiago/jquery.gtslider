/*
 * jQuerySlider
 *
 * Copyright (c) 2012 Gerson Thiago
 */
;(function(e,t,n){function o(t,n){this.element=t;this.options=e.extend({},s,n);this._defaults=s;this._name=r;this.init()}var r="gtSlider",i=t.document,s={width:500,height:375,pagination:true,arrows:true,legend:true,speed:1200,effect:"slide",easing:"",auto:true,autoSpeed:3e3};o.prototype.init=function(){e(this.element).find("ul").wrap('<div class="boxGtSlider" />');var t=this,n=t.options,r=e(t.element).find(".boxGtSlider"),i=r.find("li").length,s="";r.attr("data-pos",0).css({position:"relative",overflow:"hidden",width:n.width,height:n.height});if(n.arrows&&i>1){s+='<a href="#" class="bt prev">Anterior</a><a href="#" class="bt next">Próximo</a>'}if(n.pagination&&i>1){var o="";for(var u=0,a=i;u<a;u++){o+='<span data-num="'+u+'">'+(u+1)+"</span>"}s+='<div class="pagination">'+o+"</div>"}if(n.legend){var f="",l="";for(var u=0,a=i;u<a;u++){f=r.find("li").eq(u).attr("data-legend");if(f!==""){l+='<p data-num="'+u+'" style="display:none">'+f+"</p>"}}s+='<div class="legends">'+l+"</div>"}if(n.effect=="slide"){r.find("ul").width(i*n.width)}else if(n.effect=="fade"){var c=i+2;r.find("ul li").each(function(){e(this).css({position:"absolute",top:0,left:0,zIndex:c--})})}e(t.element).css({overflow:"visible"}).append(s);t.appendEvents()};o.prototype.appendEvents=function(){var t=this,r=t.options,i=e(t.element).find(".boxGtSlider"),s=i.find("li").length,o=n,u=n;t.goTo=function(n){i.attr("data-pos",n);if(r.effect=="slide"){i.find("ul").animate({marginLeft:-(n*r.width)},r.speed,r.easing)}else if(r.effect=="fade"){i.find("li").not(i.find("li").eq(n)).fadeOut(r.speed);i.find("li").eq(n).fadeIn(r.speed)}if(r.legend){e(t.element).find(".legends p").not(e(t.element).find(".legends p[data-num="+n+"]")).fadeOut();e(t.element).find(".legends p[data-num="+n+"]").fadeIn()}if(r.pagination){e(t.element).find(".pagination span").removeClass("active");e(t.element).find(".pagination span[data-num="+n+"]").addClass("active")}};e(t.element).find(".next, .prev").bind("click",function(n){n.preventDefault();var r=e(this),o=+i.attr("data-pos");if(r.hasClass("next")){++o;if(o==s){o=0}}else if(r.hasClass("prev")){--o;if(o<0){o=s-1}}t.goTo(o)});e(t.element).find(".pagination span").bind("click",function(n){t.goTo(e(this).attr("data-num"))});o=function(){var e=+i.attr("data-pos");++e;if(e==s){e=0}t.goTo(e)};if(r.auto){u=setInterval(o,r.autoSpeed);i.bind("mouseenter mouseleave",function(e){if(e.type=="mouseenter"){clearInterval(u)}else if(e.type=="mouseleave"){u=setInterval(o,r.autoSpeed)}})}t.goTo(0)};e.fn[r]=function(t){return this.each(function(){if(!e.data(this,"plugin_"+r)){e.data(this,"plugin_"+r,new o(this,t))}})}})(jQuery,window);