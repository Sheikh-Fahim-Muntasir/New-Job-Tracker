
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

// job counter start

function updateCounters() {
    const total = document.getElementById("all-container").children.length;
    const interview = document.getElementById("inter-container").children.length;
    const rejected = document.getElementById("reject-container").children.length;

    document.getElementById("total-start").innerText = total;
    document.getElementById("total-inter").innerText = interview;
    document.getElementById("total-reject").innerText = rejected;
    document.getElementById("total-start2").innerText = total;

    document.getElementById("empty-container").classList.add("hidden");
    if (total === 0) {
        document.getElementById("empty-container").classList.remove("hidden");

    }
    else {
        document.getElementById("empty-container").classList.add("hidden");

    }
    if (interview === 0) {
        document.getElementById("empty-container").classList.remove("hidden");
    }
    else {
        document.getElementById("empty-container").classList.add("hidden");

    }

    if (rejected === 0) {
        document.getElementById("empty-container").classList.remove("hidden");
    }
    else {
        document.getElementById("empty-container").classList.add("hidden");

    }
}
updateCounters();



// Event Listener for all 3 section 
document.getElementById("job-container").addEventListener("click", function (event) {
    const clickedElement = event.target;
    // console.log(clickedElement)
    const card = clickedElement.parentNode.parentNode.parentNode;
    console.log(card)


    if (clickedElement.classList.contains("inter-btn")) {
        document.getElementById("inter-container").appendChild(card);
        console.log("child appended")
        const status = card.querySelector("#status");

        status.innerText = "Interview";
        updateCounters()
    }

    if (clickedElement.classList.contains("reject-btn")) {
        document.getElementById("reject-container").appendChild(card);
        console.log("child appended")
        const status = card.querySelector("#status")
        status.innerText = "Rejected";
        card.querySelector("#status").classList.add("btn-error", "btn-dash")
        updateCounters()
    }
    if (clickedElement.classList.contains("bin-btn")) {
        document.getElementById("bin-container").appendChild(card);
        console.log("child appended")
        console.log("babu deleted")

        updateCounters()
    }
    // for interview container btn at top 
    if (clickedElement.id === "inter-clicked") {
        const interOf = document.getElementById("inter-container").children.length;
        document.getElementById("total-start2").innerText = interOf;
    }

});

// Interview section 
document.getElementById("inter-container").addEventListener("click", function (Event) {
    const clickedElement = Event.target;
    const card = clickedElement.parentNode.parentNode.parentNode;
    if (clickedElement.classList.contains("reject-btn")) {
        document.getElementById("reject-container").appendChild(card);

        card.querySelector("#status").innerText = "Rejected"
    }

    if (clickedElement.classList.contains("bin-btn")) {
        document.getElementById("bin-container").appendChild(card)
        console.log("babu deleted")
    }
});
// // // rejected section
document.getElementById("reject-container").addEventListener("click", function (event) {
    const clickedElement = event.target;
    const card = clickedElement.parentNode.parentNode.parentNode;
    if (card.querySelector(".bin-btn")) {
        document.getElementById("bin-container").appendChild(card);

    }
    updateCounters();
})

// empty section 
const total = document.getElementById("all-container").children.length;
const interview = document.getElementById("inter-container").children.length;
const rejected = document.getElementById("reject-container").children.length;
