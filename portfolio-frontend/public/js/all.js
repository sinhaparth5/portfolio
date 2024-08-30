/* ========================================

 * theme name: Exgrid
 * version: 1.0
 * description: Personal Portfolio Html5 Template
 * author: saihoai
 * author-url: https://themeforest.net/user/saihoai

==================================================*/
	
"use strict";

window.gsap && (function(){
	
	gsap.registerPlugin(
      ScrollTrigger
    );
	
	document.querySelectorAll('[data-scroll]').forEach(function( el ){
		var i = el.querySelectorAll(el.getAttribute('data-scroll')),
			c = JSON.parse(el.querySelector('[data-scroll-cog=""]').innerHTML)
		;
		c.scrollTrigger.onUpdate = function(o){
			o.trigger.classList[o.isActive ? 'add': 'remove']("c-active");
			o.trigger.dispatchEvent(new CustomEvent('exgrid-' + o.trigger.getAttribute('data-scroll-item'), {detail: o}));
		};
		c.scrollTrigger.trigger = i;
		gsap.to( i, c );
	});
	
	
	
})();

/* odometer */
window.Odometer && (function(){
	
	document.querySelectorAll('[data-scroll-item="odometer"]').forEach(function(el){
		
		el.addEventListener('exgrid-odometer', function(o){
			
			var t = o.target.querySelector('.odometer');
			
			t.innerHTML = o.detail.isActive ? t.getAttribute('data-v') : 0;
		});
		
	});
	
})();

/* scroll tab */
(function(){
	
	document.querySelectorAll('[data-scroll-item="tab"]').forEach(function(el){
		
		el.addEventListener('exgrid-tab', function(o){
			
			document.querySelector(o.target.getAttribute('data-t')).setAttribute( 'data-t', o.target.getAttribute('data-v') );
		});
		
	});
	
})();

/* tippy */
window.tippy && (function(){
	
	document.querySelectorAll('[data-tippy]').forEach(function( el ){
		tippy(el, {
			allowHTML: true,
			followCursor: true,
			theme: 'exgrid',
			content: el.querySelector(el.getAttribute('data-tippy')).innerHTML
		});
	});

})();

/* backtop */
(function(){
	
	function s()
	{
		var e = document.querySelector('[data-backto]'),
			progressPath = e.querySelector("svg path"),
			pathLength = progressPath.getTotalLength(),
			d = document.querySelector('html'),
			height = d.scrollHeight - window.innerHeight,
			progress = pathLength - pathLength * (d.scrollTop / height)
		;
		
		progressPath.style.strokeDasharray = [pathLength, pathLength].join(' ');
        progressPath.style.strokeDashoffset = progress;
		
		e.classList[progress == pathLength ? 'remove' : 'add']('active');
	}
	
	window.addEventListener('scroll', s);
	s();

})();

/* toggle */
(function(){
	
	function s(el)
	{
		el.addEventListener('click', function(e){
			
			e.preventDefault();
			
			var t = document.querySelector(this.hash),
				n = this.getAttribute('data-c-toggle')
			;
			
			t.setAttribute(
				'data-t', 
				t.getAttribute('data-t') == n && !t.getAttribute('data-twice') ? '' : n
			);
			
			return false;
		});
	}
	
	document.querySelectorAll('[data-c-toggle]').forEach(s);
	
})();

/* tns */
window.tns && (function(d){
	
	function s(el)
	{
		var c = JSON.parse(el.querySelector('[data-slider-cog]').innerHTML);
		tns(c);
	}
	
	d.querySelectorAll('[data-slider]').forEach(s);
	
})(document);