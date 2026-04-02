function regressaoLinear(dados, n){  
  let somaX, somaY, somaXY, somaX2;
  somaX = somaY = somaXY = somaX2 = 0;
  
  dados.forEach(d => {
    somaX += d.mes;
    somaY += d.vendas;
    somaXY += d.mes * d.vendas;
    somaX2 += Math.pow(d.mes, 2);
  })

let a = (n * somaXY - somaX * somaY) / (n * somaX2 - (somaX * somaX));
let b = (somaY - a * somaX) / n;

return { a, b };

}

function calcularR2(a, b, dados, n){
  let somaY, mediaY;
  somaY = mediaY = 0;
  
  dados.forEach(d => {
    somaY += d.vendas;
  })
  mediaY = somaY / n;

  let sqTotal = 0;
  let sqRes = 0;
  
  dados.forEach(d => {
    let estimadoY = prever(a, b, d.mes);
    sqTotal += Math.pow(d.vendas - mediaY, 2);
    sqRes += Math.pow(d.vendas - estimadoY, 2);
  })
  
  return 1 - (sqRes / sqTotal);
}

function prever(a, b, mes){
  return ((a * mes) + b).toFixed(2)
}

function somarTrimestres(dados) {
  const trimestres = {
    T1: 0, T2: 0, T3: 0, T4: 0
  };

  dados.forEach(d => {
    if (d.mes <= 3) trimestres.T1 += d.vendas;
    else if (d.mes <= 6) trimestres.T2 += d.vendas;
    else if (d.mes <= 9) trimestres.T3 += d.vendas;
    else trimestres.T4 += d.vendas;
  });

  return trimestres;
}

