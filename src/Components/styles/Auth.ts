import styled from "styled-components";

export const StyledContainerAuthSign = styled.div<{ bg_color: string }>`
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
    .title_auth {
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 1.25em;
        color: #000000;
        margin-bottom: 25px;
    }
    .choose_auth {
        font-size: 15px;
        line-height: 21px;
        color: #676767;
        margin-bottom: 30px;
    }
    .site-form-item-icon {
        font-size: 20px;
    }
    .forgot {
        font-size: 15px;
        line-height: 21px;
        font-weight: bold;
        color: #646464;
        text-align: start;
        margin-top: 16px;
        span {
            color: ${(p) => p.bg_color};
            cursor: pointer;
        }
    }
    .remember {
        text-align: start;
        font-weight: bold;
        font-size: 15px;
        line-height: 21px;
        margin-top: 8px;
        color: #646464;
    }
`;

export const StyledContainerAuthSignUp = styled.div<{ bg_color: string }>`
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
    .title_auth {
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 1.25em;
        color: #000000;
        margin-bottom: 25px;
    }
    .choose_auth {
        font-size: 15px;
        line-height: 21px;
        color: #676767;
        margin-bottom: 30px;
    }
    .site-form-item-icon {
        font-size: 20px;
    }
    .forgot {
        font-size: 15px;
        line-height: 21px;
        font-weight: bold;
        color: #646464;
        text-align: start;
        margin-top: 16px;
        span {
            color: ${(p) => p.bg_color};
            cursor: pointer;
        }
    }
    .remember {
        text-align: start;
        font-weight: bold;
        font-size: 15px;
        line-height: 21px;
        margin-top: 8px;
        color: #646464;
    }
`;
