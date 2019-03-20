$('#newGuestMessage').hide();
$('#sigs').hide();
$('#signBook').click(function(){
  const sig = $('#signatureInput').val();
  $('#sigs').text(sig).show();
  $('#newGuestMessage').hide().slideDown(1000).delay(3000);
});
