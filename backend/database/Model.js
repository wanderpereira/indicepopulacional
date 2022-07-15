import sqlite3 from "sqlite3";

// Conexão com o Banco de Dados
const database = new sqlite3.Database(
  "./database/indicadores.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
    console.log("Conectado ao Banco de Dados Indicadores");
  }
);

// Consulta dos Estados para Option do Form
function estados(){
    let query = "SELECT sigla, estado, regiao FROM indicadores ORDER BY estado ASC";
    return new Promise((resolve, reject) => {
        database.all(query, function (err, rows) {
            if (err) reject(err);
			resolve(rows);
        });
    })
}

// Consulta dos dados do ranking
function ranking(sigla, geo){
    
    // Renomeando a Região conforme a VIEW do Banco de Dados
    if(geo == "Sul") geo = "sul";
    if(geo == "Sudeste") geo = "sudeste";
    if(geo == "Norte") geo = "norte";
    if(geo == "Nordeste") geo = "nordeste";
    if(geo == "Centro-Oeste") geo = "centro_oeste";

    let query = `SELECT estado, ranking, regiao, populacao from vw_${geo} where sigla = '${sigla}'`;
    return new Promise((resolve, reject) => {
        database.all(query, function (err, rows) {
            if (err) reject(err);
			resolve(rows);
        });
    })
    
}

export {estados, ranking}