/**
 * Step1 Controller
 */
class CalendarStep3Controller {
    /**
     * Define required services
     * @return {undefined} undefined
     */
    constructor() {
    }

    /**
     * Calls someOutput with the value of someInput put in fancyFunction
     * @return {undefined} undefined
     */
    click() {
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