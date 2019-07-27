import { getTimeSlot } from '../../common/time-slot-service';

/**
 * Step1 Controller
 */
class CalendarStep1Controller {

    /**
     * Define required services
     * @return {undefined} undefined
     */
    constructor($state) {
        this.$state = $state;
        this.eventDetails = null;
        this.eventDateOptions = {
            minDate: new Date(),
            showWeeks: false,
            dateDisabled: this.disabled,
        }
    }

    /**
     * Disabled Weekends
     */
    disabled(data) {
        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }


    /**
     * Confrim button click event
     * Store selected user data and redirect to next step
     * @return {undefined} undefined
     */
    confirm() {
        window.sessionStorage.setItem('user-data', JSON.stringify(this.eventDetails));
        setTimeout(() => {
            this.$state.go("step2");
        }, 0);
    }

    /**
     * Event Detail Initail Object
     */

    setEventDetails() {
        this.eventDetails = {
            presentor: 'David Smith',
            presentorAvatar: 'assets/images/mpu-person-icon.png',
            duration: '30 Minute Meeting',
            title: 'Strategy Call GMM Members Only',
            location: 'https://us04web.zoom.us/j/861483882',
            description: 'Please choose a date and time that suits you to have a chat with David about your project. This call is about the roadmap and strategic planning of your business.',
            videoUrl: 'assets/images/videoimage.png',
            user: {
                selectedDate: null,
                selectedTimezone: moment.tz.guess(),
                selectedTime: null
            }
        }
    }

    /**
     * Select Time event
     */
    selectTime(item) {
        this.eventDetails.user.selectedTime = item;
    }

    /**
     * Init all default variables
     * @return {undefined} undefined
     */
    $onInit() {
        this.setEventDetails();
        this.timeslots = getTimeSlot('12:00', '18:00', 30);
    }

}

CalendarStep1Controller.$inject = ['$state'];

export { CalendarStep1Controller } 