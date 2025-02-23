import React, { useState } from 'react';
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';
import AccountDetails from '../Components/AccountDetails/AccountDetails';

const initialUser = {
  isDoctor: true, 
  name: 'Dr. João Silva',
  specialty: 'Cardiologia',
  plan: 'Plano A',
  email: 'joao.silva@example.com',
  age: 45
};

function AccountDetailsPage() {
  const [user, setUser] = useState(initialUser);

  const handleSave = (updatedUser) => {
    setUser(updatedUser);
    console.log('Dados atualizados:', updatedUser);
  };

  return (
    <>
      {/* <Header /> */}
      <div className="account-details-page">
        <AccountDetails user={user} onSave={handleSave} />
      </div>
      <Footer />
    </>
  );
}

export default AccountDetailsPage;