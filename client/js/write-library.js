//Create a listener that waits for user to enter submit button
    //Submit Library books
    $('#data-submit').click(function() {
        var productName = $('#productName').val();
        var description = $('#description').val();
        var price = $('#price').val();
        var availability = $('#availability').val();
        var reviews = $('#reviews').val();
    
        var jsonString = {
            productName: productName, 
            description: description,
            price: price,
            availability: availability,
            reviews: reviews
        };
        
         $.ajax({
             url: libraryURL + "/write-record",
             type:"post",
             data: jsonString,
             success: function(response){
                var data = JSON.parse(response);
                if(data.message === "SUCCESS"){
                    alert("Data saved!");
                } else{
                    console.log(data.msg);
                }
             },
             error: function(err){
                console.log(err);
             }
         });
    
         return false;
    
    });
        
    