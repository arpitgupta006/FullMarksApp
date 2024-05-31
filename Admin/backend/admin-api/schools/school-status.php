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


$data = json_decode(file_get_contents("php://input"));
$sno = $data->sno;
$is_enabled = $data->is_enabled;

$sql = "UPDATE schools SET is_enabled = ? WHERE sno = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ii", $is_enabled, $sno);

if ($stmt->execute()) {
    echo json_encode(["message" => "User status updated successfully"]);
} else {
    echo json_encode(["message" => "Error updating user status"]);
}

$stmt->close();
$conn->close();
?>
