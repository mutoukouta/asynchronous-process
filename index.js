import data from "./data.json" assert { type: "json" };

const recipeTbody = document.querySelector("#recipeDisplay tbody");
const recipeList = document.getElementById("recipeList");

//テーブルの出力
for (let i = 0; i < data.length; i++) {
  let recipeListCloned = recipeList.cloneNode(true);
  let recipeName = recipeListCloned.querySelector("#recipeName");
  let recipeDesc = recipeListCloned.querySelector("#recipeDesc");
  let recipeCreator = recipeListCloned.querySelector("#recipeCreator");
  let recipeCalorie = recipeListCloned.querySelector("#recipeCalorie");
  let recipeTime = recipeListCloned.querySelector("#recipeTime");

  recipeName.innerText = data[i].name;
  recipeDesc.innerText = data[i].desc;
  recipeCreator.innerText = data[i].creator;
  recipeCalorie.innerText = data[i].calorie;
  recipeTime.innerText = data[i].time;

  recipeTbody.appendChild(recipeListCloned);
}

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => {
  const search = document.getElementById("search").value;
  let searchArr = search.split(/[\s\u3000]+/);
 
  for (let i = 0; i < data.length; i++) {
    //for文でjsonファイルの値を一つ取得
    let dataList = data[i];

    let check = true;
    //変数tmpでjsonファイルからnameとdescの値（文字列）を取得
    let tmp = dataList.name + dataList.desc;
    //for文で変数searchArrの要素分だけ繰り返すよう命令
    //①例えば、変数searchArrの中身が「なす　野菜」だった場合、最初に「なす」があるかを検知する
    for (let a = 0; a < searchArr.length; a++) {
      //変数tmpの元々の値とreplaceメソッドで変数searchArrに入力された文字を削った値を比較
      //下記のif文がtrueになる場合、変数tmpと削った変数tmpが同じ値の為、検索に引っかからないので処理を終了させる
      //falseになる場合、それぞれの値に相違があるのでif文の中身はスキップされる
      if (tmp === tmp.replace(searchArr[a], "")) {
        check = false;
        break;
      }
      //②ここの部分で「なす」を削る、まだ「野菜」が残っているので、二つ目のfor文に戻る
      tmp = tmp.replace(searchArr[a], "");
    }
    if (check) {
      let recipeList = document.querySelectorAll("#recipeList")[i + 1];
      recipeList.style.backgroundColor = "red";
    } else {
      let recipeList = document.querySelectorAll("#recipeList")[i + 1];
      recipeList.style.backgroundColor = null;
    }
    
  }
});
