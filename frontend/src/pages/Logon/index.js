import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn} from 'react-icons/fi'

import api from '../../services/api'

import {Input, Button} from '../globalStyles';
import {LogonContainer, SectionForm, Title} from './styles';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png'

export default function Logon(){

    const [id,setId] = useState('');
    const history = useHistory();

    async function handleLogon(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        }catch{
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <LogonContainer>
            <SectionForm>
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogon}>
                    <Title>Faça seu logon</Title>
                    <Input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}>
                    </Input>
                    <Button type="submit"> Entrar </Button>
                    <Link className="back-link" to="/register"><FiLogIn size={16} color="E02041"/>Não tenho cadastro</Link>
                </form>

            </SectionForm>
            
            <img src={heroesImg} alt="Heroes"/>
        </LogonContainer>
    );
}