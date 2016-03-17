using Monsoon;

import monsoon.middleware.*;
import haxe.io.Path;

class Server {
  public static function main() {
    var port = 5000;
    var app = new Monsoon();
    app.route('/', Static.serve(Sys.getCwd() + '/bin', {index: ['index.html']}));
    app.listen(port);
    trace('Server ready and listening on port ${port}...');
  }
}
