interface Project {
  filename: string;
  alt: string;
  tag: string;
  href: string;
  className?: string;
  top?: string;
  github: string;
}

const projectsArr: Project[] = [
  {
    filename: "todo-two.png",
    alt: "To Do List",
    tag: "To Do List",
    href: "https://christopher-lamb.github.io/todo-app/",
    github: "https://github.com/Christopher-Lamb/todo-app.git",
    top: "-40px",
  },
  {
    filename: "blog-app.png",
    alt: "Blog App Image",
    tag: "Blog App",
    href: "https://christopher-lamb.github.io/blog-app/",
    github: "https://github.com/Christopher-Lamb/blog-app.git",
    top: "0px",
  },
  {
    filename: "lambhvac.png",
    alt: "LambHVAC",
    tag: "lambhvac.com",
    href: "https://lambhvac.com",
    github: "https://github.com/Christopher-Lamb/lambhvac.git",
    top: "-40px",
  },
  {
    filename: "cmpbuilders.png",
    alt: "CMP Builders",
    tag: "cmpbuilders.com",
    href: "https://cmpbuilders.com",
    github: "https://github.com/Christopher-Lamb/cmpbuilders.git",
    top: "-80px",
  },
  {
    filename: "coffee-co.png",
    alt: "Coffee Co.",
    tag: "Coffee Co.",
    href: "https://christopher-lamb.github.io/coffee-co/",
    github: "https://github.com/Christopher-Lamb/coffee-co.git",
    top: "0px",
  },
  {
    filename: "snake-game.png",
    alt: "Snake Game",
    tag: "Snake Game",
    href: "https://christopher-lamb.github.io/snake-game/",
    github: "https://github.com/Christopher-Lamb/snake-game.git",
    top: "-90px",
  },
  {
    filename: "outline-app.png",
    alt: "Outline App",
    tag: "Outline App",
    href: "https://christopher-lamb.github.io/outline-app/",
    github: "https://github.com/Christopher-Lamb/outline-app.git",
    top: "0px",
  },
  {
    filename: "blackjack-bot.png",
    alt: "Blackjack Bot",
    tag: "Blackjack Bot",
    href: "https://youtu.be/8SaY6gCxV5k",
    github: "https://github.com/Christopher-Lamb/blackjack-bot.git",
    top: "-90px",
  },
];

export default projectsArr;
