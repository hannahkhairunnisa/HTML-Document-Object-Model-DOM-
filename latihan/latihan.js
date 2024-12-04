// nomor 1
const div = document.getElementsByTagName("div")
div[0].style.backgroundColor = "Pink"
div[1].style.backgroundColor = "Pink"

// nomor 2
const aksesId = document.getElementById("a")
const pilihAtribut = aksesId.querySelector("a[href='#']")
pilihAtribut.innerHTML = "<a href=https://www.google.com>Link</a>"

// nomor 3
const list = document.querySelectorAll("li")

for (let i = 0; i < list.length; i++){
    list[i].style.fontFamily = "Arial"
    list[i].style.fontSize = "20px"
    list[i].style.backgroundColor = "Purple"
    list[i].innerHTML = `List Baru ${i + 1}`
}
