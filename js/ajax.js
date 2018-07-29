var worksContainer = document.getElementById("works-ajax");
var worksXhttp = document.getElementById("worksXhttp");
var divMidHead = document.getElementById("div-mid-head");
var worksRandom = document.getElementById("works");
var workList = document.getElementById("works-list");
var worksListAjax = document.getElementById("works-list-ajax");
var worksSection = document.getElementById("works-section");
var bottomMenu = document.getElementById("menu");
var meXhttp = document.getElementById("meXhttp");
var menuXhttp = document.getElementById("menu-ul");

/* === PASSIVE EVENT LISTENER === */

jQuery.event.special.touchstart = {
	setup: function( _, ns, handle ){
		if ( ns.includes("noPreventDefault") ) {
			this.addEventListener("touchstart", handle, { passive: false });
		} else {
			this.addEventListener("touchstart", handle, { passive: true });
		}
	}
};

jQuery.event.special.onmousewheel = {
	setup: function( _, ns, handle ){
		if ( ns.includes("noPreventDefault") ) {
			this.addEventListener("onmousewheel", handle, { passive: false });
		} else {
			this.addEventListener("onmousewheel", handle, { passive: true });
		}
	}
};

/* === MOBILE TOUCH - NO-TOUCH === */

$(document).ready(function() {
	if ("ontouchstart" in document.documentElement) {
		$('.no-touch').removeClass('no-touch').addClass('touch')
	}
	$('.touch').on('touchstart touchend', function(e) {
		$(this).toggleClass('over');
	});
})

/* === RANDOM WORK === */

var myRequest = new XMLHttpRequest();

if (window.XMLHttpRequest) {
		myRequest = new XMLHttpRequest();
	} else {
		myRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}

myRequest.open('GET', 'https://www.typerror.altervista.org/js/data.json');

myRequest.onloadend = function() {
	var data = JSON.parse(myRequest.responseText);
	renderRandomHTML(data);
	};
	
myRequest.send();

Handlebars.registerHelper('random', function(context, options){
	var e = Math.floor(Math.random() * (context.length)); //numero progetti
	var r = options.fn(context[e]);
	return r;
	});
			
function renderRandomHTML(data) {
	var rawTemplate = document.getElementById("random-template").innerHTML;
	var compiledTemplate= Handlebars.compile(rawTemplate);
	var ourGeneratedHTML = compiledTemplate(data);
				
	var randomAjax = document.getElementById("works");
	randomAjax.innerHTML = ourGeneratedHTML;
	}
			
/* === ME === */
			
