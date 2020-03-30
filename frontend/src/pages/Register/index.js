import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'

import {Button} from '../globalStyles';
import {InputGroup, InputForm, InputUF, RegisterContainer} from './styles';
import logoImg from '../../assets/logo.svg';

export default function Register(){

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[whatsapp, setWhatsapp] = useState('');
    const[city, setCity] = useState('');
    const[uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try{
        const response = await api.post('ongs', data);
        alert(`Seu ID de acesso: ${response.data.id}`);
        history.push('/');
        }catch (err){
            alert('Erro no cadastro, tente novamente.')
        }

    }
    
    return(
        <RegisterContainer>

            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/"><FiArrowLeft size={16} color="E02041"/>Voltar</Link>
                </section>
                <form onSubmit={handleRegister}>
                    <InputForm
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <InputForm
                        type="email" placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <InputForm
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}   
                    />

                    <InputGroup>
                        <InputForm
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)} 
                        />
                        <InputUF
                            placeholder="UF" style={{width: 80}}
                            value={uf}
                            onChange={e => setUf(e.target.value)}     
                        />
                    </InputGroup>

                    <Button type="submit"> Cadastrar</Button>

                </form>
            </div>

        </RegisterContainer>
    );
}