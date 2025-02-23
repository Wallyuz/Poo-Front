import React, { useState, useEffect } from "react";


function DoctorDetails({ doctorId }) {
    const [doctor, setDoctor] = useState(null);
    const [newTime, setNewTime] = useState("");

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const response = await fetch(`https://67ba9813fbe0387ca137a638.mockapi.io/medicos/${doctorId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setDoctor({
                    ...data,
                    times: data.schedule.split(' ').filter(time => time)
                });
            } catch (error) {
                console.error('Erro ao buscar médico:', error);
            }
        };

        fetchDoctor();
    }, [doctorId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDoctor({ ...doctor, [name]: value });
    };

    const handleAddTime = () => {
        if (newTime && !doctor.times.includes(newTime)) {
            const updatedTimes = [...doctor.times, newTime].sort();
            setDoctor({ ...doctor, times: updatedTimes });
            setNewTime("");
        }
    };

    const handleSave = async () => {
        try {
            const response = await fetch(`https://67ba9813fbe0387ca137a638.mockapi.io/medicos/${doctorId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...doctor, schedule: doctor.times.join(' ') }),
            });
            if (response.ok) {
                alert("Dados do médico atualizados com sucesso!");
            } else {
                alert("Erro ao atualizar os dados do médico.");
            }
        } catch (error) {
            console.error("Erro ao atualizar os dados do médico:", error);
            alert("Erro ao atualizar os dados do médico.");
        }
    };

    if (!doctor) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="container">
            <h1>Detalhes do Médico</h1>
            <label>
                Nome:
                <input type="text" name="name" value={doctor.name} onChange={handleInputChange} />
            </label>
            <label>
                Especialidade:
                <input type="text" name="specialty" value={doctor.specialty} onChange={handleInputChange} />
            </label>
            <label>
                Plano:
                <input type="text" name="plan" value={doctor.plan} onChange={handleInputChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={doctor.email} onChange={handleInputChange} />
            </label>
            <label>
                Horários:
                <ul>
                    {doctor.times.map((time, index) => (
                        <li key={index}>{time}</li>
                    ))}
                </ul>
                <input
                    type="text"
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    placeholder="Adicionar novo horário"
                />
                <button onClick={handleAddTime}>Adicionar Horário</button>
            </label>
            <button onClick={handleSave} className="save-button">Salvar Alterações</button>
        </div>
    );
}

export default DoctorDetails;