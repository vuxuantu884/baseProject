import styled from "styled-components";

export const StyledHeader = styled.div`
    .ant-layout-header {
        position: relative;
        flex-direction: row;
        flex-wrap: nowrap;
        display: flex;
        align-items: center;
        min-height: 4.286rem;
        z-index: 11;
        padding: 0 1rem;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.02), 0 1px 0 rgba(0, 0, 0, 0.02);
        background-color: ${(props) => props.theme.colors.main};

        a {
            color: #ffffff !important;
        }
        .ant-menu {
            background-color: ${(props) => props.theme.colors.main};
        }
    }
    .trigger {
        transform: rotate(90deg);
        margin-right: 1rem;
    }
    .menu-divider {
        position: relative;
    }
    .menu-divider:before {
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        width: 1px;
        height: 100%;
        content: "";
        background-color: ${(props) => props.theme.colors.main};
    }
    .brand {
        display: flex;
        align-items: center;
        margin-right: 1rem;
        font-size: 1.25rem;
        white-space: nowrap;

        svg {
            fill: ${(props) => props.theme.colors.primary};
        }
    }
    .ant-menu {
        font-family: inherit;
        line-height: inherit;
        box-shadow: none;
        display: inline-block;
        border: 0;
        margin-bottom: 1px;
    }
    .ant-menu-item,
    .ant-menu-item,
    .ant-menu-submenu-title {
        padding: 0 1rem;
    }
    .ant-menu-item,
    .ant-menu-submenu {
        top: 2px;
    }
    .nav-link {
        display: initial;
        color: inherit;
    }
    .ant-list-header,
    .ant-list-footer {
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

export const StyledNotification = styled.div`
    .ant-list-item {
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

export const StyledUserDetailPage = styled.div`
    width: 100%;
    position: relative;
    top: -85px;

`;
