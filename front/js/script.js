
/*

1/  fetch vers http://localhost:3000/api/products

2/ affiche les produits

sdsdf
sdf
sdf
sdf


*/

// commentaire de ligne


// Récupération des données depuis le backend
function getDatasFromBackend(urlBackend) {
    fetch(urlBackend)
    .then((result) =>{
        return result.json();
    })
    .then(( datas)=> {
        console.log(datas);
        showDatas(datas);
    })
    .catch((e)=>{
        // TODO message pour l'utilisateur
        showMsgError('Le site est indisponible, merci de revenir plus tard');
        console.log('getDatasFromBackend : ' );
        console.log(e);
    })

}

//fonction qui affiche 1 card
function showDatas(datas) {
    //déclaration
    let i=0;
    //initialisation
    //controle
    if(datas=="" ) {
        showMsgError('erreur sur le site');
        console.log("showDatas : la variable datas est vide");
        return;
    }
    //traitement
    for (i=0;i<datas.length;i++) {
        showData(datas[i]);
    }


    //retour

}

//fonction qui affiche 1 card
function showData(data) {
    
    if(data=="" ) {
        showMsgError('erreur sur le site');
        console.log("showData : la variable data est vide");
        return;
    }

    let div=document.getElementById('items');
    div.innerHTML+="<div>" + data._id + "</div>";
}

function showMsgError(message) {
    let div=document.getElementById('items');
    div.innerHTML=message;
    div.style.backgroundColor='red';
    div.st
}


function main() {
    let url="http://localhost:3000/api/products";

    getDatasFromBackend(url);
}



main();




