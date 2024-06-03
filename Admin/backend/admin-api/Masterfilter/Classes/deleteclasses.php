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

// Get the POST data
$data = json_decode(file_get_contents('php://input'), true);
$classId = $data['class_id'];

$sql = "DELETE FROM class WHERE class_id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $classId);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Class deleted successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error deleting class']);
}

$stmt->close();
$conn->close();
?>
