// tooltip

$("path").hover(

  function(event){
    $(this).attr("fill", "#0A8996")

    country = $(this).parent().attr("class").split(' ')[1];
    aCountry = $(this).parent().attr("class").split(' ')[2];
    // console.log(papayas)

    xCoordinate = event.offsetX
    yCoordinate = event.offsetY
    $("#tooltip").css("top", yCoordinate)
    $("#tooltip").css("left", xCoordinate)

    if( aCountry == 'visa'){
        $("#tooltip").html(countries[country] +  "<br/> <thin> Necesitas visa para visitar este país.")
    } else if (aCountry =='casa'){
      $("#tooltip").html(countries[country] + " <br/> <thin>¡Estás en casa!")
    }
    else if (aCountry =='llegada'){
      $("#tooltip").html(countries[country] + " <br/> <thin>Te darán una visa all legar a este país")
    }
     else {
        $("#tooltip").html(countries[country] + "<br/> <thin>¡Puedes visitar este país sin visa!")
    }
  },
  function(){
    $(this).attr("fill", "")
  }
)



// Create table

function processJSONtoName(object){
  var newStringWithClass = "<tr><td>" + object.name +  "</td><td class=" +  getVisaFromObject(object) + ">" + object.visa + "</td></tr>"
  return newStringWithClass
}

function generateTable(array){
  var newString = ""
  for(var i = 0; i < array.length; i++){
    newString += processJSONtoName(array[i])
  }
  return newString
}

// Change colors based on visa status

function getVisaFromObject(object){
  if (object.visa == "Necesita Visa") {
    return "hasVisa"
  }
  else if (object.visa == "Exento de Visa") {
    return "noVisa"
  }
  else if (object.visa == "Visa al llegar") {
    return "onArrival"
  }
  else {
    return "atHome"
  }
}

$("#table").html(generateTable(objectArray));



function changeDivColor(object){
  for(var i = 0; i < object.length; i++){
    if (object[i].visa == "Necesita Visa") {
      newClass += "hasVisa"
    }
    else if (object[i].visa == "Exento de Visa") {
      newClass += "noVisa"
    }
    else {
	    newClass += "onArrival"
    }
  }
  return newClass

}


 // Buscar

 $("#search").keyup(function(){
    _this = this;
    // Show only matching TR, hide rest of them
    $.each($("#main-table tbody tr"), function() {
        if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
           $(this).hide();
        else
           $(this).show();
    });
});
