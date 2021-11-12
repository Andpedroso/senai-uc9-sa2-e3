function mostrarPopup()
{
    window.alert("Hello World - Bem vindo à página Game Mania! Promoção do dia: 20% de desconto em todos os produtos!")
}

function rederizarNoticias()
{

    let espaco = document.getElementById("espaco_noticias")

    let listaNoticias = 
    [
        {
            imagem: "img/nintendol.png",
            titulo: "Nintendo",
            descricao: "Metroid Dread é sucesso nas reviews e agrada fans."
        },

        {
            imagem: "img/konami.png",
            titulo: "Konami",
            descricao: "Estão planejando um novo Castlevania, Silent Hill e Metal Gear Solid."
        },

        {
            imagem: "img/kogima.png",
            titulo: "Kojima Productions",
            descricao: "Hideo Kojima demonstra querer negociar com Konami."
        }
    ]

    let template = "";

    for (let index = 0; index < listaNoticias.length; index++) 
    {
        const noticia = listaNoticias[index];
        
        template += 
            `
            <div class="novidades_nintendo col">
            <img src="${noticia.imagem}" width="180px" alt="imagem noticias">
            <h4>${noticia.titulo}</h4>
            <p>${noticia.descricao}</p>
            </div>
            `
    }

    //console.log(template)

    espaco.innerHTML = template;
}

let email = document.getElementById("campo_email");

function enviarEmail() 
{
    let emailDigitado = email.value;
    console.log(emailDigitado)
}