const dados = [
  { id: 1, produto: "Tinta Acrílica", ano: 2023, mes: 1, trimestre: 1, vendas: 120 },
  { id: 2, produto: "Tinta Acrílica", ano: 2023, mes: 2, trimestre: 1, vendas: 150 },
  { id: 3, produto: "Tinta Acrílica", ano: 2023, mes: 3, trimestre: 1, vendas: 130 },
  { id: 4, produto: "Tinta Acrílica", ano: 2023, mes: 4, trimestre: 2, vendas: 180 },
  { id: 5, produto: "Tinta Acrílica", ano: 2023, mes: 5, trimestre: 2, vendas: 200 },
  { id: 6, produto: "Tinta Acrílica", ano: 2023, mes: 6, trimestre: 2, vendas: 210 },
  { id: 7, produto: "Tinta Acrílica", ano: 2023, mes: 7, trimestre: 3, vendas: 190 },
  { id: 8, produto: "Tinta Acrílica", ano: 2023, mes: 8, trimestre: 3, vendas: 220 },
  { id: 9, produto: "Tinta Acrílica", ano: 2023, mes: 9, trimestre: 3, vendas: 210 },
  { id: 10, produto: "Tinta Acrílica", ano: 2023, mes: 10, trimestre: 4, vendas: 250 },
  { id: 11, produto: "Tinta Acrílica", ano: 2023, mes: 11, trimestre: 4, vendas: 300 },
  { id: 12, produto: "Tinta Acrílica", ano: 2023, mes: 12, trimestre: 4, vendas: 400 },
  { id: 13, produto: "Tinta Esmalte", ano: 2023, mes: 1, trimestre: 1, vendas: 80 },
  { id: 14, produto: "Tinta Esmalte", ano: 2023, mes: 2, trimestre: 1, vendas: 100 },
  { id: 15, produto: "Tinta Esmalte", ano: 2023, mes: 3, trimestre: 1, vendas: 90 },
  { id: 16, produto: "Tinta Esmalte", ano: 2023, mes: 4, trimestre: 2, vendas: 120 },
  { id: 17, produto: "Tinta Esmalte", ano: 2023, mes: 5, trimestre: 2, vendas: 130 },
  { id: 18, produto: "Tinta Esmalte", ano: 2023, mes: 6, trimestre: 2, vendas: 140 },
  { id: 19, produto: "Tinta Esmalte", ano: 2023, mes: 7, trimestre: 3, vendas: 150 },
  { id: 20, produto: "Tinta Esmalte", ano: 2023, mes: 8, trimestre: 3, vendas: 160 },
  { id: 21, produto: "Tinta Esmalte", ano: 2023, mes: 9, trimestre: 3, vendas: 170 },
  { id: 22, produto: "Tinta Esmalte", ano: 2023, mes: 10, trimestre: 4, vendas: 180 },
  { id: 23, produto: "Tinta Esmalte", ano: 2023, mes: 11, trimestre: 4, vendas: 190 },
  { id: 24, produto: "Tinta Esmalte", ano: 2023, mes: 12, trimestre: 4, vendas: 200 },
  { id: 25, produto: "Tinta Látex", ano: 2023, mes: 1, trimestre: 1, vendas: 200 },
  { id: 26, produto: "Tinta Látex", ano: 2023, mes: 2, trimestre: 1, vendas: 210 },
  { id: 27, produto: "Tinta Látex", ano: 2023, mes: 3, trimestre: 1, vendas: 220 },
  { id: 28, produto: "Tinta Látex", ano: 2023, mes: 4, trimestre: 2, vendas: 230 },
  { id: 29, produto: "Tinta Látex", ano: 2023, mes: 5, trimestre: 2, vendas: 240 },
  { id: 30, produto: "Tinta Látex", ano: 2023, mes: 6, trimestre: 2, vendas: 250 },
  { id: 31, produto: "Tinta Látex", ano: 2023, mes: 7, trimestre: 3, vendas: 260 },
  { id: 32, produto: "Tinta Látex", ano: 2023, mes: 8, trimestre: 3, vendas: 270 },
  { id: 33, produto: "Tinta Látex", ano: 2023, mes: 9, trimestre: 3, vendas: 280 },
  { id: 34, produto: "Tinta Látex", ano: 2023, mes: 10, trimestre: 4, vendas: 290 },
  { id: 35, produto: "Tinta Látex", ano: 2023, mes: 11, trimestre: 4, vendas: 300 },
  { id: 36, produto: "Tinta Látex", ano: 2023, mes: 12, trimestre: 4, vendas: 310 },
  { id: 37, produto: "Tinta Spray", ano: 2023, mes: 1, trimestre: 1, vendas: 60 },
  { id: 38, produto: "Tinta Spray", ano: 2023, mes: 2, trimestre: 1, vendas: 70 },
  { id: 39, produto: "Tinta Spray", ano: 2023, mes: 3, trimestre: 1, vendas: 65 },
  { id: 40, produto: "Tinta Spray", ano: 2023, mes: 4, trimestre: 2, vendas: 80 },
  { id: 41, produto: "Tinta Spray", ano: 2023, mes: 5, trimestre: 2, vendas: 85 },
  { id: 42, produto: "Tinta Spray", ano: 2023, mes: 6, trimestre: 2, vendas: 90 },
  { id: 43, produto: "Tinta Spray", ano: 2023, mes: 7, trimestre: 3, vendas: 95 },
  { id: 44, produto: "Tinta Spray", ano: 2023, mes: 8, trimestre: 3, vendas: 100 },
  { id: 45, produto: "Tinta Spray", ano: 2023, mes: 9, trimestre: 3, vendas: 105 },
  { id: 46, produto: "Tinta Spray", ano: 2023, mes: 10, trimestre: 4, vendas: 110 },
  { id: 47, produto: "Tinta Spray", ano: 2023, mes: 11, trimestre: 4, vendas: 120 },
  { id: 48, produto: "Tinta Spray", ano: 2023, mes: 12, trimestre: 4, vendas: 130 },
  { id: 49, produto: "Tinta PVA", ano: 2023, mes: 1, trimestre: 1, vendas: 150 },
  { id: 50, produto: "Tinta PVA", ano: 2023, mes: 2, trimestre: 1, vendas: 160 }
];

const produtos = [...new Set(dados.map(d => d.produto))];

produtos.forEach(produto => {
  const dadosProduto = dados.filter(d => d.produto === produto);
  const n = dadosProduto.length;
  const { a, b } = regressaoLinear(dadosProduto, n);
  const r2 = calcularR2(a, b, dadosProduto, n);
  const previsoes = [13, 14, 15].map(mes => ({
    mes,
    previsto: prever(a, b, mes)
  }));
  const dadosComPrevisao = dadosProduto.map(d => ({
    ...d,
    previsto: prever(a, b, d.mes)
  }));
  const trimestres = somarTrimestres(dadosComPrevisao);
  
  console.log("\nProduto:", produto);
  console.log("Equação:", `y = ${a.toFixed(2)}x + ${b.toFixed(2)}`);
  console.log("R²:", r2.toFixed(4));
  console.log("Previsões:", previsoes);
  console.log("Trimestres:", trimestres);
});

