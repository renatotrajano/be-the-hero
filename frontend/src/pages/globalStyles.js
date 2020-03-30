import styled from 'styled-components';

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