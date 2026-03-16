import * as SQLite from "expo-sqlite";
import type { Receipt } from "../models/Receipt";

const db = SQLite.openDatabaseSync("kvitteringslomma.db");

export async function initDatabase() {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS receipts (
      id TEXT PRIMARY KEY NOT NULL,
      image_path TEXT NOT NULL,
      issuer TEXT,
      date TEXT,
      amount TEXT,
      note TEXT,
      created_at TEXT NOT NULL
    );
  `);
}

export async function saveReceipt(receipt: Receipt) {
  await db.runAsync(
    `
    INSERT INTO receipts (
      id,
      image_path,
      issuer,
      date,
      amount,
      note,
      created_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?);
    `,
    [
      receipt.id,
      receipt.image_path,
      receipt.issuer,
      receipt.date,
      receipt.amount,
      receipt.note,
      receipt.created_at,
    ]
  );
}

export async function getReceipts(): Promise<Receipt[]> {
  const rows = await db.getAllAsync<Receipt>(
    `
    SELECT *
    FROM receipts
    ORDER BY created_at DESC;
    `
  );

  return rows;
}

export async function getReceiptById(id: string): Promise<Receipt | null> {
  const row = await db.getFirstAsync<Receipt>(
    `
    SELECT *
    FROM receipts
    WHERE id = ?;
    `,
    [id]
  );

  return row ?? null;
}
