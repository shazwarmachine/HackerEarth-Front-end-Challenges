
var api="http://starlord.hackerearth.com/kickstarter";
var city=[];
var sortAs=[];
sortAs.fill(0);














$(document).ready(function(){
  document.getElementById('SearchBox').value="";
  $.ajaxSetup({ cache: false });

$('#SearchBox').keyup(function(){

$('#result').html("");

 var searchField = $('#SearchBox').val();
 var expression = new RegExp(searchField, "i");
 $.ajax({
   url:api,
   type:"GET",
   datatype:"jsonp",
   success:function(data){

     for(var i=0;i<=100;i++){
       if (data[i].title.search(expression) != -1 && document.getElementById('SearchBox').value!="")
       {
        $('#result').append('<li class="list-group-item link-class"> '+data[i].title+' </li>');
       }
     }

   }
 }
);
console.log(document.getElementById('SearchBox').value);


});
$('#result').on('click', 'li', function() {
 var click_text = $(this).text().split('|');
 $('#SearchBox').val($.trim(click_text[0]));
 $("#result").html("");
});
  getProjects();
/*  sortDate()
  getEndTIme();*/
//  getCity();
  $("#searchBtn").click(function(){
    project=document.getElementById('SearchBox').value;
    /* Getting Project via Search*/
    getProject(project);

  });

  $("#sort").change(function(){
    console.log(document.getElementById('sort').value);
    if(document.getElementById('sort').value=="ascending"){
      SortInAscending(sortAs);
    }
    else if(document.getElementById('sort').value=="descending"){
      SortInDescending(sortAs);
    }
    else{
      getProjects();
    }
  });
  $("#sort_t").change(function(){
    console.log(document.getElementById('sort_t').value);
    if(document.getElementById('sort_t').value=="ascending"){
      console.log(sortAs);
      SortInAscendingT(sortAs);
    }
    else if(document.getElementById('sort_t').value=="descending"){
      SortInDescendingT(sortAs);
    }
    else{
      getProjects();
    }
  });
  $("#sort_loc").change(function(){
    console.log(document.getElementById('sort_loc').value);
    let val=document.getElementById('sort_loc').value;
    if(val == ""){
      console.log(val);
      getProjects();
    }
    else{
      findViaLoc(val);
    }


  });



$('select').material_select();

});


/*function getAll(k){
  console.log(k);

  $.ajax({
     url:api,
     type:"GET",
     datatype:"jsonp",
     success:function(data){

       console.log("hello");
       $('#ty').html("");
       console.log(data);


         $('#ty').append("<p>"+k+`</p><div class=\"card-panel teal ho\">

                             <h6 class=\"link \"><span class=\"white-text\"> Title </span>:`+data[k].title+`</h6>
                             <h6 class=\"link \"> <span class=\"white-text\"> By. </span>:`+data[k].by+`</h6>
                             <h6 class=\"link truncate \"><span class=\"white-text\"> Blurb </span>:`+data[k].blurb+`</h6>
                             <h6 class=\"link \"><span class=\"white-text\"> Country </span>:`+data[k].country+`</h6>
                             <h6 class=\"link \"><span class=\"white-text\"> Location </span>:`+data[k]["end.time"]+`</h6>
                             <h6 class=\"link \"><span class=\"white-text\"> URL </span>:<a href=\"https://www.kickstarter.com`+data[k].url+`\" target=\"_blank\" class=\"a\"> https://www.kickstarter.com`+data[k].url+`</a></h6>
                             <h6 class=\"link \"><span class=\"white-text\"> Title </span>:`+data[k]["amt.pledged"]+`</h6>
                             <h6 class=\"link \"><span class=\"white-text\"> Title </span>:`+data[k].currency+`</h6>
                             <h6 class=\"link \"><span class=\"white-text\"> Title </span>:`+data[k].location+`</h6>
                             <h6 class=\"link \"><span class=\"white-text\"> Title </span>:`+data[k]["percentage.funded"]+`</h6>
                             <h6 class=\"link \"><span class=\"white-text\"> Title </span>:`+data[k].type+`</h6>
                             <h6 class=\"link \"><span class=\"white-text\"> Title </span>:`+data[k].state+`</h6>
                             </div>`);



     }
});
}*/
/*function getEndTIme(){

  $.ajax({
     url:api,
     type:"GET",
     datatype:"jsonp",
     success:function(data){
       console.log(data);
       var months=[];
       var dat=[];
       for(var i=0;i<=100;i++){*/

        /* 2016-11-01T23:59:00-04:00*/
        /*  let str=data[i]["end.time"];
          var et=str.split("T");
          let date=et[0].split("-");
          dat[i]=et[0];*/
        /*  console.log(date[0]);
          months[i]=date[1]+"-"+date[2];*/



        /*  console.log(date[0]);
          console.log(date[1]);
          console.log(date[2]);*/
