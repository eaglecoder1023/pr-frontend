import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import datepicker from 'angular-ui-bootstrap/src/datepicker';
import { CalendarStep1Controller } from './pages/calendarStep1/calendarStep1Ctrl';
import { CalendarStep2Controller } from './pages/calendarStep2/calendarStep2Ctrl';
import { CalendarStep3Controller } from './pages/calendarStep3/calendarStep3Ctrl';
import { appRoutingConfigs } from './app-route';
import './assets/sass/app.sass';
/**
 * @class Has fields addValue and fancyValue. Manages state between superAwesomeComponents
 */
class AppController {
  constructor() {
  }
}

angular.module('calendarApp', [uirouter, datepicker])
  .controller('CalendarStep1Controller', CalendarStep1Controller)
  .controller('CalendarStep2Controller', CalendarStep2Controller)
  .controller('CalendarStep3Controller', CalendarStep3Controller)
  .config(appRoutingConfigs)
  .controller('AppController', AppController)