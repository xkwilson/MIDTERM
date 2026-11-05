// click event for hamburger menu

const hamburger = document.querySelector("#hamburger");
const navDropDown = document.querySelector("#navDropDown");

hamburger.addEventListener("click", function() {

    if (navDropDown.style.display == "flex") {
        navDropDown.style.display = "none";
    } else {
        navDropDown.style.display = "flex";
    }

});


// load the papers from github db

async function getPapers() {
    try {

        const response = await fetch("https://upadhayay.github.io/db.json");
        const data = await response.json();

        // js dom
        const albertEinsteinPapers = document.querySelector("#paperList");

        // loop through all the books
        for (let book of data.books) {

            console.log(book);

            let publicationStatus;

            if (book.published == true) {
                publicationStatus = "Published";
            } else {
                publicationStatus = "Not Published";
            }

            const single_paper_div = document.createElement("div");

            single_paper_div.innerHTML = `
                <h3>${book.title}</h3>
                <p>Year: ${book.year}</p>
                <p>${publicationStatus}</p>
                <img src="PHOTOS/paperPNG.png" alt="Paper icon">
            `;

            single_paper_div.classList.add("paper");

            albertEinsteinPapers.append(single_paper_div);

        }

    }
    catch(error) {
        console.log("Error in fetch function:", error);
    }
}

getPapers();
