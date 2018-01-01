
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
  $('.category-food').click(function() {
    var foodCategory = $(this).attr('category');
    $('.food-restaurants').hide();
    $('.food-restaurants[category = "' + foodCategory + '"]').show();
    $('input').keyup(function() {
      if ($('input').val() === '') {
        $('.food-restaurants').show();
      }
    }); 
  });
  $('.food-restaurants').mouseover(function() {
    $(this).addClass('selected');
    $('<p>Excelente!</p>').appendTo('.selected');   
  });
  $('.food-restaurants').mouseout(function() {
    $(this).removeClass('selected');
    $('p').remove();
    
    
  });
});
 