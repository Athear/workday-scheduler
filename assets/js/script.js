{/* <div class="row">
<div class="col-md-1"></div>
<div class="col-md-1 border-top border-bottom border-secondary border-right">hour</div>
<div class="col-md-8 bg-success border-top border-bottom border-white">notes!</div>
<div class="col-md-1 bg-primary border-primary rounded-right"><button class="btn btn-primary">Save</button></div>
<div class="col-md-1"></div>
</div> */}


//dayStart and dayEnd are in 24-hour format
const dayStart = 8
const dayEnd = 17
var currentHour = luxon.DateTime.local().hour;

function addTimeBlock(hour){
    var bgColor

    if(hour<currentHour){
        bgColor = "bg-secondary"
    }else if(hour>currentHour){
        bgColor = "bg-success"
    }else{
        bgColor = "bg-danger"
    }

    var timeRow = $("<div class='row'>");
    var bufferLeft = $("<div class='col-md-1'>");
    var hourBlock = $("<div class='col-md-1 border-top border-bottom border-secondary border-right'>");
    var textBlock = $("<input type='text' data-hour-id="+hour+" class='col-md-8 "+bgColor+" border-top border-bottom border-white event-text'>");
    var saveBlock = $("<div class='col-md-1 bg-primary border-primary rounded-right'><button data-button-hour="+hour+" class='btn btn-primary save-button'>Save</button></div>")
    var bufferRight = $("<div class='col-md-1'>");

    if(hour>12){
        hourBlock.text(hour-12+"PM")
    }else{
        hourBlock.text(hour+"AM")
    }

    textBlock.attr("value","notes");

    timeRow.append(bufferLeft,hourBlock,textBlock,saveBlock,bufferRight);
    $("#timeblock-container").append(timeRow);
}




for(var i = dayStart; i<dayEnd;i++){
    addTimeBlock(i);
}

$(".save-button").on("click", function(){
    $("[data-hour-id="+$(this).data("button-hour")+"]").attr("value",$(this).data("button-hour")+" clicked!");
    //$(".event-text").attr("value",$(this).data("button-hour")+" clicked!");
})