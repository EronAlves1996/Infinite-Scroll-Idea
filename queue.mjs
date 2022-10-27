export class Queue {
  first;
  last;
  items = 0;
  constructor() {};

  enqueue(blogpost) {
    if(this.items === 0){
      this.last = this.first = blogpost;
    } else {
      const temp = last;
      temp.next = this.last = blogpost;
    }
    items++;
  }

  dequeue() {
    if(this.items === 0) throw new Error("Fila vazia");
    const temp = first;
    this.first = temp.next;
    items--;
    return temp;
  }
}

export class Blogpost {
  title = "";
  paragraphs = [];
  next;
  constructor(title, paragraph){
    this.title = title;
    this.paragraphs = paragraph;
    this.next = null;
  }
}
