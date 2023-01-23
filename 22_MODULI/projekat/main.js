// import {GL, GI} from "./modules/list.js";
// import {generateTable, generateItem as generateTableItem, generateTableRow} from "./modules/table.js";

// let ul = GL(document.body);

// GI(ul, "images/photo1.jpg");
// GI(ul, "images/photo2.jpg");
// GI(ul, "images/photo3.jpg");

// let table = generateTable(document.body);
// let tr = generateTableRow(table);
// generateTableItem(tr, "images/photo1.jpg");
// generateTableItem(tr, "images/photo2.jpg");
// generateTableItem(tr, "images/photo3.jpg");

import * as Lista from "./modules/list.js";
import * as Tabela from  "./modules/table.js";

let ul = Lista.GL(document.body);
for(let i=1; i<=Lista.length; i++) {
    Lista.GI(ul, `images/photo${i}.jpg`);
}

let table = Tabela.generateTable(document.body);
let tr = Tabela.generateTableRow(table);
for(let i=1; i<=Tabela.length; i++) {
    Tabela.generateItem(tr, `images/photo${i}.jpg`)
}