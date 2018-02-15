
var api="http://starlord.hackerearth.com/gamesarena?q=";
$(document).ready(function(){
  /*Auto complete*/
  $.ajaxSetup({ cache: false });
$('#SearchBox').keyup(function(){
 $('#result').html('');

 var searchField = $('#SearchBox').val();
 var expression = new RegExp(searchField, "i");
 $.ajax({
   url:api,
   type:"GET",
   datatype:"jsonp",
   success:function(data){
     for(var i=0;i<=100;i++){
       if (data[i].title.search(expression) != -1 )
       {
        $('#result').append('<li class="list-group-item link-class"> '+data[i].title+' </li>');
       }
     }

   }
 }
);

});

$('#result').on('click', 'li', function() {
 var click_text = $(this).text().split('|');
 $('#SearchBox').val($.trim(click_text[0]));
 $("#result").html('');
});
  /* Getting all games without Filter*/
  getGames();
  $("#searchBtn").click(function(){
    game=document.getElementById('SearchBox').value;
    /* Getting games via Search*/
    getGame(game);

  });
  $("#sort").change(function(){
    console.log(document.getElementById('sort').value);
    if(document.getElementById('sort').value=="ascending"){
      SortInAscending();
    }
    else{
      SortInDescending();
    }
  });

  $('#my_radio_box').change(function(){
            selected_value = $("input[name='inlineRadioOptions']:checked").val();
            console.log(selected_value);
            if(selected_value=="option1"){
              displayPlaystation();
            }
            else if(selected_value=="option2"){
              displayPC();
            }
            else if(selected_value=="option3"){
              displayXbox();
            }
        });
});

/* Getting all games without Filter*/
function getGames(){

  $.ajax({
    url:api,
    type:"GET",
    datatype:"jsonp",
    success:function(data){


      for(var i=1;i<=99;i++){
        $('#output').append("<p>"+i+`</p><div class=\"card-panel teal ho\">

                            <h6 class=\"link \"> Title:`+data[i].title+`</h6>
                            <h6 class=\"link \"> Platform:`+data[i].platform+`</h6>
                            <h6 class=\"link \">Genre:`+data[i].genre+`</h6>
                            <h6 class=\"link \">Score:`+data[i].score+`</h6>
                            <h6 class=\"link \">Editors Choice:`+data[i].editors_choice+`</h6>
                            </div>`);
      }

    }
  });
}

/* Getting games via Search*/
function getGame(game){
  var urlString=api+game;
  //console.log(urlString);
  $.ajax({
    url:urlString,
    type:"GET",
    datatype:"jsonp",
    success:function(data){
      $('#output').html("");
      console.log(data);


      for(var i=1;i<99;i++){
        if(data[i].title==game){
          console.log(data[i]);
          $('#output').append("<p>"+i+`</p><div class=\"card-panel teal ho\">

                              <h6 class=\"link \"> Title:`+data[i].title+`</h6>
                              <h6 class=\"link \"> Platform:`+data[i].platform+`</h6>
                              <h6 class=\"link \">Genre:`+data[i].genre+`</h6>
                              <h6 class=\"link \">Score:`+data[i].score+`</h6>
                              <h6 class=\"link \">Editors Choice:`+data[i].editors_choice+`</h6>
                              </div>`)
        }
      }

    }
  });

}


function SortInAscending(){

  $.ajax({
    url:api,
    type:"GET",
    datatype:"jsonp",
    success:function(data){
      $('#output').html("");
      console.log(data);

        var a=new Array(99);
        for(var k=1;k<=99;k++){
            a[k]=data[k].score;

          }

          a.sort(function(c,b){
            return c-b;
          })

          console.log(a);

        for(var l=1;l<=99;l++){
          for(var m=1;m<99;m++)
            {
              if(a[l]==data[m].score){
                console.log(data[m]+"HELLO");
                $('#output').append("<p>"+m+`</p><div class=\"card-panel teal ho\">

                                    <h6 class=\"link \"> Title:`+data[m].title+`</h6>
                                    <h6 class=\"link \"> Platform:`+data[m].platform+`</h6>
                                    <h6 class=\"link \">Genre:`+data[m].genre+`</h6>
                                    <h6 class=\"link \">Score:`+data[m].score+`</h6>
                                    <h6 class=\"link \">Editors Choice:`+data[m].editors_choice+`</h6>
                                    </div>`)
              }
            }

        }

    }
  });
}


