import styled from "styled-components";

export const StyledSignUp = styled.div`
    padding: 25px;
    background-color: #fff;
    position: relative;
    top: -85px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0px 4px 10px 1px #e7e2e2;
    .allow-dropdown.intl-tel-input {
        width: 100% !important;
        background-color: #f7f7f8;
    }
    .intl-tel-input.allow-dropdown input[type="text"],
    .intl-tel-input.allow-dropdown input[type="tel"] {
        height: 48px !important;
        outline: none;
        border: none;
        background-color: #f7f7f8;
        width: 100% !important;
        font-size: 16px;
        color: black;
        box-shadow: none !important;
        font-weight: 500;
    }
`;
