// this function for add values from dropdown menu to hidden input.
$('.city_item').on('click',function (){
    console.log($(this).data('city'));
    $('.cities').text($(this).data('city'));
    $('#city_value').val($(this).data('city'));
})


$(".navbar-toggler").click(function () {
  $(".navbar-collapse").collapse("hide");
});
