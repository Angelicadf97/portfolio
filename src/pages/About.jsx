import foto from '../assets/img/IMG-20220613-WA0002_2.jpg';

export default function About() {
    return (
        <section>
            <div className="container">
                <h1>Oi, eu sou a Angélica</h1>
                <div className='row'>
                    <div className='col-lg-6 col-12'>
                        <div className="mt-4">
                            <p>Sou uma desenvolvedora em início de carreira e também uma jovem arquiteta.</p>
                            <p>Mas aqui vamos focar só na parte que sou uma desenvolvedora, combinado?<br /><small><small>A arquitetura virou um hobby.</small></small></p>
                            <p>Amo desafios, então é muito comum me encontrar testando alguma coisa que nunca fiz antes, e junto a isso também estou sempre estimulando minha criatividade, com artesanato, ilustrações e qualquer outra coisa que eu acredite poder fazer<small> (nem sempre sai como o esperado, mas a melhor forma de aprender é errando)</small></p>
                        </div>
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center align-items-center col-12'>
                        <img src={foto} alt="Angélica Flores" id='foto'/>
                    </div>

                </div>
            </div>
        </section>
    )
}