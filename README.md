Angular 1 + Haxe 3 sample
---

A small sample on how to use Haxe to give a better structure to an Angular 1.5 app. 

It was shown as a practical example of using Haxe targetting JS in a talk I gave at a WDT*[0] gathering in Colima, Mexico.

You can find the slides [here](wdt_haxe.pdf) (in PDF).

*[0] http://www.webdevtalks.mx/

Angular.Haxe
---

It uses a forked version of Angular.Haxe, at least until this PR is merged: https://github.com/frabbit/angular.haxe/pull/13.


Setting up your env
---

1. Clone this repo ;)
2. Install Haxe - follow the instructions for your OS here: http://haxe.org/download/;
3. Install the forked version of `angular.haxe`: `haxelib git angular.haxe git@github.com:fullofcaffeine/angular.haxe.git`
4. Install `monsoon`: `haxelib install monsoon-embed`
5. Compile the project: `haxe build.hxml`. This will generate two outputs: `bin/app.js` (client) and `bin/server.n` (the server)
6. Start the server: `neko bin/server.n` (NekoVM is part of the Haxe distribution)
7. You can now point your browser to `localhost:5000` to test the Haxe-powered Angular 1.5 sample app.

Having issues?
---

If you have any issues or if you have any questions, feel free to ping me on twitter @fullofcaffeine.

Haxe
---

Learn more about Haxe -- check the presentation PDF, or go to: http://haxe.org. 

Join us on #haxe @ freenode.
