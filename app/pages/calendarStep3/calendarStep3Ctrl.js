/**
 * Step3 Controller
 */
class CalendarStep3Controller {
    /**
     * Define required services
     * @return {undefined} undefined
     */
    constructor() {
    }

    /**
     * Init all default variables
     * @return {undefined} undefined
     */
    $onInit() {
        const eventDetails = window.sessionStorage.getItem('user-data');
        if (eventDetails) {
            this.eventDetails = JSON.parse(eventDetails);
        }
    }
}

export { CalendarStep3Controller } 