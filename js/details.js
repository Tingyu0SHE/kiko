window.addEventListener('load', function () {
  $('.form ul li').click(function(){
    $(this).css('border','1px solid #d60000')
    $(this).siblings().css('border','1px solid #000')  
  })  
  $('.meal ul li').click(function () {
    $(this).css('border', '1px solid #d60000')
    $(this).siblings().css('border', '1px solid #000')
  })
  $('.add').click(function(){
   let a= $(this).siblings('input').val()
    $(this).siblings('input').val(++a)
  }) 
  $('.reduce').click(function () {
    let a = $(this).siblings('input').val()
    if(a==1){
      a=1
    }else {
      $(this).siblings('input').val(--a)
    }
  })
})