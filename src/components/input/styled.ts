import styled from "styled-components";






const AgrupamentoInputsNewClass = styled.div`

        display: flex;
        flex-direction: row;
        
        height: 2.8em;
   
        align-self: center;
        align-items: flex-start;
        width: 26em;
        justify-content: space-between;
      



        .label {
        
     


        

 
         align-self: center;
      
        width:10em;
        
        text-align: right;
 
    }

    .test1 {
       display: flex;
       justify-content: center;
        position: absolute;

        height: 3.8em;
        align-items: center;
   }



   .Box-alternatives {
       display: flex;
       justify-content: space-between;
       align-self: center;
       align-items: center;

       margin-top: 0.2em;
   }

   .correct {
       display: flex;
       position: relative;
       left: -1.2em;
      

   }


   .choice {
    display: flex;
    border-radius: 14px;

    padding: 0.9em 0.9em;
    height: 25px;
  
    max-width: 4em;
    align-items: center;
    justify-content: center;

    background-color:#453E51;
    color: white;
    margin: 0em 0.3em;
   }

   .container-choices {
       display: flex;
       margin-top: 0.3em;
       
   }

   .qtd-treino {
    width: 252px;
    height: 36px;
    left: 546px;
    top: 320px;

    background: #FFFFFF;
    border: 1px solid #A8A8A8;
    box-sizing: border-box;
    border-radius: 5px;
    outline: none;
    padding-left: 0.7em;
    background-image: url("/assets/images/seta copy.svg");
    background-repeat: no-repeat;
   
    background-position-y: center;
    background-position-x: 195px;
    margin-left: 1em;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
  }


  .files {
      position: absolute;
  }
`


export { AgrupamentoInputsNewClass }