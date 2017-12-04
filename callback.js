 var marks;
 var model;
 var year;
 var color;
 var edsel;

  $(document).ready(function(){
  	$.ajax({
    url: 'https://scalr.api.appbase.io/Cars/machines/_search?q=name:Daniyar',
    headers: {
        'Authorization':'Basic dlN1MDd5R3NwOjlmOGI4Y2E4LTkxM2UtNGQzMy1iZjFkLTZhMWE0OGM5MGQyYg==',
        'Content-Type':'application/json'
    },
    method: 'GET',
    dataType: "json",
}).done(function(data){
	$.each(data.hits.hits, function(){
		console.log(this._id)
		$('.Loading').css('display' , 'block')
			$("#tb").append('<tr>' + '<td>' + this._source.mark + '</td>' 
	 								+ '<td>' + this._source.model + '</td>' 
	 								+ '<td>' + this._source.year + '</td>' 
	 								+ '<td>' + this._source.color + '</td>' 
	 								+ '<td>' + `<button data-id=${this._id} id="del" class="btn btn-danger">Delete</button>` + '</td>' 
	 								+ '<td><button id="edit" type="button" class="btn btn-primary glyphicon glyphicon-edit" data-toggle="modal" data-target="#myModal"></button></td>' 
	 								+ '<td><button id="show" type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal2">Show</button></td>' + '</tr>');
	})
}).fail(function( jqXHR, textStatus, error){
		alert('error:' + jqXHR )
		alert(error);
	})
})
    


	$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

$("#b").click(function(){
	
var file = {
	"mark" : $('#mark').val(),
	"model" : $('#model').val(),
	"year" : $('#year').val(),
	"color" : $('#color').val(),
	"name" : "Daniyar" ,
}
 $.ajax({
    url: 'https://scalr.api.appbase.io/Cars/machines',
    headers: {
        'Authorization':'Basic dlN1MDd5R3NwOjlmOGI4Y2E4LTkxM2UtNGQzMy1iZjFkLTZhMWE0OGM5MGQyYg==',
        'Content-Type':'application/json'
    },
    method: 'POST',
    dataType: "json",
    data: JSON.stringify(file),
    }) .done(function(data){
    	console.log(data)
	$("#tb").append('<tr>' + '<td>' + $("#mark").val() + '</td>' 
	 				+ '<td>' + $('#model').val() + '</td>' 
	 				+ '<td>' + $('#year').val() + '</td>' 
	 				+ '<td>' + $('#color').val() + '</td>' 
	 				+ '<td>' + $('#sel').val() + '</td>' 
	 				+ '<td>' + `<button data-id=${data._id}  id="del" class="btn btn-danger">Delete</button>` + '</td>' 
	 				+ '<td><button id="edit" type="button" class="btn btn-primary glyphicon glyphicon-edit" data-toggle="modal" data-target="#myModal"></button></td>' 
	 				+ '<td><button id="show" type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal2">Show</button></td>' + '</tr>');
	
  }).fail(function( error){
      console.log(error);
      alert('fall');
  })
})
	$("#tb").on('click', '#del', (function(){
		$.ajax({
    url: `https://scalr.api.appbase.io/Cars/machines/${$(this).attr('data-id')}`,
    headers: {
        'Authorization':'Basic dlN1MDd5R3NwOjlmOGI4Y2E4LTkxM2UtNGQzMy1iZjFkLTZhMWE0OGM5MGQyYg==',
        'Content-Type':'application/json'
    },
    type: 'DELETE',
    dataType: "json",
    }).done(function(response){
  		location.reload();
    }).fail(function(error){
    	console.log(error);

    })

			// $(this).parent().parent().remove() 
	}))

	$('#tb').on('click', '#edit', function(){
		 marks = $(this).parent().parent().find('td').first();
		 model = marks.next();
		 year = model.next();
		 color = year.next();
		 edsel = color.next();
			$ ('#mrk').val(marks.html());
			$ ('#mdl').val(model.html());
			$ ('#yr').val(year.html());
			$ ('#clr').val(color.html());
			$ ('#sel').val(edsel.html());
		$('#myModal').on('click', '#save', function(){
			marks.html($('#mrk').val());
			model.html($('#mdl').val());
			year.html($('#yr').val());
			color.html($('#clr').val());
			edsel.html($('#krb').val());

		})	
})

	$('#tb').on('click', '#show', function(){
		$('#showul').append('<li>' + $(this).parent().parent().find('td').first().html() + '</li>' +
			'<li>' + $(this).parent().parent().find('td').first().next().html() + '</li>' +
			'<li>' + $(this).parent().parent().find('td').first().next().next().html() + '</li>' +
			'<li>' + $(this).parent().parent().find('td').first().next().next().next().html() + '</li>' +
			'<li>' + $(this).parent().parent().find('td').first().next().next().next().next().html() + '</li>' )
})

	$('#myModal2').on('click', '#showlol', (function(){
		$('#showul').html('');
	}));
	
	

	
	 

	