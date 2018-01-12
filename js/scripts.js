// Facebook button setup
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// Twitter button setup

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));





$(document).ready(function(){

  var $root = $('html, body');

  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');

    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }

    return false;
  });

 $(function () {
   $('#tooltip').tooltip();
 });
/*
$('.submit-btn').on('click', function() {
  console.log('clicked');
  return false;
});
*/
$("#button").on("click", function() {

	if ($('.message-box').val() == ""){
		$('.message-box').css('border', '3px red solid');
	} else {
		$('.message-box').css('border', 'none');
		  var comment = $('.message-box').val();
		  console.log(comment);
		$('#visible-comment').html(comment);
	  $('.message-box').hide();
	  return false;
	}
});

$(".message-box").on("keyup", function() {

	var charCount = $(".message-box").val().length;
	console.log(charCount);
	$("#char-count").html(charCount);
	if(charCount > 50) {
	      $("#char-count").css("color", "red");
	} else {
	      $("#char-count").css("color", "white");
	};


        // in here is where the rest of our code for this Exercise will go         
});



$('textarea').css('background-color', 'lightgray');


  // work section
  console.log(works);
  for(var i = 0; i < works.length; ++i ) {
  $("#work").append("\
  <div class='col-xs-6 col-sm-4 col-md-3'>\
    <a href='" + works[i].url + "' class='work-img'>\
      <img class='img-responsive' src='" + works[i].pic + "'>\
  	<span class='info'><p class='proj-title'>Title:</p> " + works[i].title + "</span>\
    </a>\
  </div>\
  ");

var images = $('#work .col-xs-6.col-sm-4.col-md-3 img');

if (i % 2 === 0){
	$(images[i]).css('border', '2px solid DodgerBlue');
} else {
	$(images[i]).css('border', '2px solid salmon');
}


};

$(".work-img").mouseenter(function(){
  $(".info", this).show();
}).mouseleave(function(){
  $(".info", this).hide();
});

});