import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer/footer';
import AccountDetails from '../Components/AccountDetails/AccountDetails';

function AccountDetailsPage(props) {
  const { id } = useParams(); // Obter o ID dos parâmetros da URL
  const navigate = useNavigate(); // Hook para navegação
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://67ba9813fbe0387ca137a638.mockapi.io/cadastro/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Dados recebidos:', data);
        setUser(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]); // Adicione `id` como dependência para refazer a busca quando o ID mudar

  const handleSave = async (updatedUser) => {
    try {
      const response = await fetch(`https://67ba9813fbe0387ca137a638.mockapi.io/cadastro/${updatedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUser(data);
      console.log('Dados atualizados:', data);
      navigate(`/account-details/${data.id}`); // Redirecionar após a atualização
    } catch (error) {
      console.error('Erro ao atualizar os dados:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="account-details-page-container">
      <div className="account-details-page-content">
        {user && <AccountDetails user={user} onSave={handleSave} />}
      </div>
      <Footer {...props} className="footer" />
    </div>
  );
}

export default AccountDetailsPage;