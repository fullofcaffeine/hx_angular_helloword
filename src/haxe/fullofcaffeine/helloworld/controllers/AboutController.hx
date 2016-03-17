package fullofcaffeine.helloworld.controllers;

import angular.*;
import angular.service.*;
import angular.support.*;

class AboutController {
  public function new(scope:Scope) {
    scope.set('hai','Hi there!');
  }
}
