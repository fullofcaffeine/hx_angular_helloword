package fullofcaffeine.helloworld.controllers;

import angular.*;
import angular.service.*;
import angular.provider.LocationProvider;

typedef FooScope = {
  data: { foo: String },
  ?openAbout: Void->Void
}

class FooController {
  public function new(scope:TypedScope<FooScope>, location:Location) {
    scope.data = {foo: helperFunc()};

    scope.openAbout = function() {
      location.path('/about');
    }
  }

  public function helperFunc():String {
    return  "Hello World From Angular 1.5 and Haxe 3.2";
  }
}
