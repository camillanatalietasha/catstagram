// Your code here

window.onload = async() => {
    document.body.style.backgroundColor = "skyblue";
    const imgUrl = await fetchImg();
    createEls(imgUrl);
}

// cb functions
const createEls = (imgUrl) => {
    const header = document.createElement('h1');
    const mainDiv = document.createElement('div');
    const img = document.createElement("img");
    const imgDiv = document.createElement("div");
    //set id
    header.setAttribute("id", "header")
    mainDiv.setAttribute("id", "mainDiv")
    img.setAttribute("id", "img")
    imgDiv.setAttribute("id", "imgDiv")

    header.innerText = "Kitten Pic"
    img.setAttribute("src", imgUrl)
    appendItems(imgDiv, img)
    appendItems(mainDiv, header, imgDiv);

    const cssFunc = () => {
        mainDiv.style.display = "flex";
        mainDiv.style.justifyContent = "center";
        mainDiv.style.flexDirection = "column";
        mainDiv.style.alignItems= "center";
        header.style.margin = "20px";
        img.style.width = "50%";
        img.style.height = "50%";
        imgDiv.style.display = "flex";
        imgDiv.style.justifyContent = "center";
        imgDiv.style.alignItems = "center";

        imgDiv.style.width = "800px"
        imgDiv.style.height = "800px"
        // img.style.objectFit = "contain"
        // img.style.padding = "10%"


    }
    cssFunc()
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
