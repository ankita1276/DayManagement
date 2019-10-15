import styled from "styled-components";


export const SummaryStyle = styled.div`
 background:#f8f6ff;
 height:100vh;
 padding:0px 30px 0px 30px;


.summaryHeader{
    padding: 16px 0px;
    font-size:26px !important;
}
.calender{
    margin: 16px 0px;
    .cardCalender{
        margin: 0px 10px;
        padding:  10px 16px;
        border-radius:50px;
        box-shadow:0px 0px 0px 0px rgb(255,255,255), 0px 0px 0px 0px rgba(255,255,255,0.87), 0px 10px 20px 6px rgba(239, 236, 236, 0);
    }
    .calenderContainer{
        justify-content:center;
        text-align: center;
       
        .calenderDay{
            color:grey;
            font-weight: 400;
            font-size:16px;
        }
        .calenderDate{
            color:black;
            font-weight: 700;
            font-size:20px;
            // border-bottom: orange 7px dotted;
        }
        .active{
            border-bottom: orangered 7px dotted;
        }
    }
}
 .cardsTitle{
    display: flex;
    justify-content: space-between;
    div{
        margin: 16px 0px;
    }
     ul{
        list-style:none;
        display: flex;
        justify-content: space-around;
        padding: 0px;
        li{
            color:#20233f;
            padding: 0px 10px;
        }
       
     }
 }
 .card{
     margin: 0px 10px;
     padding: 16px;
     border-radius:15px;
    
     .percentDone{
         text-align:left;
         font-size:28px;
         font-weight:500;
         padding:10px 0px;
         color: orangered;
     }
 }
 .inAction{
    margin: 16px 0px;
 }
 .textColor{
    color:#20233f;
    font-size:18px;
    font-weight:500;
    text-align:left;
    
 }
 .space-between{
    display: flex;
    justify-content: space-between;
    color: grey;
    i{
        background: orangered;
        color:white;
        border-radius:35%;
        font-size:32px;
    }
 }

 .activeC{
        // background-color: orange;
        border-radius: 50px;
         padding: 5px;
 }
 .activeC:hover {
    background-color: orange;
     border-radius: 50px;
    // padding:5px;
  }
//   .activeB:hover::before {
   
//     display: block;
//     border-radius: 50px;
//     background: #808080;
//     border-top: 10px red solid;
//     content: '';
//   }
 @media only screen and (min-width: 1823px) {
    padding:0px 60px 0px 60px;
}
`;
export const Test = styled.div`background:red`
