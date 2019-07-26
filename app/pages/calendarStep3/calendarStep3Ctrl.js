/**
 * Step1 Controller
 */
class CalendarStep3Controller {
    /**
     * Define required services
     * @return {undefined} undefined
     */
    constructor() {
        console.log('input bindings arent defined!', this.someInput)
    }

    /**
     * Calls someOutput with the value of someInput put in fancyFunction
     * @return {undefined} undefined
     */
    click() {
        console.log('doing super things')
        this.someOutput({ value: fancyFunction(this.someInput, 3) })
    }

    /**
     * Init all default variables
     * @return {undefined} undefined
     */
    $onInit() {

    }
}

export { CalendarStep3Controller } 