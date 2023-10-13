<?php

$request = $_SERVER['REQUEST_URI'];
$viewDir = "/omeansteam/omeansteam.github.io";

switch ($request) {
    case $viewDir .'/':
        require "components/views/index.php";
        break;
    default:
        http_response_code(404);
        require  . $viewDir . '/components/views/empty/404.php';
        // require __DIR__ . $viewDir . 'index.php';
}
