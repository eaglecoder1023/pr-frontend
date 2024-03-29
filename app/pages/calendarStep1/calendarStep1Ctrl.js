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
            customClass: this.getCustomClass
        }
    }

    /**
     * Disabled Weekends
     */
    disabled(data) {
        const date = data.date, mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    getCustomClass(data) {
        const date = data.date, mode = data.mode;
        let customClass = '';
        if (mode === 'day') {
            let monthToCheck = date.getMonth();

            // 'this' refers to the datepicker's scope so you can get access to all it's goodies
            let activeMonth = this.datepicker.activeDate.getMonth();

            if (monthToCheck === activeMonth) {
                customClass = 'datepicker-day-current-month';
            }
        }

        return customClass;
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
            videoUrl: 'https://www.youtube.com/embed/mPCDQ34S8Rs',
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

    hideBack() {
        document.getElementById('hideBack').style.display = 'none';
        var active = document.querySelector(".card");
        active.classList.remove("withtime");
    }

    dateChange() {
        try {
            document.getElementById('hideBack').style.display = 'block';
            var active = document.querySelector(".card");
            active.classList.add("withtime");
        } catch (e) {

        }
    }

}

CalendarStep1Controller.$inject = ['$state'];

export { CalendarStep1Controller } 