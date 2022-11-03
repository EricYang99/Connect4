//Home Runner
//Open Information Screen
function openInfo() {
    document.getElementById("InfoScreen").style.width = "100%";
    document.getElementById("HomeScreen").style.marginLeft = "100%";
}

function closeInfo() {
    document.getElementById("InfoScreen").style.width = "0";
    document.getElementById("HomeScreen").style.marginLeft = "0";
}

//Open Settings Screens
function openSettings() {
    document.getElementById("SettingsScreen").style.width = "100%";
    document.getElementById("HomeScreen").style.marginRight = "100%";
}

function closeSettings() {
    document.getElementById("SettingsScreen").style.width = "0";
    document.getElementById("HomeScreen").style.marginRight = "0";
}
//Open About screen
function openAbout() {
    document.getElementById("AboutMeScreen").style.height = "100%";
    document.getElementById("HomeScreen").style.height = "0";
}

function closeAbout() {
    document.getElementById("AboutMeScreen").style.height = "0";
    document.getElementById("HomeScreen").style.height = "100%";
}

//Open Game
function openGame() {
    document.getElementById("GameScreen").style.height = "100%";
    document.getElementById("HomeScreen").style.height = "0";
}

function closeGame() {
    document.getElementById("GameScreen").style.height = "0";
    document.getElementById("HomeScreen").style.height = "100%";
}




//Game Runner

var tableRow = document.getElementsByTagName('tr');
var tableCell = document.getElementsByTagName('td');
var tableSlot = document.querySelectorAll('.slot');

let rowNumber = 6;
let colNumber = 7;
var currentPlayer = 1;

//Change the name of the players playing if they want
var player1;
var player2;
var player1Color;
var player2Color;
var boardColor;

function changeName1() {
    let name = document.getElementById("NameChanger1").value;
    player1 = name;
    alert(`Player 1's name has changed to ${player1}`);
}
function changeName2() {
    let name = document.getElementById("NameChanger2").value;
    player2 = name;
    alert(`Player 2's name has changed to ${player2}`);
}

function isColor(strColor){
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
  }

function changeColor1(){
    let color = document.getElementById("colorChanger1").value;
    if(isColor(color) && color != 'white'){
        player1Color = color;
        alert(`Player 1's color has changed to ${player1Color}`);
    }
    else{
        alert("Invalid color!")
    }
}

function changeColor2(){
    let color = document.getElementById("colorChanger2").value;
    if(isColor(color) && color != 'white'){
        player2Color = color;
        alert(`Player 2's color has changed to ${player2Color}`);
    }
    else{
        alert("Invalid color!")
    }
}
function changeColor3(){
    let color = document.getElementById("colorChanger3").value;
    if(isColor(color) && color != 'white'){
        boardColor = color;
        alert(`The board's color has changed to ${boardColor}`);
    }
    else{
        alert("Invalid color!")
    }
}

function changeRowNumber(){
    let rowCount = document.getElementById("rowChanger").value;
    if(rowCount < 6){
        alert(`${rowCount} is to small for the rows. Please change it to any value between and including  6 and 10`);
    }
    else if(rowCount > 10){
        alert(`${rowCount} is to large for the rows. Please change it to any value between and including  6 and 10`);
    }
    else{
        rowNumber = rowCount;
        alert(`The board's row count has changed to ${rowNumber}`);
    }
}

function changeColNumber(){
    let colCount = document.getElementById("colChanger").value;
    if(colCount < 7){
        alert(`${colCount} is to small for the columns. Please change it to any value between and including 7 and 12`);
    }
    else if(colCount > 12){
        alert(`${colCount} is to large for the columns. Please change it to any value between and including 7 and 12`);
    }
    else{
        colNumber = colCount;
        alert(`The board's row count has changed to ${colNumber}`);
    }
}




let topOfContainer = document.createElement('div');
    topOfContainer.className = "topOfContainer";
    topOfContainer.id = "topOfContainer";
    let h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode('Connect Four'));
    let h3 = document.createElement('h4');
    h3.className = "playerTurn";
    topOfContainer.appendChild(h2);
    topOfContainer.appendChild(h3);

let gameContainer = document.createElement('div');
    gameContainer.className = "gameContainer1";
    gameContainer.id = "gameContainer1";

let reset = document.createElement('input');
    reset.className = "reset";
    reset.id = "reset";
    reset.type = "button";
    reset.value = "Reset";

let backToHome = document.createElement('input');
    backToHome.className = "backToHomeButton";
    backToHome.id = "backToHomeButton";
    backToHome.type = "button";
    backToHome.value = "Back To Home";

