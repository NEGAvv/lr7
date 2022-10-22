const answers = [
  "It is certain",
  "Reply hazy",
  "try again",
  "Don`t count on it",
  "It is decidedly so	",
  "Ask again later",
  "My reply is no",
  "Without a doubt",
  "Better not tell you now",
  "My sources say no",
  "Yes definitely",
  "Cannot predict now",
  "Outlook not so good",
  "You may rely on it",
  "Concentrate and ask again",
  "Very doubtful",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes	",
  "Signs point to yes",
];

let text_in_header = document.createElement("header");
text_in_header.textContent = "ask me something";
document.body.prepend(text_in_header);

let black_ball = document.createElement("div");
black_ball.classList.add("black_ball");
text_in_header.after(black_ball);

let white_ball = document.createElement("div");
white_ball.classList.add("white_ball");
black_ball.appendChild(white_ball);

let text_in_ball = document.createElement("p");
text_in_ball.classList.add("text_answer");
text_in_ball.setAttribute("id", "text_answer");
text_in_ball.textContent = "8";
white_ball.append(text_in_ball);

let box = document.createElement("div");
box.classList.add("box");
black_ball.after(box);

let text_input = document.createElement("input");
text_input.setAttribute("type", "text");
text_input.setAttribute("placeholder", "Will I become famous?");
text_input.setAttribute("id", "text_input");
box.appendChild(text_input);

let btn = document.createElement("button");
btn.classList.add("for_button");
btn.setAttribute("id", "btn_answer");
btn.textContent = "GET ANSWER";
text_input.after(btn);

//function of ball
const answer_in_ball = document.querySelector("#text_answer");
const btn_answer = document.querySelector("#btn_answer").addEventListener("click",() => {
    const index = Math.floor(Math.random()*answers.length);
    const message = answers[index];
    answer_in_ball.textContent = message;
    answer_in_ball.style.fontSize = "1.5rem";

    setTimeout(()=>{
        answer_in_ball.textContent="8";
        answer_in_ball.style.fontSize = "8rem";
    },5000)
  });
