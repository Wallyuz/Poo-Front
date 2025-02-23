import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';
import './HomeStyle.css';

function Conta() {
  const [consultaValor, setConsultaValor] = useState(0);
  const [pagamentoConfirmado, setPagamentoConfirmado] = useState(false);

  useEffect(() => {
    // Simulação de obtenção do valor da consulta após a realização
    const valor = 150; // Valor da consulta em reais
    setConsultaValor(valor);
  }, []);

  const confirmarPagamento = () => {
    setPagamentoConfirmado(true);
  };

  return (
    <div className="App">
      {/* <Header /> */}
      <div className="container">
        <h1>Conta</h1>
        <p>O valor da sua consulta é: R$ {consultaValor}</p>
        <button onClick={confirmarPagamento} className="confirm-button">Confirmar Pagamento</button>
        {pagamentoConfirmado && <p>Pagamento confirmado!</p>}
      </div>
      <Footer />
    </div>
  );
}

export default Conta;