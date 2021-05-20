import * as variables from "./var_dump.js";

for(let i = 0; i < variables.achtergronden.length; i++) {
    variables.achtergronden[i].addEventListener('click', () => {
        setAchtergrond(i)
    });
}

const setAchtergrond = (i) => {
    console.log(i)
    document.body.style.background = variables.achtergrondkleuren[i];
}

for(let i = 0; i < variables.voorgronden.length; i++) {
    variables.achtergronden[i].addEventListener('click', () => {
        setVoorgrond(i)
    });
}

const setVoorgrond = (i) => {
    console.log(i)
    document.body.style.color = variables.voorgrondkleuren[i];
}