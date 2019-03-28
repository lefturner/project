//Creates script for guest book and logs name input to page
$('#newGuestMessage').hide();
$('#sigs').hide(); //hides initial message until user hits submit
$('#signBook').click(function(){
  const sig = $('#signatureInput').val();
  $('#sigs').text(sig).show();
  $('#newGuestMessage').hide().slideDown(1000).delay(3000); //shows message on slide down function once users submit input
});
