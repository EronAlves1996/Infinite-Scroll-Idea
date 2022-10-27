export class queue {
  first;
  last;
  items = 0;
  constructor() {};

  enqueue(blogpost) {
    const temp = last;
    temp.next = this.last = blogpost;
    items++;
  }

  dequeue() {
    const temp = first;
    this.first = temp.next;
    items--;
    return temp;
  }
}

export class blogpost {
  title = "";
  paragraphs = [];
  next;
  constructor(title, paragraphs, next){
    this.title = title;
    this.paragraphs = paragraphs;
    this.next = next;
  }
}
