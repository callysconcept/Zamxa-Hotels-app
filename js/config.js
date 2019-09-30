
function codeAddress() {
$("#page2").hide();
   onLoad();         
 // $( ".swiper-container" ).fadeOut( 100 ).delay( 12000 ).fadeIn( 3000 );
 
var duration = 7000;
    setTimeout(function() {
$("#carl2").show();
$("#carl").fadeOut( 1500 );
$( ".swiper-container" ).fadeOut( 1000 ).delay( 5000 ).fadeIn( 1000 );
//$( ".swiper-container" ).show();
$("#carl2").fadeOut( 5000 );
$( "#modal" ).fadeOut( 1000 ).delay( 7000 ).fadeIn( 1000 );

}, duration);

var duration2 = 7000;
    setTimeout(function() {  
 checkNetConnection();  
 }, duration2);
	 }
window.onload = codeAddress;

var online = navigator.onLine || false;
$(document).ready(function() { 
  $(document).bind('deviceready', function(){
    onDeviceReady()
  })
  // Your main code
}) 
function onLoad() {
if(online) {
	window.screen.orientation.lock('portrait'); 
} else {
	//navigator.vibrate(500);
  alert("Connection Not Available\nCheck Network settings and Try Again!!!");
  navigator.app.exitApp();
}
}

   
function checkNetConnection(){
  var xhr = new XMLHttpRequest();
 var file = "https://zamxa.store/themes/images/icons-png/minus-black.png";
 var r = Math.round(Math.random() * 10000);
 xhr.open('HEAD', file + '?subins=' + r, false);
 try {
  xhr.send();
  if (xhr.status >= 200 && xhr.status < 304) {
   return true;
  } else {
	  //navigator.vibrate(500);
	  swal("Network Error!!!", "Check Internet Connection Or check if app is running in Latest Version and Try Again.", "error");
	  var dura = 3000;
    setTimeout(function() {
	  navigator.app.exitApp();
	  }, dura);
   return false;
  }
 } catch (e) {
	 //navigator.vibrate(500);
	  swal("Network Error!!!", "Check Internet Connection Or check if app is running in Latest Version and Try Again.", "error");
	  var dura = 3000;
    setTimeout(function() {
	  navigator.app.exitApp();
	  }, dura);
   return false;
 }
}
