import React from 'react';
import TeacherForm from '../../pages/TeacherForm';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/23285689?s=460&u=24be0308d68281792c5d192b18a32fb8a0af0f83&v=4" alt="Washington Charles" />
                <div>
                    <strong>Washington Charles</strong>
                    <span>Historia</span>
                </div>
            </header>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

            <footer>
                <p>
                    Preço/hora:
                           <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" /> Entrar em Contato
                        </button>

            </footer>
        </article>
    );
}

export default TeacherItem;