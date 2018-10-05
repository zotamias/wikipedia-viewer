$(document).ready(function(){
  
  //Search function, runs the code
  $('#search').click(function(){
    
   var searchTerm= $('#searchTerm').val();
   
 var url= "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&origin=*"; 
    
   $.ajax({
     type: "GET",
     url:url,
     async: false,
     dataType: "json",
     success: function(data){ //start of success function
       //data[1][0] shows the heading
       //data[2][0] show the description
       //data[3][0] gets the link
       $("#result").html("");
       
       for(var i=0; i<data[1].length; i++){
         $("#result").append("<div><div class='btn-result'><a target='_blank' href= "+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></div></div>");
       }// end of for statement
       
     },//end of success
     error: function(errorMessage){ //start of error function
       alert("Oops! There is an error.");
     },//end of error
     
   });//end of ajax
    
  });//end of click function
  
  
  /*action when pressing the enter key for search results */ 
  $("#searchTerm").keypress(function(event) {
    if(event.which===13) {
        $("#search").click();
    }
});//end of enter key
    
});//end of main function