function createGame() {
    let table = document.createElement("table");
    table.id = "gameTable";
    let tableBod = document.createElement("tbody");
    for (let i = 0; i < rowNumber; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < colNumber; j++) {
            let td = document.createElement("td");
            td.className = "slot";
            tr.appendChild(td);
        }
        tableBod.appendChild(tr);
    }
    table.appendChild(tableBod);
    gameContainer.appendChild(table);
}


function deleteGameTable(){
    let table = document.getElementById("gameTable");
    let numRows = table.rows.length;
    for(let i = numRows-1; i >= 0; i--){
        table.deleteRow(i);
    }
    table.remove();
}

function resetGame() {
    for (let i = 0; i < tableRow.length; i++) {
        for (let j = 0; j < (tableCell.length / tableRow.length); j++) {
            tableRow[i].children[j].style.backgroundColor = 'white';
        }
    }
    h3.style.color = 'black';

    if (currentPlayer == 1) {
        playerTurn.textContent = `${player1}'s turn!`;
    }
    else {
        playerTurn.textContent = `${player2}'s turn!`;
    }
}


function deleteHome() {
    let bod = document.getElementById("HomeScreen");
    let bod2 = document.getElementById("topOfContainer");
    if (typeof(bod2) != 'undefined' && bod2 != null)
    {
        let bod3 = document.getElementById("gameContainer1");
        let bod4 = document.getElementById("backToHomeButton");
        let bod5 = document.getElementById("reset");
        bod2 = '';
        bod3 = '';
        bod4 = '';
        bod5 = '';

    }
    bod.innerHTML = '';
}

function createHome() {
    h3.style.color = 'black';
    deleteGameTable();
    deleteHome();
    let bod = document.getElementById("HomeScreen");
        bod.style.backgroundColor = "brown";
        let p1 = document.createElement('p');
            p1.style.top = "0";
            p1.style.marginTop = "0";
            p1.style.marginBottom = "10%";
            p1.appendChild(document.createTextNode("Home Screen"));
        let p2 = document.createElement('p');
            let inp2 = document.createElement("input");
            inp2.className = "openButton";
            inp2.type = "button";
            inp2.value = "Info Screen";
            inp2.onclick = openInfo;
            p2.appendChild(inp2);
        let p3 = document.createElement('p');
            let inp3 = document.createElement("input");
            inp3.className = "openButton";
            inp3.type = "button";
            inp3.value = "Settings Screen";
            inp3.onclick = openSettings;
            p3.appendChild(inp3);
        let p4 = document.createElement('p');
            let inp4 = document.createElement("input");
            inp4.className = "openButton";
            inp4.type = "button";
            inp4.value = "About Me Screen";
            inp4.onclick = openAbout;
            p4.appendChild(inp4);
        let p5 = document.createElement('p');
            let inp5 = document.createElement("input");
            inp5.className = "openButton";
            inp5.type = "button";
            inp5.value = "Game Screen";
            inp5.onclick = openGame;
            p5.appendChild(inp5);
        let p6 = document.createElement('p');
            let inp6 = document.createElement("input");
            inp6.className = "openButton";
            inp6.type = "button";
            inp6.value = "Run Game Here :D";
            inp6.onclick = createGameScreen;
            p6.appendChild(inp6);

    bod.appendChild(p1);
    bod.appendChild(p2);
    bod.appendChild(p3);
    bod.appendChild(p4);
    bod.appendChild(p5);
    bod.appendChild(p6);
}