/*
       }
       for(var j=0;j<=100;j++){
         sortDate(dat[j],dat[j+1]);
       }
       console.log(dat);*/

    // months.sort(function(a,b){
      //   return a-b;
       //})

/*
     }
   });
}*/



/*function getCity(){

  $.ajax({
     url:api,
     type:"GET",
     datatype:"jsonp",
     success:function(data){
       console.log(data);

       for(var i=0;i<=100;i++){
         city[i]=data[i].location;

       }


        console.log(removeDuplicates(city));
     }
   });
}

function removeDuplicates(loc){
  let unique_arr=[];
  for(var i=0;i<loc.length;i++){
    if(unique_arr.indexOf(loc[i])==-1){
      unique_arr.push(loc[i]);
    }
  }
  return unique_arr;
}*/


function getProjects(){


 $.ajax({
    url:api,
    type:"GET",
    datatype:"jsonp",
    success:function(data){

      console.log("hello");
      $('#output').html("");
      console.log(data);

      for(var i=0;i<=100;i++){
        $('#output').append("<p>"+i+`</p><div class=\"card-panel teal ho\">

                            <h6 class=\"link \"><span class=\"white-text\"> Title </span>:`+data[i].title+`</h6>
                            <h6 class=\"link \"> <span class=\"white-text\"> By. </span>:`+data[i].by+`</h6>
                            <h6 class=\"link truncate \"><span class=\"white-text\"> Blurb </span>:`+data[i].blurb+`</h6>
                            <h6 class=\"link \"><span class=\"white-text\"> Country </span>:`+data[i].country+`</h6>
                            <h6 class=\"link \"><span class=\"white-text\"> Location </span>:`+data[i].location+`</h6>
                            <h6 class=\"link \"><span class=\"white-text\"> URL </span>:<a href=\"https://www.kickstarter.com`+data[i].url+`\" target=\"_blank\" class=\"a\"> https://www.kickstarter.com`+data[i].url+`</a></h6>
                            <a href="" class=\" links\"  onclick=> More Details.. </a>
                            </div>`);

      }

    }
  });

}



function getProject(project){

  //console.log(urlString);
  $.ajax({
    url:api,
    type:"GET",
    datatype:"jsonp",
    success:function(data){
      $('#output').html("");
      console.log(data);
      var c=0;

      for(var i=0;i<100;i++){
        if(data[i].title==project){
          console.log(data[i]);

          $('#output').append("<p>"+i+`</p><div class=\"card-panel teal ho\">

                              <h6 class=\"link \"><span class=\"white-text\"> Title </span>:`+data[i].title+`</h6>
                              <h6 class=\"link \"> <span class=\"white-text\"> By. </span>:`+data[i].by+`</h6>
                              <h6 class=\"link truncate \"><span class=\"white-text\"> Blurb </span>:`+data[i].blurb+`</h6>
                              <h6 class=\"link \"><span class=\"white-text\"> Country </span>:`+data[i].country+`</h6>
                              <h6 class=\"link \"><span class=\"white-text\"> Location </span>:`+data[i].location+`</h6>
                              <h6 class=\"link \"><span class=\"white-text\"> URL </span>:<a href=\"https://www.kickstarter.com`+data[i].url+`\" target=\"_blank\" class=\"a\"> https://www.kickstarter.com`+data[i].url+`</a></h6>
                              <a href="" class=\" links\"> More Details.. </a>
                              </div>`);
        }
      }

    }
  });

}

