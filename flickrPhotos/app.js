var main = function (){
	"use strict";
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	var img = null,
		div = null,
		span = null;
	$.getJSON(url, {
		tags: "mount rainier",
		tagmode: "any",
		format: "json"}, function(flickResponce){
			$.each( flickResponce.items, function(i, item){
				div = $("<div>").hide().appendTo("#images");
				img = $("<img>").attr("src", item.media.m);
				span = $("<span>").text(item.title).hide();

				div.append(img).fadeIn("slow");
				div.append(span);

				//bad style - learn how to make more good
				var descr = span;
				img.on("click", function(){
					descr.slideToggle();
				})
			});
		});
}
$(document).ready(main);