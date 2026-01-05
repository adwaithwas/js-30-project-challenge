// Dynamic HTML
const app = document.createElement("div");
document.body.append(app)

const h1 = document.createElement("h1");
h1.textContent = "Palindrome Checker";
h1.style.fontFamily = "sans-serif"

const btn = document.createElement("button");
btn.textContent = "check";

const inputField = document.createElement("input");
inputField.placeholder = "Enter your string";
inputField.style.marginRight = "10px";

const ans = document.createElement("p");
ans.style.fontFamily = "sans-serif";

app.append(h1, inputField, btn, ans);


// Logic
btn.addEventListener("click", (e) => {
    const value1 = inputField.value;
    const value2 = value1.split("").reverse().join("");
    if (value1.toLowerCase().trim() === value2.toLowerCase().trim()) {
        ans.textContent = " It's a Palindrome!!";
    } else {
        ans.textContent = " It's not a Palindrome!!";
    }
})

inputField.addEventListener("keydown", (e) => {
    if (e.key == "Enter"){
        btn.click();
    }
})