function findViaLoc(location){
  var c=0;
  $.ajax({
    url:api,
    type:"GET",
    datatype:"jsonp",
    success:function(data){
      $('#output').html("");
      console.log(data);
      for(let i=0;i<=100;i++){

        if(data[i].location==location){
          console.log(data[i].location);
          sortAs[c]=data[i];
          c++;
          $('#output').append("<p>"+i+`</p><div class=\"card-panel teal ho\">

                              <h6 class=\"link \"><span class=\"white-text\"> Title </span>:`+data[i].title+`</h6>
                              <h6 class=\"link \"> <span class=\"white-text\"> By. </span>:`+data[i].by+`</h6>
                              <h6 class=\"link truncate \"><span class=\"white-text\"> Blurb </span>:`+data[i].blurb+`</h6>
                              <h6 class=\"link \"><span class=\"white-text\"> Country </span>:`+data[i].country+`</h6>
                              <h6 class=\"link \"><span class=\"white-text\"> Location </span>:`+data[i].location+`</h6>
                              <h6 class=\"link \"><span class=\"white-text\"> URL </span>:<a href=\"https://www.kickstarter.com`+data[i].url+`\" target=\"_blank\" class=\"a\"> https://www.kickstarter.com`+data[i].url+`</a></h6>
                              <a href="" class=\" links\"> More Details.. </a>
                              </div>`);

        }

      }
      console.log(sortAs);



    }
  });

}





