<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database Credentials
$db_host = 'localhost';
$db_name = 'u539280926_seyon';
$db_user = 'u539280926_seyon';
$db_pass = 'Iyalvanam@1975';
$jwt_secret = 'iyalvanam-super-secure-secret-key-2026';

// Connect to MySQL
try {
    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8mb4", $db_user, $db_pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed: " . $e->getMessage()]);
    exit();
}

// Ensure Tables Exist & Seed Initial Data
function initDatabase($pdo) {
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS users (
            id VARCHAR(64) PRIMARY KEY,
            username VARCHAR(100) NOT NULL UNIQUE,
            password_hash VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            role VARCHAR(50) NOT NULL DEFAULT 'ADMIN',
            created_at DATETIME NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

        CREATE TABLE IF NOT EXISTS blog_posts (
            id VARCHAR(64) PRIMARY KEY,
            title VARCHAR(500) NOT NULL,
            title_tamil VARCHAR(500),
            slug VARCHAR(255) NOT NULL UNIQUE,
            content TEXT NOT NULL,
            excerpt TEXT NOT NULL,
            image_url TEXT,
            author VARCHAR(255) NOT NULL,
            category VARCHAR(100) NOT NULL,
            tags JSON,
            read_time VARCHAR(50),
            published BOOLEAN NOT NULL DEFAULT TRUE,
            created_at DATETIME NOT NULL,
            updated_at DATETIME NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

        CREATE TABLE IF NOT EXISTS member_inquiries (
            id VARCHAR(64) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(50) NOT NULL,
            skills TEXT,
            area_of_contribution TEXT,
            number_of_members INT DEFAULT 1,
            preferred_interaction_method VARCHAR(255),
            message TEXT NOT NULL,
            status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
            notes TEXT,
            submitted_at DATETIME NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

        CREATE TABLE IF NOT EXISTS contact_inquiries (
            id VARCHAR(64) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(50),
            subject VARCHAR(500) NOT NULL,
            message TEXT NOT NULL,
            submitted_at DATETIME NOT NULL,
            responded BOOLEAN NOT NULL DEFAULT FALSE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

        CREATE TABLE IF NOT EXISTS donations (
            id VARCHAR(64) PRIMARY KEY,
            donor_name VARCHAR(255) NOT NULL,
            donor_email VARCHAR(255) NOT NULL,
            amount DECIMAL(12, 2),
            type VARCHAR(255) NOT NULL,
            description TEXT,
            status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
            created_at DATETIME NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

        CREATE TABLE IF NOT EXISTS leadership_profiles (
            id VARCHAR(64) PRIMARY KEY,
            designation VARCHAR(50) NOT NULL,
            display_name VARCHAR(255) NOT NULL,
            role_title VARCHAR(255) NOT NULL,
            role_title_tamil VARCHAR(255),
            short_bio TEXT NOT NULL,
            full_biography TEXT NOT NULL,
            profile_image TEXT NOT NULL,
            cover_image TEXT,
            vision_statement TEXT NOT NULL,
            philosophy TEXT NOT NULL,
            quote TEXT NOT NULL,
            display_order INT DEFAULT 1,
            is_published BOOLEAN NOT NULL DEFAULT TRUE,
            projects JSON,
            social_links JSON,
            created_at DATETIME NOT NULL,
            updated_at DATETIME NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    ");

    // Seed default admin if empty
    $stmt = $pdo->query("SELECT COUNT(*) as count FROM users");
    if ($stmt->fetch()['count'] == 0) {
        $hash = password_hash('admin123', PASSWORD_BCRYPT);
        $insert = $pdo->prepare("INSERT INTO users (id, username, password_hash, email, role, created_at) VALUES (?, ?, ?, ?, ?, NOW())");
        $insert->execute(['usr-admin-01', 'admin', $hash, 'contact@iyalvanam.org', 'ADMIN']);
    }

    // Seed sample blog posts if empty
    $stmt = $pdo->query("SELECT COUNT(*) as count FROM blog_posts");
    if ($stmt->fetch()['count'] == 0) {
        $posts = [
            [
                'post-01',
                'Restoring the Western Ghats: Our First Sapling Drive in Dharmapuramadam',
                'மேற்குத் தொடர்ச்சி மலையின் மடியில் முதல் மரக்கன்றுகள் நடும் விழா',
                'restoring-western-ghats-sapling-drive',
                'At the foothills of the Agastiyar Malai Biosphere Reserve in Tenkasi District, our journey began not with concrete foundations, but with native seeds and saplings.\n\nIn harmony with the natural ecosystem of the Western Ghats, we gathered with friends, local botanists, and prospective community members to plant over 150 indigenous varieties, including Kadamba, Marudham, Vembu, and wild fruit trees that sustain local bird and pollinator populations.\n\n### Principles in Action\n1. Non-Artificial Intervention\n2. The Forest as Our Teacher\n3. Collective Joy',
                'A glimpse into our collective effort at Dharmapuramadam, planting native Western Ghats species to restore the natural canopy and protect soil biodiversity.',
                'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
                'Iyalvanam Core Circle',
                'Ecology & Land',
                json_encode(["Western Ghats", "Reforestation", "Agastiyar Malai", "Native Species"]),
                '4 min read',
                1
            ],
            [
                'post-02',
                'Why Non-Artificial Living is the Greatest Healing: Water, Sun & Soil',
                'செயற்கையற்ற வாழ்வியலே மெய்யான நலம் – பஞ்சபூதங்களின் மருத்துவம்',
                'why-non-artificial-living-is-healing',
                'Modern human life has systematically isolated us from the primal elements: we walk on rubber soles, breathe air conditioned through synthetic ducts, drink demineralized bottled water, and hide behind screens from dawn to dusk.\n\nAt Iyalvanam, health is not an expensive medical commodity; it is the natural consequence of being in direct resonance with the five elements (Pancha Bhootas).',
                'Exploring our natural health philosophy: how fresh air, pure open well water, direct sunlight, and barefoot grounding restore human vitality.',
                'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
                'Health & Living Circle',
                'Conscious Living',
                json_encode(["Holistic Health", "Grounding", "Natural Living", "Pancha Bhoota"]),
                '5 min read',
                1
            ]
        ];

        $ins = $pdo->prepare("INSERT INTO blog_posts (id, title, title_tamil, slug, content, excerpt, image_url, author, category, tags, read_time, published, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())");
        foreach ($posts as $p) {
            $ins->execute($p);
        }
    }

    // Seed/Update default leadership profiles
    $leadershipData = [
        [
            'lead-01',
            'FOUNDER',
            'Rajesh',
            'Founder & Vision Steward',
            'நிறுவனர் & தொலைநோக்கு வழிகாட்டி',
            'A former banker who stepped away from corporate systems to explore natural living, farming, community sovereignty, and the return to what is fundamental.',
            "Rajesh is a former banker who chose to step away from the corporate world and question the way modern society defines life, success and freedom.\n\nHis journey took him through farming, travel and a search for communities where people could live with greater simplicity, freedom and connection. Along the way, he began to see a deeper disconnect—between humans and nature, between people and each other, and between the way life was designed to be lived and the systems built around it.\n\nToday, Rajesh is working to turn that realization into something tangible through IYALVANAM – Center for Natural Living and SEYON.\n\nHis vision is simple yet profound: to create spaces where people can step away from the noise of modern life, reconnect with nature, rediscover community, and explore a life guided by natural principles rather than imposed systems.\n\nFor Rajesh, this is not just a project. It is a journey back to what is fundamental—freedom, nature, connection and a meaningful way of living.",
            '/images/founder-emblem.jpg',
            'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80',
            'To create spaces where people can step away from the noise of modern life, reconnect with nature, rediscover community, and explore a life guided by natural principles rather than imposed systems.',
            'Life was designed to be lived in freedom and effortless connection with nature, not constrained by artificial corporate and economic constructs.',
            '“For us, this is not just a project. It is a journey back to what is fundamental—freedom, nature, connection and a meaningful way of living.”',
            1,
            1,
            json_encode(["IYALVANAM – Center for Natural Living Foundation", "Dharmapuramadam Sanctuary Land Stewardship", "Non-Artificial Living Philosophy", "Dual-Trust Collective Community Architecture"]),
            json_encode(["email" => "rajesh@iyalvanam.org", "phone" => "+91 96007 56007"])
        ],
        [
            'lead-02',
            'CO_FOUNDER',
            'Shanmugavel',
            'Co-Founder & Operational Steward',
            'இணை நிறுவனர் & கள ஒருங்கிணைப்பாளர்',
            'Designer and mechanical engineering researcher from Coimbatore whose 45-day ICU recovery inspired the SEYON Nature Life movement and 50+ experiential camps.',
            "Shanmugavel, from Coimbatore, is a designer and researcher in mechanical engineering whose life took an unexpected turn after spending 45 days in intensive care during the COVID-19 pandemic.\n\nHis journey toward recovery led him to explore health, natural food and a simpler way of living. During six months of travel and research, he discovered the remarkable simplicity of foods such as coconut and banana and began experiencing profound changes in his own well-being.\n\nHis search eventually brought him to Sivasailam, at the foothills of Pothigai, where the experience of natural surroundings deeply influenced his understanding of life. It inspired him to move closer to nature and share his experiences of natural food and natural living with others.\n\nSEYON Nature Life Foundation was created in the post-COVID period with a simple purpose—to help people experience natural living rather than merely hear about it. Through monthly nature camps, SEYON has so far conducted 50+ camps, giving 1,000+ people an opportunity to experience nature, natural food and a simpler way of life.\n\nToday, Shanmugavel continues to explore, learn and share this journey, hoping to create a bridge for those who wish to reconnect with nature.",
            '/images/co-founder-emblem.jpg',
            'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=80',
            'To help people directly experience natural living, natural food, and holistic well-being rather than merely hear about it.',
            'True health emerges from the simplicity of natural foods and immersion in pristine mountain surroundings.',
            '“Let us live happily together with nature, as much as possible.”',
            2,
            1,
            json_encode(["SEYON Nature Life Foundation", "50+ Monthly Experiential Nature Living Camps (1,000+ Participants)", "Sivasailam Natural Food Research", "Community Onboarding & Immersion"]),
            json_encode(["email" => "shanmugavel@iyalvanam.org", "phone" => "+91 94440 98765"])
        ]
    ];

    $insLead = $pdo->prepare("REPLACE INTO leadership_profiles (id, designation, display_name, role_title, role_title_tamil, short_bio, full_biography, profile_image, cover_image, vision_statement, philosophy, quote, display_order, is_published, projects, social_links, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())");
    foreach ($leadershipData as $l) {
        $insLead->execute($l);
    }
}

initDatabase($pdo);

// Token Helpers (Simple & Secure HMAC SHA256 JWT)
function generateJWT($payload, $secret) {
    $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
    $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
    $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode(json_encode($payload)));
    $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, $secret, true);
    $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
    return $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;
}

function verifyJWT($token, $secret) {
    $parts = explode('.', $token);
    if (count($parts) !== 3) return null;
    list($header64, $payload64, $sig64) = $parts;
    $sig = hash_hmac('sha256', $header64 . "." . $payload64, $secret, true);
    $validSig64 = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($sig));
    if (!hash_equals($validSig64, $sig64)) return null;
    $payload = json_decode(base64_decode(str_replace(['-', '_'], ['+', '/'], $payload64)), true);
    if (isset($payload['exp']) && $payload['exp'] < time()) return null;
    return $payload;
}

function requireAuth($pdo, $secret) {
    $headers = getallheaders();
    $auth = isset($headers['Authorization']) ? $headers['Authorization'] : (isset($headers['authorization']) ? $headers['authorization'] : '');
    if (!$auth || !preg_match('/Bearer\s+(.*)$/i', $auth, $matches)) {
        http_response_code(401);
        echo json_encode(["error" => "Unauthorized: Missing or invalid token"]);
        exit();
    }
    $payload = verifyJWT($matches[1], $secret);
    if (!$payload || !isset($payload['id'])) {
        http_response_code(401);
        echo json_encode(["error" => "Unauthorized: Token expired or invalid"]);
        exit();
    }
    return $payload;
}

// Router
$request_uri = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($request_uri, PHP_URL_PATH);

// Normalize path: strip /api prefix or index.php prefix
$path = preg_replace('#^/api/?#', '/', $path);
$path = preg_replace('#^/index\.php/?#', '/', $path);
$path = '/' . trim($path, '/');

$input = json_decode(file_get_contents('php://input'), true) ?? [];

// Helper to format blog post from DB
function formatPost($row) {
    return [
        'id' => $row['id'],
        'title' => $row['title'],
        'titleTamil' => $row['title_tamil'] ?? '',
        'slug' => $row['slug'],
        'content' => $row['content'],
        'excerpt' => $row['excerpt'],
        'imageUrl' => $row['image_url'],
        'author' => $row['author'],
        'category' => $row['category'],
        'tags' => is_string($row['tags']) ? json_decode($row['tags'], true) : ($row['tags'] ?? []),
        'readTime' => $row['read_time'] ?? '4 min read',
        'published' => (bool)$row['published'],
        'createdAt' => $row['created_at'],
        'updatedAt' => $row['updated_at']
    ];
}

// Helper to format leadership profile from DB
function formatLeadership($row) {
    return [
        'id' => $row['id'],
        'designation' => $row['designation'],
        'displayName' => $row['display_name'],
        'roleTitle' => $row['role_title'],
        'roleTitleTamil' => $row['role_title_tamil'] ?? '',
        'shortBio' => $row['short_bio'],
        'fullBiography' => $row['full_biography'],
        'profileImage' => $row['profile_image'],
        'coverImage' => $row['cover_image'] ?? '',
        'visionStatement' => $row['vision_statement'],
        'philosophy' => $row['philosophy'],
        'quote' => $row['quote'],
        'displayOrder' => (int)($row['display_order'] ?? 1),
        'isPublished' => (bool)$row['is_published'],
        'projects' => is_string($row['projects']) ? json_decode($row['projects'], true) : ($row['projects'] ?? []),
        'socialLinks' => is_string($row['social_links']) ? json_decode($row['social_links'], true) : ($row['social_links'] ?? []),
        'createdAt' => $row['created_at'],
        'updatedAt' => $row['updated_at']
    ];
}

// Helper to format member inquiry from DB
function formatMember($row) {
    return [
        'id' => $row['id'],
        'name' => $row['name'],
        'email' => $row['email'],
        'phone' => $row['phone'],
        'skills' => $row['skills'] ?? '',
        'areaOfContribution' => $row['area_of_contribution'] ?? '',
        'numberOfMembers' => (int)($row['number_of_members'] ?? 1),
        'preferredInteractionMethod' => $row['preferred_interaction_method'] ?? '',
        'message' => $row['message'],
        'status' => $row['status'],
        'notes' => $row['notes'] ?? '',
        'submittedAt' => $row['submitted_at']
    ];
}

// Helper to format contact from DB
function formatContact($row) {
    return [
        'id' => $row['id'],
        'name' => $row['name'],
        'email' => $row['email'],
        'phone' => $row['phone'] ?? '',
        'subject' => $row['subject'],
        'message' => $row['message'],
        'submittedAt' => $row['submitted_at'],
        'responded' => (bool)$row['responded']
    ];
}

// Helper to format donation from DB
function formatDonation($row) {
    return [
        'id' => $row['id'],
        'donorName' => $row['donor_name'],
        'donorEmail' => $row['donor_email'],
        'amount' => $row['amount'] ? (float)$row['amount'] : null,
        'type' => $row['type'],
        'description' => $row['description'] ?? '',
        'status' => $row['status'],
        'createdAt' => $row['created_at']
    ];
}

// Routes
if ($path === '' || $path === '/' || $path === '/health') {
    echo json_encode([
        "status" => "ok",
        "service" => "Iyalvanam Full-Stack Platform API (Hostinger PHP/MySQL)",
        "database" => [
            "type" => "MySQL",
            "connected" => true,
            "database" => $db_name
        ],
        "timestamp" => date('c')
    ]);
    exit();
}

if ($path === '/about') {
    echo json_encode([
        "name" => "Iyalvanam Iyarkai Vazhviyal Koodam",
        "nameTamil" => "இயல்வனம் இயற்கை வாழ்வியல் கூடம்",
        "tagline" => "Return to nature as much as possible",
        "taglineTamil" => "இயன்ற வரை இயற்கைக்கு திரும்புவோம்",
        "location" => "Dharmapuramadam, Tenkasi District, Tamil Nadu, India",
        "foundations" => [
            "Non-Artificial Living",
            "Interconnected Life",
            "Collective Existence",
            "Return to Natural State",
            "Forest as a Model"
        ]
    ]);
    exit();
}

// Auth Login
if ($path === '/auth/login' && $method === 'POST') {
    $username = trim($input['username'] ?? '');
    $password = trim($input['password'] ?? '');

    if (!$username || !$password) {
        http_response_code(400);
        echo json_encode(["error" => "Username and password are required"]);
        exit();
    }

    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ? OR email = ?");
    $stmt->execute([$username, $username]);
    $user = $stmt->fetch();

    if (!$user || !password_verify($password, $user['password_hash'])) {
        http_response_code(401);
        echo json_encode(["error" => "Invalid credentials"]);
        exit();
    }

    $token = generateJWT([
        'id' => $user['id'],
        'username' => $user['username'],
        'role' => $user['role'],
        'exp' => time() + (7 * 24 * 60 * 60)
    ], $jwt_secret);

    echo json_encode([
        "token" => $token,
        "user" => [
            "id" => $user['id'],
            "username" => $user['username'],
            "email" => $user['email'],
            "role" => $user['role'],
            "createdAt" => $user['created_at']
        ]
    ]);
    exit();
}

// Auth Me
if ($path === '/auth/me' && $method === 'GET') {
    $auth = requireAuth($pdo, $jwt_secret);
    $stmt = $pdo->prepare("SELECT id, username, email, role, created_at FROM users WHERE id = ?");
    $stmt->execute([$auth['id']]);
    $user = $stmt->fetch();
    if (!$user) {
        http_response_code(404);
        echo json_encode(["error" => "User not found"]);
        exit();
    }
    echo json_encode([
        "id" => $user['id'],
        "username" => $user['username'],
        "email" => $user['email'],
        "role" => $user['role'],
        "createdAt" => $user['created_at']
    ]);
    exit();
}

// ==================== LEADERSHIP ENDPOINTS ====================

// List Leadership Profiles (Public: published only; Auth: all)
if ($path === '/leadership' && $method === 'GET') {
    $headers = getallheaders();
    $authHeader = isset($headers['Authorization']) ? $headers['Authorization'] : (isset($headers['authorization']) ? $headers['authorization'] : '');
    $isAdmin = false;
    if ($authHeader && preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
        $payload = verifyJWT($matches[1], $jwt_secret);
        if ($payload && isset($payload['id'])) {
            $isAdmin = true;
        }
    }

    if ($isAdmin && ($_GET['all'] ?? '') === 'true') {
        $stmt = $pdo->query("SELECT * FROM leadership_profiles ORDER BY display_order ASC, created_at ASC");
    } else {
        $stmt = $pdo->query("SELECT * FROM leadership_profiles WHERE is_published = 1 ORDER BY display_order ASC, created_at ASC");
    }

    echo json_encode(array_map('formatLeadership', $stmt->fetchAll()));
    exit();
}

// Single Leadership Profile by ID or Designation (e.g. /leadership/founder or /leadership/lead-01)
if (preg_match('#^/leadership/([^/]+)$#', $path, $matches)) {
    $idOrDesignation = $matches[1];

    if ($method === 'GET') {
        // Support searching by designation string 'founder' or 'co-founder' or ID
        $designationMap = [
            'founder' => 'FOUNDER',
            'co-founder' => 'CO_FOUNDER',
            'cofounder' => 'CO_FOUNDER'
        ];

        $targetDesignation = $designationMap[strtolower($idOrDesignation)] ?? null;

        if ($targetDesignation) {
            $stmt = $pdo->prepare("SELECT * FROM leadership_profiles WHERE designation = ? AND is_published = 1 LIMIT 1");
            $stmt->execute([$targetDesignation]);
        } else {
            $stmt = $pdo->prepare("SELECT * FROM leadership_profiles WHERE id = ?");
            $stmt->execute([$idOrDesignation]);
        }

        $profile = $stmt->fetch();
        if (!$profile) {
            http_response_code(404);
            echo json_encode(["error" => "Leadership profile not found"]);
            exit();
        }
        echo json_encode(formatLeadership($profile));
        exit();
    }

    if ($method === 'PUT') {
        requireAuth($pdo, $jwt_secret);
        $stmt = $pdo->prepare("SELECT * FROM leadership_profiles WHERE id = ?");
        $stmt->execute([$idOrDesignation]);
        $existing = $stmt->fetch();
        if (!$existing) {
            http_response_code(404);
            echo json_encode(["error" => "Leadership profile not found"]);
            exit();
        }

        $designation = $input['designation'] ?? $existing['designation'];
        $displayName = $input['displayName'] ?? $existing['display_name'];
        $roleTitle = $input['roleTitle'] ?? $existing['role_title'];
        $roleTitleTamil = $input['roleTitleTamil'] ?? $existing['role_title_tamil'];
        $shortBio = $input['shortBio'] ?? $existing['short_bio'];
        $fullBiography = $input['fullBiography'] ?? $existing['full_biography'];
        $profileImage = $input['profileImage'] ?? $existing['profile_image'];
        $coverImage = $input['coverImage'] ?? $existing['cover_image'];
        $visionStatement = $input['visionStatement'] ?? $existing['vision_statement'];
        $philosophy = $input['philosophy'] ?? $existing['philosophy'];
        $quote = $input['quote'] ?? $existing['quote'];
        $displayOrder = isset($input['displayOrder']) ? (int)$input['displayOrder'] : (int)$existing['display_order'];
        $isPublished = isset($input['isPublished']) ? ($input['isPublished'] ? 1 : 0) : $existing['is_published'];
        $projects = isset($input['projects']) ? json_encode($input['projects']) : $existing['projects'];
        $socialLinks = isset($input['socialLinks']) ? json_encode($input['socialLinks']) : $existing['social_links'];

        $up = $pdo->prepare("UPDATE leadership_profiles SET designation = ?, display_name = ?, role_title = ?, role_title_tamil = ?, short_bio = ?, full_biography = ?, profile_image = ?, cover_image = ?, vision_statement = ?, philosophy = ?, quote = ?, display_order = ?, is_published = ?, projects = ?, social_links = ?, updated_at = NOW() WHERE id = ?");
        $up->execute([$designation, $displayName, $roleTitle, $roleTitleTamil, $shortBio, $fullBiography, $profileImage, $coverImage, $visionStatement, $philosophy, $quote, $displayOrder, $isPublished, $projects, $socialLinks, $idOrDesignation]);

        $stmt = $pdo->prepare("SELECT * FROM leadership_profiles WHERE id = ?");
        $stmt->execute([$idOrDesignation]);
        echo json_encode(formatLeadership($stmt->fetch()));
        exit();
    }

    if ($method === 'DELETE') {
        requireAuth($pdo, $jwt_secret);
        $del = $pdo->prepare("DELETE FROM leadership_profiles WHERE id = ?");
        $del->execute([$idOrDesignation]);
        echo json_encode(["message" => "Leadership profile deleted successfully"]);
        exit();
    }
}

if ($path === '/leadership' && $method === 'POST') {
    requireAuth($pdo, $jwt_secret);
    $displayName = trim($input['displayName'] ?? '');
    $designation = trim($input['designation'] ?? 'FOUNDER');

    if (!$displayName) {
        http_response_code(400);
        echo json_encode(["error" => "Display name is required"]);
        exit();
    }

    $id = 'lead-' . round(microtime(true) * 1000);
    $roleTitle = $input['roleTitle'] ?? 'Community Steward';
    $roleTitleTamil = $input['roleTitleTamil'] ?? '';
    $shortBio = $input['shortBio'] ?? '';
    $fullBiography = $input['fullBiography'] ?? '';
    $profileImage = $input['profileImage'] ?? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80';
    $coverImage = $input['coverImage'] ?? '';
    $visionStatement = $input['visionStatement'] ?? '';
    $philosophy = $input['philosophy'] ?? '';
    $quote = $input['quote'] ?? '';
    $displayOrder = (int)($input['displayOrder'] ?? 1);
    $isPublished = isset($input['isPublished']) ? ($input['isPublished'] ? 1 : 0) : 1;
    $projects = json_encode($input['projects'] ?? []);
    $socialLinks = json_encode($input['socialLinks'] ?? []);

    $ins = $pdo->prepare("INSERT INTO leadership_profiles (id, designation, display_name, role_title, role_title_tamil, short_bio, full_biography, profile_image, cover_image, vision_statement, philosophy, quote, display_order, is_published, projects, social_links, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())");
    $ins->execute([$id, $designation, $displayName, $roleTitle, $roleTitleTamil, $shortBio, $fullBiography, $profileImage, $coverImage, $visionStatement, $philosophy, $quote, $displayOrder, $isPublished, $projects, $socialLinks]);

    $stmt = $pdo->prepare("SELECT * FROM leadership_profiles WHERE id = ?");
    $stmt->execute([$id]);
    http_response_code(201);
    echo json_encode(formatLeadership($stmt->fetch()));
    exit();
}

// ==================== BLOG ENDPOINTS ====================
if ($path === '/blog' && $method === 'GET') {
    $category = $_GET['category'] ?? '';
    $search = $_GET['search'] ?? '';
    $includeUnpublished = ($_GET['includeUnpublished'] ?? '') === 'true';

    $where = [];
    $params = [];

    if (!$includeUnpublished) {
        $where[] = "published = 1";
    }
    if ($category && strtolower($category) !== 'all') {
        $where[] = "LOWER(category) = LOWER(?)";
        $params[] = $category;
    }
    if ($search) {
        $where[] = "(LOWER(title) LIKE ? OR LOWER(title_tamil) LIKE ? OR LOWER(excerpt) LIKE ? OR LOWER(content) LIKE ?)";
        $s = '%' . strtolower($search) . '%';
        $params[] = $s;
        $params[] = $s;
        $params[] = $s;
        $params[] = $s;
    }

    $sql = "SELECT * FROM blog_posts";
    if (!empty($where)) {
        $sql .= " WHERE " . implode(" AND ", $where);
    }
    $sql .= " ORDER BY created_at DESC";

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $rows = $stmt->fetchAll();

    echo json_encode(array_map('formatPost', $rows));
    exit();
}

// Blog Post Detail / Create / Update / Delete
if (preg_match('#^/blog/([^/]+)$#', $path, $matches)) {
    $idOrSlug = $matches[1];

    if ($method === 'GET') {
        $stmt = $pdo->prepare("SELECT * FROM blog_posts WHERE id = ? OR slug = ?");
        $stmt->execute([$idOrSlug, $idOrSlug]);
        $post = $stmt->fetch();
        if (!$post) {
            http_response_code(404);
            echo json_encode(["error" => "Blog post not found"]);
            exit();
        }
        echo json_encode(formatPost($post));
        exit();
    }

    if ($method === 'PUT') {
        requireAuth($pdo, $jwt_secret);
        $stmt = $pdo->prepare("SELECT * FROM blog_posts WHERE id = ?");
        $stmt->execute([$idOrSlug]);
        $existing = $stmt->fetch();
        if (!$existing) {
            http_response_code(404);
            echo json_encode(["error" => "Blog post not found"]);
            exit();
        }

        $title = $input['title'] ?? $existing['title'];
        $titleTamil = $input['titleTamil'] ?? $existing['title_tamil'];
        $content = $input['content'] ?? $existing['content'];
        $excerpt = $input['excerpt'] ?? $existing['excerpt'];
        $imageUrl = $input['imageUrl'] ?? $existing['image_url'];
        $author = $input['author'] ?? $existing['author'];
        $category = $input['category'] ?? $existing['category'];
        $tags = isset($input['tags']) ? json_encode($input['tags']) : $existing['tags'];
        $readTime = $input['readTime'] ?? $existing['read_time'];
        $published = isset($input['published']) ? ($input['published'] ? 1 : 0) : $existing['published'];

        $up = $pdo->prepare("UPDATE blog_posts SET title = ?, title_tamil = ?, content = ?, excerpt = ?, image_url = ?, author = ?, category = ?, tags = ?, read_time = ?, published = ?, updated_at = NOW() WHERE id = ?");
        $up->execute([$title, $titleTamil, $content, $excerpt, $imageUrl, $author, $category, $tags, $readTime, $published, $idOrSlug]);

        $stmt = $pdo->prepare("SELECT * FROM blog_posts WHERE id = ?");
        $stmt->execute([$idOrSlug]);
        echo json_encode(formatPost($stmt->fetch()));
        exit();
    }

    if ($method === 'DELETE') {
        requireAuth($pdo, $jwt_secret);
        $del = $pdo->prepare("DELETE FROM blog_posts WHERE id = ?");
        $del->execute([$idOrSlug]);
        echo json_encode(["message" => "Blog post deleted successfully"]);
        exit();
    }
}

if ($path === '/blog' && $method === 'POST') {
    requireAuth($pdo, $jwt_secret);
    $title = trim($input['title'] ?? '');
    $content = trim($input['content'] ?? '');

    if (!$title || !$content) {
        http_response_code(400);
        echo json_encode(["error" => "Title and content are required"]);
        exit();
    }

    $id = 'post-' . round(microtime(true) * 1000);
    $slugBase = strtolower(preg_replace('/[^a-z0-9]+/i', '-', $title));
    $slug = trim($slugBase, '-') . '-' . rand(100, 999);
    $excerpt = $input['excerpt'] ?? (mb_substr(strip_tags($content), 0, 150) . '...');
    $imageUrl = $input['imageUrl'] ?? 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80';
    $author = $input['author'] ?? 'Iyalvanam Core Circle';
    $category = $input['category'] ?? 'Community Updates';
    $tags = json_encode($input['tags'] ?? ["Iyalvanam", "Nature"]);
    $readTime = $input['readTime'] ?? '4 min read';
    $published = isset($input['published']) ? ($input['published'] ? 1 : 0) : 1;
    $titleTamil = $input['titleTamil'] ?? '';

    $ins = $pdo->prepare("INSERT INTO blog_posts (id, title, title_tamil, slug, content, excerpt, image_url, author, category, tags, read_time, published, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())");
    $ins->execute([$id, $title, $titleTamil, $slug, $content, $excerpt, $imageUrl, $author, $category, $tags, $readTime, $published]);

    $stmt = $pdo->prepare("SELECT * FROM blog_posts WHERE id = ?");
    $stmt->execute([$id]);
    http_response_code(201);
    echo json_encode(formatPost($stmt->fetch()));
    exit();
}

// ==================== INQUIRIES & DONATIONS ====================

// Member Inquiries (Join Us)
if ($path === '/join' && $method === 'POST') {
    $name = trim($input['name'] ?? '');
    $email = trim($input['email'] ?? '');
    $phone = trim($input['phone'] ?? '');
    $message = trim($input['message'] ?? '');

    if (!$name || !$email || !$phone || !$message) {
        http_response_code(400);
        echo json_encode(["error" => "Name, email, phone, and message are required"]);
        exit();
    }

    $id = 'inq-' . round(microtime(true) * 1000);
    $skills = $input['skills'] ?? '';
    $areaOfContribution = $input['areaOfContribution'] ?? '';
    $numberOfMembers = (int)($input['numberOfMembers'] ?? 1);
    $preferredInteractionMethod = $input['preferredInteractionMethod'] ?? 'In-person visit';

    $ins = $pdo->prepare("INSERT INTO member_inquiries (id, name, email, phone, skills, area_of_contribution, number_of_members, preferred_interaction_method, message, status, submitted_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'PENDING', NOW())");
    $ins->execute([$id, $name, $email, $phone, $skills, $areaOfContribution, $numberOfMembers, $preferredInteractionMethod, $message]);

    $stmt = $pdo->prepare("SELECT * FROM member_inquiries WHERE id = ?");
    $stmt->execute([$id]);
    $inquiry = formatMember($stmt->fetch());

    http_response_code(201);
    echo json_encode([
        "message" => "Thank you for reaching out to Iyalvanam. We have received your inquiry and will connect with you soon.",
        "inquiry" => $inquiry
    ]);
    exit();
}

if ($path === '/inquiries/members' && $method === 'GET') {
    requireAuth($pdo, $jwt_secret);
    $stmt = $pdo->query("SELECT * FROM member_inquiries ORDER BY submitted_at DESC");
    echo json_encode(array_map('formatMember', $stmt->fetchAll()));
    exit();
}

if (preg_match('#^/inquiries/members/([^/]+)/status$#', $path, $matches) && $method === 'PUT') {
    requireAuth($pdo, $jwt_secret);
    $id = $matches[1];
    $status = $input['status'] ?? null;
    $notes = $input['notes'] ?? null;

    if ($status && in_array($status, ['PENDING', 'CONTACTED', 'JOINED'])) {
        $up = $pdo->prepare("UPDATE member_inquiries SET status = ?, notes = COALESCE(?, notes) WHERE id = ?");
        $up->execute([$status, $notes, $id]);
    } elseif ($notes !== null) {
        $up = $pdo->prepare("UPDATE member_inquiries SET notes = ? WHERE id = ?");
        $up->execute([$notes, $id]);
    }

    $stmt = $pdo->prepare("SELECT * FROM member_inquiries WHERE id = ?");
    $stmt->execute([$id]);
    $row = $stmt->fetch();
    if (!$row) {
        http_response_code(404);
        echo json_encode(["error" => "Member inquiry not found"]);
        exit();
    }
    echo json_encode(formatMember($row));
    exit();
}

if (preg_match('#^/inquiries/members/([^/]+)$#', $path, $matches) && $method === 'DELETE') {
    requireAuth($pdo, $jwt_secret);
    $del = $pdo->prepare("DELETE FROM member_inquiries WHERE id = ?");
    $del->execute([$matches[1]]);
    echo json_encode(["message" => "Member inquiry deleted successfully"]);
    exit();
}

// Contact Inquiries
if ($path === '/contact' && $method === 'POST') {
    $name = trim($input['name'] ?? '');
    $email = trim($input['email'] ?? '');
    $subject = trim($input['subject'] ?? '');
    $message = trim($input['message'] ?? '');

    if (!$name || !$email || !$subject || !$message) {
        http_response_code(400);
        echo json_encode(["error" => "Name, email, subject, and message are required"]);
        exit();
    }

    $id = 'cnt-' . round(microtime(true) * 1000);
    $phone = $input['phone'] ?? '';

    $ins = $pdo->prepare("INSERT INTO contact_inquiries (id, name, email, phone, subject, message, submitted_at, responded) VALUES (?, ?, ?, ?, ?, ?, NOW(), 0)");
    $ins->execute([$id, $name, $email, $phone, $subject, $message]);

    $stmt = $pdo->prepare("SELECT * FROM contact_inquiries WHERE id = ?");
    $stmt->execute([$id]);
    http_response_code(201);
    echo json_encode([
        "message" => "Your message has been sent successfully. We will get back to you shortly.",
        "contact" => formatContact($stmt->fetch())
    ]);
    exit();
}

if ($path === '/inquiries/contacts' && $method === 'GET') {
    requireAuth($pdo, $jwt_secret);
    $stmt = $pdo->query("SELECT * FROM contact_inquiries ORDER BY submitted_at DESC");
    echo json_encode(array_map('formatContact', $stmt->fetchAll()));
    exit();
}

if (preg_match('#^/inquiries/contacts/([^/]+)$#', $path, $matches) && $method === 'DELETE') {
    requireAuth($pdo, $jwt_secret);
    $del = $pdo->prepare("DELETE FROM contact_inquiries WHERE id = ?");
    $del->execute([$matches[1]]);
    echo json_encode(["message" => "Contact inquiry deleted successfully"]);
    exit();
}

// Donations & Pledges
if ($path === '/donate' && $method === 'POST') {
    $donorName = trim($input['donorName'] ?? '');
    $donorEmail = trim($input['donorEmail'] ?? '');
    $type = trim($input['type'] ?? '');

    if (!$donorName || !$donorEmail || !$type) {
        http_response_code(400);
        echo json_encode(["error" => "Donor name, email, and support type are required"]);
        exit();
    }

    $id = 'don-' . round(microtime(true) * 1000);
    $amount = isset($input['amount']) && is_numeric($input['amount']) ? (float)$input['amount'] : null;
    $description = $input['description'] ?? '';

    $ins = $pdo->prepare("INSERT INTO donations (id, donor_name, donor_email, amount, type, description, status, created_at) VALUES (?, ?, ?, ?, ?, ?, 'PENDING', NOW())");
    $ins->execute([$id, $donorName, $donorEmail, $amount, $type, $description]);

    $stmt = $pdo->prepare("SELECT * FROM donations WHERE id = ?");
    $stmt->execute([$id]);
    http_response_code(201);
    echo json_encode([
        "message" => "Thank you for supporting Iyalvanam. Your support pledge has been recorded. Our team will coordinate next steps with you.",
        "donation" => formatDonation($stmt->fetch())
    ]);
    exit();
}

if ($path === '/donations' && $method === 'GET') {
    requireAuth($pdo, $jwt_secret);
    $stmt = $pdo->query("SELECT * FROM donations ORDER BY created_at DESC");
    echo json_encode(array_map('formatDonation', $stmt->fetchAll()));
    exit();
}

if (preg_match('#^/donations/([^/]+)/status$#', $path, $matches) && $method === 'PUT') {
    requireAuth($pdo, $jwt_secret);
    $id = $matches[1];
    $status = $input['status'] ?? null;
    if ($status && in_array($status, ['PENDING', 'RECEIVED'])) {
        $up = $pdo->prepare("UPDATE donations SET status = ? WHERE id = ?");
        $up->execute([$status, $id]);
    }
    $stmt = $pdo->prepare("SELECT * FROM donations WHERE id = ?");
    $stmt->execute([$id]);
    $row = $stmt->fetch();
    if (!$row) {
        http_response_code(404);
        echo json_encode(["error" => "Donation record not found"]);
        exit();
    }
    echo json_encode(formatDonation($row));
    exit();
}

if (preg_match('#^/donations/([^/]+)$#', $path, $matches) && $method === 'DELETE') {
    requireAuth($pdo, $jwt_secret);
    $del = $pdo->prepare("DELETE FROM donations WHERE id = ?");
    $del->execute([$matches[1]]);
    echo json_encode(["message" => "Donation record deleted successfully"]);
    exit();
}

// Dashboard Overview Stats
if ($path === '/stats' && $method === 'GET') {
    requireAuth($pdo, $jwt_secret);

    $totalBlogPosts = (int)$pdo->query("SELECT COUNT(*) FROM blog_posts")->fetchColumn();
    $publishedPosts = (int)$pdo->query("SELECT COUNT(*) FROM blog_posts WHERE published = 1")->fetchColumn();
    $pendingMemberInquiries = (int)$pdo->query("SELECT COUNT(*) FROM member_inquiries WHERE status = 'PENDING'")->fetchColumn();
    $totalMemberInquiries = (int)$pdo->query("SELECT COUNT(*) FROM member_inquiries")->fetchColumn();
    $contactInquiries = (int)$pdo->query("SELECT COUNT(*) FROM contact_inquiries")->fetchColumn();
    $donationRecords = (int)$pdo->query("SELECT COUNT(*) FROM donations")->fetchColumn();
    $totalPledgedAmount = (float)$pdo->query("SELECT COALESCE(SUM(amount), 0) FROM donations")->fetchColumn();
    $receivedDonationsCount = (int)$pdo->query("SELECT COUNT(*) FROM donations WHERE status = 'RECEIVED'")->fetchColumn();
    $totalLeadershipProfiles = (int)$pdo->query("SELECT COUNT(*) FROM leadership_profiles")->fetchColumn();

    echo json_encode([
        "totalBlogPosts" => $totalBlogPosts,
        "publishedPosts" => $publishedPosts,
        "pendingMemberInquiries" => $pendingMemberInquiries,
        "totalMemberInquiries" => $totalMemberInquiries,
        "contactInquiries" => $contactInquiries,
        "donationRecords" => $donationRecords,
        "totalPledgedAmount" => $totalPledgedAmount,
        "receivedDonationsCount" => $receivedDonationsCount,
        "totalLeadershipProfiles" => $totalLeadershipProfiles
    ]);
    exit();
}

// Fallback 404
http_response_code(404);
echo json_encode(["error" => "Endpoint not found: " . $path]);
