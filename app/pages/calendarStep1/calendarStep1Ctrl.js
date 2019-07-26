/**
 * Step1 Controller
 */
class CalendarStep1Controller {

    /**
     * Define required services
     * @return {undefined} undefined
     */
    constructor() {
        this.eventDetails = null;

    }

    /**
     * Calls someOutput with the value of someInput put in fancyFunction
     * @return {undefined} undefined
     */
    click() {
        console.log('doing super things')
        this.someOutput({ value: fancyFunction(this.someInput, 3) })
    }

    setEventDetails() {
        this.eventDetails = {
            presentor: 'David Smith',
            presentorAvatar: 'assets/images/mpu-person-icon.png',
            duration: '30 Minute Meeting',
            title: 'Strategy Call GMM Members Only',
            location: 'https://us04web.zoom.us/j/861483882',
            description: 'Please choose a date and time that suits you to have a chat with David about your project. This call is about the roadmap and strategic planning of your business.',
            videoUrl: 'assets/images/videoimage.png'
        }
    }

    /**
     * Init all default variables
     * @return {undefined} undefined
     */
    $onInit() {
        this.setEventDetails();
    }
}

export { CalendarStep1Controller } 