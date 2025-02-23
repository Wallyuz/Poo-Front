import React, { useState } from 'react';
import './AccountDetails.css';

function AccountDetails({ user, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    // Lógica para salvar os dados editados
    onSave(editedUser);
    setIsEditing(false);
  };

  return (
    <div className="account-details-container">
      <h1>Detalhes da Conta</h1>
      {isEditing ? (
        <div>
          {user.isDoctor ? (
            <div className="doctor-details">
              <h2>Informações do Médico</h2>
              <label>
                Nome:
                <input
                  type="text"
                  name="name"
                  value={editedUser.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Especialidade:
                <input
                  type="text"
                  name="specialty"
                  value={editedUser.specialty}
                  onChange={handleChange}
                />
              </label>
              <label>
                Plano que atende:
                <input
                  type="text"
                  name="plan"
                  value={editedUser.plan}
                  onChange={handleChange}
                />
              </label>
            </div>
          ) : (
            <div className="patient-details">
              <h2>Informações do Paciente</h2>
              <label>
                Nome:
                <input
                  type="text"
                  name="name"
                  value={editedUser.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={editedUser.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                Idade:
                <input
                  type="number"
                  name="age"
                  value={editedUser.age}
                  onChange={handleChange}
                />
              </label>
            </div>
          )}
          <button onClick={handleSave}>Salvar</button>
        </div>
      ) : (
        <div>
          {user.isDoctor ? (
            <div className="doctor-details">
              <h2>Informações do Médico</h2>
              <p><strong>Nome:</strong> {user.name}</p>
              <p><strong>Especialidade:</strong> {user.specialty}</p>
              <p><strong>Plano que atende:</strong> {user.plan}</p>
            </div>
          ) : (
            <div className="patient-details">
              <h2>Informações do Paciente</h2>
              <p><strong>Nome:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Idade:</strong> {user.age}</p>
            </div>
          )}
          <button onClick={() => setIsEditing(true)}>Editar</button>
        </div>
      )}
    </div>
  );
}

export default AccountDetails;