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

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

error_log("Received data: " . print_r($data, true));

if (isset($data['slug']) && isset($data['is_enabled'])) {
    $school_slug = $data['slug'];
    $is_enabled = $data['is_enabled'];

    $stmt = $conn->prepare("UPDATE schools SET is_enabled = ? WHERE slug = ?");
    $stmt->bind_param("is", $is_enabled, $school_slug);

    if ($stmt->execute()) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => $stmt->error]);
    }

    $stmt->close();
} else {
    echo json_encode(["success" => false, "message" => "Required data is missing"]);
}

$conn->close();
?>
