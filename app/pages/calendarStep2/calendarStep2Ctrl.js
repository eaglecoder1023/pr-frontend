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


        this.mobileErrorCodeData = {
            1: 'Country code is invalid',
            0: 'Is Possible',
            4: 'Input is invalid',
            3: 'Input is too long',
            2: 'Input is too short'
        }
    }


    emailValidation(form) {
        return form.email && form.email.$error.pattern ? 'Email is invalid' : 'Email is required';
    }

    phoneValidation(form) {
        return form.phoneNumber && form.phoneNumber.$error.ngIntlTelInput ? this.mobileErrorCodeData[this.mobileErrorCode] : 'Phone number is required';
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