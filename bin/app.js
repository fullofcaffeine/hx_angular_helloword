(function () { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var App = function() { };
App.__name__ = true;
App.main = function() {
	var module = window.angular.module("HxAngularHelloWorld",App.dependencies).factory("fullofcaffeine.helloworld.models.News",[function() {
		return new fullofcaffeine_helloworld_models_News();
	}]).directive("news",[fullofcaffeine_helloworld_controllers_NewsController.buildDirective()]).controller("FooController",["$scope","$location",function(scope,location) {
		return new fullofcaffeine_helloworld_controllers_FooController(scope,location);
	}]).controller("AboutController",["$scope",function(scope1) {
		return new fullofcaffeine_helloworld_controllers_AboutController(scope1);
	}]);
	fullofcaffeine_helloworld_Routing.setup(module);
};
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
var angular_internal_ModuleMacros = function() { };
angular_internal_ModuleMacros.__name__ = true;
var angular_internal_DirectiveBuilderMacros = function() { };
angular_internal_DirectiveBuilderMacros.__name__ = true;
var angular_internal_Options = function() { };
angular_internal_Options.__name__ = true;
angular_internal_Options.each = function(o,f) {
	switch(o[1]) {
	case 0:
		var x = o[2];
		f(x);
		break;
	case 1:
		break;
	}
};
var angular_support_DirectiveBuilder = function() {
	this._replace = haxe_ds_Option.None;
	this._restrict = haxe_ds_Option.None;
	this._scope = new haxe_ds_StringMap();
	this._template = haxe_ds_Option.None;
	this._controller = haxe_ds_Option.None;
	this._link = haxe_ds_Option.None;
	this._compile = haxe_ds_Option.None;
	this._transclude = haxe_ds_Option.None;
	this._priority = haxe_ds_Option.None;
	this._templateUrl = haxe_ds_Option.None;
	this._isolatedScope = true;
	this._childScope = true;
};
angular_support_DirectiveBuilder.__name__ = true;
angular_support_DirectiveBuilder.__super__ = angular_internal_DirectiveBuilderMacros;
angular_support_DirectiveBuilder.prototype = $extend(angular_internal_DirectiveBuilderMacros.prototype,{
	build: function() {
		var r = { };
		var set = Reflect.setField;
		angular_internal_Options.each(this._replace,(function(f,o,a1) {
			return function(a2) {
				f(o,a1,a2);
			};
		})(set,r,"replace"));
		angular_internal_Options.each(this._restrict,(function(f1,o1,a11) {
			return function(a21) {
				f1(o1,a11,a21);
			};
		})(set,r,"restrict"));
		if(this._scope.keys().hasNext()) {
			var scopeObj = { };
			var $it0 = this._scope.keys();
			while( $it0.hasNext() ) {
				var k = $it0.next();
				set(scopeObj,k,this._scope.get(k));
			}
			set(r,"scope",scopeObj);
		} else if(this._isolatedScope) set(r,"scope",{ }); else if(this._childScope) set(r,"scope",true);
		angular_internal_Options.each(this._template,(function(f2,o2,a12) {
			return function(a22) {
				f2(o2,a12,a22);
			};
		})(set,r,"template"));
		angular_internal_Options.each(this._templateUrl,(function(f3,o3,a13) {
			return function(a23) {
				f3(o3,a13,a23);
			};
		})(set,r,"templateUrl"));
		angular_internal_Options.each(this._controller,(function(f4,o4,a14) {
			return function(a24) {
				f4(o4,a14,a24);
			};
		})(set,r,"controller"));
		angular_internal_Options.each(this._transclude,(function(f5,o5,a15) {
			return function(a25) {
				f5(o5,a15,a25);
			};
		})(set,r,"transclude"));
		angular_internal_Options.each(this._link,(function(f6,o6,a16) {
			return function(a26) {
				f6(o6,a16,a26);
			};
		})(set,r,"link"));
		angular_internal_Options.each(this._compile,(function(f7,o7,a17) {
			return function(a27) {
				f7(o7,a17,a27);
			};
		})(set,r,"compile"));
		angular_internal_Options.each(this._priority,(function(f8,o8,a18) {
			return function(a28) {
				f8(o8,a18,a28);
			};
		})(set,r,"priority"));
		return r;
	}
	,templateConst: function(x) {
		this._template = haxe_ds_Option.Some(function() {
			return x;
		});
		return this;
	}
	,controllerDynamic: function(arr) {
		this._controller = haxe_ds_Option.Some(arr);
		return this;
	}
});
var fullofcaffeine_helloworld_Routing = function() { };
fullofcaffeine_helloworld_Routing.__name__ = true;
fullofcaffeine_helloworld_Routing.setup = function(module) {
	module.config(["$routeProvider",function(routing) {
		routing.when("/about",{ controller : "AboutController", templateUrl : "about.html"});
	}]);
};
var fullofcaffeine_helloworld_controllers_AboutController = function(scope) {
	scope.hai = "Hi there!";
	scope;
};
fullofcaffeine_helloworld_controllers_AboutController.__name__ = true;
var fullofcaffeine_helloworld_controllers_FooController = function(scope,location) {
	scope.data = { foo : this.helperFunc()};
	scope.openAbout = function() {
		location.path("/about");
	};
};
fullofcaffeine_helloworld_controllers_FooController.__name__ = true;
fullofcaffeine_helloworld_controllers_FooController.prototype = {
	helperFunc: function() {
		return "Hello World From Angular 1.5 and Haxe 3.2";
	}
};
var fullofcaffeine_helloworld_controllers_NewsController = function(scope,news) {
	this.newEntry = { text : "", img : ""};
	this.news = news;
	this.scope = scope;
	this.initData();
	this.setupEvents();
};
fullofcaffeine_helloworld_controllers_NewsController.__name__ = true;
fullofcaffeine_helloworld_controllers_NewsController.buildDirective = function() {
	return ($_=new angular_support_DirectiveBuilder().templateConst("<div>\n  <h2>Latest News</h2>\n  <ul>\n    <li ng-repeat=\"e in entries\" ng-click=\"clickEntry(e)\">\n      <p><strong>{{e.text}}</strong</p>\n      <p><img src=\"{{e.img}}\"></p>\n    </li>\n    <div>\n      <input type=\"text\" ng-model=\"newEntry.text\">\n      <input type=\"text\" ng-model=\"newEntry.img\">\n      <button ng-click=\"addNews()\">add</button>\n    </div>\n    <button ng-click=\"clear()\">clear</button>\n  </ul>\n</div>\n").controllerDynamic(["$scope","fullofcaffeine.helloworld.models.News",function(scope,news) {
		return new fullofcaffeine_helloworld_controllers_NewsController(scope,news);
	}]),$bind($_,$_.build));
};
fullofcaffeine_helloworld_controllers_NewsController.prototype = {
	clickEntry: function(e) {
		console.log("Entry clicked " + e.text);
	}
	,addNews: function() {
		this.news.add(this.newEntry.text,this.newEntry.img);
		this.newEntry.text = this.newEntry.img = "";
	}
	,setupEvents: function() {
		var _this;
		var _this1;
		var _this2 = this.scope;
		_this2.addNews = $bind(this,this.addNews);
		_this1 = _this2;
		_this1.clickEntry = $bind(this,this.clickEntry);
		_this = _this1;
		_this.clear = ($_=this.news,$bind($_,$_.clear));
		_this;
	}
	,initData: function() {
		var _this;
		var _this1 = this.scope;
		_this1.newEntry = this.newEntry;
		_this = _this1;
		_this.entries = this.news.entries;
		_this;
	}
};
var fullofcaffeine_helloworld_models_News = function() {
	this.entries = [{ text : "Best thing since sliced bread", img : "https://media.giphy.com/media/3AkIiqu7vfriw/giphy.gif"},{ text : "New amazing software development methodology out!", img : "http://static1.squarespace.com/static/539d97ece4b00bc8faf4d7eb/53add15be4b02e6637a48a9c/53add184e4b02e6637a4a072/1403900611679/?format=1000w"}];
};
fullofcaffeine_helloworld_models_News.__name__ = true;
fullofcaffeine_helloworld_models_News.prototype = {
	add: function(text,img) {
		this.entries.push({ text : text, img : img});
	}
	,clear: function() {
		this.entries.splice(0,this.entries.length);
	}
};
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
var haxe_ds_Option = { __ename__ : true, __constructs__ : ["Some","None"] };
haxe_ds_Option.Some = function(v) { var $x = ["Some",0,v]; $x.__enum__ = haxe_ds_Option; $x.toString = $estr; return $x; };
haxe_ds_Option.None = ["None",1];
haxe_ds_Option.None.toString = $estr;
haxe_ds_Option.None.__enum__ = haxe_ds_Option;
var haxe_ds_StringMap = function() {
	this.h = { };
};
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	get: function(key) {
		if(__map_reserved[key] != null) return this.getReserved(key);
		return this.h[key];
	}
	,getReserved: function(key) {
		if(this.rh == null) return null; else return this.rh["$" + key];
	}
	,keys: function() {
		var _this = this.arrayKeys();
		return HxOverrides.iter(_this);
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) out.push(key);
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) out.push(key.substr(1));
			}
		}
		return out;
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.__name__ = true;
Array.__name__ = true;
var q = window.jQuery;
var js = js || {}
js.JQuery = q;
var __map_reserved = {}
App.dependencies = ["ngRoute"];
App.main();
})();
