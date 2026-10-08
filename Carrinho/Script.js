/* QUANTIDADES DE ITENS */
let quantidadeCachorro = 0;
let quantidadeGato = 0;
let quantidadeCoelho = 0;
let quantidadeCavalo = 0;
let quantidadePeixe = 0;
/*============================================================*/

let total = 0;

/* VALOR RAÇÕES */
let valorCachorro = 30;
let valorGato = 45;
let valorCoelho = 20;
let valorCavalo = 100;
let valorPeixe = 25;
/*============================================================*/


/* BOTÕES DE AUMENTAR QUANTIDADE */
let maisCachorro = document.getElementById("maisCachorro");
let maisGato = document.getElementById("maisGato");
let maisCoelho = document.getElementById("maisCoelho");
let maisCavalo = document.getElementById("maisCavalo");
let maisPeixe = document.getElementById("maisPeixe");
/*===========================================================*/


/* BOTÕES DE DIMINUIR QUANTIDADE */
let menosCachorro = document.getElementById("menosCachorro");
let menosGato = document.getElementById("menosGato");
let menosCoelho = document.getElementById("menosCoelho");
let menosCavalo = document.getElementById("menosCavalo");
let menosPeixe = document.getElementById("menosPeixe");
/*============================================================*/


/* TEXTO DE QUANTIDADE */
let textoQuantidadeCachorro = document.getElementById("quantidadeCachorro");
let textoQuantidadeGato = document.getElementById("quantidadeGato");
let textoQuantidadeCoelho = document.getElementById("quantidadeCoelho");
let textoQuantidadeCavalo = document.getElementById("quantidadeCavalo");
let textoQuantidadePeixe = document.getElementById("quantidadePeixe");
/*============================================================*/


/* AQUI VAI FAZER AUMENTE A QUANTIDADE */
maisCachorro.addEventListener(
    "click", function(){
        quantidadeCachorro++;
        textoQuantidadeCachorro.textContent = quantidadeCachorro;

        total += valorCachorro;

        document.getElementById("total").textContent =
            total.toFixed(2).replace(".", ",");
    }
);

maisGato.addEventListener(
    "click", function(){
        quantidadeGato++;
        textoQuantidadeGato.textContent = quantidadeGato;

        total += valorGato;

        document.getElementById("total").textContent =
            total.toFixed(2).replace(".", ",");
    }
);

maisCoelho.addEventListener(
    "click", function(){
        quantidadeCoelho++;
        textoQuantidadeCoelho.textContent = quantidadeCoelho;

        total += valorCoelho;

        document.getElementById("total").textContent =
            total.toFixed(2).replace(".", ",");
    }
);

maisCavalo.addEventListener(
    "click", function(){
        quantidadeCavalo++;
        textoQuantidadeCavalo.textContent = quantidadeCavalo;

        total += valorCavalo;

        document.getElementById("total").textContent =
            total.toFixed(2).replace(".", ",");
    }
);

maisPeixe.addEventListener(
    "click", function(){
        quantidadePeixe++;
        textoQuantidadePeixe.textContent = quantidadePeixe;

        total += valorPeixe;

        document.getElementById("total").textContent =
            total.toFixed(2).replace(".", ",");
    }
);
/* ============================================================*/


/* AQUI VAI FAZER DIMINUIR A QUANTIDADE */
menosCachorro.addEventListener(
    "click", function(){
        if (quantidadeCachorro > 0) {
            quantidadeCachorro--;
            textoQuantidadeCachorro.textContent = quantidadeCachorro;

            total -= valorCachorro;

            document.getElementById("total").textContent =
                total.toFixed(2).replace(".", ",");
        }
    }
);

menosGato.addEventListener(
    "click", function(){
        if (quantidadeGato > 0) {
            quantidadeGato--;
            textoQuantidadeGato.textContent = quantidadeGato;

            total -= valorGato;

            document.getElementById("total").textContent =
                total.toFixed(2).replace(".", ",");
        }
    }
);
menosCoelho.addEventListener(
    "click", function(){
        if (quantidadeCoelho > 0) {
            quantidadeCoelho--;
            textoQuantidadeCoelho.textContent = quantidadeCoelho;

            total -= valorCoelho;

            document.getElementById("total").textContent =
                total.toFixed(2).replace(".", ",");
        }
    }
);
menosCavalo.addEventListener(
    "click", function(){
        if (quantidadeCavalo > 0) {
            quantidadeCavalo--;
            textoQuantidadeCavalo.textContent = quantidadeCavalo;

            total -= valorCavalo;

            document.getElementById("total").textContent =
                total.toFixed(2).replace(".", ",");
        }
    }
);
menosPeixe.addEventListener(
    "click", function(){
        if (quantidadePeixe > 0) {
            quantidadePeixe--;
            textoQuantidadePeixe.textContent = quantidadePeixe;

            total -= valorPeixe;

            document.getElementById("total").textContent =
                total.toFixed(2).replace(".", ",");
        }
    }
);
/* ============================================================*/


/* COISAS DO POP-UP */
let botaoAbrir = document.getElementById("AbrirPop");
let popUp = document.getElementById("Pop_Up");
let botaoFechar = document.getElementById("fecharLogin");
/* ==================================================== */


/* ABRIR O POP-UP */
botaoAbrir.addEventListener(
    "click", function() {
        popUp.classList.add("Aberto");
    }
);
/* ================================================== */


/* FECHAR O POP-UP */
botaoFechar.addEventListener(
    "click", function() {
        popUp.classList.remove("Aberto");
    }
);
/* =====================================================*/