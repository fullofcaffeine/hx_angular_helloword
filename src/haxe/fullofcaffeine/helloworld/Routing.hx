package fullofcaffeine.helloworld;

import angular.route.*;
import angular.service.Scope;
import fullofcaffeine.helloworld.controllers.AboutController;

class Routing {
  public static function setup(module:angular.Module) {
    module.config(function(routing:RouteProvider) {
      //TODO Use the templateCache, read the template in macro time and embed it, and set it to the cache
      //TODO Keep a macro-time registry of controllers and only accept registered controllers in the controller key, failt o compile otherwise
      //TODO Do the same for templates?
      routing.when('/about', {controller: 'AboutController', templateUrl: 'about.html'});
    });
  }
}
