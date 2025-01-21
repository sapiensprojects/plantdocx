import configs from "./configs.js";

// data = {heading, rows[], images[], filename}
export function createPlantDocx(data) {

    // Creating docx rows
    let docxTableRows = []
    for (let row in data.rows){
        let docxTableRow = new docx.TableRow({
            children : [
                new docx.TableCell({
                    children : [
                        new docx.Paragraph({
                            text : data.rows[row][0]
                        })
                    ]
                }),
                new docx.TableCell({
                    children : [
                        new docx.Paragraph({
                            text : data.rows[row][1]
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
            size: configs.tableWidthInPercent,
            type: docx.WidthType.PERCENTAGE
        }
    });

    // Creating docx
    let docxPage = new docx.Document({
        sections : [
            {
                children:[docxTable]
            }
        ]
    });

    docx.Packer.toBlob(docxPage).then(blob => {
        // console.log(blob);
        saveAs(blob, data.filename);
        // console.log("Document created successfully");
    });

}
