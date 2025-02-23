import React from "react";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import ParentComponent from "../Components/Details/Details";

function DetailsPage() {
    return (
        <>
            <Header />
            <ParentComponent />
            <Footer />
        </>
    );
}

export default DetailsPage;