import React from 'react';

const AccountDetails = ({ user, onSave }) => {
  console.log('Dados do usuário no AccountDetails:', user); // Adicione este console.log

  return (
    <div>
      <h1>Detalhes da Conta</h1>
      <p><strong>Nome:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Idade:</strong> {user.age}</p>
      <p><strong>Especialidade:</strong> {user.specialty}</p>
      <p><strong>Plano:</strong> {user.plan}</p>
      {/* Adicione mais campos conforme necessário */}
      <button onClick={() => onSave(user)}>Salvar</button>
    </div>
  );
};

export default AccountDetails;