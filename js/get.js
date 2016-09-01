//traer.js


addEvent(window,'DOMContentLoaded',function(){
	var btn_ver_blog = $('btn_blog');
	
	if(btn_ver_blog){
		addEvent(btn_ver_blog,'click',traer_blogs);	
	}



	function traer_blogs(){
		ajaxRequest({
			url: 'blog/blog.php',
			success: function(rta) {
				var div = $('boxBlog');
				div.innerHTML = rta;
				$('inicio').style.display = 'none';
				$('habilidades').style.display = 'none';
				$('biography').style.display = 'none';
				$('contacto').style.display = 'none';
			}

		});
	
	


	}
});