/*function SortInAscending(){

  $.ajax({
    url:api,
    type:"GET",
    datatype:"jsonp",
    success:function(data){
      $('#output').html("");
      console.log(data);

        var a=new Array(101);
        for(var k=0;k<=100;k++){
            a[k]=data[k]["percentage.funded"];

          }

          a.sort(function(c,b){
            return c-b;
          })

          console.log(a);
          var c=0;
        for(var l=0;l<=100;l++){
          for(var m=0;m<=100;m++)
            {
              if(a[l]==data[m]["percentage.funded"]){



                $('#output').append("<p>"+m+`</p><div class=\"card-panel teal ho\">

                                    <h6 class=\"link \"><span class=\"white-text\"> Sno. </span>:`+data[m]["s.no"]+`</h6>
                                    <h6 class=\"link \"> <span class=\"white-text\"> Amt.pledeged. </span>:`+data[m]["amt.pledged"]+`</h6>
                                    <h6 class=\"link truncate \"><span class=\"white-text\"> Blurb </span>:`+data[m].blurb+`</h6>
                                    <h6 class=\"link \"><span class=\"white-text\"> By </span>:`+data[m].by+`</h6>
                                    <h6 class=\"link \"><span class=\"white-text\"> Country </span>:`+data[m].country+`</h6>
                                    <h6 class=\"link \"><span class=\"white-text\"> Country </span>:`+data[m].location+`</h6>
                                    <a href="" class=\" links\"> More Details.. </a>
                                    </div>`);
              }
            }

        }



    }
  });
}*/
function SortInAscending(ar1){
if(ar1==""){


  $.ajax({
    url:api,
    type:"GET",
    datatype:"jsonp",
    success:function(data){
      $('#output').html("");
      console.log(data);

        var a=new Array(101);
        for(var k=0;k<=100;k++){
            a[k]=data[k]["percentage.funded"];

          }

          a.sort(function(c,b){
            return c-b;
          })
          console.log(sortAs);
          console.log(a);
          var c=0;
        for(var l=0;l<=100;l++){
          for(var i=0;i<=100;i++)
            {
              if(a[l]==data[i]["percentage.funded"]){



                $('#output').append("<p>"+i+`</p><div class=\"card-panel teal ho\">

                                    <h6 class=\"link \"><span class=\"white-text\"> Title </span>:`+data[i].title+`</h6>
                                    <h6 class=\"link \"> <span class=\"white-text\"> By. </span>:`+data[i].by+`</h6>
                                    <h6 class=\"link truncate \"><span class=\"white-text\"> Blurb </span>:`+data[i].blurb+`</h6>
                                    <h6 class=\"link \"><span class=\"white-text\"> Country </span>:`+data[i].country+`</h6>
                                    <h6 class=\"link \"><span class=\"white-text\"> Location </span>:`+data[i].location+`</h6>
                                    <h6 class=\"link \"><span class=\"white-text\"> URL </span>:<a href=\"https://www.kickstarter.com`+data[i].url+`\" target=\"_blank\" class=\"a\"> https://www.kickstarter.com`+data[i].url+`</a></h6>
                                    <a href="" class=\" links\"> More Details.. </a>
                                    </div>`);
              }
            }

        }



    }
  });}

  else{
      $('#output').html("");
      console.log(ar1);
    var a=new Array(101);
    for(var k=0;k<ar1.length;k++){
        a[k]=ar1[k]["percentage.funded"];

      }

      a.sort(function(c,b){
        return c-b;
      })

      for(var l=0;l<ar1.length;l++){
        for(var i=0;i<ar1.length;i++)
          {
            if(a[l]==ar1[i]["percentage.funded"]){



              $('#output').append("<p>"+i+`</p><div class=\"card-panel teal ho\">

                                  <h6 class=\"link \"><span class=\"white-text\"> Title </span>:`+ar1[i].title+`</h6>
                                  <h6 class=\"link \"> <span class=\"white-text\"> By. </span>:`+ar1[i].by+`</h6>
                                  <h6 class=\"link truncate \"><span class=\"white-text\"> Blurb </span>:`+ar1[i].blurb+`</h6>
                                  <h6 class=\"link \"><span class=\"white-text\"> Country </span>:`+ar1[i].country+`</h6>
                                  <h6 class=\"link \"><span class=\"white-text\"> Location </span>:`+ar1[i].location+`</h6>
                                  <h6 class=\"link \"><span class=\"white-text\"> URL </span>:<a href=\"https://www.kickstarter.com`+ar1[i].url+`\" target=\"_blank\" class=\"a\"> https://www.kickstarter.com`+ar1[i].url+`</a></h6>
                                  <a href="" class=\" links\"> More Details.. </a>
                                  </div>`);
            }
          }

      }

  }
}
function SortInDescending(ar1){
if(ar1==""){


  $.ajax({
    url:api,
    type:"GET",
    datatype:"jsonp",
    success:function(data){
      $('#output').html("");
      console.log(data);

        var a=new Array(101);
        for(var k=0;k<=100;k++){
            a[k]=data[k]["percentage.funded"];

          }

          a.sort(function(c,b){
            return b-c;
          })
          console.log(sortAs);
          console.log(a);
          var c=0;
        for(var l=0;l<=100;l++){
          for(var i=0;i<=100;i++)
            {
              if(a[l]==data[i]["percentage.funded"]){



                $('#output').append("<p>"+i+`</p><div class=\"card-panel teal ho\">

                                    <h6 class=\"link \"><span class=\"white-text\"> Title </span>:`+data[i].title+`</h6>
                                    <h6 class=\"link \"> <span class=\"white-text\"> By. </span>:`+data[i].by+`</h6>
                                    <h6 class=\"link truncate \"><span class=\"white-text\"> Blurb </span>:`+data[i].blurb+`</h6>
                                    <h6 class=\"link \"><span class=\"white-text\"> Country </span>:`+data[i].country+`</h6>
                                    <h6 class=\"link \"><span class=\"white-text\"> Location </span>:`+data[i].location+`</h6>
                                    <h6 class=\"link \"><span class=\"white-text\"> URL </span>:<a href=\"https://www.kickstarter.com`+data[i].url+`\" target=\"_blank\" class=\"a\"  > https://www.kickstarter.com`+data[i].url+`</a></h6>
                                    <a href="" class=\" links\"> More Details.. </a>
                                    </div>`);
              }
            }

        }



    }
  });}

  else{
      $('#output').html("");
    var a=new Array(101);
    for(var k=0;k<ar1.length;k++){
        a[k]=ar1[k]["percentage.funded"];

      }

      a.sort(function(c,b){
        return b-c;
      })

      for(var l=0;l<ar1.length;l++){
        for(var i=0;i<ar1.length;i++)
          {
            if(a[l]==ar1[i]["percentage.funded"]){



              $('#output').append("<p>"+i+`</p><div class=\"card-panel teal ho\">

                                  <h6 class=\"link \"><span class=\"white-text\"> Title </span>:`+ar1[i].title+`</h6>
                                  <h6 class=\"link \"> <span class=\"white-text\"> By. </span>:`+ar1[i].by+`</h6>
                                  <h6 class=\"link truncate \"><span class=\"white-text\"> Blurb </span>:`+ar1[i].blurb+`</h6>
                                  <h6 class=\"link \"><span class=\"white-text\"> Country </span>:`+ar1[i].country+`</h6>
                                  <h6 class=\"link \"><span class=\"white-text\"> Location </span>:`+ar1[i].location+`</h6>
                                  <h6 class=\"link \"><span class=\"white-text\"> URL </span>:<a href=\"https://www.kickstarter.com`+ar1[i].url+`\" target=\"_blank\" class=\"a\"> https://www.kickstarter.com`+ar1[i].url+`</a></h6>
                                  <a href="" class=\" links\" id=\"mod\"> More Details.. </a>
                                  </div>`);
            }
          }

      }

  }
}

