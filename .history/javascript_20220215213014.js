 const showMenu = (toggleId, navId) =>{
               const toggle = document.getElementById(toggleId),
               nav = document.getElementById(navId)

               if(toggle && nav){
                   toggle.addEventListener('mouseover' , ()=>{
                       nav.classList.toggle('show')
                   })

                 
                   
               }

              
              
              
               
           }
           showMenu('main-menu-toggle','main-nav')

           const numb = document.querySelector(".numb");
           let counter = 0;
           setInterval(() => {
               if (counter == 70) {
                   clearInterval();
               } else {
                   counter += 1;
                   numb.textContent = counter + "%";
               }
           }, 35);