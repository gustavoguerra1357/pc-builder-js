const components = {
    cases: [
        {name: "Gabinete Gamer Rise Mode Galaxy Glass", price: 199.00, image: "https://images6.kabum.com.br/produtos/fotos/485726/gabinete-gamer-rise-mode-galaxy-glass-m-mini-m-atx-lateral-e-frontal-em-vidro-temperado-preto-rm-ga-ggmn-fb_1752856894_gg.jpg"},
        {name: "Gabinete Gamer Redragon Wideload Lite", price: 329.99, image: "https://images5.kabum.com.br/produtos/fotos/473175/gabinete-gamer-redragon-wideload-lite-preto-ca-604b_1697812301_gg.jpg"},
        {name: "Gabinete Gamer Rise Mode Wave Black", price: 189.99, image: "https://images3.kabum.com.br/produtos/fotos/474523/gabinete-gamer-rise-mode-wave-black-mid-tower-argb-atx-3-cooler-fan-argb-preto-rm-wa-fb-argb_1703770091_gg.jpg"},
        {name: "Gabinete Gamer Rise Mode Glass 06X", price: 169.99, image: "https://images6.kabum.com.br/produtos/fotos/324516/gabinete-gamer-rise-mode-glass-06x-lateral-em-vidro-fume-e-frontal-em-vidro-temperado-preto-rm-ca-06x-fb_1660589149_gg.jpg"},
        {name: "Gabinete Kalkan Midgard", price: 174.99, image: "https://images5.kabum.com.br/produtos/fotos/713685/gabinete-kalkan-midgard-mid-tower-lateral-em-vidro-micro-atx-preto-klk00039_1742824661_gg.jpg"},
        {name: "Gabinete Gamer Rise Mode Galaxy Glass ", price: 229.00, image: "https://images7.kabum.com.br/produtos/fotos/485727/gabinete-gamer-rise-mode-galaxy-glass-m-mini-m-atx-lateral-e-frontal-em-vidro-temperado-branco-rm-ga-ggmn-fw_1753368499_gg.jpg"},
        {name: "Gabinete Office Rise Mode X1 Black", price: 75.00, image: "https://images9.kabum.com.br/produtos/fotos/516119/gabinete-rise-mode-x1-black-mini-tower-m-atx-preto-rm-ga-ofx1-fb_1718977329_gg.jpg"},
        {name: "Gabinete Gamer Husky Dome 210", price: 189.00, image: "https://images0.kabum.com.br/produtos/fotos/609390/gabinete-gamer-husky-dome-210-mini-tower-m-atx-lateral-e-frontal-em-vidro-branco-hgn210br_1750417452_gg.jpg"},
        {name: "Gabinete Gamer Rise Mode Galaxy Glass", price: 499.00, image: "https://images9.kabum.com.br/produtos/fotos/320909/gabinete-gamer-rise-mode-galaxy-glass-lateral-em-vidro-temperado-branco-rm-ga-gg-fw_1657736758_gg.jpg"},
        {name: "Gabinete Gamer Hyrax HGB310", price: 129.00, image: "https://images4.kabum.com.br/produtos/fotos/685834/gabinete-hyrax-tower-hgb310-preto-hgb310b_1753703353_gg.jpg"},
        {name: "Gabinete Gamer Husky Dome 110", price: 239.00, image: "https://images7.kabum.com.br/produtos/fotos/609387/gabinete-gamer-husky-dome-110-mid-tower-atx-lateral-em-vidro-sem-fans-preto-hgn110pt_1760119494_gg.jpg"},
        {name: "Gabinete Liketec Hurricane, Frontal Mesh", price: 159.00, image: "https://images8.kabum.com.br/produtos/fotos/883978/gabinete-liketec-hurricane-frontal-mesh-lateral-em-vidro-3x-fan-rainbow-lc-at-hurricane-3fr_1753194868_gg.jpg"}
    ],
    cpu: [
        {name: "Processador Intel Core Ultra 7-265K", price: 2199.99, image: "https://images8.kabum.com.br/produtos/fotos/645178/processador-intel-core-ultra-7-265k-5-5ghz-ate-20-nucleos-com-suporte-a-pcie-5-0-e-4-0-e-suporte-a-ddr5-bx80768265k_1728593092_gg.jpg"},
        {name: "Processador Intel Core Ultra 5 Desktop", price: 1199.00, image: "https://images9.kabum.com.br/produtos/fotos/696999/processador-intel-core-ultra-5-desktop-processor-225-bx80768225_1756835085_gg.jpg"},
        {name: "Processador AMD Ryzen 5 5600GT", price: 899.00, image: "https://images8.kabum.com.br/produtos/fotos/520368/processador-amd-ryzen-5-5600gt-3-6-ghz-4-6ghz-max-turbo-cache-4mb-6-nucleos-12-threads-am4-100-100001488box_1708024586_gg.jpg"},
        {name: "Processador AMD Ryzen 7 7800X3D", price: 2189.00, image: "https://images2.kabum.com.br/produtos/fotos/426262/processador-amd-ryzen-7-7800x3d-5-0ghz-max-turbo-cache-104mb-am5-8-nucleos-video-integrado-100-100000910wof_1680784502_gg.jpg"},
        {name: "Processador Intel Core i5-12400F", price: 759.00, image: "https://images8.kabum.com.br/produtos/fotos/283718/processador-intel-core-i5-12400f-cache-xmb-xghz-xghz-max-turbo-lga-1700-bx8071512400f_1640094446_gg.jpg"},
        {name: "Processador AMD Ryzen 5 5600GT", price: 929.00, image: "https://images8.kabum.com.br/produtos/fotos/sync_mirakl/523518/xlarge/Processador-AMD-Ryzen-5-5600GT-3-6GHz-4-6GHz-Turbo-Cache-19MB-6-N-cleos-V-deo-Integrado-Radeon-AM4-100-100001488BOX_1764362320.jpg"},
        {name: "Processador AMD Ryzen 7 5700G", price: 1399.00, image: "https://images9.kabum.com.br/produtos/fotos/181089/processador-amd-ryzen-7-5700g-3-8ghz-4-6ghz-max-turbo-am4-video-integrado-8-nucleos-100-100000263box_1627588652_gg.jpg"},
        {name: "Processador AMD Ryzen 7 5700", price: 999.00, image: "https://images7.kabum.com.br/produtos/fotos/520367/processador-amd-ryzen-7-5700-3-7-ghz-4-6ghz-max-turbo-cache-4mb-8-nucleos-16-threads-am4-100-100000743box_1708024353_gg.jpg"},
        {name: "Processador Intel Core i3-10105", price: 619.00, image: "https://images5.kabum.com.br/produtos/fotos/181065/processador-intel-core-i3-10105-cache-6mb-3-7ghz-4-4ghz-max-turbo-lga-1200-bx8070110105_1660591733_gg.jpg"},
        {name: "Processador AMD Ryzen 9 9900X", price: 2299.00, image: "https://images2.kabum.com.br/produtos/fotos/609952/amd-ryzen-9-9900x-12-core_1723551236_gg.jpg"},
        {name: "Processador Intel Core i7-14700KF", price: 2299.00, image: "https://images7.kabum.com.br/produtos/fotos/497577/processador-intel-core-i7-14700kf-bx8071514700kf_1697722906_gg.jpg"},
        {name: "Processador Intel Core i5-12400", price: 999.00, image: "https://images3.kabum.com.br/produtos/fotos/283713/processador-intel-core-i5-12400-cache-xmb-xghz-xghz-max-turbo-lga-1700-bx8071512400_1640031464_gg.jpg"},
    ]

}

