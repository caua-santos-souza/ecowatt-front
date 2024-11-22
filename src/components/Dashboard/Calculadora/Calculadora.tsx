'use client'
import React, { useState } from 'react';
import styles from './Calculadora.module.css';

const VALOR_PAINEL_SOLAR = 11000;  
const CAPACIDADE_PAINEL = 600;    

const PainelSolarCalculator: React.FC = () => {
  const [ultimaConta, setUltimaConta] = useState<number | string>(''); 
  const [kWhConsumido, setKWhConsumido] = useState<number | string>(''); 
  const [nota, setNota] = useState<number | null>(null);
  const [tempoPagamento, setTempoPagamento] = useState<number | null>(null);
  const [economiaEstimativa, setEconomiaEstimativa] = useState<number>(0);
  const [painelNecessario, setPainelNecessario] = useState<number>(1);

  const handleSubmit = () => {
    const conta = parseFloat(ultimaConta.toString());
    const consumo = parseFloat(kWhConsumido.toString());

    if (isNaN(conta) || conta <= 0) {
      alert('Por favor, insira um valor válido para a última conta.');
      return;
    }

    if (isNaN(consumo) || consumo <= 0) {
      alert('Por favor, insira o consumo mensal de energia (kWh).');
      return;
    }


    const economiaMensal = conta * 0.70;  

    const numPainéis = Math.ceil(consumo / CAPACIDADE_PAINEL);
    setPainelNecessario(numPainéis);


    const tempo = (VALOR_PAINEL_SOLAR * numPainéis) / economiaMensal / 12;
    setTempoPagamento(tempo);


    let calculoNota = 1;
    if (tempo <= 8) {
      calculoNota = 5;
    } else if (tempo <= 12) {
      calculoNota = 4;
    } else if (tempo <= 25) {
      calculoNota = 3;
    } else if (tempo <= 30) {
      calculoNota = 2;
    }

    setNota(calculoNota);
    setEconomiaEstimativa(economiaMensal);
  };

  const fraseNota = (nota: number) => {
    switch (nota) {
      case 5:
        return 'Excelente! O retorno do investimento é muito rápido, uma ótima opção.';
      case 4:
        return 'Muito bom! O retorno do investimento é razoavelmente rápido.';
      case 3:
        return 'Razoável. O retorno do investimento é moderado, mas pode ser vantajoso.';
      case 2:
        return 'A economia é boa, mas o tempo de retorno é um pouco longo.';
      default:
        return 'O tempo de retorno é muito longo. Não é recomendável no momento.';
    }
  };

  const getNotaColor = (nota: number) => {
    switch (nota) {
      case 5: return { backgroundColor: '#4CAF50', color: '#fff' };  // Verde
      case 4: return { backgroundColor: '#8BC34A', color: '#fff' };  // Verde claro
      case 3: return { backgroundColor: '#FFEB3B', color: '#000' };  // Amarelo
      case 2: return { backgroundColor: '#FFC107', color: '#000' };  // Laranja
      default: return { backgroundColor: '#F44336', color: '#fff' };  // Vermelho
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Calculadora de Viabilidade de Painel Solar</h1>
      <div className={styles.inputContainer}>
        <label htmlFor="ultimaConta" className={styles.label}>Valor da Última Conta de Energia (R$):</label>
        <input
          id="ultimaConta"
          type="number"
          value={ultimaConta}
          onChange={(e) => setUltimaConta(e.target.value)}
          className={styles.input}
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="kWhConsumido" className={styles.label}>Consumo Mensal (kWh):</label>
        <input
          id="kWhConsumido"
          type="number"
          value={kWhConsumido}
          onChange={(e) => setKWhConsumido(e.target.value)}
          className={styles.input}
        />
      </div>

      <div className={styles.resultContainer}>
        <button onClick={handleSubmit} className={styles.calculateButton}>Calcular</button>

        {nota !== null && (
          <div className={styles.result}>
            <p className={styles.economia}>
              Economia Estimada Mensal: R${economiaEstimativa.toFixed(2)}
            </p>
            <p className={styles.tempo}>
              Tempo de Retorno do Investimento: {tempoPagamento?.toFixed(1)} anos
            </p>
            <p className={styles.painel}>
              Quantidade de Painéis Necessários: {painelNecessario} painel{painelNecessario > 1 ? 's' : ''}
            </p>
            <div className={styles.nota} style={getNotaColor(nota)}>
              {fraseNota(nota)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PainelSolarCalculator;
