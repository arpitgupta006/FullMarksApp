<?php
header("Content-Type: application/json");

error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "mylogin123";
$password = "localhost";
$dbname = "fullmarks";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

$data = json_decode(file_get_contents('php://input'), true);
$class_id = $data['class_id'];
$className = $data['className'];

if (empty($className)) {
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit();
}

$sql = "UPDATE class SET class_name = ? WHERE class_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $className, $class_id);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Class updated successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error updating class: ' . $conn->error]);
}

$stmt->close();
$conn->close();
?>
