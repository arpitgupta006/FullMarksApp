<?php
header("Content-Type: application/json");

error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");

$servername = "localhost";
$username = "mylogin123";
$password = "localhost";
$dbname = "fullmarks";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

$sql = "SELECT class_name, class_id FROM class";
$result = $conn->query($sql);

$classes = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $classes[] = $row;
    }
}

echo json_encode(['success' => true, 'classes' => $classes]);

$conn->close();
?>
