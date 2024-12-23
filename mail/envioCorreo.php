<?php

  

    require '../libs/PHPMailer-master/src/PHPMailer.php';
    require '../libs/PHPMailer-master/src/SMTP.php';
    require '../libs/PHPMailer-master/src/Exception.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    

    // Validación de entrada
    if (empty($_POST['nombre']) || empty($_POST['telefono']) || empty($_POST['email'])) {
        echo json_encode(['status' => false, 'mensaje' => 'Campos obligatorios faltantes']);
        exit;
    }

    try {
        
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = 'mail.jcmonterodev.pw';
        $mail->SMTPAuth = true; // Habilita la autenticación SMTP
        $mail->Username = 'jcmonter_envios@jcmonterodev.pw';
        $mail->Password = 'camilomontero94@';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; 
        $mail->Port = 465; // Usar el puerto 587 para STARTTLS
        $mail->setFrom('jcmonter_envios@jcmonterodev.pw', 'JMontero Frelance');
        $mail->addAddress('johan00712@gmail.com');
        
        $mail->isHTML(true);
        $mail->Subject = 'Nuevo mensaje de ' . $_POST['nombre'];
        $mail->Body = 'Prueba de envío';

        $mail->send();
        echo json_encode(['status' => true, 'mensaje' => 'Email enviado correctamente']);
    } catch (Exception $e) {
        echo json_encode(['status' => false, 'mensaje' => 'Fallo al enviar el email', 'error' => $e->getMessage()]);
    }
?>
