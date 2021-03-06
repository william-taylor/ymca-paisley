
import { bootstrapControllers } from './controllers/controllers';
import { bootstrapServices } from './services/services';
import { routeTable } from './model/consts';
import * as angular from 'angular';
import 'angular-route'; 

const app = angular.module("ymca", ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true); 
    for(let key in routeTable) {
        $routeProvider.when(key, routeTable[key]);
    }
    $routeProvider.otherwise('/');
});

bootstrapServices(app);
bootstrapControllers(app); 