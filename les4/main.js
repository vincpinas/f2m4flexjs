import init from './init.js';
import * as vars from './var_dump.js';
let sum;

init();

const checkActiveTables = () => {
    vars.activeTables.splice(0, vars.activeTables.length)

    vars.checkBoxes.map((item, index) => {
        if(item.checked) {
            vars.activeTables.push(vars.tables[index])
        }
    })

    if(vars.activeTables.length < 1) {
        vars.activeTables.push(vars.tables[0])
    }

    return vars.activeTables;
}

const choose = (data) => {
    let index = Math.floor(Math.random() * data.length);
    return data[index]
}

const createAlert = (type) => {
    let alert = document.createElement('div');
    let alertHeader = document.createElement('div')
    alert.className = 'alert'
    alertHeader.className = 'alertHeader'

    if(type === 'right') {
        alertHeader.style.background = 'rgb(26, 202, 70)'
        alert.innerHTML = "Good job, that's the right answer!"
    } else {
        alertHeader.style.background = 'rgb(202, 26, 26)'
        alert.innerHTML = "Oops, looks like that's wrong :("
    }

    alert.appendChild(alertHeader)
    vars.alertContainer.appendChild(alert)

    setTimeout(() => {
       vars.alertContainer.removeChild(vars.alertContainer.firstChild)
    }, 1400)
}

const createAssignment = (activeTables) => {
    let table = choose(activeTables)
    let numbers = choose(table)

    sum = numbers.multiplier * numbers.table;

    vars.opgave.innerHTML = `${numbers.multiplier} x ${numbers.table}`
}

const checkAnswer = () => {
    if(sum == vars.answerInput.value) {
        vars.playerScore.right += 1
        createAlert('right')
        setTimeout(createAssignment(vars.activeTables), 500)
    } else {
        vars.playerScore.wrong += 1
        createAlert('false')
    }

    vars.answerInput.value = ''
}

const main = () => {
    vars.checkBoxes.map(item => {
        item.addEventListener('change', checkActiveTables)
    })
    checkActiveTables();

    vars.execButton.addEventListener('click', checkAnswer);

    createAssignment(vars.activeTables);
}

main();