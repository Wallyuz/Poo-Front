import React from "react";
import { Link } from 'react-router-dom';
import './filtergroup.css';
import MarcadoIcon from "../../assets/Marcado.svg";
import Desmarcado from "../../assets/Desmarcado.svg";
import Papel from "../../assets/Papel.svg";

export default function FilterGroup() {
    return (
        <div className="buttons-container">
            <div className="button-wrapper">
                <Link to="/ServiceMarc">
                    <button className="highlight-button">
                        <img src={MarcadoIcon} alt="Marcar consulta" />
                    </button>
                </Link>
                <h2>Marcar</h2>
            </div>
            <div className="button-wrapper">
                <Link to="/ServiceDis">
                    <button className="highlight-button">
                        <img src={Desmarcado} alt="Desmarcar Consulta" />
                    </button>
                </Link>
                <h2>Consultas marcadas</h2>
            </div>
            <div className="button-wrapper">
                <Link to="/Conta">
                    <button className="highlight-button">
                        <img src={Papel} alt="Conta" />
                    </button>
                </Link>
                <h2>Conta</h2>
            </div>
        </div>
    );
}