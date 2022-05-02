// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar()

// api for countries https://masai-mock-api.herokuapp.com/news/top-headlines?country=
// api for news  https://masai-mock-api.herokuapp.com/news?q=


import {searchImages,append,seachnewsbyid,appendnew } from "../components/fetch.js";

function search(e) {
    if (e.key === "Enter") {
        let query = document.getElementById("search_input").value;
        searchImages(query).then((data) => {

            console.log(data);
            let container = document.getElementById("results");
            container.innerHTML = null;
            append(data.articles, container);
            window.location.href = "search.html";
        });
    }
}

document.getElementById("search_input").addEventListener("keydown",search);

let categories = document.getElementById("sidebar").children;


function cSearch(){
    console.log(this.id);
    seachnewsbyid(this.id).then((data)=>{
        console.log(data);
        let container =document.getElementById("results");
        container.innerHTML=null;
        appendnew(data.articles,container)
    });
}


for(let el of categories){
    el.addEventListener("click",cSearch)
}

