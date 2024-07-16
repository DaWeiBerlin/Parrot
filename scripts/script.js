//global speichern
//notizen anzeigen lassen
let notes = ["Kirsche","Erdnuss","spielen"]
let trashe = []
function renderNotes(){
    content.innerHTML = ""
    for(let i = 0; i < notes.length;i++){
        content.innerHTML += /*html*/`
        <div class="note">${notes[i]} <a onclick="NotizLöschen(${i})">X</a></div>
        `;
    }
    document.getElementById("trash").innerHTML = ""
    for(let j = 0; j < trashe.length;j++){
        document.getElementById("trash").innerHTML += /*html*/`
        <div class="note">${trashe[j]} <a onclick="Löschen(${j})">X</a></div>
        `;
    }    
}

function NotizHinzufügen(){
    let nt =  text.value
    notes.push(nt)
    text.value = ""
    renderNotes()
}

function NotizLöschen(i){
    console.log(notes[i])
    trashe.push(notes[i])
    console.log(trashe)
    notes.splice(i,1)

    renderNotes()
}

function Löschen(i){
    trashe.splice(i,1)
    renderNotes()
}
//notizen hinzufügen
//notizen löschen
//notizen archivieren
