$(document).ready(function(){
  $('#photo-form').submit(function(event) {
      event.preventDefault()
      const $input1 = $(event.target).find('input[name=image_url],select')
      const url = $input1.val()
      const $input2 = $(event.target).find('input[name=caption],select')
      const text = $input2.val()
      $('#photo-list').append("<img src=" + url + ">")
      $('#photo-list').append(text)
  });
})
