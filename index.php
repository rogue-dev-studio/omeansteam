<?php

$request = $_SERVER['REQUEST_URI'];
$viewDir = 'omeansteam/omeansteam.github.io/components/views/';

switch ($request) {
    case '':
        require __DIR__ . $viewDir . 'index.php';
        break;
    case '/':
        require __DIR__ . $viewDir . 'index.php';
        break;

    case '/views/users':
        require __DIR__ . $viewDir . 'users.php';
        break;

    case '/contact':
        require __DIR__ . $viewDir . 'contact.php';
        break;

    default:
        http_response_code(404);
        require __DIR__ . $viewDir . 'empty/404.php';
        // require __DIR__ . $viewDir . 'index.php';
}
