<?php

    $message_sent = false;

    if(isset($_POST['email']) && $_POST['email'] != '') {

        if ( filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

            $userName = $_POST['name'];
            $userEmail = $_POST['email'];
            $subject = $_POST['subject'];
            $message = $_POST['message'];
        
            $to = "david2k8_619@hotmail.co.uk";
            $body = "";
        
            $body .= "From: " .$userName. "\r\n";
            $body .= "From: " .$userEmail. "\r\n";
            $body .= " " .$message. "\r\n";
        
            mail($to,$subject,$body);
            $message_sent = true;
        }
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>laurasima-contact</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Alata&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>

<body>

    <div class="sent-message-alert">
        <h1>Thanks, your message has been sent!</h1>
        <a class="button" href="portfolio.html">Back to Portfolio</a>
    </div>

    <footer>

        <div class="footer-items-wrapper">

            <div class="footer-items">

                <div class="footer-link-wrapper">
                    <a href="index.html">Home</a>
                </div>

                <div class="footer-link-wrapper">
                    <a href="about.html">About</a>
                </div>

                <div class="footer-link-wrapper">
                    <a href="contact.html">Contact</a>
                </div>

            </div>

            <div class="social-media-icons">
                <div class="social-media-icon-items">

                    <a class="social" target="_blank" href="https://www.instagram.com/laur.analogue/"><img 
                    src="social-media-icons/instagram.png"></a>

                </div>
            </div>

        </div>

        <p class="website-rights">Laurasima Clinton 2022. All rights reserved ©</p>

    </div>

    </footer>

</body>

<script src="script.js"></script>

</html>