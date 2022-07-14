import { useZodiac } from "./database.js";

const zodiac = useZodiac();

console.log(zodiac);

zodiac.forEach((obj) => {
  document.querySelector("#container").innerHTML += `

<div id="card-${obj.id}">
<h2 id="zodiacName-${obj.id}">
${obj.name}
</h2>
    <ul>
        <li id="zodiacMascot-${obj.id}">
        ${obj.mascot}
         </li>
        <li id="zodiacDates-${obj.id}">
         ${obj.dates}
        </li>
        <li id="zodiacElement-${obj.id}">
        ${obj.element}
        </li>
    </ul>
    <button id="button-${obj.id}">Change Color</button>
</div>
`;
});


document.addEventListener("click", (event) => {
    // console.log(event.target, "--this is the target")

    if(event.target.id.startsWith("button")){
    console.log(event.target.id.split("-"))
    // gets the home address of the button
    const [, objId] = event.target.id.split("-")
    console.log(objId)

    document.querySelector(`#card-${objId}`).classList.toggle("color")



    }
})
