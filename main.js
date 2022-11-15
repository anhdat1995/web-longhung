const tabs = document.querySelectorAll(".nav");
const panes = document.querySelectorAll(".slider-nav");
tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function () {
    document.querySelector(".nav.active").classList.remove("active");
    document.querySelector(".slider-nav.active").classList.remove("active");
    this.classList.add("active");
    pane.classList.add("active");
  };          
});
const tuan = document.getElementById ('1');
const tuan1 = document.getElementById ('2');
const tuan2 = document.getElementById ('3');
const che = document.getElementById ('item1');
const che1 = document.getElementById ('item2');
const che2 = document.getElementById ('item3');
tuan.onclick = function() {
  che.setAttribute('id','chao')
};
tuan1.onclick = function() {
  che1.setAttribute('id','chao')
};
tuan2.onclick = function() {
  che2.setAttribute('id','chao')
};