$.getJSON( "/messages", function( data ) {
    $("#message-list").append("<tr> <th> Sender </th> <th> Recipient </th> <th> Content </th> </tr>");
    $.each( data, function( index, item ) {
        // if your IDE complains about this, ignore it, it is wrong
        $("#message-list").append("<tr> id='" + index + "'><td>" + item.sender_email + "</td><td>" + item.receiver_email + "</td><td>" + item.content +"</td></tr>");
    });
});