import data from "./data.json" assert { type: "json" };

const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC");

function list1() {
  const list1 = document.getElementById("list1");
  list1.style.display = "block";
  const listLi1 =  document.createElement('p');
  const listLi2 =  document.createElement('p');
  const listLi3 =  document.createElement('p');
  listLi1.innerHTML = data[0].tradenameA;
  listLi2.innerHTML = data[0].ingredientsA;
  listLi3.innerHTML = data[0].contentQuantityA;
  list1.before(listLi1);
  list1.before(listLi2);
  list1.before(listLi3);
}

function list2() {
  const list2 = document.getElementById("list2");
  list2.style.display = "block";
  const listLi1 =  document.createElement('p');
  const listLi2 =  document.createElement('p');
  const listLi3 =  document.createElement('p');
  listLi1.innerHTML = data[1].tradenameB;
  listLi2.innerHTML = data[1].ingredientsB;
  listLi3.innerHTML = data[1].contentQuantityB;
  list2.before(listLi1);
  list2.before(listLi2);
  list2.before(listLi3);
}

function list3() {
  const list3 = document.getElementById("list3");
  list3.style.display = "block";
  const listLi1 =  document.createElement('p');
  const listLi2 =  document.createElement('p');
  const listLi3 =  document.createElement('p');
  listLi1.innerHTML = data[2].tradenameC;
  listLi2.innerHTML = data[2].ingredientsC;
  listLi3.innerHTML = data[2].contentQuantityC;
  list3.before(listLi1);
  list3.before(listLi2);
  list3.before(listLi3);
}

buttonA.addEventListener("click", () => {
  list1();
});

buttonB.addEventListener("click", () => {
  list2();
});

buttonC.addEventListener("click", () => {
  list3();
});

