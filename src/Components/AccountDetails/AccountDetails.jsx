import React, { useState } from 'react';
import './AccountDetails.css';

const AccountDetails = ({ user, onSave }) => {
  const [editableUser, setEditableUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editableUser);
  };

  return (
    <div className="account-details-container">
      <h1>Detalhes da Conta</h1>
      <div>
        <label>
          <strong>Nome:</strong>
          <input
            type="text"
            name="name"
            value={editableUser.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          <strong>Email:</strong>
          <input
            type="email"
            name="email"
            value={editableUser.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          <strong>Idade:</strong>
          <input
            type="number"
            name="age"
            value={editableUser.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          <strong>Especialidade:</strong>
          <input
            type="text"
            name="specialty"
            value={editableUser.specialty}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          <strong>Plano:</strong>
          <input
            type="text"
            name="plan"
            value={editableUser.plan}
            onChange={handleChange}
          />
        </label>
      </div>
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
};

export default AccountDetails;