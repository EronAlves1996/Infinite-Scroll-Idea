import { Queue, Blogpost } from "./queue.mjs";

const queue = new Queue();

const articles =  [];

fetch("https://dev.to/api/articles?username=tttecnology")
  .then(response => response.json())
  .then(json => json.map(n => n.slug)
    .forEach(article => articles.push(article)))
  .then(n=> articles.forEach(article => fetch("https://dev.to/api/articles/tttecnology/" + article)
  .then(response => response.json())
  .then(article =>
    queue.enqueue(new Blogpost(article.title, article.body_html)))))


setTimeout(()=>console.log(queue), 2000);
