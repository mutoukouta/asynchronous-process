import data from "./data.json" assert { type: "json" };

const recipeTbody = document.querySelector("#recipeDisplay tbody");
const recipeList = document.getElementById("recipeList");
recipeTbody.children[1].remove("recipeList");

//テーブルの出力
for (let a = 0; a < data.length; a++) {
  let recipeListCloned = recipeList.cloneNode(true);

  let recipeName = recipeListCloned.querySelector("#recipeName");
  let recipeDesc = recipeListCloned.querySelector("#recipeDesc");
  let recipeCreator = recipeListCloned.querySelector("#recipeCreator");
  let recipeCalorie = recipeListCloned.querySelector("#recipeCalorie");
  let recipeTime = recipeListCloned.querySelector("#recipeTime");

  recipeName.innerText = data[a].name;
  recipeDesc.innerText = data[a].desc;
  recipeCreator.innerText = data[a].creator;
  recipeCalorie.innerText = data[a].calorie;
  recipeTime.innerText = data[a].time;
  recipeTbody.appendChild(recipeListCloned);
}

//検索機能（レイアウト変更も追加）
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => {
  const search = document.getElementById("search").value;
  let searchArr = search.split(/[\s\u3000]+/);

  for (let b = 0; b < data.length; b++) {
    let dataList = data[b];
    let check = true;
    let tmp = dataList.name + dataList.desc;

    for (let c = 0; c < searchArr.length; c++) {
      if (tmp === tmp.replace(searchArr[c], "")) {
        check = false;
        break;
      }
      tmp = tmp.replace(searchArr[c], "");
    }
    if (check) {
      let recipeList = document.querySelectorAll("#recipeList")[b];
      recipeList.style.backgroundColor = "red";
    } else {
      let recipeList = document.querySelectorAll("#recipeList")[b];
      recipeList.style.backgroundColor = null;
    }
  }
});
