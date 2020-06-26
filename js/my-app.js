// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'ios',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Portal Unitec',
	dialog: {
		title: 'Portal Unitec',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
		},
		{
		path: '/about/',
    	url: 'about.html',
    	name: 'about',
  		},
		{
		path: '/profile/',
    	url: 'profile.html',
    	name: 'profile',
  		},
		/*HECHO POR JEYSEL*/
		{
		path: '/clases/',
    	url: 'clases.html',
    	name: 'clases',
  		},
		/*HECHO POR JEYSEL*/
		{
		path: '/cursos/',
    	url: 'cursos.html',
    	name: 'cursos',
  		},
		/*HECHO POR JEYSEL*/
		{
		path: '/info-g/',
    	url: 'info-g.html',
    	name: 'info-g',
  		},
		{
		path: '/notas/',
    	url: 'notas.html',
    	name: 'notas',
  		},
		/*HECHO POR JEYSEL*/
		{
		path: '/contenido/',
    	url: 'contenido.html',
    	name: 'contenido',
  		},
		/*HECHO POR JEYSEL*/
		{
		path: '/contenido-1/',
    	url: 'contenido-1.html',
    	name: 'contenido-1',
  		},
		/*HECHO POR JEYSEL*/
		{
		path: '/recursos/',
    	url: 'recursos.html',
    	name: 'recursos',
  		},
		/*HECHO POR JEYSEL*/
		{
		path: '/actividades/',
    	url: 'actividades.html',
    	name: 'actividades',
  		},
		/*HECHO POR JEYSEL*/
		{
		path: '/bibliografia/',
    	url: 'bibliografia.html',
    	name: 'bibliografia',
  		},
		/*HECHO POR JEYSEL*/
		{
		path: '/foro/',
    	url: 'foro.html',
    	name: 'foro',
  		},
		/*HECHO POR JEYSEL*/
		{
		path: '/foro-1/',
    	url: 'foro-1.html',
    	name: 'foro-1',
  		},
		
		
	]
});
// Export selectors engine
var $$ = Dom7;

$$('#btnAlerta').on('click',function() {
	app.dialog.alert('Hola Diseño web 2');
});

