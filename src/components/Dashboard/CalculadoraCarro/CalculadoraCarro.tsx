'use client'
import React, { useState } from 'react';
import styles from './CalculadoraCarro.module.css';

interface Tarifa {
  custoCombustivel: number; 
  custoEletricidade: number; 
}

const tarifasPorEstado: { [key: string]: Tarifa } = {
  'AC': { custoCombustivel: 6.75, custoEletricidade: 0.53 },
  'AL': { custoCombustivel: 6.80, custoEletricidade: 0.54 },
  'AM': { custoCombustivel: 6.95, custoEletricidade: 0.50 },
  'AP': { custoCombustivel: 6.70, custoEletricidade: 0.51 },
  'BA': { custoCombustivel: 6.85, custoEletricidade: 0.52 },
  'CE': { custoCombustivel: 6.60, custoEletricidade: 0.48 },
  'DF': { custoCombustivel: 6.55, custoEletricidade: 0.49 },
  'ES': { custoCombustivel: 6.50, custoEletricidade: 0.47 },
  'GO': { custoCombustivel: 6.75, custoEletricidade: 0.50 },
  'MA': { custoCombustivel: 6.60, custoEletricidade: 0.48 },
  'MG': { custoCombustivel: 6.70, custoEletricidade: 0.52 },
  'MS': { custoCombustivel: 6.65, custoEletricidade: 0.49 },
  'MT': { custoCombustivel: 6.85, custoEletricidade: 0.51 },
  'PA': { custoCombustivel: 6.75, custoEletricidade: 0.50 },
  'PB': { custoCombustivel: 6.65, custoEletricidade: 0.48 },
  'PE': { custoCombustivel: 6.60, custoEletricidade: 0.49 },
  'PI': { custoCombustivel: 6.50, custoEletricidade: 0.47 },
  'PR': { custoCombustivel: 6.55, custoEletricidade: 0.46 },
  'RJ': { custoCombustivel: 7.00, custoEletricidade: 0.54 },
  'RN': { custoCombustivel: 6.60, custoEletricidade: 0.48 },
  'RO': { custoCombustivel: 6.75, custoEletricidade: 0.51 },
  'RR': { custoCombustivel: 6.80, custoEletricidade: 0.52 },
  'RS': { custoCombustivel: 6.65, custoEletricidade: 0.48 },
  'SC': { custoCombustivel: 6.60, custoEletricidade: 0.47 },
  'SE': { custoCombustivel: 6.70, custoEletricidade: 0.50 },
  'SP': { custoCombustivel: 6.75, custoEletricidade: 0.52 },
  'TO': { custoCombustivel: 6.85, custoEletricidade: 0.53 },
};

const CarroEletricoCalculator: React.FC = () => {
  const [quilometragemMensal, setQuilometragemMensal] = useState<number | string>(''); 
  const [eficienciaGasolina, setEficienciaGasolina] = useState<number | string>(''); // km/L
  const [eficienciaEletrico, setEficienciaEletrico] = useState<number | string>(''); // km/kWh
  const [estado, setEstado] = useState<string>('');  
  const [resultado, setResultado] = useState<string | null>(null);
  const [notaViabilidade, setNotaViabilidade] = useState<number | null>(null);
  const [fraseViabilidade, setFraseViabilidade] = useState<string | null>(null); 

  const handleSubmit = () => {
    const kmMensal = parseFloat(quilometragemMensal.toString());
    const eficienciaGas = parseFloat(eficienciaGasolina.toString());
    const eficienciaEle = parseFloat(eficienciaEletrico.toString());

    if (isNaN(kmMensal) || isNaN(eficienciaGas) || isNaN(eficienciaEle) || kmMensal <= 0 || eficienciaGas <= 0 || eficienciaEle <= 0 || !estado) {
      alert('Por favor, insira valores válidos e selecione um estado.');
      return;
    }

    const tarifa = tarifasPorEstado[estado];

    if (!tarifa) {
      alert('Tarifa não encontrada para o estado selecionado.');
      return;
    }

    const custoMensalGasolina = (kmMensal / eficienciaGas) * tarifa.custoCombustivel;
    const custoMensalEletrico = (kmMensal / eficienciaEle) * tarifa.custoEletricidade;

    const economia = custoMensalGasolina - custoMensalEletrico;

   
    let nota = 0;
    let frase = '';
    if (economia <= 0) {
      nota = 1; // Não vale a pena
      frase = 'Não vale a pena trocar para um carro elétrico com os dados fornecidos.';
    } else if (economia <= 50) {
      nota = 2; // Vale um pouco a pena
      frase = 'Vale um pouco a pena, mas é importante considerar outros fatores.';
    } else if (economia <= 100) {
      nota = 3; // Vale a pena
      frase = 'Vale a pena, especialmente com o custo mais baixo de eletricidade.';
    } else if (economia <= 150) {
      nota = 4;
      frase = 'Muito vantajoso! Trocar para um carro elétrico pode gerar grandes economias.';
    } else {
      nota = 5; 
      frase = 'Extremamente vantajoso! Economias significativas ao trocar para um carro elétrico.';
    }

    setResultado(
      economia > 0
        ? `Economia estimada mensal: R$ ${economia.toFixed(2)}`
        : 'Trocar para um carro elétrico pode não ser vantajoso com os dados fornecidos.'
    );

    setNotaViabilidade(nota);
    setFraseViabilidade(frase); 
  };

 
  const getNotaColor = (nota: number) => {
    switch (nota) {
      case 5:
        return { backgroundColor: '#4CAF50', color: '#fff' }; 
      case 4:
        return { backgroundColor: '#8BC34A', color: '#fff' };  
      case 3:
        return { backgroundColor: '#FFEB3B', color: '#000' };  
      case 2:
        return { backgroundColor: '#FFC107', color: '#000' };  
      default:
        return { backgroundColor: '#F44336', color: '#fff' };  
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Calculadora de Viabilidade de Carro Elétrico</h1>
      <div className={styles.inputContainer}>
        <label htmlFor="quilometragemMensal" className={styles.label}>Quilometragem Mensal (km):</label>
        <input
          id="quilometragemMensal"
          type="number"
          value={quilometragemMensal}
          onChange={(e) => setQuilometragemMensal(e.target.value)}
          className={styles.input}
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="eficienciaGasolina" className={styles.label}>Eficiência do Carro a Gasolina (km/L):</label>
        <input
          id="eficienciaGasolina"
          type="number"
          value={eficienciaGasolina}
          onChange={(e) => setEficienciaGasolina(e.target.value)}
          className={styles.input}
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="eficienciaEletrico" className={styles.label}>Eficiência do Carro Elétrico (km/kWh):</label>
        <input
          id="eficienciaEletrico"
          type="number"
          value={eficienciaEletrico}
          onChange={(e) => setEficienciaEletrico(e.target.value)}
          className={styles.input}
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="estado" className={styles.label}>Selecione o Estado:</label>
        <select
          id="estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          className={styles.input}
        >
          <option value="">Selecione</option>
          {Object.keys(tarifasPorEstado).map((estado) => (
            <option key={estado} value={estado}>{estado}</option>
          ))}
        </select>
      </div>

      <button onClick={handleSubmit} className={styles.calculateButton}>Calcular</button>

      {resultado && (
        <div className={styles.result}>
          <p>{resultado}</p>
          {notaViabilidade !== null && (
            <div style={getNotaColor(notaViabilidade)} className={styles.resultTitle}>
              <p className={styles.nota}>Viabilidade: {notaViabilidade}</p>
              <p className={styles.resultText}>{fraseViabilidade}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CarroEletricoCalculator;
