export function adjustTimeZone(date){
    var eventDate = new Date(date);
    eventDate = new Date(eventDate.getTime() + 1 * 86400000);

    return eventDate;
}

export function formatDateMMddYYYY(date){
    console.log("Looping");
    debugger;

    var eventDate = new Date(date);
    var year = eventDate.getFullYear();
    var month = eventDate.getMonth()+1;
    var day = eventDate.getDate();

    return month + '/' + day + '/' + year;
}

export function formatDateYYYYmmDD(date){
    var eventDate = new Date(date);
    var year = eventDate.getFullYear();
    var month = eventDate.getMonth()+1;
    var day = eventDate.getDate();

    if(month < 10){
        month = '0' + month;
    }
    if(day < 10){
        day = '0' + day;
    }

    return year + '-' + month + '-' + day;
}

export function formatTime(time){
    if(time != null){
        time = time.split(':');

        var hour = Number(parseInt(time[0]));
        var minutes = Number(parseInt(time[1]));
        var identifier = 'AM'; //Initialize AM PM identifier

        if(hour === 12){ //If hour is 12 then should set AM PM identifier to PM
        identifier = 'PM';
        }
        if(hour === 0){ //If hour is 0 then set to 12 for standard time 12 AM
            hour=12;
        }
        if(hour > 12){ //If hour is greater than 12 then convert to standard 12 hour format and set the AM PM identifier to PM
            hour = hour - 12;
            identifier='PM';
        }
        if(minutes < 10){
            minutes = '0' + minutes;
        }
    
        return hour + ':' + minutes + ' ' + identifier; //Return the constructed standard time
    }
    else{
        return '';
    }
}

export function formatStartEndTime(start, end){
    var output = "";

    if (start != null){
        output += formatTime(start)

        if (end != null){
            output += ' - ' + formatTime(end);
        }

        return output;
    }
    else{
        return '';
    }
}

export function timeToInt(time){
    if(time != null){
        time = time.split(':');
        var result = time[0] + time[1];
        return parseInt(result);
    }
    else{
        return 0;
    }
}