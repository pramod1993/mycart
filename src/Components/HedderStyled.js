import styled from "styled-components";

export const category = styled.li`
    position: relative;
    &:hover .submenu{
        display:block;
    }
    & .submenu{
        margin: 0;
        padding: 0;
        position: absolute;
        top: 100%;
        box-shadow: 0 0 4px #ccc;
        width: 200px;
        display:none;
        
        & li:hover{
            background: #f3f3f3; 
        }
        & li{ 
            padding:5px 10px;
            border-bottom: 1px solid #ccc;
        }
        & a{
            display: flex;
            align-items: center;
            color:#000;
            text-decoration:none;

        }
    }
`;