package fullofcaffeine.helloworld.models;

typedef NewsEntry = {
  text: String,
  img: String
}

class News {
  public var entries:Array<NewsEntry>;

  public function new() {
    this.entries = [
      {
        text: 'Best thing since sliced bread',
        img: 'https://media.giphy.com/media/3AkIiqu7vfriw/giphy.gif'
      },
      {
        text: 'New amazing software development methodology out!',
        img: 'http://static1.squarespace.com/static/539d97ece4b00bc8faf4d7eb/53add15be4b02e6637a48a9c/53add184e4b02e6637a4a072/1403900611679/?format=1000w'
      }
    ];
  }

  public function add(text, img) {
    entries.push({text: text, img: img});
  }

  public function clear() {
    entries.splice(0, entries.length);
  }
}
