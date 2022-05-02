let searchImages = async (query) =>{
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}
        `);

        let data = await res.json();

        // console.log(data);
        return data
    }catch(error){
    console.log('error:', error);
    }
};

let append = (data, container)=>{
data.forEach(({title,description,urlToImage})=>{
    let div = document.createElement("div");
    div.setAttribute("class","news")
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let descr =document.createElement("p");
    descr.innerText = description;


    img.src =urlToImage;
    h3.innerText = title;

    div.append(img,h3,description);
    container.append(div);
});
};


let seachnewsbyid = async(query)=>{
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`)

        let data = await res.json();
        return data;
    } catch (error) {
        console.log('error:', error)
        
    }
};
let appendnew = (data, container)=>{
    data.forEach(({title,description,urlToImage})=>{
        let div = document.createElement("div");
        div.setAttribute("class","news")
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        let descr =document.createElement("p");
        descr.innerText = description;
    
    
        img.src =urlToImage;
        h3.innerText = title;
    
        div.append(img,h3,description);
        container.append(div);
    });
};


export {searchImages,append,seachnewsbyid,appendnew};