import data from "./data.json" assert { type: "json" };

//ボタンの出力
for (let i = 0; i < data.length; i++) {
  let recipeItem = document.createElement("button"); // li要素を作成
  let textNode = document.createTextNode(data[i].name); // テキストノードを作成
  recipeItem.appendChild(textNode); // テキストノードをli要素に追加
  let recipeButton = document.getElementById("buttons"); // ul要素を取得
  recipeButton.appendChild(recipeItem);
}

//レシピボタンが押下後
function list(num) {
  let recipeList = document.createElement("li");

  let recipeName = document.createTextNode(
    "recipeName:" + data[num].name + "/"
  );
  let recipeDesc = document.createTextNode(
    "recipeDesc:" + data[num].desc + "/"
  );
  let recipeCreator = document.createTextNode(
    "recipeCreator:" + data[num].creator + "/"
  );
  let recipeCalorie = document.createTextNode(
    "recipeCalorie:" + data[num].calorie + "/"
  );
  let recipeTime = document.createTextNode(
    "recipeTime:" + data[num].time + "/"
  );
  recipeList.appendChild(recipeName);
  recipeList.appendChild(recipeDesc);
  recipeList.appendChild(recipeCreator);
  recipeList.appendChild(recipeCalorie);
  recipeList.appendChild(recipeTime);
  let recipeDisplay = document.getElementById("recipeDisplay");
  recipeDisplay.appendChild(recipeList);
}
const buttons = document.querySelectorAll("#buttons button");
let buttonLists = [].slice.call(buttons);
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    list(buttonLists.indexOf(btn));
  });
});

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => {
  const search = document.getElementById("search").value;

  for (let i = 0; i < data.length; i++) {
    let dataList = data[i];
    for (const key in dataList) {
      console.log(dataList[key]);
    }
  }
});

// dataList[key].match(search);
//dataList[key].match(search,"g");
//console.log(matches);
