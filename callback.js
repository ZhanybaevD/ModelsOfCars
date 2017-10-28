

// function hello(){
// 	$("p").hide(1500, function(){

	
// 	alert("Paragraph hidden");	
// 	 });	
// }




// function burger (param1, param2, callback){
// 	alert (param1 + param2);
// 	callback()

// }

// $("#b").click(function(){
// 	burger('burger', 'cheese-burger', function(){
// 		alert('thank');
// 	})
// })



// $("#b").click(function(){
// 	$("p").append(' world ');
// }) 
 var marki;
 var model;
 var year;
 var color;
 var edsel;




	$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

$("#b").click(function(){
	$("#tb").append('<tr>' + '<td>' + $("#mark").val() + '</td>' 
	 								+ '<td>' + $('#model').val() + '</td>' 
	 								+ '<td>' + $('#year').val() + '</td>' 
	 								+ '<td>' + $('#color').val() + '</td>' 
	 								+ '<td>' + $('#sel').val() + '</td>' 
	 								+ '<td>' + '<button id="btn" class="btn btn-danger">Delete</button>' + '</td>' 
	 								+ '<td><button id="edit" type="button" class="btn btn-primary glyphicon glyphicon-edit" data-toggle="modal" data-target="#myModal"></button></td>' 
	 								+ '<td><button id="show" type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal2">Show</button></td>' + '</tr>');
	})
	$("#tb").on('click', '#btn', (function(){
			$(this).parent().parent().remove() 
	}))

	$('#tb').on('click', '#edit', function(){
		 marki = $(this).parent().parent().find('td').first();
		 model = marki.next();
		 year = model.next();
		 color = year.next();
		 edsel = color.next();
			$ ('#mrk').val(marki.html());
			$ ('#mdl').val(model.html());
			$ ('#yr').val(year.html());
			$ ('#clr').val(color.html());
			$ ('#sel').val(edsel.html());
		$('#myModal').on('click', '#save', function(){
			marki.html($('#mrk').val());
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
	})
	)
	
	


	
	 

	