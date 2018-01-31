const body = document.querySelector('body')
const app = document.querySelector('app')

fetch('http://localhost/server/')
.then((result)=> result.json())
.then(response => {
  console.log('response->', response);
  app.innerHTML = `<h1>${response.msg} from the server</h1>`
})

setInterval(_=> {
  fetch('http://localhost/server/random-color')
  .then((result)=> result.json())
  .then(response => {
    console.log('response->', response.new_color);
    body.style.backgroundColor = `#${response.new_color}`
  })
}, 800)
