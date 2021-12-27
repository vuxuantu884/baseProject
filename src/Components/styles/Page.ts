import styled from "styled-components";

export const StyledContainer = styled.div`
    
`;

export const StyledPageInner = styled.div<{showConfirm?:boolean}>`
    margin: 0 auto;
    position: relative;
    background-color: #f8f8f8;
    min-height: 100vh;
    position: relative;
    ${p=>{
        if(p.showConfirm) return "height:100vh; overflow: hidden;";
    }}
`;
