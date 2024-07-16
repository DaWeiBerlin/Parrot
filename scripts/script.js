//global speichern
//notizen anzeigen lassen
let notes = ["Kirsche","Erdnuss","spielen"]
let trash = []
function renderNotes(){
    content.innerHTML = ""
    for(let i = 0; i < notes.length;i++){
        content.innerHTML += /*html*/`
        <div class="note">${notes[i]} <a onclick="NotizLöschen(${i})">X</a></div>
        `;
    }
    trash.innerHTML = ""
    for(let j = 0; j < trash.length;j++){
        trash.innerHTML += /*html*/`
        <div class="note">${trash[j]} <a onclick="Löschen(${j})">X</a></div>
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
    trash.push(notes[i])
    console.log(trash)
    notes.splice(i,1)

    renderNotes()
}

function Löschen(i){
    trash.splice(i,1)
}
//notizen hinzufügen
//notizen löschen
//notizen archivieren
