import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer/footer';
import AccountDetails from '../Components/AccountDetails/AccountDetails';

function AccountDetailsPage(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://67ba9813fbe0387ca137a638.mockapi.io/cadastro');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Dados recebidos:', data);
        setUser(data[0]); // Se a API retornar um array, acesse o primeiro elemento
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleSave = (updatedUser) => {
    setUser(updatedUser);
    console.log('Dados atualizados:', updatedUser);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="account-details-page">
        {user && <AccountDetails user={user} onSave={handleSave} />}
      </div>
      <Footer {...props} />
    </>
  );
}

export default AccountDetailsPage;