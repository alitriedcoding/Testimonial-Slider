const nameEl = document.querySelector(".persone-name");
const imageEl = document.querySelector("img");
const textEl = document.querySelector(".text");

const testimonialarray = [
  {
    name: `"Ganz Laly"`,
    url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: " Everyones on the same page. Many of our people are not very organized naturally so Apple is a godsend!",
  },
  {
    name: `"Mark Bal"`,
    url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: " I love Apple! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come.",
  },
  {
    name: `" Alber Hot"`,
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: " Apple is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!",
  },
];

let inx = 2;
update();
function update() {
  const { name, url, text } = testimonialarray[inx];
  nameEl.innerHTML = name;
  imageEl.src = url;
  textEl.innerHTML = text;
  inx++;
  if (inx === testimonialarray.length) {
    inx = 0;
  }
  setTimeout(update, 2000);
}