reset.onclick = resetGame;
backToHome.onclick = createHome;
//Run the game
function createGameScreen() {
    deleteHome();
    createGame();
    currentPlayer = 1;
    let bod = document.getElementById("HomeScreen");
        bod.style.backgroundColor = "white";
        bod.style.height = (rowNumber * 4) + "rem";
    bod.appendChild(backToHome);
    bod.appendChild(topOfContainer);
        gameContainer.style.height = (rowNumber * 80) + "px + 1.5rem";
        gameContainer.style.width = (colNumber * 100) + "px + 1.5rem";
    bod.appendChild(gameContainer);
    bod.appendChild(reset);


    while(player1Color == null || player1Color == undefined || player1Color == "") {
        player1Color = 'red';
    }

    while(player1 == null || player1 == undefined || player1 == "") {
        player1 = prompt('Player One: Enter Name, You are ' + player1Color);
    }

    while(player2Color == null || player2Color == undefined || player2Color == "") {
        player2Color = 'yellow';
    }

    while (player2 == null || player2 == undefined || player2 == "") {
        player2 = prompt('Player Two: Enter Name, You are ' + player2Color);
    }

    while(boardColor == null || boardColor == undefined || boardColor == "") {
        boardColor = 'blue';
    }
    gameContainer.style.backgroundColor = boardColor;
    const playerTurn = document.querySelector('.playerTurn');

    for (let i = 0; i < tableCell.length; i++) {
        tableCell[i].addEventListener('click', (e) => {
            console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);
        })
    }
    playerTurn.textContent = `${player1}'s turn!`;

    Array.prototype.forEach.call(tableCell, (cell) => {
        cell.addEventListener('click', changeColor);
        cell.style.backgroundColor = 'white';
    });

    //this changes color and changes player turn
    function changeColor(e) {
        let column = e.target.cellIndex;
        let row = [];

        for (i = rowNumber-1; i > -1; i--) {
            if (tableRow[i].children[column].style.backgroundColor == 'white') {
                row.push(tableRow[i].children[column]);
                if (currentPlayer === 1) {
                    row[0].style.backgroundColor = player1Color;
                    if (horizontalCheck() || verticalCheck() || firstDiagCheck() || secondDiagCheck()) {
                        playerTurn.textContent = `${player1} has won!`;
                        playerTurn.style.color = player1Color;
                        return (alert(`Winner is ${player1}!`));
                    }
                    else if (drawCheck()) {
                        playerTurn.textContent = `Draw Game`;
                        playerTurn.style.color = 'Green';
                        return (alert(`Game is a Draw!`));
                    }
                    else {
                        playerTurn.textContent = `${player2}'s turn!`;
                        return currentPlayer = 2;
                    }
                }
                else {
                    row[0].style.backgroundColor = player2Color;
                    if (horizontalCheck() || verticalCheck() || firstDiagCheck() || secondDiagCheck()) {
                        playerTurn.textContent = `${player2} has won!`;
                        playerTurn.style.color = player2Color;
                        return (alert(`Winner is ${player2}!`));
                    }
                    else if (drawCheck()) {
                        playerTurn.textContent = `Draw Game`;
                        playerTurn.style.color = 'Green';
                        return (alert(`Game is a Draw!`));
                    }
                    else {
                        playerTurn.textContent = `${player1}'s turn!`;
                        return currentPlayer = 1;
                    }
                }
            }
        }
    }

    //Check to see if the slots are in the correct order to win the game
    function winCheck(s1, s2, s3, s4) {
        return (s1 == s2 && s1 == s3 && s1 == s4 && s1 !== 'white');
    }

    function horizontalCheck() {
        for (let i = 0; i < tableRow.length; i++) {
            for (let j = 0; j < (tableCell.length/tableRow.length) - 3; j++) {
                if (winCheck(tableRow[i].children[j].style.backgroundColor,
                    tableRow[i].children[j + 1].style.backgroundColor,
                    tableRow[i].children[j + 2].style.backgroundColor,
                    tableRow[i].children[j + 3].style.backgroundColor)) {
                    return true;
                }
            }
        }
    }

    function verticalCheck() {
        for (let j = 0; j < (tableCell.length / tableRow.length); j++) {
            for (let i = 0; i < tableRow.length-3; i++) {
                if (winCheck(tableRow[i].children[j].style.backgroundColor,
                    tableRow[i + 1].children[j].style.backgroundColor,
                    tableRow[i + 2].children[j].style.backgroundColor,
                    tableRow[i + 3].children[j].style.backgroundColor)) {
                    return true;
                }
            }
        }
    }

    function firstDiagCheck() {
        for (let j = 0; j < (tableCell.length/tableRow.length) - 3; j++) {
            for (let i = 0; i < tableRow.length-3; i++) {
                if (winCheck(tableRow[i].children[j].style.backgroundColor,
                    tableRow[i + 1].children[j + 1].style.backgroundColor,
                    tableRow[i + 2].children[j + 2].style.backgroundColor,
                    tableRow[i + 3].children[j + 3].style.backgroundColor)) {
                    return true;
                }
            }
        }
    }

    function secondDiagCheck() {
        for (let j = 0; j < (tableCell.length/tableRow.length) - 3; j++) {
            for (let i = tableRow.length-1; i > 2; i--) {
                if (winCheck(tableRow[i].children[j].style.backgroundColor,
                    tableRow[i - 1].children[j + 1].style.backgroundColor,
                    tableRow[i - 2].children[j + 2].style.backgroundColor,
                    tableRow[i - 3].children[j + 3].style.backgroundColor)) {
                    return true;
                }
            }
        }
    }

    function drawCheck() {
        let fullCheck = [];
        for (let i = 0; i < tableCell.length; i++) {
            if (tableCell[i].style.backgroundColor !== 'white') {
                fullCheck.push(tableCell[i]);
            }
            if (fullCheck.length === tableCell.length) {
                return true;
            }
        }
    }
}
