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

    
      //Times//
    var currentDayTime;
    if (hour == i) {
        currentDayTime = 'present';
    } else if (hour > i) {
        currentDayTime = 'past';
    } else if (hour < i) {
        currentDayTime = 'future';
    }

    
   // main source per hour slot container
    var Schedule =
        `<container class="row" id='hour-${i}'>
            <div class="hour">${HourSlot}</div>
            <textarea class= "contextArea  ${currentDayTime} hour-${i}"></textarea>
            <button class= "saveBtn w-25  fas fa-save"></button></div>  
        </container>`;

    $("#MAINSOURCE").append(Schedule);
};

// storage //
for (var i = 0; i < 24; i++) {
    $(`.hour-${i}`).val(localStorage.getItem(`hour-${i}`));
}