function SortInDescending(){

  $.ajax({
    url:api,
    type:"GET",
    datatype:"jsonp",
    success:function(data){
      $('#output').html("");
      console.log(data);

        var a=new Array(99);
        for(var k=1;k<=99;k++){
            a[k]=data[k].score;

          }

          a.sort(function(c,b){
            return b-c;
          })

          console.log(a);

        for(var l=1;l<=99;l++){
          for(var m=1;m<99;m++)
            {
              if(a[l]==data[m].score){
                console.log(data[m]+"HELLO");
                $('#output').append("<p>"+m+`</p><div class=\"card-panel teal ho\">

                                    <h6 class=\"link \"> Title:`+data[m].title+`</h6>
                                    <h6 class=\"link \"> Platform:`+data[m].platform+`</h6>
                                    <h6 class=\"link \">Genre:`+data[m].genre+`</h6>
                                    <h6 class=\"link \">Score:`+data[m].score+`</h6>
                                    <h6 class=\"link \">Editors Choice:`+data[m].editors_choice+`</h6>
                                    </div>`)
              }
            }

        }

    }
  });
}

function displayPlaystation(){
var search ="PlayStation 3";

  $.ajax({
    url:api,
    type:"GET",
    datatype:"jsonp",
    success:function(data){
      $('#output').html("");
      for(var i=1;i<99;i++){

        if(data[i].platform==search){
          $('#output').append("<p>"+i+`</p><div class=\"card-panel teal ho\">

                              <h6 class=\"link \"> Title:`+data[i].title+`</h6>
                              <h6 class=\"link \"> Platform:`+data[i].platform+`</h6>
                              <h6 class=\"link \">Genre:`+data[i].genre+`</h6>
                              <h6 class=\"link \">Score:`+data[i].score+`</h6>
                              <h6 class=\"link \">Editors Choice:`+data[i].editors_choice+`</h6>
                              </div>`)
        }
      }

    }
  });
}

function displayPC(){
  var search ="PC";

    $.ajax({
      url:api,
      type:"GET",
      datatype:"jsonp",
      success:function(data){
        $('#output').html("");
        for(var i=1;i<99;i++){

          if(data[i].platform==search){
            $('#output').append("<p>"+i+`</p><div class=\"card-panel teal ho\">

                                <h6 class=\"link \"> Title:`+data[i].title+`</h6>
                                <h6 class=\"link \"> Platform:`+data[i].platform+`</h6>
                                <h6 class=\"link \">Genre:`+data[i].genre+`</h6>
                                <h6 class=\"link \">Score:`+data[i].score+`</h6>
                                <h6 class=\"link \">Editors Choice:`+data[i].editors_choice+`</h6>
                                </div>`)
          }
        }

      }
    });
}

function displayXbox(){
  var search ="Xbox 360";

    $.ajax({
      url:api,
      type:"GET",
      datatype:"jsonp",
      success:function(data){
        $('#output').html("");
        for(var i=1;i<99;i++){

          if(data[i].platform==search){
            $('#output').append("<p>"+i+`</p><div class=\"card-panel teal ho\">

                                <h6 class=\"link \"> Title:`+data[i].title+`</h6>
                                <h6 class=\"link \"> Platform:`+data[i].platform+`</h6>
                                <h6 class=\"link \">Genre:`+data[i].genre+`</h6>
                                <h6 class=\"link \">Score:`+data[i].score+`</h6>
                                <h6 class=\"link \">Editors Choice:`+data[i].editors_choice+`</h6>
                                </div>`)
          }
        }

      }
    });
}
