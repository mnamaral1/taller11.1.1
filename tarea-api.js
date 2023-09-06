
const button = document.querySelector('.container button');
const texto_chiste = document.querySelector('.container p');
document.addEventListener('DOMContentLoaded', tirar_chiste);

button.addEventListener('click', tirar_chiste);

async function tirar_chiste(){
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    });
    const jokeObj = await jokeData.json();
    texto_chiste.innerHTML = jokeObj.joke;
}

