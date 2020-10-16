const leaderBoard = document.querySelector("#table-scores");
const scoreBoardReset = document.querySelector("#get-top-scores");

//Game Pic Selection
const pictionaryPic = document.querySelector("#pictionary-pic");
const mindPic = document.querySelector("#mind-pic");
const scattegoriesPic = document.querySelector("#scattergories-pic");

scoreBoardReset.addEventListener("click", resetScoreBoard);
//Game Event Listeners
// pictionaryPic.addEventListener("click", getPictionaryTop5);

// mindPic.addEventListener("click", getMindTop5);
// scattegoriesPic.addEventListener("click", getScattegoriesTop5);

// Create Functions that get top5 for all game categories
// async function getPictionaryTop5(){
//     console.log("Hello");
//     const response = await fetch("http://localhost:3000/energiser/getPicionaryTop5");
//     const {payload} = await response.json();
//     console.log(payload);
// }

pictionaryPic.addEventListener("click", test);

const payload = [
    { first_name: 'Mell', total_wins: '13', total_points: '23' },
    { first_name: 'Emma', total_wins: '9', total_points: '10' },
    { first_name: 'Lizzie', total_wins: '4', total_points: '6' },
    { first_name: 'Ben', total_wins: '1', total_points: '1' },
    { first_name: 'Dan', total_wins: '1', total_points: '1' }
  ];

function test(){
    mindPic.src="";
    scattegoriesPic.src="";
    addLeaderCols();
    payload.forEach(addLeaderRows);
}
// Creates the Rows for the Table
function addLeaderCols(){
    const row = document.createElement("tr");
    const rowFN = document.createElement("th");
    const rowTW = document.createElement("th");
    const rowTP = document.createElement("th");
    rowFN.innerText = "First Name";
    rowTW.innerText = "Total Wins";
    rowTP.innerText = "Total Points";
    row.appendChild(rowFN);
    row.appendChild(rowTW);
    row.appendChild(rowTP);
    leaderBoard.appendChild(row);
    leaderBoard.classList.add("col-names");
};

// Creates the Leaders Rows
function addLeaderRows(player){
    const row = document.createElement("tr");
    const rowFN = document.createElement("th");
    const rowTW = document.createElement("th");
    const rowTP = document.createElement("th");
    rowFN.innerText = player.first_name;
    rowTW.innerText = player.total_wins;
    rowTP.innerText = player.total_points;
    row.appendChild(rowFN);
    row.appendChild(rowTW);
    row.appendChild(rowTP);
    leaderBoard.appendChild(row);
};

function resetScoreBoard(){
    leaderBoard.innerHTML = "";
    pictionaryPic.src="Pictionary3.png";
    scattegoriesPic.src="Scategories.jpeg";
    mindPic.src="Mind2.jpg";
}