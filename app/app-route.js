'use strict';

function appRoutingConfigs($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "pages/calendarStep1/calendarStep1.html",
            controller: 'CalendarStep1Controller as step1'
        })
        .state('step2', {
            url: "/step2",
            templateUrl: "pages/calendarStep2/calendarStep2.html",
            controller: 'CalendarStep2Controller as step2'
        })
        .state('step3', {
            url: "/step3",
            templateUrl: "pages/calendarStep3/calendarStep3.html",
            controller: 'CalendarStep3Controller as step3'
        });
};

appRoutingConfigs.$inject = ['$stateProvider', '$urlRouterProvider'];
export { appRoutingConfigs };