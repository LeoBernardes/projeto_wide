function carregarUsuarios () {
	$.ajax({
        url: "http://jsonplaceholder.typicode.com/users",
        type: 'GET',
        success: function(usuarios) {
            for(i in usuarios){
			$('#usuarios tr:last').after('<tr><td>' + usuarios[i].name + '</td><td>'+ usuarios[i].username + '</td><td>'+ usuarios[i].email + '</td></tr>');
			}
        }
    });	
	
	$('html, body').animate({ scrollTop: $("#tabela").offset().top }, 1200);
}
