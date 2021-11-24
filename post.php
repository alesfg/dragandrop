<?php
    $str = file_get_contents('php://input');
    if(!empty($str)){
        $archivo = fopen('./tmp/posiciones.json','w');
        $obj = json_decode($str);
        $length = (count(get_object_vars($obj)));
        print_r($length.": ".$str);
        fwrite($archivo, $str);
    }else{
        $json = file_get_contents('./tmp/posiciones.json');
        print_r($json);
    }
    

?>