//current day time
{
    var day = moment().format("llll");
    $("#currentDay").append(day);

}

//view the timeblocks for that day//
var momentTime = moment().startOf("day").add(-1, "hour");
var hour = moment().format("H");
//working hours displayed //
for (var i = 0; i < 24; i++) {
    var HourSlot = momentTime.add(1, "hour").format("HH:mm A"); 
    var MinuteSlot =   momentTime.add(0, "minute").format("mm"); 

    //troubleshooting aid//
    console.log(HourSlot)
    console.log(MinuteSlot)

    console.log (HourSlot % 12)
