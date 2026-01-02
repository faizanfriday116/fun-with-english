const words = [
    {w:"Hope", m:"A feeling of expectation"},
    {w:"Dream", m:"A series of thoughts in sleep"},
    {w:"Brave", m:"Showing courage"},
    {w:"Peace", m:"Freedom from disturbance"},
    {w:"Focus", m:"Paying close attention"}
];

const box = document.getElementById("box");
const wordEl = document.getElementById("word");
const meaningEl = document.getElementById("meaning");

document.body.addEventListener("click", () => {
    box.style.display = "block";

    const random = Math.floor(Math.random() * words.length);
    wordEl.innerText = words[random].w;
    meaningEl.innerText = words[random].m;
});
