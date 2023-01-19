const jok = document.querySelector('#jok');
const btn = document.querySelector('#jokbtn')

// Promise mrthod
/*
const genratjok = () => {

    const setheader = {
        headers: {
            Accept : "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com', setheader)
    .then((res) => res.json())
    .then((data) => {
        jok.innerHTML = `" ${data.joke} "`;
    }).catch((errar) => {
        console.log(errar)
    })
}*/

// async method 

const genratjok = async () => {

    try {
        const setheader = {
            headers: {
                Accept: "application/json"

            }
        }

        const res = await fetch('https://icanhazdadjoke.com', setheader)
        const data = await res.json();
        jok.innerHTML = `" ${data.joke} "`;

    } catch (err) {
        console.log(err);
    }
}



btn.addEventListener('click', genratjok);
genratjok();