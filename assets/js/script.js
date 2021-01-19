{/* <div class="row">
<div class="col-md-1"></div>
<div class="col-md-1 border-top border-bottom border-secondary border-right">hour</div>
<div class="col-md-8 bg-success border-top border-bottom border-white">notes!</div>
<div class="col-md-1 bg-primary border-primary rounded-right"><button class="btn btn-primary">Save</button></div>
<div class="col-md-1"></div>
</div> */}

const dayStart = 5
const dayEnd = 10

function addTimeBlock(hour){
    var timeRow = $("<div class='row'>");
    var bufferLeft = $("<div class='col-md-1'>");
    var hourBlock = $("<div class='col-md-1 border-top border-bottom border-secondary border-right'>");
    var textBlock = $("<input type='text' data-hour-id="+hour+" class='col-md-8 bg-success border-top border-bottom border-white event-text'>");
    var saveBlock = $("<div class='col-md-1 bg-primary border-primary rounded-right'><button data-button-hour="+hour+" class='btn btn-primary save-button'>Save</button></div>")
    var bufferRight = $("<div class='col-md-1'>");

    hourBlock.text(hour);
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