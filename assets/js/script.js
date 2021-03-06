//present the current day
$("#currentDay").text(luxon.DateTime.local().toLocaleString({weekday:'long',month:'long',day:'2-digit'}))

//dayStart and dayEnd are in 24-hour format
const dayStartHour = 8
const dayEndHour = 17
var currentHour = luxon.DateTime.local().hour;

//use BEL character as array divider, in case user adds commas to notes
var bel = "\u2407"
//Fetch or initialize the array of entries for the time blocks
var timeBlockNoteArray = localStorage.getItem("timeBlockNoteArray")
if(!timeBlockNoteArray){
    timeBlockNoteArray = [];
}else{
    timeBlockNoteArray = timeBlockNoteArray.split(bel);
}


function addTimeBlock(index){
    var bgColor
    var hour = luxon.DateTime.fromObject({hour:index,zone:'local'})

    if(hour.hour<currentHour){
        bgColor = "past"
    }else if(hour.hour>currentHour){
        bgColor = "future"
    }else{
        bgColor = "present"
    }

    //TODO: use the classes given in sytle.css
    var timeRow = $("<div class='row'>");
    var bufferLeft = $("<div class='col-md-1'>");
    var hourBlock = $("<div class='col-md-1 hour '>");
    var textBlock = $("<textarea data-hour-id="+hour.hour+" class='col-md-8 "+bgColor+" time-block'>");
    var saveBlock = $("<div class='col-md-1'><button data-button-hour="+hour.hour+" class='btn-lg saveBtn save-button'><i class='fas fa-save'></i></button></div>")
    var bufferRight = $("<div class='col-md-1'>");

    hourBlock.text(hour.toLocaleString({hour:'numeric'}));
    textBlock.text(timeBlockNoteArray[hour.hour]);

    timeRow.append(bufferLeft,hourBlock,textBlock,saveBlock,bufferRight);
    $("#timeblock-container").append(timeRow);
}


for(var i = dayStartHour; i<dayEndHour;i++){
    addTimeBlock(i);
}

$(".save-button").on("click", function(){
    //a selector based on a data attribute
    assocBlock = $("[data-hour-id="+$(this).data("button-hour")+"]")
    timeBlockNoteArray[$(this).data("button-hour")]=assocBlock.val();
    localStorage.setItem("timeBlockNoteArray",timeBlockNoteArray.join(bel))
})