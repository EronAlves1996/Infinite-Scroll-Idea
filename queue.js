export class queue {

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
