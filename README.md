# Previsão de Vendas com Regressão Linear Simples

Este projeto é um exemplo de análise e previsão de vendas mensais para diferentes produtos de uma rede de lojas de tintas, utilizando regressão linear simples.
### Integrantes: Lucas Casagrande Silva e Luís Felipe Sousa Foresto
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

## Saida

| Produto        | Equação             | R²     | Previsão Mês 13 | Previsão Mês 14 | Previsão Mês 15 | T1  | T2  | T3  | T4  |
| -------------- | ------------------- | ------ | --------------- | --------------- | --------------- | --- | --- | --- | --- |
| Tinta Acrílica | y = 19.09x + 89.24  | 0.7985 | 337.42          | 356.52          | 375.61          | 400 | 590 | 620 | 950 |
| Tinta Esmalte  | y = 10.87x + 71.82  | 0.9817 | 213.18          | 224.06          | 234.93          | 270 | 390 | 480 | 570 |
| Tinta Látex    | y = 10.00x + 190.00 | 1.0000 | 320.00          | 330.00          | 340.00          | 630 | 720 | 810 | 900 |
| Tinta Spray    | y = 5.98x + 53.64   | 0.9784 | 131.36          | 137.34          | 143.32          | 195 | 255 | 300 | 360 |
| Tinta PVA      | y = 10.00x + 140.00 | 1.0000 | 270.00          | 280.00          | 290.00          | 310 | 0   | 0   | 0   |

