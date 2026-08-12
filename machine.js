
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
