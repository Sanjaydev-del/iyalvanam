import mysql, { Pool } from 'mysql2/promise';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

dotenv.config();

export interface MySQLConfig {
  host: string;
  port: number;
  user: string;
  password?: string;
  database: string;
}

let pool: Pool | null = null;
let isConnected = false;

export function getMySQLConfig(): MySQLConfig {
  return {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'iyalvanam_db',
  };
}

export function isMySQLConnected(): boolean {
  return isConnected;
}

export function getPool(): Pool | null {
  return pool;
}

export async function initMySQL(initialData: any): Promise<boolean> {
  const config = getMySQLConfig();
  console.log(`📡 Connecting to MySQL Database on ${config.host}:${config.port} as ${config.user}...`);

  try {
    // 1. Create database if it doesn't exist
    const rootConnection = await mysql.createConnection({
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.password,
    });

    await rootConnection.query(
      `CREATE DATABASE IF NOT EXISTS \`${config.database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`
    );
    await rootConnection.end();

    // 2. Initialize connection pool
    pool = mysql.createPool({
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.password,
      database: config.database,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    // 3. Create tables if not exist
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(64) PRIMARY KEY,
        username VARCHAR(100) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        role VARCHAR(50) NOT NULL DEFAULT 'ADMIN',
        created_at DATETIME NOT NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    await pool.query(`
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
    `);

    await pool.query(`
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
    `);

    await pool.query(`
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
    `);

    await pool.query(`
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
    `);

    // 4. Seed initial data if tables are empty
    await seedInitialData(initialData);

    isConnected = true;
    console.log(` MySQL Database Connected Successfully [${config.database} on ${config.host}:${config.port}]`);
    return true;
  } catch (err: any) {
    console.error(`⚠️ MySQL Connection Warning: ${err.message}. Falling back to file-based database.`);
    isConnected = false;
    return false;
  }
}

async function seedInitialData(initialData: any) {
  if (!pool) return;

  // Seed Users
  const [users]: any = await pool.query('SELECT COUNT(*) as count FROM users');
  if (users[0].count === 0 && initialData?.users) {
    for (const u of initialData.users) {
      await pool.query(
        'INSERT INTO users (id, username, password_hash, email, role, created_at) VALUES (?, ?, ?, ?, ?, ?)',
        [u.id, u.username, u.passwordHash, u.email, u.role, new Date(u.createdAt || Date.now())]
      );
    }
  }

  // Seed Blog Posts
  const [posts]: any = await pool.query('SELECT COUNT(*) as count FROM blog_posts');
  if (posts[0].count === 0 && initialData?.blogPosts) {
    for (const p of initialData.blogPosts) {
      await pool.query(
        `INSERT INTO blog_posts (id, title, title_tamil, slug, content, excerpt, image_url, author, category, tags, read_time, published, created_at, updated_at) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          p.id,
          p.title,
          p.titleTamil || '',
          p.slug,
          p.content,
          p.excerpt,
          p.imageUrl,
          p.author,
          p.category,
          JSON.stringify(p.tags || []),
          p.readTime,
          p.published ? 1 : 0,
          new Date(p.createdAt || Date.now()),
          new Date(p.updatedAt || Date.now()),
        ]
      );
    }
  }

  // Seed Member Inquiries
  const [inquiries]: any = await pool.query('SELECT COUNT(*) as count FROM member_inquiries');
  if (inquiries[0].count === 0 && initialData?.memberInquiries) {
    for (const i of initialData.memberInquiries) {
      await pool.query(
        `INSERT INTO member_inquiries (id, name, email, phone, skills, area_of_contribution, number_of_members, preferred_interaction_method, message, status, notes, submitted_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          i.id,
          i.name,
          i.email,
          i.phone,
          i.skills || '',
          i.areaOfContribution || '',
          i.numberOfMembers || 1,
          i.preferredInteractionMethod || '',
          i.message,
          i.status || 'PENDING',
          i.notes || '',
          new Date(i.submittedAt || Date.now()),
        ]
      );
    }
  }

  // Seed Contact Inquiries
  const [contacts]: any = await pool.query('SELECT COUNT(*) as count FROM contact_inquiries');
  if (contacts[0].count === 0 && initialData?.contactInquiries) {
    for (const c of initialData.contactInquiries) {
      await pool.query(
        `INSERT INTO contact_inquiries (id, name, email, phone, subject, message, submitted_at, responded)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          c.id,
          c.name,
          c.email,
          c.phone || '',
          c.subject,
          c.message,
          new Date(c.submittedAt || Date.now()),
          c.responded ? 1 : 0,
        ]
      );
    }
  }

  // Seed Donations
  const [donations]: any = await pool.query('SELECT COUNT(*) as count FROM donations');
  if (donations[0].count === 0 && initialData?.donations) {
    for (const d of initialData.donations) {
      await pool.query(
        `INSERT INTO donations (id, donor_name, donor_email, amount, type, description, status, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          d.id,
          d.donorName,
          d.donorEmail,
          d.amount || null,
          d.type,
          d.description || '',
          d.status || 'PENDING',
          new Date(d.createdAt || Date.now()),
        ]
      );
    }
  }
}
