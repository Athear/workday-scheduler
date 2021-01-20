{/* <div class="row">
<div class="col-md-1"></div>
<div class="col-md-1 border-top border-bottom border-secondary border-right">hour</div>
<div class="col-md-8 bg-success border-top border-bottom border-white">notes!</div>
<div class="col-md-1 bg-primary border-primary rounded-right"><button class="btn btn-primary">Save</button></div>
<div class="col-md-1"></div>
</div> */}

//present the current day
$("#currentDay").text(luxon.DateTime.local().toLocaleString({weekday:'long',month:'long',day:'2-digit'}))

//dayStart and dayEnd are in 24-hour format
const dayStartHour = 8
const dayEndHour = 17
var currentHour = luxon.DateTime.local().hour;

function addTimeBlock(index){
    var bgColor
    var hour = luxon.DateTime.fromObject({hour:index,zone:'local'})

    if(hour.hour<currentHour){
        bgColor = "bg-secondary"
    }else if(hour.hour>currentHour){
        bgColor = "bg-success"
    }else{
        bgColor = "bg-danger"
    }

    var timeRow = $("<div class='row'>");
    var bufferLeft = $("<div class='col-md-1'>");
    var hourBlock = $("<div class='col-md-1 border-top border-bottom border-secondary border-right'>");
    var textBlock = $("<input type='text' data-hour-id="+hour.hour+" class='col-md-8 "+bgColor+" border-top border-bottom border-white event-text'>");
    var saveBlock = $("<div class='col-md-1 bg-primary border-primary rounded-right'><button data-button-hour="+hour.hour+" class='btn btn-primary save-button'>Save</button></div>")
    var bufferRight = $("<div class='col-md-1'>");

    hourBlock.text(hour.toLocaleString({hour:'numeric'}));

    // textBlock.attr("value","notes");

    timeRow.append(bufferLeft,hourBlock,textBlock,saveBlock,bufferRight);
    $("#timeblock-container").append(timeRow);
}




for(var i = dayStartHour; i<dayEndHour;i++){
    addTimeBlock(i);
}

$(".save-button").on("click", function(){
    //a selector based on a data attribute
    assocBlock = $("[data-hour-id="+$(this).data("button-hour")+"]")
    assocBlock.attr("value",$(this).data("button-hour")+" clicked!");
    // localStorage.setItem($(this).data("button-hour")+"Input",assocBlock.val());
})