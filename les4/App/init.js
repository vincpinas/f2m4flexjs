import * as vars from './var_dump.js';

const init = () => {
    vars.nav.style.display = 'flex'

    for(let i = 1; i <= 10; i++) {
        let checkContainer = document.createElement('span')
        let tableCheck = document.createElement('input')
        let tableCheckLabel = document.createElement('label')

        checkContainer.style.marginLeft = '10px'
        checkContainer.style.letterSpacing = '1px'

        tableCheckLabel.innerHTML = i
        
        tableCheck.checked = true;
        tableCheck.type = 'checkbox'
        tableCheck.id = `tableActive${i}`

        checkContainer.appendChild(tableCheckLabel)
        checkContainer.appendChild(tableCheck)

        vars.checkBoxes.push(tableCheck)

        vars.nav.appendChild(checkContainer)
    }

    for(let i= 1; i <= 10; i++) {
        vars.tafelV1.push({multiplier: i, table: 1})
        vars.tafelV2.push({multiplier: i, table: 2})
        vars.tafelV3.push({multiplier: i, table: 3})
        vars.tafelV4.push({multiplier: i, table: 4})
        vars.tafelV5.push({multiplier: i, table: 5})
        vars.tafelV6.push({multiplier: i, table: 6})
        vars.tafelV7.push({multiplier: i, table: 7})
        vars.tafelV8.push({multiplier: i, table: 8})
        vars.tafelV9.push({multiplier: i, table: 9})
        vars.tafelV10.push({multiplier: i, table: 10})
        vars.tafelV11.push({multiplier: i, table: 11})
    }

    vars.scoreBoard.innerHTML = `
        <span>Correct: ${vars.playerScore.right}</span>
        <span>Wrong: ${vars.playerScore.wrong}</span>
    `
}

export default init;