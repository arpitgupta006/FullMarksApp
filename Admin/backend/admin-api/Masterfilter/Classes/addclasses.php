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

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

// Get the POST data
$data = json_decode(file_get_contents('php://input'), true);
$className = $data['className'];

if (empty($className)) {
    echo json_encode(['success' => false, 'message' => 'Class name is required']);
    exit();
}

// Function to generate a random 5-character alphanumeric ID
function generateRandomId($length = 5) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

$classId = generateRandomId();

// Prepare and bind
$sql = "INSERT INTO class (class_id, class_name) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $classId, $className);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Class added successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $sql . ' ' . $conn->error]);
}

$stmt->close();
$conn->close();
?>
