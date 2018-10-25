$(document).ready(function () {

 $("#drop-area").on('dragenter', function (e){
  e.preventDefault();
  $(this).css('background', '#BBD5B8');
});

 $("#drop-area").on('dragover', function (e){
  e.preventDefault();
 });

 $("#drop-area").on('drop', function (e){
  $(this).css('background', '#D8F9D3');
  e.preventDefault();
  var image = e.originalEvent.dataTransfer.files;
  createFormData(image);
 });
 
 $("#drop-area").on('dragleave', function (e){
  e.preventDefault();
  $(this).css('background', 'white');
 });
});

function createFormData(image) {
 var formImage = new FormData();
	for(i = 0; i < image.length; i++) {
		formImage.append(image.name, image[i]);
		console.log(image[i]);
	}	
 
 //uploadFormData(formImage);
 
}

function uploadFormData(formData) {
 $.ajax({
     url: "subir.php",
     type: "POST",
     data: formData,
     contentType: false,
     cache: false,
     processData: false,
     success: function (data) {
         $('#drop-area').html(data);
     }
 });
}