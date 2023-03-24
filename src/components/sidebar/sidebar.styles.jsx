import styled from "styled-components";

export const SideBarSection = styled.section`
    height: 100%;
    width: 400px;
    overflow-y: scroll;
    overflow-x: scroll;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    color: white;

    .header{
        display: block;
        background-color: #d5d4d5;
        color: red;
        z-index: 3;
        height: auto;
        padding: 30px 50px 20px;

    }
`;

