import React from "react";
import { PopupButton } from "react-calendly";

export default function Contact() {
    return (
        <section id="Contact">
            <h1>
                Contato
            </h1>
            <p>Gostaria de entrar em contato comigo?</p>
            <p>Você pode conectar comigo no LinkedIn ou chamar direto no WhatsApp!</p>
            <div class="btn-group">
                <a href="https://www.linkedin.com/in/angelica-dflores/" class="btn btn-primary" aria-current="page">LinkedIn</a>
                <a href="https://wa.me/+5551989468727?text=Ol%C3%A1%20Ang%C3%A9lica!%20Encontrei%20seu%20contato%20em%20seu%20portf%C3%B3lio,%20gostaria%20de%20falar%20sobre%20..." class="btn btn-primary">WhatsApp</a>
            
            <PopupButton
                url="https://calendly.com/angelicadflores"
                rootElement={document.getElementById("root")}
                text="Agende um horário!"
                styles={{
                    "backgroundColor": "#0d6efd",
                    "color": "white",
                    "border": "white",
                    "borderRadius": "0 5px 5px 0"
                }}
            /></div>
        </section>
    )
}