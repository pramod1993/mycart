import styled from "styled-components";

export const imagesbox = styled.div`
   position: relative;
    overflow:hidden;

    &:hover .second{
        opacity:1;
        transition: all 0.9s ease-in-out;
    }
    &:hover .over{
        bottom:10px;
        transition: all 0.9s ease-in-out;
        
    }
    & .second{
        position:absolute;
        top:0;
        left:0;
        right:0;
        opacity: 0;
        transition: all 0.4s ease;
        
    }
    & .over{
        left:10px;
        right:10px;
        bottom:-30px;
        
    }
`;