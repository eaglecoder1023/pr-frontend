/**
 * Step2 Controller
 */
class CalendarStep2Controller {
    /**
     * Define required services
     * @return {undefined} undefined
     */
    constructor($state) {
        this.$state = $state;
    }

    save() {
        window.sessionStorage.setItem('user-data', JSON.stringify(this.eventDetails));
        setTimeout(() => {
            this.$state.go("step3");
        }, 0);
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

CalendarStep2Controller.$inject = ['$state'];

export { CalendarStep2Controller } 