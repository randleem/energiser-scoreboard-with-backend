
//Game Pic Selection
const pictionaryPic = document.querySelector("#pictionary-pic");
const mindPic = document.querySelector("#mind-pic");
const scattegoriesPic = document.querySelector("#scattergories-pic");

//Game Event Listeners
pictionaryPic.addEventListener("click", getPictionaryTop5);
// mindPic.addEventListener("click", getMindTop5);
// scattegoriesPic.addEventListener("click", getScattegoriesTop5);

//Create Functions that get top5 for all game categories
async function getPictionaryTop5(){
    console.log("Hello");
    const response = await fetch("http://localhost:3000/energiser/getPicionaryTop5");
    const {payload} = await response.json();
    console.log(payload);
}

// async function getRecipes() {
//     const response = await fetch(`${url}/recipes`);
//     const { payload } = await response.json();
//     recipesSection.innerHTML = "";
//     console.log(payload);
//     payload.forEach(renderRecipe);
//   }