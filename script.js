let Joke= document.getElementById("Joke-Setup")
let punchLine=document.getElementById("Joke-PunchLine")
let button=document.getElementById("NewJoke")
button.addEventListener("click",MovieList);
async function MovieList(){
    let response= await fetch("https://official-joke-api.appspot.com/random_joke")
   let data= await  response.json()
   if(data.type==="general"){
   Joke.innerText= data.setup
   punchLine.innerText="-->"+data.punchline
   console.log(data)
   }
}