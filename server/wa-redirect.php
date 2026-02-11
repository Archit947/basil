<?php
// Simple PHP handler to save the inquiry (optional) and redirect to WhatsApp click-to-chat.
// Deploy on a PHP-capable host. Frontend should POST name, occasion, requirement to this script.

// --- Configuration ---------------------------------------------------------
$ADMIN_WHATSAPP = '917840959674'; // include country code, no symbols

// MySQL connection (optional). If you don't need DB logging, leave as-is.
$DB_HOST = 'localhost';
$DB_NAME = 'basil';
$DB_USER = 'root';
$DB_PASS = '';
$DB_TABLE = 'whatsapp_inquiries';
// --------------------------------------------------------------------------

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Method Not Allowed';
    exit;
}

// Basic sanitization helper
function field($key)
{
    return isset($_POST[$key]) ? trim((string)$_POST[$key]) : '';
}

$name = field('name');
$occasion = field('occasion');
$requirement = field('requirement');

if ($name === '' || $occasion === '' || $requirement === '') {
    http_response_code(400);
    echo 'Missing required fields';
    exit;
}

// Optional: persist to database
try {
    $dsn = "mysql:host={$DB_HOST};dbname={$DB_NAME};charset=utf8mb4";
    $pdo = new PDO($dsn, $DB_USER, $DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);

    $stmt = $pdo->prepare("INSERT INTO {$DB_TABLE} (customer_name, occasion, requirement, created_at) VALUES (:name, :occasion, :requirement, NOW())");
    $stmt->execute([
        ':name' => $name,
        ':occasion' => $occasion,
        ':requirement' => $requirement,
    ]);
} catch (Throwable $e) {
    // If logging fails, continue to redirect so the user flow is not blocked.
}

$messageLines = [
    'Hello,',
    'I visited your website and want to enquire about catering services.',
    '',
    "Name: {$name}",
    "Occasion: {$occasion}",
    "Requirement: {$requirement}",
    '',
    'Please contact me.',
];

$encodedMessage = rawurlencode(implode("\n", $messageLines));
$redirectUrl = "https://wa.me/{$ADMIN_WHATSAPP}?text={$encodedMessage}";

header("Location: {$redirectUrl}");
exit;
