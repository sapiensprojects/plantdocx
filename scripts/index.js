import { createPlantDocx as createPlantDocxTypeA } from "./plantDocxTypeA/plantDocs.js";




let elmts = {
    plantNameInp : null,
    rowsDiv: null,
    addRowBtn: null,
    filesDiv: null,
    addImageBtn: null,
    createBtn: null,
    filenameInp: null,
}

function getElmts(elmts){
    elmts.plantNameInp = document.querySelector("#plant-name-inp");
    elmts.rowsDiv = document.getElementById("rows").querySelector(".input-rows");
    elmts.addRowBtn = document.querySelector("#rows button");
    elmts.filesDiv = document.querySelector("#plant-images .files");
    elmts.addImageBtn = document.querySelector("#plant-images button");
    elmts.createBtn = document.querySelector("#create-docx button");
    elmts.filenameInp = document.getElementById("filename-inp");
}
getElmts(elmts)


function appendInputRow(parentElmt){
    let inputRowDiv = document.createElement("div");
    inputRowDiv.className = "input-row";
    inputRowDiv.innerHTML = `
        <textarea rows="1" class="row-field-name" placeholder="Field Name"></textarea>
        <textarea rows="1" class="row-field-value" placeholder="Field Value"></textarea>
    `;
    inputRowDiv.querySelector(".row-field-name").addEventListener("keypress", (event) => {
        if (event.key === "Enter"){
            event.target.rows += 1;
        }
    });

    inputRowDiv.querySelector(".row-field-value").addEventListener("keypress", (event) => {
        if (event.key === "Enter"){
            event.target.rows += 1;
        }
    });
    parentElmt.appendChild(inputRowDiv);
}

function appendImgFileInput(parentElmt){
    let fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/png, image/jpeg, image/jpg";
    fileInput.classList = "file-inp";
    parentElmt.appendChild(fileInput);
}

function addRowHndl(){
    appendInputRow(elmts.rowsDiv);
}

function addImageHndl(){
    appendImgFileInput(elmts.filesDiv);
}


function collectPlantDocxData(){
    let plantData = {}; // {heading, rows[], images[], filename}
    // Collecting "heading"
    let heading = elmts.plantNameInp.value;
    plantData.heading = heading;
    // Collecting "rows"
    let rows = [];
    let rowsElmts = elmts.rowsDiv.querySelectorAll(".input-row");
    for (let rowElmt of rowsElmts){
        let fieldName = rowElmt.querySelector(".row-field-name").value.trim();
        let fieldValue = rowElmt.querySelector(".row-field-value").value.trim();
        rows.push([fieldName, fieldValue]);
    }
    plantData.rows = rows;
    // Collecting "images"
    let images = [];
        // .....to do
    plantData.images = images;
    // Collecting "filename"
    let filename = String(elmts.filenameInp.value) + ".docx";
    plantData.filename = filename;
    
    return plantData;
}



function createDocxHndl(){
    // collect all data (heading, rows, images, filename)
    let data = collectPlantDocxData();
    // create docx
    createPlantDocxTypeA(data);
}









elmts.addImageBtn.onclick = addImageHndl;
elmts.addRowBtn.onclick = addRowHndl;
elmts.createBtn.onclick = createDocxHndl;