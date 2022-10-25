// Your code here

// cb functions

const createEls = () => {
    const header = document.createElement('h1');
    header.innerText = "Kitten Pic"
    const mainDiv = document.createElement('div');
    const img = document.createElement("img")
}

const appendItems = (parent, ...params) => {
    parent.append(...params);
}

const fetchImg = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    console.log(data)
    const img = data[0].url;
    return img;
}


window.onload = () => {
    document.body.style.backgroundColor = "red";
    createEls();
    fetchImg();
    appendItems(mainDiv, header, img);
}