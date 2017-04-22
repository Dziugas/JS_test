<html>
<body>

    Tavo vardas yra <?php echo $_POST["name"]; ?> <br>
    Tavo pavardė yra <?php echo $_POST["surname"]; ?> <br>
    Tavo el. pašto adresas yra <?php echo $_POST["email"]; ?> <br>
    Tavo idėja: <?php echo $_POST["text"]; ?> <br>
    Tavo nuoroda: <?php echo $_POST["link"]; ?>



</body>
</html>

<br>
<br>



<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "forma";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO forma (name, surname, email, text, link)
VALUES ('name', 'surname', 'email', 'text', 'link')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";

} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
