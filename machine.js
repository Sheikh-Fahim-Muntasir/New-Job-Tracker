
// function id.innertext


console.log("Hello World!");
function getValue(id) {
    const value = document.getElementById(id).innerText;

    return value;
}
// function for all section all . Accept .reject

function Goto(id) {
    document.getElementById("all-container").classList.add("hidden");
    document.getElementById("inter-container").classList.add("hidden");
    document.getElementById("reject-container").classList.add("hidden");

    const showOnly = document.getElementById(id)
    showOnly.classList.remove("hidden")
}
`
// job counter start`

let totalStart = getValue("total-start");
let interStart = getValue("total-inter");
let rejectStart = getValue("total-reject");
// total
totalStart = document.getElementById("all-container").children.length;
console.log("total jobs ", totalStart);
document.getElementById("total-start").innerText = totalStart
// interview total
interStart = document.getElementById("inter-container").children.length;
console.log("total interview ", interStart);
document.getElementById("total-inter").innerText = interStart
// rejected total
rejectStart = document.getElementById("reject-container").children.length;
console.log("total rejected ", rejectStart);
document.getElementById("total-reject", rejectStart).innerText = rejectStart
