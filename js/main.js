(function() {
    "use strict";
    
     const gift= document.getElementById('gift');


    document.addEventListener('DOMContentLoaded', function(){
       //USERS DATE  
        let name= document.getElementById('name');
        let last_name= document.getElementById('last_name');
        let email= document.getElementById('email');

       //TICKETS  
        let ticket= document.getElementById('ticket');
        let vip= document.getElementById('vip');
        let camping= document.getElementById('camping');

       //BUTTON 
        let calculate= document.getElementById('calculate');
        let register= document.getElementById('btnregister');
        let divFail= document.getElementById('fail');
        let summary= document.getElementById('product-list');
        let total= document.getElementById('total-summary');

        //SUMMARY
        let shirt= document.getElementById('event_shirt');
        let stickers= document.getElementById('stickers');


        calculate.addEventListener('click', calculate_amounts);


        function calculate_amounts(event) {
            event.preventDefault();
            if (gift.value ==='') {
                alert("You need choice a gift");
                gift.focus();
            } else {
               
                let ticketTicket= parseInt(ticket.value,10) || 0,
                    ticketVip= parseInt(vip.value, 10) || 0,
                    ticketCamping= parseInt(camping.value, 10) || 0,
                    amountShirt= parseInt(shirt.value, 10) || 0,
                    amountStickers=parseInt(stickers.value, 10) || 0;
                let totalPay= 
               (ticketTicket*50)+(ticketVip*80)+(ticketCamping*120)+((amountShirt*15)*.93)+(amountStickers*5);
               
               let productList= [];

               if (ticketTicket>=1) {
                   productList.push(ticketTicket + 'Tickets');
                }
               if (ticketVip>=1) {
                productList.push(ticketVip + 'VIP Tickets');
                }
               if (ticketCamping>=1) {
                productList.push(ticketCamping + 'Camping Tickets');
                }
               if (amountShirt>=1) {
                productList.push(amountShirt + 'Shirts');
                }
               if (amountStickers>=1) {
                productList.push(amountStickers + 'Stickers');
                }
                
                total.innerHTML='$' + totalPay.toFixed(2);
                summary.innerHTML = '';

                for (let i = 0; i < productList.length; i++) {
                    summary.innerHTML = productList[i] += '<br/>';
                    
                }


                summary.style.display='block';


               
            }
            
        }

        









    }) //DOM CONTENT LOADED
})();