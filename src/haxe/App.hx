package;

import angular.*;
import fullofcaffeine.helloworld.controllers.*;
import fullofcaffeine.helloworld.models.*;
import fullofcaffeine.helloworld.Routing;

class App {
  static var dependencies:Array<String> = ['ngRoute'];

  static public function main() {
    var module = Angular
                  .module('HxAngularHelloWorld', dependencies)
                  .factory(News.new)
                  .directive('news', NewsController.buildDirective())
                  .controller('FooController', FooController.new)
                  .controller('AboutController', AboutController.new);

    Routing.setup(module);
  }
}
