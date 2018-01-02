$('.submit-btn').on('click', function(){
  $(this).after(($('#message-box').val()));
});