meXhttp.addEventListener("click", function() {
    $.get('https://www.typerror.altervista.org/js/data.json');
	myRequest;
	
	if (window.XMLHttpRequest) {
		myRequest = new XMLHttpRequest();
	} else {
		myRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
			   
	myRequest.open('GET', 'https://www.typerror.altervista.org/js/data.json');
			
	myRequest.onloadend = function() {
		var data = JSON.parse(myRequest.responseText);
		rendermeHTML(data);
		renderRandomHTML(data);
				
		divMidHead.classList.remove("hide");
		bottomMenu.classList.remove("hide");
		workList.classList.remove("hide");
		worksListAjax.classList.remove("show");
		worksListAjax.classList.remove("fixed");
		worksListAjax.classList.remove("relative");
		worksSection.classList.remove("show");
		menuXhttp.classList.remove("hide");
		
				
		divMidHead.classList.add("show");
		bottomMenu.classList.add("show");
		workList.classList.add("show");
		worksListAjax.classList.add("hide");
		worksSection.classList.add("hide");
		menuXhttp.classList.add("show");
		
		}
				
	myRequest.send();
	
	Handlebars.registerHelper('random', function(context, options){
	var e = Math.floor(Math.random() * (context.length)); //numero progetti
	var r = options.fn(context[e]);
	return r;
	});
			
	}, onclick, {passive: true, capture: true});
			
function rendermeHTML(data) {
	var rawTemplate = document.getElementById("me-template").innerHTML;
	var compiledTemplate= Handlebars.compile(rawTemplate);
	var ourGeneratedHTML = compiledTemplate(data);
				
	var meAjax = document.getElementById("mid-head");
	meAjax.innerHTML = ourGeneratedHTML;
	}

function renderRandomHTML(data) {
	var rawTemplate = document.getElementById("random-template").innerHTML;
	var compiledTemplate= Handlebars.compile(rawTemplate);
	var ourGeneratedHTML = compiledTemplate(data);
				
	var randomAjax = document.getElementById("works");
	randomAjax.innerHTML = ourGeneratedHTML;
	}
			
/* === PROGETTI === */
			
worksXhttp.addEventListener("click", function() {
    $.get('https://www.typerror.altervista.org/js/data.json');
	var xhttp;
	
	if (window.XMLHttpRequest) {
		xhttp = new XMLHttpRequest();
	} else {
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xhttp.open("GET", "https://www.typerror.altervista.org/js/data.json");
				
	xhttp.onerror = function(){
	console.log("Connection error");
	};
				
  	xhttp.send();
				
	xhttp.onloadend = function(){
					
	var data = JSON.parse(xhttp.responseText);
					
	renderHTML(data);
				
	divMidHead.classList.remove("show");
	bottomMenu.classList.remove("show");
	workList.classList.remove("show");
	worksListAjax.classList.remove("hide");
	worksListAjax.classList.remove("fixed");
	worksSection.classList.remove("show");
				
	divMidHead.classList.add("hide");
	bottomMenu.classList.add("hide");
	workList.classList.add("hide");
	worksListAjax.classList.add("show");
	worksListAjax.classList.add("relative");
	worksSection.classList.add("hide");
	}
}, onclick, {passive: true, capture: true});
			
function renderHTML(data) {
	var rawTemplate = document.getElementById("progetti-template").innerHTML;
	var compiledTemplate= Handlebars.compile(rawTemplate);
	var ourGeneratedHTML = compiledTemplate(data);
				
	var worksAjax = document.getElementById("works-ajax");
	worksAjax.innerHTML = ourGeneratedHTML;
	}	

/* === PROGETTI BACK === */


			
/* === LAVORI === */
			
var lavoriEvento = function lavoriEvento(){
$.get('https://www.typerror.altervista.org/js/data.json');	
var xhttp;
var currentID = event.target.id;
//console.log(currentID);
	
	worksSection.classList.add("hide");
	
if (window.XMLHttpRequest) {
	xhttp = new XMLHttpRequest();
} else {
	xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
	xhttp.open("GET", "https://www.typerror.altervista.org/js/data.json");
			
	xhttp.onloadend = function(){
		
	var data = JSON.parse(xhttp.responseText);
		renderNextHTML(data);
		var i;
		var imgContainer = document.querySelector('#image-container');
		var container = imgContainer.querySelectorAll('.container');
		
		for ( i = 0; i < container.length; i++){
		container[i].classList.add('is-loading');
		//console.log(container);
		}
		for ( i = 0; i < container.length; i++){
		var img = container[i].querySelectorAll('img');
		img[0].classList.add('hide');
		//console.log(img);
		}
		
		new imagesLoaded(imgContainer, function(instance) {
			for (i = 0; i < container.length; i++ ) {
			container[i].classList.remove('is-loading');
			var img = container[i].querySelectorAll('img');
			img[0].classList.remove('hide');
			img[0].classList.add('show');
			}
		});
	
		worksSection.classList.remove("hide");
		//worksListAjax.classList.remove("relative");
		worksListAjax.classList.remove("show");
		divMidHead.classList.remove("show");
		workList.classList.remove("show");
		menuXhttp.classList.remove("show");
	
		//worksListAjax.classList.add("fixed");
		worksSection.classList.add("show");
		worksListAjax.classList.add("hide");
		divMidHead.classList.add("hide");
		workList.classList.add("hide");
		menuXhttp.classList.add("hide");
		window.scrollTo(0,0);
		
};
/*	
	$('#image-container').imagesLoaded()
  		.always( function( instance ) {
		
	}
		*/		
	xhttp.send();
				
	Handlebars.registerHelper('custom', function(context, options){
		var r = options.fn(context[currentID]);
		return r;
		//console.log(currentID);
	});
				
function renderNextHTML(data) {
	var rawTemplate = document.getElementById("works-template").innerHTML;
	var compiledTemplate= Handlebars.compile(rawTemplate);
	var ourGeneratedHTML = compiledTemplate(data);
				
	var workSection = document.getElementById("works-section");
	workSection.innerHTML = ourGeneratedHTML;
	}
}