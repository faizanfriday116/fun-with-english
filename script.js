const words = [
    { w: "Hope", m: "A feeling of expectation" },
  { w: "Dream", m: "A series of thoughts in sleep" },
  { w: "Brave", m: "Showing courage" },
  { w: "Peace", m: "Freedom from disturbance" },
  { w: "Focus", m: "Paying close attention" },

  { w: "Success", m: "Achievement of a goal" },
  { w: "Believe", m: "To accept as true" },
  { w: "Patience", m: "Ability to wait calmly" },
  { w: "Strength", m: "Power of mind or body" },
  { w: "Kind", m: "Being caring and friendly" },
  { w: "Trust", m: "Firm belief in someone" },
  { w: "Smile", m: "A happy facial expression" },
  { w: "Learn", m: "Gain knowledge or skill" },
  { w: "Create", m: "To make something new" },
  { w: "Calm", m: "Free from stress or worry" },
  { w: "Honor", m: "Great respect or pride" },
  { w: "Vision", m: "Ability to imagine future" },
  { w: "Power", m: "Ability to do something" },
  { w: "Energy", m: "Strength to act" },
  { w: "Wisdom", m: "Knowledge and good judgment" },
  { w: "Value", m: "Importance of something" },
  { w: "Change", m: "Make or become different" },
  { w: "Rise", m: "Move upward" },
  { w: "Light", m: "Brightness or hope" },
  { w: "Victory", m: "Success in a fight" },
  { w: "Future", m: "Time yet to come" },
  { w: "Goal", m: "A target to achieve" },
  { w: "Effort", m: "Hard work applied" },
  { w: "Faith", m: "Strong belief" },
  { w: "Grow", m: "To develop or increase" },
  { w: "Resilient", m: "Able to recover quickly from difficulty" },
  { w: "Tenacious", m: "Not giving up easily" },
  { w: "Pragmatic", m: "Practical and sensible" },
  { w: "Eloquent", m: "Fluent and persuasive in speech" },
  { w: "Serendipity", m: "Finding something good by chance" },
  { w: "Ephemeral", m: "Lasting for a very short time" },
  { w: "Ubiquitous", m: "Present everywhere" },
  { w: "Meticulous", m: "Very careful and precise" },
  { w: "Astute", m: "Clever and quick to understand" },
  { w: "Magnanimous", m: "Very kind and generous" }
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
