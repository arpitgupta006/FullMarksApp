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

$class_id = $_GET['class_id'];

$sql = "SELECT class_id, class_name FROM class WHERE class_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $class_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $class = $result->fetch_assoc();
    echo json_encode(['success' => true, 'class' => $class]);
} else {
    echo json_encode(['success' => false, 'message' => 'Class not found']);
}

$stmt->close();
$conn->close();
?>
