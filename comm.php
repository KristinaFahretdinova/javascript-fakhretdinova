﻿<?php
	$name=$_GET["name"];
	$faculty=$_GET["faculty"];
	$email=$_GET["email"];
	$comment=$_GET["comment"];

	$xml = simplexml_load_file("comment.xml"); 

	$cs = $xml->addChild('comments','');
	$cs->addChild("name", $name);
	$cs->addChild("faculty", $faculty);
	$cs->addChild("email", $email);
	$cs->addChild("comment", $comment);
	$done = $xml->asXML("comment.xml");
	$schiotchik=0;
	$cn = count($xml->comments);
	$xml = simplexml_load_file("comment.xml");
    for($i = 0; $i <= $cn; $i++){
		$schiotchik++;
		echo("<br><div class='news'>");
		echo "ФИО: ".$xml->comments[$i]->name . "<br>";
		echo "Факультет: ".$xml->comments[$i]->faculty . "<br>";
		echo "Почта: ".$xml->comments[$i]->email . "<br>";
		echo "Отзыв: ".$xml->comments[$i]->comment . "<br>";
		echo("</div>");
		if($schiotchik==$cn) break;
    }
?>
