import HTML from '../assets/img/html.png';
import BootStrap from '../assets/img/bootstrap.png';
import C from '../assets/img/csharp.png';
import Figma from '../assets/img/figma.png';
import Css from '../assets/img/css.png';
import Ai from '../assets/img/illustrator.png';
import Java from '../assets/img/java.png';
import Mongo from '../assets/img/mongodb.png';
import Mysql from '../assets/img/mysql.png';
import Ps from '../assets/img/photoshop.png';
import Python from '../assets/img/python.png';
import React from '../assets/img/react.png';
import Spring from '../assets/img/spring.png';
import Git from '../assets/img/git.png';
import Js from '../assets/img/js.png';


export default function Stacks() {
    return (
        <section id="Stacks">
            <div className="container">
                <h1>
                    Stacks
                </h1>
                <div className='container text-center' >
                    <img src={HTML} alt="" />
                    <img src={Css} alt="" />
                    <img src={Js} alt="" />
                    <img src={BootStrap} alt="" />
                    <img src={React} alt="" />
                </div>
                <div className='container text-center'>
                    <img src={Java} alt="" />
                    <img src={Python} alt="" />
                    <img src={Spring} alt="" />
                    <img src={C} alt="" />
                    <img src={Git} alt="" />
                </div>
                <div className='container text-center'>
                    <img src={Mysql} alt="" />
                    <img src={Mongo} alt="" />
                    <img src={Figma} alt="" />
                    <img src={Ai} alt="" />
                    <img src={Ps} alt="" />
                </div>
            </div>
        </section>
    )
}