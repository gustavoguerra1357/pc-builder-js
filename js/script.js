const components = {
    cases: [
        { name: "Gabinete Gamer Rise Mode Galaxy Glass", price: 199.00, image: "https://images6.kabum.com.br/produtos/fotos/485726/gabinete-gamer-rise-mode-galaxy-glass-m-mini-m-atx-lateral-e-frontal-em-vidro-temperado-preto-rm-ga-ggmn-fb_1752856894_gg.jpg" },
        { name: "Gabinete Gamer Redragon Wideload Lite", price: 329.99, image: "https://images5.kabum.com.br/produtos/fotos/473175/gabinete-gamer-redragon-wideload-lite-preto-ca-604b_1697812301_gg.jpg" },
        { name: "Gabinete Gamer Rise Mode Wave Black", price: 189.99, image: "https://images3.kabum.com.br/produtos/fotos/474523/gabinete-gamer-rise-mode-wave-black-mid-tower-argb-atx-3-cooler-fan-argb-preto-rm-wa-fb-argb_1703770091_gg.jpg" },
        { name: "Gabinete Gamer Rise Mode Glass 06X", price: 169.99, image: "https://images6.kabum.com.br/produtos/fotos/324516/gabinete-gamer-rise-mode-glass-06x-lateral-em-vidro-fume-e-frontal-em-vidro-temperado-preto-rm-ca-06x-fb_1660589149_gg.jpg" },
        { name: "Gabinete Kalkan Midgard", price: 174.99, image: "https://images5.kabum.com.br/produtos/fotos/713685/gabinete-kalkan-midgard-mid-tower-lateral-em-vidro-micro-atx-preto-klk00039_1742824661_gg.jpg" },
        { name: "Gabinete Gamer Rise Mode Galaxy Glass ", price: 229.00, image: "https://images7.kabum.com.br/produtos/fotos/485727/gabinete-gamer-rise-mode-galaxy-glass-m-mini-m-atx-lateral-e-frontal-em-vidro-temperado-branco-rm-ga-ggmn-fw_1753368499_gg.jpg" },
        { name: "Gabinete Office Rise Mode X1 Black", price: 75.00, image: "https://images9.kabum.com.br/produtos/fotos/516119/gabinete-rise-mode-x1-black-mini-tower-m-atx-preto-rm-ga-ofx1-fb_1718977329_gg.jpg" },
        { name: "Gabinete Gamer Husky Dome 210", price: 189.00, image: "https://images0.kabum.com.br/produtos/fotos/609390/gabinete-gamer-husky-dome-210-mini-tower-m-atx-lateral-e-frontal-em-vidro-branco-hgn210br_1750417452_gg.jpg" },
        { name: "Gabinete Gamer Rise Mode Galaxy Glass", price: 499.00, image: "https://images9.kabum.com.br/produtos/fotos/320909/gabinete-gamer-rise-mode-galaxy-glass-lateral-em-vidro-temperado-branco-rm-ga-gg-fw_1657736758_gg.jpg" },
        { name: "Gabinete Gamer Hyrax HGB310", price: 129.00, image: "https://images4.kabum.com.br/produtos/fotos/685834/gabinete-hyrax-tower-hgb310-preto-hgb310b_1753703353_gg.jpg" },
        { name: "Gabinete Gamer Husky Dome 110", price: 239.00, image: "https://images7.kabum.com.br/produtos/fotos/609387/gabinete-gamer-husky-dome-110-mid-tower-atx-lateral-em-vidro-sem-fans-preto-hgn110pt_1760119494_gg.jpg" },
        { name: "Gabinete Liketec Hurricane, Frontal Mesh", price: 159.00, image: "https://images8.kabum.com.br/produtos/fotos/883978/gabinete-liketec-hurricane-frontal-mesh-lateral-em-vidro-3x-fan-rainbow-lc-at-hurricane-3fr_1753194868_gg.jpg" }
    ],
    cpu: [
        { name: "Processador Intel Core Ultra 7-265K", price: 2199.99, image: "https://images8.kabum.com.br/produtos/fotos/645178/processador-intel-core-ultra-7-265k-5-5ghz-ate-20-nucleos-com-suporte-a-pcie-5-0-e-4-0-e-suporte-a-ddr5-bx80768265k_1728593092_gg.jpg" },
        { name: "Processador Intel Core Ultra 5 Desktop", price: 1199.00, image: "https://images9.kabum.com.br/produtos/fotos/696999/processador-intel-core-ultra-5-desktop-processor-225-bx80768225_1756835085_gg.jpg" },
        { name: "Processador AMD Ryzen 5 5600GT", price: 899.00, image: "https://images8.kabum.com.br/produtos/fotos/520368/processador-amd-ryzen-5-5600gt-3-6-ghz-4-6ghz-max-turbo-cache-4mb-6-nucleos-12-threads-am4-100-100001488box_1708024586_gg.jpg" },
        { name: "Processador AMD Ryzen 7 7800X3D", price: 2189.00, image: "https://images2.kabum.com.br/produtos/fotos/426262/processador-amd-ryzen-7-7800x3d-5-0ghz-max-turbo-cache-104mb-am5-8-nucleos-video-integrado-100-100000910wof_1680784502_gg.jpg" },
        { name: "Processador Intel Core i5-12400F", price: 759.00, image: "https://images8.kabum.com.br/produtos/fotos/283718/processador-intel-core-i5-12400f-cache-xmb-xghz-xghz-max-turbo-lga-1700-bx8071512400f_1640094446_gg.jpg" },
        { name: "Processador AMD Ryzen 5 5600GT", price: 929.00, image: "https://images8.kabum.com.br/produtos/fotos/sync_mirakl/523518/xlarge/Processador-AMD-Ryzen-5-5600GT-3-6GHz-4-6GHz-Turbo-Cache-19MB-6-N-cleos-V-deo-Integrado-Radeon-AM4-100-100001488BOX_1764362320.jpg" },
        { name: "Processador AMD Ryzen 7 5700G", price: 1399.00, image: "https://images9.kabum.com.br/produtos/fotos/181089/processador-amd-ryzen-7-5700g-3-8ghz-4-6ghz-max-turbo-am4-video-integrado-8-nucleos-100-100000263box_1627588652_gg.jpg" },
        { name: "Processador AMD Ryzen 7 5700", price: 999.00, image: "https://images7.kabum.com.br/produtos/fotos/520367/processador-amd-ryzen-7-5700-3-7-ghz-4-6ghz-max-turbo-cache-4mb-8-nucleos-16-threads-am4-100-100000743box_1708024353_gg.jpg" },
        { name: "Processador Intel Core i3-10105", price: 619.00, image: "https://images5.kabum.com.br/produtos/fotos/181065/processador-intel-core-i3-10105-cache-6mb-3-7ghz-4-4ghz-max-turbo-lga-1200-bx8070110105_1660591733_gg.jpg" },
        { name: "Processador AMD Ryzen 9 9900X", price: 2299.00, image: "https://images2.kabum.com.br/produtos/fotos/609952/amd-ryzen-9-9900x-12-core_1723551236_gg.jpg" },
        { name: "Processador Intel Core i7-14700KF", price: 2299.00, image: "https://images7.kabum.com.br/produtos/fotos/497577/processador-intel-core-i7-14700kf-bx8071514700kf_1697722906_gg.jpg" },
        { name: "Processador Intel Core i5-12400", price: 999.00, image: "https://images3.kabum.com.br/produtos/fotos/283713/processador-intel-core-i5-12400-cache-xmb-xghz-xghz-max-turbo-lga-1700-bx8071512400_1640031464_gg.jpg" },
    ],
    gpu: [
        { name: "Placa de Vídeo RX 6600 CLD 8G ASRock", price: 1499.99, image: "https://images4.kabum.com.br/produtos/fotos/235984/placa-de-video-asrock-amd-radeon-rx-6600-cld-8g-8gb-90-ga2rzz-00uanf_1634738812_gg.jpg" },
        { name: "Placa de Vídeo RX 7600 Series Graphics", price: 1549.99, image: "https://images2.kabum.com.br/produtos/fotos/463542/placa-de-video-rx-7600-series-graphics-cards-xfx-amd-radeon-8gb-gddr6-rx-76pswftfy_1687890891_gg.jpg" },
        { name: "Placa de Vídeo XFX AMD RADEON RX 7600 ", price: 1599.99, image: "https://images5.kabum.com.br/produtos/fotos/723235/placa-de-video-amd-radeon-rx-7600-gaming-graphics-card-8gb-gddr6-rx-76pmbabfy_1740593267_gg.jpg" },
        { name: "Placa de Vídeo RX 7600 GAMING OC 8G", price: 1749.99, image: "https://images7.kabum.com.br/produtos/fotos/475647/placa-de-video-rx-7600-gaming-oc-8g-radeon-gigabyte-8gb-gddr6-128bits-rgb-gv-r76gaming-oc-8gd_1698435450_gg.jpg" },
        { name: "Placa de Vídeo ASUS DUAL RTX 5060 O8G NVIDIA", price: 2499.99, image: "https://images5.kabum.com.br/produtos/fotos/781225/placa-de-video-dual-rtx5060-o8g_1747314234_gg.jpg" },
        { name: "Placa de Vídeo ASRock RX 6600 Challenger White AMD Radeon", price: 1499.99, image: "https://images7.kabum.com.br/produtos/fotos/695107/placa-de-video-asrock-rx-6600-challenger-white-amd-radeon-8gb-gddr6-directx-12-ultimate-rdna-2-90-ga4uzz-00uanf_1742841360_gg.jpg" },
        { name: "Placa de Vídeo MSI RTX 5060 8G VENTUS 3X ", price: 2499.99, image: "https://images5.kabum.com.br/produtos/fotos/801935/placa-de-video-msi-rtx-5060-8g-ventus-3x-oc-geforce_1747656356_gg.jpg" },
        { name: "Placa de Vídeo MSI RTX 5070 12G Shadow", price: 4199.99, image: "https://images2.kabum.com.br/produtos/fotos/782142/placa-de-video-msi-rtx-5070-12g-shadow-2x-oc-nvdia-geforce-g5070-12s2c_1749495336_gg.jpg" },
        { name: "Placa de Vídeo MSI GeForce RTX 5060 Ti 8G", price: 2899.99, image: "https://images9.kabum.com.br/produtos/fotos/893049/placa-de-video-msi-geforce-rtx-5060-ti-8g-shadow-2x-oc-plus-nvidia-geforce-8gb-gddr7-128-bit-g506t-8s2cp_1753900267_gg.jpg" },
        { name: "Placa de Vídeo Gigabyte RTX 5070 EAGLE OC SFF 12G NVIDIA GeForce, 12GB", price: 4899.89, image: "https://images3.kabum.com.br/produtos/fotos/714573/placa-de-video-rtx-5070-eagle-oc-sff-12g-gigabyte-nvidia-geforce-12gb-gddr7-192bits-rgb-dlss-ray-tracing-9vn5070eo-00-g10_1740569788_gg.jpg" },
        { name: "Placa de Vídeo Palit GeForce RTX 5060 Infinity 3 OC NVIDIA", price: 2399.99, image: "https://images0.kabum.com.br/produtos/fotos/776930/placa-de-video-palit-geforce-rtx-5060-infinity-3-oc-nvidia-geforce-8gb-gddr7-128bits-fp4-e-dlss-4-ray-tracing-ne75060t19p1-gb2063s_1747393915_gg.jpg" },
        { name: "Placa De Vídeo Nvidia Geforce Msi RTX5060ti Ventus", price: 5508.00, image: "https://images8.kabum.com.br/produtos/fotos/sync_mirakl/986938/xlarge/Placa-De-V-deo-Nvidia-Geforce-Msi-RTX5060ti-Ventus-Oc-Black-Plus-2x-16gb-128-Bits-HDMI-3x-Dp-912-v535_1768414132.jpg" },

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
                createComponentOption(el, "Processador");
            })
            break
        case "Placa de Vídeo":
            components.gpu.forEach(el => {
                createComponentOption(el, "Placa de Vídeo");
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
function createComponentOption(el, type) {
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
        //atualiza meu pc, o preco e preche o bagulho
        const card = document.querySelector(`[data-type="${type}"]`);
        card.classList.add("filled");

        card.querySelector("img").src = el.image;
        card.querySelector(".component-label").innerText = String(el.name).slice(0, 30) + "...";
        card.querySelector(".price-content").classList.remove("hidden");
        card.querySelector(".price-content").innerText = "R$ " + el.price;
        updatePrice();


        closeModal();
    })

    selectionComponentContainer.appendChild(div);
}

function updatePrice() {
    let totalPrice = myPC.case[1];
    console.log(totalPrice)
    const componentPrices = document.querySelectorAll(".grid-layout .price-content");
    componentPrices.forEach(el => {
        let currentPrice = parseFloat(el.innerText.slice(3,-1))
        if(currentPrice) {
            totalPrice += currentPrice
        }
    })
    console.log("new total price: " + totalPrice)
}   

document.querySelectorAll(".component").forEach(clicked => {
    clicked.addEventListener("click", el => {
        if (modal.classList.contains("hidden")) {
            openModal(clicked.dataset.type)
        }
    })
})