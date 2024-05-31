<?php
// Include database connection
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

// Handle update user request
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data['slug'];
    $school_name = $_POST['school_name'];
    $school_address = $_POST['school_address'];
    $password = $_POST['password'];
    $logo = $_FILES['logo']['name'];
    $email = $_POST['email'];
    $contact_no = $_POST['contact_no'];
    $country = $_POST['country'];
    $state = $_POST['state'];
    $city = $_POST['city'];

    $sql = "UPDATE schools SET school_name ='$school_name', school_address = '$school_address', password ='$password', email='$email', contact_no='$contact_no', address='$address', dob='$dob', country ='$country', state = '$state', city = '$city' WHERE slug ='$id'";
    if (mysqli_query($conn, $sql)) {
        echo json_encode(array('message' => 'User updated successfully'));
    } else {
        echo json_encode(array('error' => 'Error updating user'));
    }
}

// Close connection
mysqli_close($conn);
?>
