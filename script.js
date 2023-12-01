const wrapper = document.querySelector("#wrapper");
const question = document.querySelector("#question");
const gif = document.querySelector("#gif");
const yesBtn = document.querySelector("#yes-btn");
const noBtn = document.querySelector("#no-btn");
const body = document.querySelector("#body")
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Hehehe, knew it! :>";
  gif.src =
    "https://media1.giphy.com/media/9V5fArpd99fLoemwn3/giphy.gif?cid=ecf05e47rdz4oiff665izxsb2q6g463pcx9m38dbaqqmxqce&ep=v1_gifs_related&rid=giphy.gif&ct=s";
  noBtn.style.height = 0
  noBtn.style.width = 0
  noBtn.innerHTML = ""
  body.style.background = "pink"
}, );

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});