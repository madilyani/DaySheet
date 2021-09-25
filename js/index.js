const tabItem = document.querySelectorAll(".tabItem");
const tabBtn = document.querySelectorAll(".tabBtn");
tabBtn.forEach((e) => {
  onTabClick(tabItem, tabBtn, e);
});
function onTabClick(tabBtns, tabItems, itemTab) {
  itemTab.addEventListener("click", function (e) {
    let currentTabBtn = itemTab;
    let tabIdItem = currentTabBtn.getAttribute("data-tab");
    let currentTabItem = document.querySelector(tabIdItem);
    if (!currentTabBtn.classList.contains("active")) {
      tabBtns.forEach(function (itemTab) {
        itemTab.classList.remove("active");
      });
      tabItems.forEach(function (itemTab) {
        itemTab.classList.remove("active");
      });
      currentTabBtn.classList.add("active");
      currentTabItem.classList.add("active");
    }
  });
}
let stickyPosition = document.getElementById("stickyPosition");
let header = document.getElementById("header");

let sticky = stickyPosition.offsetTop;
function scrollFunc() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};

// var wow = new WOW({
//   boxClass: "wow",
//   animateClass: "animated",
//   offset: 0,
//   mobile: true,
//   live: true,
//   scrollContainer: null,
//   resetAnimation: true,
// });
// wow.init();
