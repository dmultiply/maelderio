const posts = [
  { title: "First Post", file: "posts/post_1.md" }
];

const list = document.getElementById("posts");
const content = document.getElementById("content");

posts.forEach(post => {
  const li = document.createElement("li");
  li.innerText = post.title;

  li.onclick = () => {
    fetch(post.file)
      .then(res => res.text())
      .then(md => {
        content.innerHTML = marked.parse(md);
      });
  };

  list.appendChild(li);
});