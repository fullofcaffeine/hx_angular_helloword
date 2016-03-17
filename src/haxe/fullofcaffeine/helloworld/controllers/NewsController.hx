package fullofcaffeine.helloworld.controllers;

import angular.*;
import angular.service.*;
import angular.support.*;

import fullofcaffeine.helloworld.models.News;

class NewsController {
  var news:News;
  var newEntry:NewsEntry;
  var scope:Scope;

  //news is converted to a dependency by angular.haxe...
  public function new(scope:Scope, news:News) {
    this.newEntry = {text: '', img: ''};
    this.news = news;
    this.scope = scope;

    initData();
    setupEvents();
  }

  function clickEntry(e:NewsEntry) {
    trace('Entry clicked ${e.text}');
  }

  function addNews() {
    news.add(newEntry.text, newEntry.img);
    newEntry.text = newEntry.img = '';
  }

  function setupEvents() {
    scope
      .set("addNews", addNews)
      .set("clickEntry", clickEntry)
      .set("clear", news.clear);
  }

  function initData() {
    scope
      .set("newEntry", newEntry)
      .set("entries", news.entries);
  }

  public static function buildDirective():Void->{} {
    return DirectiveBuilder.mk().templateConstFile("NewsTemplate")
      .controller(NewsController.new).build;
  }
}
