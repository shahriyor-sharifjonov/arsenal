<?
$to_email = "vovchukvlados@gmail.com";
   $subject = "wow.arsenal.ru [заказ обратной связи с сайта]";
   $name = $_POST['name'];
   $phone = $_POST['phone'];
   $body = "Имя: $name\nТелефон: $phone";
   $headers = "From: sender@example.com";
 
   if ( mail($to_email, $subject, $body, $headers)) {
      echo("Email successfully sent to ...");
   } else {
      echo("Email sending failed...");
   }

   echo '<script type="text/javascript">
           window.location = "/index.html"
        </script>';
?>