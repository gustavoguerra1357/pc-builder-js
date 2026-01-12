const components = {
    cases: [
        {name: "Gabinete Gamer Rise Mode Galaxy Glass", price: 199.0, image: "https://images6.kabum.com.br/produtos/fotos/485726/gabinete-gamer-rise-mode-galaxy-glass-m-mini-m-atx-lateral-e-frontal-em-vidro-temperado-preto-rm-ga-ggmn-fb_1752856894_gg.jpg"},
        {name: "Gabinete Gamer Redragon Wideload Lite", price: 329.99, image: "https://images5.kabum.com.br/produtos/fotos/473175/gabinete-gamer-redragon-wideload-lite-preto-ca-604b_1697812301_gg.jpg"},
        {name: "Gabinete Gamer Rise Mode Wave Black", price: 189.99, image: "https://images3.kabum.com.br/produtos/fotos/474523/gabinete-gamer-rise-mode-wave-black-mid-tower-argb-atx-3-cooler-fan-argb-preto-rm-wa-fb-argb_1703770091_gg.jpg"},
        {name: "Gabinete Gamer Rise Mode Glass 06X", price: 169.99, image: "https://images6.kabum.com.br/produtos/fotos/324516/gabinete-gamer-rise-mode-glass-06x-lateral-em-vidro-fume-e-frontal-em-vidro-temperado-preto-rm-ca-06x-fb_1660589149_gg.jpg"},
        {name: "Gabinete Kalkan Midgard", price: 174.99, image: "https://images5.kabum.com.br/produtos/fotos/713685/gabinete-kalkan-midgard-mid-tower-lateral-em-vidro-micro-atx-preto-klk00039_1742824661_gg.jpg"},
        {name: "Gabinete Gamer Rise Mode Galaxy Glass ", price: 229.00, image: "https://images7.kabum.com.br/produtos/fotos/485727/gabinete-gamer-rise-mode-galaxy-glass-m-mini-m-atx-lateral-e-frontal-em-vidro-temperado-branco-rm-ga-ggmn-fw_1753368499_gg.jpg"},
        {name: "Gabinete Office Rise Mode X1 Black", price: 75.00, image: "https://images9.kabum.com.br/produtos/fotos/516119/gabinete-rise-mode-x1-black-mini-tower-m-atx-preto-rm-ga-ofx1-fb_1718977329_gg.jpg"},
        {name: "Gabinete Gamer Husky Dome 210", price: 189, image: "https://images0.kabum.com.br/produtos/fotos/609390/gabinete-gamer-husky-dome-210-mini-tower-m-atx-lateral-e-frontal-em-vidro-branco-hgn210br_1750417452_gg.jpg"},
        {name: "Gabinete Gamer Rise Mode Galaxy Glass", price: 499, image: "https://images9.kabum.com.br/produtos/fotos/320909/gabinete-gamer-rise-mode-galaxy-glass-lateral-em-vidro-temperado-branco-rm-ga-gg-fw_1657736758_gg.jpg"},
        {name: "Gabinete Gamer Hyrax HGB310", price: 129, image: "https://images4.kabum.com.br/produtos/fotos/685834/gabinete-hyrax-tower-hgb310-preto-hgb310b_1753703353_gg.jpg"},
        {name: "Gabinete Gamer Husky Dome 110", price: 239, image: "https://images7.kabum.com.br/produtos/fotos/609387/gabinete-gamer-husky-dome-110-mid-tower-atx-lateral-em-vidro-sem-fans-preto-hgn110pt_1760119494_gg.jpg"},
        {name: "Gabinete Liketec Hurricane, Frontal Mesh", price: 159, image: "https://images8.kabum.com.br/produtos/fotos/883978/gabinete-liketec-hurricane-frontal-mesh-lateral-em-vidro-3x-fan-rainbow-lc-at-hurricane-3fr_1753194868_gg.jpg"}
    ]
}

const homeSection = document.getElementById("home-section");
const caseSection = document.getElementById("case-section");


function switchSection(old, newer) {
    old.classList.add("hidden");
    newer.classList.remove("hidden");
}


document.getElementById("comecar-agora").addEventListener('click', () => {
    switchSection(homeSection, caseSection);
})

components.cases.forEach(el => {
    createCaseOption(el);
})

function createCaseOption(el) {
    const selectionCaseContainer = document.getElementById("selection-case-container");
    // cria componente de gabinete e coloca no pai
    //cada componente vai ter uma funcao ao clicar
    const div = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("p");
    const price = document.createElement("p");


    img.src = el.image;
    name.innerText = el.name;
    price.innerText = el.price;

    div.classList.add("case-option");

    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(price);

    selectionCaseContainer.appendChild(div);

    

}