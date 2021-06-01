import init from './init.js';
import * as vars from './var_dump.js';
let sum;

const checkActiveTables = () => {
    vars.activeTables.splice(0, vars.activeTables.length)

    vars.checkBoxes.map((item, index) => {
        if(item.checked) {
            vars.activeTables.push(vars.tables[index])
        }
    })

    if(vars.activeTables.length >= 1) {
        createAlert('reset')
    }

    if(vars.activeTables.length < 1) {
        vars.activeTables.push(vars.tables[10]);
        createAlert('easter_egg')
    }

    return createAssignment(vars.activeTables);
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
    } else if (type === 'false') {
        alertHeader.style.background = 'rgb(202, 26, 26)'
        alert.innerHTML = "Oops, looks like that's wrong :("
    } else if (type === 'noInput') {
        alertHeader.style.background = 'orange'
        alert.innerHTML = "Please fill in a answer before submitting."
    } else if (type === 'reset') {
        alertHeader.style.background = 'orange'
        alert.innerHTML = "Please wait, creating a new assignment."
    } else if (type === 'easter_egg') {
        alertHeader.style.background = 'rgb(26, 202, 70)'
        alert.innerHTML = "Congratulations, you found the hidden easter egg! a extra table of 11."
    }

    alert.appendChild(alertHeader)
    vars.alertContainer.appendChild(alert)

    return setTimeout(() => {
       vars.alertContainer.removeChild(vars.alertContainer.firstChild)
    }, 2500)
}

const createAssignment = (activeTables) => {
    let table = choose(activeTables)
    let numbers = choose(table)

    sum = numbers.multiplier * numbers.table;

    return vars.opgave.innerHTML = `${numbers.multiplier} x ${numbers.table}`
}

const checkAnswer = () => {
    if(sum == vars.answerInput.value) {
        vars.playerScore.right += 1
        createAlert('right')
        setTimeout(createAssignment(vars.activeTables), 500)
    } else if (vars.answerInput.value == (null||undefined||'')) {
        createAlert('noInput')
    } else {
        vars.playerScore.wrong += 1
        createAlert('false')
    }

    return vars.answerInput.value = ''
}

const main = () => {
    init();

    vars.execButton.addEventListener('click', checkAnswer);
    vars.checkBoxes.map(item => {
        item.addEventListener('change', checkActiveTables)
    });

    checkActiveTables();
    createAssignment(vars.activeTables);
}

main();