const myPC = {
    case: ["", 0.0],
    motherBoard: ["", 0.0],
    videoBoard: ["", 0.0],
    ram: ["", 0.0],
    processor: ["", 0.0],
    powerSupply: ["", 0.0],
    storage: ["", 0.0],
    price: 0,
    img: ""
}

const homeSection = document.getElementById("home-section");
const caseSection = document.getElementById("case-section");
const assemblySection = document.getElementById("assembly-section");
const modal = document.getElementById("modal");


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
    price.innerText = "R$ " + el.price;
    price.classList.add("price-content");

    div.classList.add("component-option");

    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(price);

    div.addEventListener('click', elemento => {
        switchSection(caseSection, assemblySection)
        myPC.price += el.price;
        myPC.case[0] = el.name;
        myPC.case[1] = el.price;
        myPC.img = el.image;
        console.log(myPC);
    })

    selectionCaseContainer.appendChild(div);

}


function openModal(tipo) {
    modal.classList.toggle("hidden");
    const modalTitle = document.getElementById("component-title");
    modalTitle.innerText = tipo;

    switch (tipo) {
        case "Processador":
            components.cpu.forEach(el => {
                createComponentOption(el);
            })
        break
    }
}
function closeModal() {
    modal.classList.toggle("hidden");
    const selectionCaseContainer = document.getElementById("selection-component-container");
    const options = Array.from(selectionCaseContainer.children);
    options.forEach(el => {
        el.remove();
    })
}
function createComponentOption(el) {
    const selectionComponentContainer = document.getElementById("selection-component-container");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("p");
    const price = document.createElement("p");


    img.src = el.image;
    name.innerText = el.name;
    price.innerText = "R$ " + el.price;
    price.classList.add("price-content");

    div.classList.add("component-option");

    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(price);

    div.addEventListener('click', elemento => {

    })

    selectionComponentContainer.appendChild(div);
}

document.querySelectorAll(".component").forEach(clicked => {
    clicked.addEventListener("click", el => {
        openModal(clicked.dataset.type)
    })
})