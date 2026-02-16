document.getElementById("uploadForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const sectionValue = document.getElementById("sectionSelect").value;
    const type = document.getElementById("typeSelect").value;
    const title = document.getElementById("titleInput").value;
    const desc = document.getElementById("descInput").value;
    const link = document.getElementById("linkInput").value;

    if (!sectionValue) {
        alert("Please select a section");
        return;
    }

    // Get correct section grid
    const section = document.getElementById(sectionValue);
    const contentGrid = section.querySelector(".content-grid");

    // Create card
    const card = document.createElement("div");
    card.className = "card";

    let mediaElement = "";

    if (type === "video") {
        mediaElement = `<iframe src="${link}" frameborder="0" allowfullscreen></iframe>`;
    } 
    else if (type === "audio") {
        mediaElement = `<audio controls src="${link}"></audio>`;
    } 
    else if (type === "image") {
        mediaElement = `<img src="${link}" alt="${title}">`;
    } 
    else {
        mediaElement = `<a href="${link}" target="_blank">Open Document</a>`;
    }

    card.innerHTML = `
        ${mediaElement}
        <h4>${title}</h4>
        <p>${desc}</p>
    `;

    contentGrid.appendChild(card);

    // Clear form
    document.getElementById("uploadForm").reset();
});
