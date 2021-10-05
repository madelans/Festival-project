(function() {
    "use strict";

    
     const gift= document.getElementById('gift');



    document.addEventListener('DOMContentLoaded', function(){

        var map = L.map('map').setView([-34.563404, -58.431516], 16 );

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.563404, -58.431516]).addTo(map)
    .bindPopup('WISH FESTIVAL 2021<br> find us here .')
    .openPopup();
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

        name.addEventListener('blur', field_validate);
        last_name.addEventListener('blur', field_validate);
        email.addEventListener('blur', field_validate);
        email.addEventListener('blur', email_validate);

        function field_validate () {
            if (this.value == '') {
                divFail.style.display ='block';
                divFail.innerHTML= 'This field is required';
                this.style.border = '1px solid red';
                divFail.style.border='1px solid red';
            } else {
                divFail.style.display='none';
                this.style.border='1px solid #cccccc';
            }
        }
        
        function email_validate () {
            if(this.value.indexOf('@') > -1) {
                divFail.style.display='none';
                this.style.border='1px solid #cccccc';
            } else {
                divFail.style.display ='block';
                divFail.innerHTML= 'this field requires a valid email';
                this.style.border = '1px solid red';
                divFail.style.border='1px solid red';
            }
        }


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



//PROGRAM


    $('.program-event .event-details:first').show();
    $('.program-menu a:first').addClass('activo');
    $('#day2').hide();
    

    $('.program-menu a').on('click', function(){
        $('.program-menu a').removeClass('activo');
        $(this).addClass('activo');
        $('div.ocultar').hide();
        const enlace= $(this).attr('href');
        $(enlace).fadeIn(1000);

        return false;
        
    });
