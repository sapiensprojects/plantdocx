import { cmToDxa } from "./utilities.js";
import configs from "./configs.js";
import paragraphStyles from "./paragraphStyles.js";

// data = {heading, rows[], images[], filename}
export function createPlantDocx(data) {

    // Handling 0(zero) noOfRows
    if (data.rows.length === 0){
      let newDocx = createEmptyDocx();
      saveDocx(newDocx, data.filename);
      return;
    }

    // Creating docx rows
    let docxTableRows = []
    for (let row in data.rows){
        let docxTableRow = new docx.TableRow({
            children : [
                new docx.TableCell({
                    children : [
                        new docx.Paragraph({
                            text : data.rows[row][0].toUpperCase(),
                            style: "boldPara_inPC",
                        })
                    ]
                }),
                new docx.TableCell({
                    children : [
                        new docx.Paragraph({
                            text : data.rows[row][1],
                            style: "normalPara",
                        })
                    ]
                })
            ]
        });
        docxTableRows.push(docxTableRow);
    }
    
    // Creating docx table
    let docxTable = new docx.Table({
        rows: docxTableRows,
        width:{
            size: configs.tableWidthInPercentage,
            type: docx.WidthType.PERCENTAGE
        }
    });

    // Creating docx
    let docxPage = new docx.Document({
        styles: {
            paragraphStyles: paragraphStyles
        },
        sections: [
            {   
                properties:{
                    page:{
                        margin: {
                            top: cmToDxa(configs.pageMarginInCm),
                            bottom: cmToDxa(configs.pageMarginInCm),
                            left: cmToDxa(configs.pageMarginInCm),
                            right: cmToDxa(configs.pageMarginInCm)
                        },
                    },
                },
                children:[docxTable],
            }
        ]
    });

    saveDocx(docxPage, data.filename);

}


function saveDocx(newDocx, filename){
    docx.Packer.toBlob(newDocx).then(blob => {
        saveAs(blob, filename);
    });
}

function createEmptyDocx(){
    let newDocx = new docx.Document({
        sections:[
            {
                children:[
                    new docx.Paragraph({
                        text: ""
                    })
                ]
            }
        ]
    });
    return newDocx;
}
