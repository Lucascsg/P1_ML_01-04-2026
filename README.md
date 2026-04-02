# Previsão de Vendas com Regressão Linear Simples

Este projeto é um exemplo de análise e previsão de vendas mensais para diferentes produtos de uma rede de lojas de tintas, utilizando regressão linear simples.

---

## Objetivo

- Calcular a equação da reta de regressão linear (`y = ax + b`) para as vendas de cada produto ao longo dos meses.
- Prever as vendas dos próximos 3 meses (meses 13, 14 e 15).
- Calcular o coeficiente de determinação (R²) para medir a confiabilidade da previsão.
- Agrupar vendas previstas por trimestre.
- Mostrar resultados detalhados para cada produto.

---

## Como funciona

1. O programa recebe os dados históricos de vendas mensais por produto.
2. Para cada produto, calcula-se:
   - Coeficiente angular (a) e linear (b) da reta de regressão.
   - Coeficiente R² da previsão.
   - Previsão para os próximos 3 meses.
   - Soma de vendas previstas agrupadas por trimestre.
3. Os resultados são exibidos no console.
