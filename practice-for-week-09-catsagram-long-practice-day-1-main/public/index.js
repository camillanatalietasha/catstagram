// Your code here

window.onload = async() => {
    document.body.style.backgroundColor = "skyblue";
    let imgUrl = await fetchImg();
    createEls(imgUrl);

    // new kitten button
    imgButton.addEventListener("click", async () => {
        imgUrl = await fetchImg();
        img.setAttribute("src", imgUrl);
    });

    // add a comment
    commentButton.addEventListener("click", () => {
        const commentLi = document.createElement("li");
        let commentId = commentUl.children.length + 1;
        commentLi.setAttribute("id", commentId);
        commentLi.innerText = commentInput.value;
        commentUl.append(commentLi);
    })
    //add & subtract score
    plusSign.addEventListener("click", () => {
        addScore();
    })
    minusSign.addEventListener("click", () => {
        subtractScore();
    })
}

// cb functions
const createEls = (imgUrl) => {
    const mainDiv = document.createElement('div');
    const imgDiv = document.createElement("div");
    const commentDiv = document.createElement("div");
    const likesDiv = document.createElement("div")
    const header = document.createElement('h1');
    const img = document.createElement("img");
    const imgButton = document.createElement("button");
    const commentButton = document.createElement("button")
    const commentInput = document.createElement("textarea")
    const commentUl = document.createElement("ul")
    const plusSign = document.createElement("button")
    const minusSign = document.createElement("button")
    const score = document.createElement("p")




    //set id
    header.setAttribute("id", "header");
    mainDiv.setAttribute("id", "mainDiv");
    img.setAttribute("id", "img");
    imgDiv.setAttribute("id", "imgDiv");
    likesDiv.setAttribute("id", "likesDiv");
    imgButton.setAttribute("id", "imgButton");
    commentButton.setAttribute("id", "commentButton");
    commentInput.setAttribute("id", "commentInput");
    commentDiv.setAttribute("id", "commentDiv");
    commentUl.setAttribute("id", "commentUl");
    plusSign.setAttribute("id", "plusSign");
    minusSign.setAttribute("id", "minusSign");
    score.setAttribute("id", "score");
    plusSign.setAttribute("class", "voters");
    minusSign.setAttribute("class", "voters");



    header.innerText = "Kitten Pic"
    imgButton.innerText = "New Kitten"
    commentButton.innerText = "Submit Comment"
    plusSign.innerText = "+";
    score.innerText = "0"
    minusSign.innerText = "-"
    img.setAttribute("src", imgUrl);
    // imgDiv.append(img, imgButton);
    appendItems(imgDiv, img, imgButton);
    appendItems(likesDiv, plusSign, score, minusSign);
    appendItems(commentDiv, commentButton, commentInput, commentUl);
    appendItems(mainDiv, header, imgDiv, likesDiv, commentDiv);

    const cssFunc = () => {
        // mainDiv.style.display = "flex";
        // mainDiv.style.justifyContent = "center";
        // mainDiv.style.flexDirection = "column";
        // mainDiv.style.alignItems= "center";
        // header.style.margin = "20px";
        // img.style.width = "50%";
        // img.style.height = "50%";
        // imgDiv.style.display = "flex";
        // imgDiv.style.justifyContent = "center";
        // imgDiv.style.alignItems = "center";

        // imgDiv.style.width = "800px"
        // imgDiv.style.height = "800px"
        // imgButton.style.width = "150px";
        // imgButton.style.height = "50px"
        // commentButton.style.width = "150px";
        // commentButton.style.height = "50px"
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

const addScore = () => {
    score.innerText = +score.innerText + 1;
}
const subtractScore = () => {
    score.innerText = +score.innerText - 1;
}
