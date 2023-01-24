import React, { useState } from "react";
import { PopupButton } from "react-calendly";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function enviarEmail(e) {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            alert('Preencha todos os campos');
            return;
        }
        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
        emailjs.send("service_vpgbq2r", "template_zza41p8", templateParams, "xjvooUPXTtpP8I2RD")
            .then((response) => {
                console.log('email enviado', response.status, response.text)
                setEmail('');
                setMessage('');
                setName('');
            }, (err) => {
                console.log("ERRO: ", err)
            })
    }
    return (
        <section>
            <div className="container">
                <h1>
                    Contato
                </h1>
                <div className="row">
                    <div className="col-6">
                        <p>Gostaria de entrar em contato comigo?</p>
                        <p>Você pode conectar comigo no LinkedIn ou chamar direto no WhatsApp!</p>
                        <div className="btn-group">
                            <a href="https://www.linkedin.com/in/angelica-dflores/" className="btn btn-primary" aria-current="page">LinkedIn</a>
                            <a href="https://wa.me/+5551989468727?text=Ol%C3%A1%20Ang%C3%A9lica!%20Encontrei%20seu%20contato%20em%20seu%20portf%C3%B3lio,%20gostaria%20de%20falar%20sobre%20..." className="btn btn-primary">WhatsApp</a>
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
                            />
                        </div>
                    </div>
                    <div className="col-6" id="Contact">
                        <form className="form" onSubmit={enviarEmail}>
                            <div className="mb-3">
                                <label
                                    htmlFor="name"
                                    className="form-label">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Digite seu nome e sobrenome ..."
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="email"
                                    className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="nome@gmail.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="message"
                                    className="form-label">
                                    Mensagem
                                </label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows="5"
                                    placeholder="Digite sua mensagem ..."
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                ></textarea>
                            </div>
                            <input
                                className="btn btn-primary"
                                type="submit"
                                value="Enviar"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}