/*function SortInDescending(){

  $.ajax({
    url:api,
    type:"GET",
    datatype:"jsonp",
    success:function(data){
      $('#output').html("");
      console.log(data);

        var a=new Array(101);
        for(var k=0;k<=100;k++){
            a[k]=data[k]["percentage.funded"];

          }

          a.sort(function(c,b){
            return b-c;
          })

          console.log(a);

        for(var l=0;l<=100;l++){
          for(var m=0;m<=100;m++)
            {
              if(a[l]==data[m]["percentage.funded"]){
                console.log(data[m]+"HELLO");
                $('#output').append("<p>"+m+`</p><div class=\"card-panel teal ho\">

                                    <h6 class=\"link \"><span class=\"white-text\"> Sno. </span>:`+data[m]["s.no"]+`</h6>
                                    <h6 class=\"link \"> <span class=\"white-text\"> Amt.pledeged. </span>:`+data[m]["amt.pledged"]+`</h6>
                                    <h6 class=\"link truncate \"><span class=\"white-text\"> Blurb </span>:`+data[m].blurb+`</h6>
                                    <h6 class=\"link \"><span class=\"white-text\"> By </span>:`+data[m].by+`</h6>
                                    <h6 class=\"link \"><span class=\"white-text\"> Country </span>:`+data[m].country+`</h6>
                                    <h6 class=\"link \"><span class=\"white-text\"> Country </span>:`+data[m].location+`</h6>
                                    <a href="" class=\" links\"> More Details.. </a>
                                    </div>`);
              }
            }

        }

    }
  });
}*/


