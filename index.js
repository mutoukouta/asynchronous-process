import data from "./data.json" assert { type: "json" };
const buttons = document.querySelectorAll("#buttons button");
const listId = document.getElementById("listId");
const listTag1 = document.createElement("p");
const listTag2 = document.createElement("p");
const listTag3 = document.createElement("p");
const product = data.product;

function list(num) {
  const tradename = product[num].商品名;
  const ingredients = product[num].原材料;
  const contentQuantity = product[num].内容量;
  listTag1.innerHTML = tradename;
  listTag2.innerHTML = ingredients;
  listTag3.innerHTML = contentQuantity;
  listId.before(listTag1);
  listId.before(listTag2);
  listId.before(listTag3);
}
let lists = [].slice.call(buttons);
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    list(lists.indexOf(btn));
  });
});

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => {
  const search = document.getElementById("search").value;
  let result = data.product.find((item) => item.商品名 === search);
  console.log(result);
});
