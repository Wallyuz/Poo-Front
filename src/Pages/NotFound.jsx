import React from "react";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import NotFoundImage from "../assets/error.webp";
import './HomeStyle.css';

export default function NotFound(){
    return(
        <>
            <div className="container">
            <img src={NotFoundImage} alt="Página não encontrada" className="not-found-image" />
            </div>
        </>
    );
}