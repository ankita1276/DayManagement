import styled from "styled-components";


export const RightPanelStyle = styled.div`
 background:white;
 height:100vh
.gridheight30{
   height:40%;
 
.userProfile{
   flex-direction:column;
   padding-top:30px;
   div{
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      .avatar{
         height:75px;
         width:75px;
      }
      .avatarName{
         font-size:22px;
         margin:15px;
         span{
            color:grey;
            font-size:16px;
         }
      }
   }
 
}
}
.gridheight50{
   height:60%;
   padding: 0px 30px;
   color:white;
   span{
      color:white;
      font-weight:400;
   }
   p{
      color:grey;
      span{
         color:grey;
      }
   }
}
.top{
   background:white;
}
.bottom{
   background:#20233f
}
`;
