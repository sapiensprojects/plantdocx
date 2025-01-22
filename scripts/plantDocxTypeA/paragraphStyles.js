let primaryColorHexValue = "C00C2A";
let secondaryColorHexValue = "123456";

export default [
    {
        id: "normalPara",
        name: "Normal Para",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: {
            font: "Calibri",
            size: 28,
            bold: false,
        },
        paragraph: {
            // alignment: AlignmentType.JUSTIFIED,
            spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
        },
    },

    {
        id: "boldPara",
        name: "Bold Para",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: {
            font: "Calibri",
            size: 28,
            bold: true,
        },
        paragraph: {
            spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
            // rightTabStop: TabStopPosition.MAX,
            // leftTabStop: 453.543307087,
        },
    },

    {
        id: "italicsPara",
        name: "Italics Para",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: {
            font: "Calibri",
            size: 28,
            italics: true,
        },
        paragraph: {
            spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
            // rightTabStop: TabStopPosition.MAX,
            // leftTabStop: 453.543307087,
        },
    },

    {
        id: "boldItalicsPara",
        name: "Bold Italics Para",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: {
            font: "Calibri",
            size: 28,
            italics: true,
            bold: true
        },
        paragraph: {
            spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
            // rightTabStop: TabStopPosition.MAX,
            // leftTabStop: 453.543307087,
        },
    },

    // PRIMARY COLORED PARAGRAPH STYLES
    {
        id: "normalPara_inPC",
        name: "Normal Para in Primary color",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: {
            font: "Calibri",
            size: 28,
            bold: false,
            color: primaryColorHexValue,
        },
        paragraph: {
            // alignment: AlignmentType.JUSTIFIED,
            spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
        },
    },

    {
        id: "boldPara_inPC",
        name: "Bold Para in Primary color",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: {
            font: "Calibri",
            size: 28,
            bold: true,
            color: primaryColorHexValue,
        },
        paragraph: {
            // spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
            spacing: { line: 276, left: 20 * 72 * 0.1, right: 20 * 72 * 0.05 },
            // rightTabStop: TabStopPosition.MAX,
            // leftTabStop: 453.543307087,
        },
    },

    {
        id: "italicsPara_inPC",
        name: "Italics Para in Primary color",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: {
            font: "Calibri",
            size: 28,
            italics: true,
            color: primaryColorHexValue,
        },
        paragraph: {
            spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
            // rightTabStop: TabStopPosition.MAX,
            // leftTabStop: 453.543307087,
        },
    },

    {
        id: "boldItalicsPara_inPC",
        name: "Bold Italics Para in Primary color",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: {
            font: "Calibri",
            size: 28,
            italics: true,
            bold: true,
            color: primaryColorHexValue,
        },
        paragraph: {
            spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
            // rightTabStop: TabStopPosition.MAX,
            // leftTabStop: 453.543307087,
        },
    },
]