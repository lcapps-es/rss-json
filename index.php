<?php

require 'vendor/autoload.php';

use PicoFeed\Reader\Reader;

try {

    $reader = new Reader;
    $resource = $reader->download($_GET['rss']);

    $parser = $reader->getParser(
        $resource->getUrl(),
        $resource->getContent(),
        $resource->getEncoding()
    );

    $feed = $parser->execute();

    header("Access-Control-Allow-Origin: *");
	header('Content-Type: application/json');
    echo json_encode($feed);
}
catch (Exception $e) {
    // Do something...
}