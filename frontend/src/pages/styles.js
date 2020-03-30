import styled from 'styled-components';

export const LogonContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SectionForm = styled.section`
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
    margin-top: 50px;
`;

export const Title = styled.h1`
    font-size: 32px;
    margin-bottom: 32px;
    margin-top: 20px;
`;

export const Input = styled.input`
    font: 400px 18px Roboto, sans-serif;
    width: 100%;
    height: 60px;
    color: #333;
    border: 1p solid #dcdce6;
    border-radius: 0px;
    padding: 0 24px;
`;

export const Button = styled.button`
    font: 400px 18px Roboto, sans-serif;
    width: 100%;
    height: 60px;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #FFF;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;
    &:hover {
        filter: brightness(90%);
    }
`;