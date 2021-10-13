<?php include_once 'includes\templates\header.php'; ?>

      

    <section class="section conteint">
        <h2>Event Calendar</h2>

        <?php 
        try {
            require_once('includes/functions/db_conn.php');
            $sql="SELECT * FROM categoria_dias";
            $results= $conn->query($sql);
        } catch (\Exception $e) {
            echo $e->getMessage();
        }
        ?>


       <div class="calendar">
           <?php 
            $events= $results->fetch_assoc();
            ?>

            <pre>
                <?php var_dump($events); ?>
            </pre>

        </div>


        <?php
          $conn->close();
          ?>



    </section>




<?php include_once 'includes\templates\footer.php'; ?>