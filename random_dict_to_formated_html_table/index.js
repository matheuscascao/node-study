// javascript code snippet used to generate a html table from a random dict || snippet from a freelance project

const mockedData = [
    {
        "nomeSeguradora":
            "MAPFRE",
        "jurosNominais":
            "7.50",
        "jurosEfetivos":
            "7.76",
        "valorPrimeiraParcela":
            "11642.53",
        "amortizacaoMaisJuros":
            "11517.24",
        "valorSeguroDfi":
            "50.30",
        "valorSeguroMip":
            "49.99",
        "tarifaManutencaoMensal":
            "25.00",
        "rendaMinima":
            "314.50",
        "cet":
            "8.22"
    },
    {
        "nomeSeguradora":
            "TOO SEGUROS",
        "jurosNominais":
            "7.50",
        "jurosEfetivos":
            "7.76",
        "valorPrimeiraParcela":
            "11663.83",
        "amortizacaoMaisJuros":
            "11517.24",
        "valorSeguroDfi":
            "60.27",
        "valorSeguroMip":
            "61.32",
        "tarifaManutencaoMensal":
            "25.00",
        "rendaMinima":
            "368.03",
        "cet":
            "8.27"
    }
]

function generateTableData(data) {
    let tableDictData = {
        "nomeSeguradora": ["Dados"],
        "jurosNominais": ["Juros Nominais"],
        "jurosEfetivos": ["Juros Efetivos"],
        "valorPrimeiraParcela": ["Valor da Primeira parcela"],
        "amortizacaoMaisJuros": ["Amortização + Juros"],
        "valorSeguroDfi": ["Valor Seguro DFI"],
        "valorSeguroMip": ["Valor Seguro MIP"],
        "tarifaManutencaoMensal": ["Tarifa Manutenção Mensal"],
        "rendaMinima": ["Renda Mínima"],
        "cet": ["CET"]
    }

    data.forEach(data => {
        Object.keys(data).forEach(key => {
            tableDictData[key].push(data[key]);
        });
    });

    Object.keys(tableDictData).forEach(key => {
        tableDictData[key] = tableDictData[key].map(value => value.toString());
    });

    return tableDictData;
}

function generateHTMLTable(tableData) {
    const keys = Object.keys(tableData);
    const headerKeys = keys.slice(1); 
  
    const headerRow = tableData["nomeSeguradora"].map(item => `<div class="header__item header_title">${item}</div>`).join('');

    const tableRows = headerKeys.map(key => {
      const rowValues = tableData[key].slice(1).map(value => `<div class="table-data">${value}</div>`).join('');
      return `<div class="table-row"><div class="table-data">${tableData[key][0]}</div>${rowValues}</div>`;
    }).join('');
  
    const tableHTML = `
      <div class="container">
        <div class="table">
          <div class="table-header">
            ${headerRow}
          </div>
          <div class="table-content">
            ${tableRows}
          </div>
        </div>
      </div>
    `;
  
    return tableHTML;
}
  
const tableHTMLCode = generateHTMLTable(dictData);
console.log(tableHTMLCode);