function SortInAscendingT(ar1){
  if(ar1==""){


    $.ajax({
      url:api,
      type:"GET",
      datatype:"jsonp",
      success:function(data){
        $('#output').html("");
        console.log(data);
        var dates=[];
        for(var i=0;i<=100;i++){
          dates[i]=data[i]["end.time"];
        }

        dates.sort(function(a, b) {
          return new Date(a) - new Date(b);
      });

      console.log(dates);

            var c=0;
          for(var l=0;l<=100;l++){
            for(var i=0;i<=100;i++)
              {
                if(dates[l]==data[i]["end.time"]){



                  $('#output').append("<p>"+i+`</p><div class=\"card-panel teal ho\">

                                      <h6 class=\"link \"><span class=\"white-text\"> Title </span>:`+data[i].title+`</h6>
                                      <h6 class=\"link \"> <span class=\"white-text\"> By. </span>:`+data[i].by+`</h6>
                                      <h6 class=\"link truncate \"><span class=\"white-text\"> Blurb </span>:`+data[i].blurb+`</h6>
                                      <h6 class=\"link \"><span class=\"white-text\"> Country </span>:`+data[i].country+`</h6>
                                      <h6 class=\"link \"><span class=\"white-text\"> Location </span>:`+data[i].location+`</h6>
                                      <h6 class=\"link \"><span class=\"white-text\"> URL </span>:<a href=\"https://www.kickstarter.com`+data[i].url+`\" target=\"_blank\" class=\"a\"> https://www.kickstarter.com`+data[i].url+`</a></h6>
                                      <a href="" class=\" links\"> More Details.. </a>
                                      </div>`);
                }
              }

          }



      }
    });}

    else{
        $('#output').html("");
        var dates=[];
        for(var i=0;i<ar1.length;i++){
          dates[i]=ar1[i]["end.time"];
        }

        dates.sort(function(a, b) {
          return new Date(a) - new Date(b);
      });

        for(var l=0;l<ar1.length;l++){
          for(var i=0;i<ar1.length;i++)
            {
              if(dates[l]==ar1[i]["end.time"]){



                $('#output').append("<p>"+i+`</p><div class=\"card-panel teal ho\">

                                    <h6 class=\"link \"><span class=\"white-text\"> Title </span>:`+ar1[i].title+`</h6>
                                    <h6 class=\"link \"> <span class=\"white-text\"> By. </span>:`+ar1[i].by+`</h6>
                                    <h6 class=\"link truncate \"><span class=\"white-text\"> Blurb </span>:`+ar1[i].blurb+`</h6>
                                    <h6 class=\"link \"><span class=\"white-text\"> Country </span>:`+ar1[i].country+`</h6>
                                    <h6 class=\"link \"><span class=\"white-text\"> Location </span>:`+ar1[i].location+`</h6>
                                    <h6 class=\"link \"><span class=\"white-text\"> URL </span>:<a href=\"https://www.kickstarter.com`+ar1[i].url+`\" target=\"_blank\" class=\"a\"> https://www.kickstarter.com`+ar1[i].url+`</a></h6>
                                    <a href="" class=\" links\"> More Details.. </a>
                                    </div>`);
              }
            }

        }

    }
}
function SortInDescendingT(ar){
  console.log(ar+"hello123");
  if(ar==""){


    $.ajax({
      url:api,
      type:"GET",
      datatype:"jsonp",
      success:function(data){
        $('#output').html("");
        console.log(data);
        var dates=[];
        for(var i=0;i<=100;i++){
          dates[i]=data[i]["end.time"];
        }

        dates.sort(function(a, b) {
          return new Date(b) - new Date(a);
      });

      console.log(dates);

            var c=0;
          for(var l=0;l<=100;l++){
            for(var i=0;i<=100;i++)
              {
                if(dates[l]==data[i]["end.time"]){



                  $('#output').append("<p>"+i+`</p><div class=\"card-panel teal ho\">

                                      <h6 class=\"link \"><span class=\"white-text\"> Title </span>:`+data[i].title+`</h6>
                                      <h6 class=\"link \"> <span class=\"white-text\"> By. </span>:`+data[i].by+`</h6>
                                      <h6 class=\"link truncate \"><span class=\"white-text\"> Blurb </span>:`+data[i].blurb+`</h6>
                                      <h6 class=\"link \"><span class=\"white-text\"> Country </span>:`+data[i].country+`</h6>
                                      <h6 class=\"link \"><span class=\"white-text\"> Location </span>:`+data[i].location+`</h6>
                                      <h6 class=\"link \"><span class=\"white-text\"> URL </span>:<a href=\"https://www.kickstarter.com`+data[i].url+`\" target=\"_blank\" class=\"a\"> https://www.kickstarter.com`+data[i].url+`</a></h6>
                                      <a href="" class=\" links\"> More Details.. </a>
                                      </div>`);
                }
              }

          }



      }
    });}

    else{
        $('#output').html("");
        var dates=[];
        for(var i=0;i<ar.length;i++){
          dates[i]=ar[i]["end.time"];
        }

        dates.sort(function(a, b) {
          return new Date(a) - new Date(b);
      });

        for(var l=0;l<ar.length;l++){
          for(var i=0;i<ar.length;i++)
            {
              if(dates[l]==ar[i]["end.time"]){



                $('#output').append("<p>"+i+`</p><div class=\"card-panel teal ho\">

                                    <h6 class=\"link \"><span class=\"white-text\"> Title </span>:`+ar[i].title+`</h6>
                                    <h6 class=\"link \"> <span class=\"white-text\"> By. </span>:`+ar[i].by+`</h6>
                                    <h6 class=\"link truncate \"><span class=\"white-text\"> Blurb </span>:`+ar[i].blurb+`</h6>
                                    <h6 class=\"link \"><span class=\"white-text\"> Country </span>:`+ar[i].country+`</h6>
                                    <h6 class=\"link \"><span class=\"white-text\"> Location </span>:`+ar[i].location+`</h6>
                                    <h6 class=\"link \"><span class=\"white-text\"> URL </span>:<a href=\"https://www.kickstarter.com`+ar[i].url+`\" target=\"_blank\" class=\"a\"> https://www.kickstarter.com`+ar[i].url+`</a></h6>
                                    <a href="" class=\" links\"> More Details.. </a>
                                    </div>`);
              }
            }

        }

    }
}
