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


    emailValidation(form) {
        return form.email && form.email.$error.pattern ? 'Email is invalid' : 'Email is required';
    }

    phoneValidation(form) {
        return form.phoneNumber && form.phoneNumber.$error.ngIntlTelInput ? 'Phone number is invalid' : 'Phone number is required';
    }

    /**
     * Step2 Submit Event
     * Store latest data and route to next step
     */
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