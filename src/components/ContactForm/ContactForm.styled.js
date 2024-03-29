import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const FormLabel = styled.label`
    font-family: 'Courier New', monospace;
    font-size: 20px;
    margin-bottom: 5px;
    color: #a93a3a;
`;

export const FormInput = styled.input`
    font-family: 'Courier New', monospace;
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #a93a3a;
    border-radius: 5px;
`;

export const FormBtn = styled.button`
    font-family: 'Courier New', monospace;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    background-color: #a93a3a;
`;