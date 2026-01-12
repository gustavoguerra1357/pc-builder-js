const homeSection = document.getElementById("home-section");
const caseSection = document.getElementById("case-section");


function switchScene(old, newer) {
    old.classList.add("hidden");
    newer.classList.remove("hidden");
}


document.getElementById("comecar-agora").addEventListener('click', () => {
    switchScene(homeSection, caseSection);
})