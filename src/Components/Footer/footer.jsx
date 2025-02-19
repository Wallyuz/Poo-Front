import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/UeceOficial/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 2a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.5 2c-2.5 0-4.5 2.01-4.5 4.5 0 .35.04.7.1 1.03A12.94 12.94 0 0 1 3 4s-4 9 5 13a13.07 13.07 0 0 1-8 2c11 6 24 0 24-13.5 0-.21 0-.42-.02-.63A9.18 9.18 0 0 0 23 3z"></path></svg>
        </a>
        <a href="https://www.instagram.com/ueceoficial/?hl=pt-br" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <p>&copy; 2025 Nossa Clínica Hospitalar. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;