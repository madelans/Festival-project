<?php include_once 'includes\templates\header.php'; ?>

   <section class="section content">
       <h2>You can register here</h2>
       <hr class="form_line">


       <form id="register" class="register" action="pagar.html" method="post">
            
            <!--#User_date-->
            <div id="user_date" class="register box clearfix">
               <div class="field">
                   <label for="name">Name:</label>
                   <input class="input-field" type="text" id="name" name="name" placeholder="Yor name">
               </div>
               <div class="field">
                <label for="last_Name">Last Name:</label>
                <input class="input-field" type="text" id="last_name" name="lastName" placeholder="Yor last name">
            </div>
              <div class="field">
                <label for="email">Email:</label>
                <input class="input-field" type="email" id="email" name="email" placeholder="Yor email">
            </div>
            <div id="fail"></div>
           </div> 
           <!--#User_date-->

           <div id="packs" class="packs">
               <h3>Choose the amount you want</h3>
               <ul class="price-list clearfix">
                <li>
                  <div class="price-detail">
                   <i class="fas fa-ticket-alt"></i>
                    <p class="ticket-title">TICKET</p>
                    <p class="number">$50</p>
                    <p class="detail">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. </p>
                    <div class="order">
                        <label for="ticket">Number of Tickets</label>
                        <input type="number" min="0" id="ticket" size="3" name="ticket[amount]" placeholder="0">
                        <input type="hidden" value="30" name="tickets[one_day][price]">
                    </div>
                   </div>
                 </li>
               
                <li>
                 <div class="price-detail">
                   <i class="fas fa-star"></i>
                    <h3 class="vip-title">VIP</h3>
                    <p class="number">$80</p>
                    <p class="detail">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. </p>
                    <div class="order">
                        <label for="vip">Number of Tickets VIP</label>
                        <input type="number" min="0" id="vip" size="3" name="vip[amount]" placeholder="0">
                        <input type="hidden" value="30" name="tickets[one_day][price]">
                    </div>
                 </div>
               </li>
             
               <li>
                 <div class="price-detail">
                   <i class="fas fa-campground"></i>
                    <h3 class="camping-title">CAMPING</h3>
                    <p class="number">$120</p>
                    <p class="detail">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. </p>
                    <div class="order">
                        <label for="camping">Number of Camping</label>
                        <input type="number" min="0" id="camping" size="3" name="camping[amount]" placeholder="0">
                        <input type="hidden" value="30" name="tickets[one_day][price]">
                    </div>
                 </div>
               </li>
              </ul>
           </div>
           <!--#Packs-->

           <div id="summary" class="summary">
             <h3>Payments</h3>
             <div class="box clearfix">
               <div class="accessories">
                 <div class="order">
                   <label for="event-shirt">Oficial event shirt $15<small>(7% SALE)</small></label>
                   <input type="number" min="0" id="event_shirt" name="extra_request[shirt][amount]" size="3" placeholder="0">
                   <input type="hidden" value="10" name="extra_request[shirt][price]">
                 </div>
                 <!--Order-->
                 <div class="order">
                   <label for="stickers">Pack of 10 stickers 5$<small>(About the festival and electronic music)</small></label>
                   <input type="number" min="0" id="stickers" name="extra_request[stickers][amount]">
                   <input type="hidden" name="extra_request[stickers][price]" id="" value="2">
                 </div>
                 <!--Order-->
                 <div class="order">
                   <label for="gift">Choose your wish gift!</label> <br>
                   <select id="gift" name="gift" required>
                     <option value="">Choose a gift</option>
                     <option value="2">stickers</option>
                     <option value="1">Event glass</option>
                     <option value="3">Photo pack</option>
                   </select>
                 </div>
                 <!--Order-->


                 <input type="button" id="calculate" class="button" value="calculate">
                 </div>
                 <!--extras-->

                 <div class="total">
                   <p>Summary:</p>
                   <div id="product-list"></div>
                   <p>Total:</p>
                   <div id="total-summary"></div>
                  
                   <input type="hidden" name="total-order" id="total_order">
                   <input type="hidden" name="total_sale" id="total_sale" value="total_sale">
                   <input id="btnregister" type="submit" name="submit" class="button" value="pay">
                  </div>
                  <!--total-->
             </div>
             <!--Box-->
           </div>
           <!--Resume-->

       </form>
   </section>



 
 
 
 
   <?php include_once 'includes\templates\footer.php'; ?>