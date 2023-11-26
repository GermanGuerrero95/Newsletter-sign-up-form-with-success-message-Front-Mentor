




    //Elements

    const input = document.querySelector(".formInfo__input"),
          send = document.querySelector('.send'),
          textError = document.querySelector(".errorValidation__p");
        

        

    //Function

  


 
    
    input.addEventListener("input", () => {
        const email = input.value;
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        
        send.classList.remove("sendStyle")

        if(!resultado || email===""){
            input.classList.add("error");
            textError.classList.add("errorColor");
            textError.textContent="Valid email required"
           
        } else{
            textError.textContent=""
            input.classList.remove("error");
            send.removeAttribute("disabled");
       
            send.classList.add("sendStyle")
            
           
        
           
        }
        


        send.addEventListener("click",(e)=>{
            e.preventDefault();
            window.location.href = "/assets/html/succes.html";
        })


     

  } );