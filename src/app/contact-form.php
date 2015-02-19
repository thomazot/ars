<?php

if (isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['inputMessage'])) {

    //check if any of the inputs are empty
    if (empty($_POST['inputName']) || empty($_POST['inputEmail']) || empty($_POST['inputMessage'])) {
        $data = array('success' => false, 'message' => 'Please fill out the form completely.1');
        echo json_encode($data);
        exit;
    }

    $de = $_POST['inputEmail'];
    $deNome = $_POST['inputName'];

    $to      = 'contato@arsdpvat.com.br';
    $subject = 'Contato do Site';
    $headers = 'From: '. $de . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    $message = $_POST['inputMessage'];

    if(!mail($to, $subject, $message, $headers)) {
        $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: Erro no envio' );
        echo json_encode($data);
        exit;
    }

    $data = array('success' => true, 'message' => 'Obrigado! Sua mensagem foi enviada com sucesso.');
    echo json_encode($data);

} else {

    $data = array('success' => false, 'message' => 'Please fill out the form completely.2');
    echo json_encode($data);

}