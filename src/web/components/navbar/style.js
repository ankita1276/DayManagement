import styled from "styled-components";


export const NavbarStyle = styled.div`
 background:#ff9f24;
 height:100vh;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 color: white;
 .navHeader{
    font-size: 32px;
    font-weight: 600;
 }
 .navList{
    ul{
        list-style:none;
        font-size:18px;
        padding:0px;
        li{
            display:flex;
            padding:15px;
            text-align:left;
            margin-left:15%;
            cursor:pointer;
            i{
                padding-right:20px
            }

        }
        li:nth-child(1){
            background-color: #f8f6ff;
            color:#20233f;
        
            border-top-left-radius:50px;
            border-bottom-left-radius:50px;
        }
    }
 }
 .navFooter{
    display:flex;
    justify-content : center;
 }
`;
