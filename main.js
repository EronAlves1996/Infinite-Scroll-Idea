import { Queue, Blogpost } from "./queue.mjs";

const queue = new Queue();

const articles =  [];

fetch("https://dev.to/api/articles?username=tttecnology")
  .then(response => response.json)
  .then(json => json.map(n => n.slug)
    .forEach(articles.push))

articles.forEach(article => fetch("https://dev.to/api/articles/" + article)
  .then(response => response.json)
  .then(article => queue.enqueue(new Blogpost(article.title, article.body_html))))

console.log(queue);
