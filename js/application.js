$(document).ready(function() {

  $('button').click(function(){

    var user = $("input[name='detailsUser']").val();
    var title = $("input[name='detailsTitle']").val();
    var text = $("input[name='detailsText']").val();

    $.ajax({
      type: 'POST',
      url: 'http://ga-wdi-api.meteor.com/api/posts/',
      data: {
        user: user,
        title: title,
        text: text,
      },
      dataType: 'json',
      success: function(response){
        console.log(response);
      }
    });
    console.log("it works, wahhh!");
  });
 
  $.ajax({
    type: 'GET', // gets all posts in the library
    url: 'http://ga-wdi-api.meteor.com/api/posts/',
    dataType: 'json',
    success: function(response){
      for (var i = 0; i < response.length + 1; i++) {
        $('.listAllPosts').append("<li>" + response[i].title + response[i].text + "</li>");//concatenates

        console.log(response);
      
      };
    }   
  });
});

