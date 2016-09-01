<?php

session_start();

function __autoload($cn) {
	//var_dump(dirname(__FILE__).'/Clases/'.$cn.'.php');
	//$bad_chars ="\\";
	//$keywords = str_replace($bad_chars, '/', dirname(__FILE__));
	require_once dirname(__FILE__).'/Clases/'.$cn.'.php';
}
