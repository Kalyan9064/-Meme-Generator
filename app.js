let url = "https://meme-api.com/gimme/wholesomememes";
let btn = document.querySelector("button");
let img = document.getElementById("img");
let title = document.getElementById("title");
let author = document.getElementById("author");

btn.addEventListener("click", async () => {
    let memeData = await getImg();
    img.setAttribute("src", memeData.url);
    title.textContent = memeData.title;
    author.textContent = `Author: ${memeData.author}`;
});

async function getImg() {
    try {
        let res = await axios.get(url);
        let memeData = {
            url: res.data.url,
            title: res.data.title,
            author: res.data.author
        };
        return memeData;
    } catch (err) {
        console.log("ERROR: ", err);
    }
}
