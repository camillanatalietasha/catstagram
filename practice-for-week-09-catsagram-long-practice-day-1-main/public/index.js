// Your code here

window.onload = async() => {
    document.body.style.backgroundColor = "red";
    const imgUrl = await fetchImg();
    createEls(imgUrl);
}

// cb functions
const createEls = (imgUrl) => {
    const header = document.createElement('h1');
    const mainDiv = document.createElement('div');
    const img = document.createElement("img")
    header.innerText = "Kitten Pic"
    img.setAttribute("src", imgUrl)
    appendItems(mainDiv, header, img);
}

const appendItems = (parent, ...params) => {
    const body = document.querySelector("body");
    parent.append(...params);
    body.append(parent);
}

const fetchImg = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    console.log(data)
    const img = data[0].url;
    return img;
}
