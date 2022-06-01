// Add the coffee to local storage with key "coffee"



async function getdata() {

    try {
        let url = `https://masai-mock-api.herokuapp.com/coffee/menu`
        let res = await fetch(url)

        let Data = await res.json();
        let coffe = await Data.menu.data
            // console.log(coffe)
        return coffe

    } catch (error) {
        console.log(error)

    }


}

async function readata() {
    var showdata = ""
    var x = await getdata()
    x.map(function(el) {

        showdata += `<div class="card">
        <img src=${el.image}"alt="">
        <p class="title">${el.title}</p>
        <p>${el.price}</p>
        <button id="bucket" onclick="addTo()">ADD TO Bucket</button>
    </div>

`


    })

    document.querySelector("#menu").innerHTML = showdata



}


readata()



var count = 1;
var bt = document.querySelector("#b")

function addTo() {

    var p = document.querySelector("#add").innerText = count
    count++





}