import React, { useState } from "react";
import './Details.css'; // Certifique-se de que o arquivo CSS está importado

function Details({ details }) {
    const [detailState, setDetailState] = useState(details);

    const handleConfirm = async () => {
        try {
            const response = await fetch('https://api.example.com/confirm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(detailState),
            });
            if (response.ok) {
                alert("Consulta confirmada como realizada!");
            } else {
                alert("Erro ao confirmar a consulta.");
            }
        } catch (error) {
            console.error("Erro ao confirmar a consulta:", error);
            alert("Erro ao confirmar a consulta.");
        }
    };

    const handleCancel = async () => {
        try {
            const response = await fetch('https://api.example.com/cancel', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(detailState),
            });
            if (response.ok) {
                alert("Consulta desmarcada!");
            } else {
                alert("Erro ao desmarcar a consulta.");
            }
        } catch (error) {
            console.error("Erro ao desmarcar a consulta:", error);
            alert("Erro ao desmarcar a consulta.");
        }
    };

    return (
        <div className="container">
            <h1>Detalhes da Consulta</h1>
            <p><strong>Nome:</strong> {detailState.name}</p>
            <p><strong>Data:</strong> {detailState.date}</p>
            <p><strong>Local:</strong> {detailState.location}</p>
            <p>{detailState.message}</p>
            <div className="button-group">
                <button onClick={handleConfirm} className="confirm-button">Confirmar Consulta</button>
                <button onClick={handleCancel} className="cancel-button">Desmarcar Consulta</button>
            </div>
        </div>
    );
}

function ParentComponent() {
    const consultationDetails = {
        name: "Nome do Paciente",
        date: "Data da Consulta",
        location: "Local da Consulta",
        message: "Detalhes da consulta: Sintomas, tratamento sugerido, medicamentos, exames..."
    };

    return (
        <div>
            <Details details={consultationDetails} />
        </div>
    );
}

export default ParentComponent;