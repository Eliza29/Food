
$(function() {
  var $list = $('#list');
  var $element = $('#list li');
  $list.hide();
  
  $('input').keyup(function() {
    var option = $(this).val();
    $list.hide();

    $('.list-food').each(function() {
      var foods = $(this).text();
      if (foods.indexOf(option) !== -1) {
        $(this).show();
      } 
      if ($('input').val() === '') {
        $list.hide();
      }      
    });
  });
});
 