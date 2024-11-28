// //getElementById, getElementsByTagName, getElementsByClassName
// const header1 = document.getElementById("h1")  //element node
// const p = document.getElementsByTagName("p")  //html collection
// const list = document.getElementsByClassName("list") //html collection

// header1.style.backgroundColor = "Purple"
// p[0].style.color = "Yellow"
// list[0].style.color = "Blue"


// //querySelector
// const list2 = document.querySelector("li:nth-child(2)")
// const anchor = document.querySelector("#a a")
// list2.style.backgroundColor = "Grey";
// anchor.style.fontSize = "40px"

// const list = document.querySelector("li")

// //querySelectorAll()
// const list = document.querySelectorAll("li")

// //innerHtml
// const sebuahNode = document.getElementById("h1")
// sebuahNode.innerHTML = "<em>Javascript</em>"

// const nodeSection = document.getElementById("a")
// const nodeP = nodeSection.querySelector("p")
// const list = "<ol><li>ayam goreng</li><li>ayam rebus</i></ol>"
// nodeP.innerHTML = list

// // node style
// const nodeH1 = document.getElementById("h1")
// nodeH1.style.fontFamily = "Consolas"
// nodeH1.style.backgroundColor = "Gold"
// nodeH1.style.textShadow = "10px 10px 10px"

// memanipulasi atribut
const nodeH1 = document.getElementById("h1")
nodeH1.getAttribute("id")

const nodeSection = document.getElementById("a")
const nodeP1 = nodeSection.querySelector("P")
nodeP1.setAttribute("id", "P1")

const nodeDiv2 = document.getElementById("container2")
const nodeUl = nodeDiv2.querySelector("ul")
nodeUl.removeAttribute("id")
