import "./styles/main.scss"

const abc = {
  a: 1,
  b: 2,
  c: 3,
}

const cde = {
  ...abc,
  l: 1,
}

console.log({ abc, cde })
