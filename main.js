import { Queue, Blogpost } from "./queue.mjs";

const queue = new Queue();
const dock = document.querySelector("#dock");

fetch("https://dev.to/api/articles?username=tttecnology")
  .then(response => response.json())
  .then(json => json.map(n => n.slug)
    .forEach(article => fetch("https://dev.to/api/articles/tttecnology/" + article)
    .then(response => response.json())
    .then(article =>
      queue.enqueue(new Blogpost(article.title, article.body_html)))))

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener('scroll', ()=>{
  if(isInViewport(dock)){
    try{
      const blogpost = queue.dequeue();
      const section = document.createElement('section');
      section.classList.add("blogpost");
      const h2 = document.createElement('h2');
      h2.appendChild(document.createTextNode(blogpost.title))
      section.append(h2);
      section.innerHTML += blogpost.paragraphs;
      document.querySelector("main").insertBefore(section, dock);
    } catch(ex) {
      console.log(ex);
    }
  }
})
