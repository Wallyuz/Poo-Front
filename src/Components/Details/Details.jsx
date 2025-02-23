import React, { useState } from "react";
import './Details.css'; // Certifique-se de que o arquivo CSS está importado

function Details() {
    const [details, setDetails] = useState({
        name: "Nome do Paciente",
        date: "Data da Consulta",
        location: "Local da Consulta",
        message: "Detalhes da consulta: Sintomas, tratamento sugerido, medicamentos, exames..."
    });

    const handleConfirm = () => {
        alert("Consulta confirmada como realizada!");
        // Adicione a lógica para confirmar a consulta aqui
    };

    const handleCancel = () => {
        alert("Consulta desmarcada!");
        // Adicione a lógica para desmarcar a consulta aqui
    };

    return (
        <div className="container">
            <h1>Detalhes da Consulta</h1>
            <p><strong>Nome:</strong> {details.name}</p>
            <p><strong>Data:</strong> {details.date}</p>
            <p><strong>Local:</strong> {details.location}</p>
            <p>{details.message}</p>
            <div className="button-group">
                <button onClick={handleConfirm} className="confirm-button">Confirmar Consulta</button>
                <button onClick={handleCancel} className="cancel-button">Desmarcar Consulta</button>
            </div>
        </div>
    );
}

export default Details;