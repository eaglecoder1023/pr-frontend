/**
 * Utility function to get time slots for specific time with specific interval
 */
export const getTimeSlot = (start, end, slot) => {
    var startTime = moment(start, 'HH:mm');
    var endTime = moment(end, 'HH:mm');

    if (endTime.isBefore(startTime)) {
        endTime.add(1, 'day');
    }

    var timeStops = [];

    while (startTime <= endTime) {
        timeStops.push(new moment(startTime).format('hh:mm a'));
        startTime.add(slot, 'minutes');
    }
    return timeStops;
}
