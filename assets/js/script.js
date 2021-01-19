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
    var textBlock = $("<div class='col-md-8 bg-success border-top border-bottom border-white'>");
    var saveBlock = $("<div class='col-md-1 bg-primary border-primary rounded-right'><button class='btn btn-primary'>Save</button></div>")
    var bufferRight = $("<div class='col-md-1'>");

    hourBlock.text(hour);
    textBlock.text("notes");

    timeRow.append(bufferLeft,hourBlock,textBlock,saveBlock,bufferRight);
    $("#timeblock-container").append(timeRow);
}

for(var i = dayStart; i<dayEnd;i++){
    addTimeBlock(i);
}

