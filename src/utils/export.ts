import * as Sharing from "expo-sharing";
import * as Print from "expo-print";
import * as FileSystem from "expo-file-system";
import type { Receipt } from "../models/Receipt";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getMimeTypeFromPath(path: string) {
  const lower = path.toLowerCase();

  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".webp")) return "image/webp";
  return "image/jpeg";
}

async function getImageAsDataUri(imagePath: string) {
  const base64 = await FileSystem.readAsStringAsync(imagePath, {
    encoding: FileSystem.EncodingType.Base64,
  });

  const mimeType = getMimeTypeFromPath(imagePath);
  return `data:${mimeType};base64,${base64}`;
}

function buildReceiptHtml(receipt: Receipt, imageDataUri: string) {
  const issuer = escapeHtml(receipt.issuer || "Kvittering");
  const date = escapeHtml(receipt.date || "Uten dato");
  const amount = escapeHtml(receipt.amount || "Ikke angitt");
  const note = escapeHtml(receipt.note || "Ingen notat");

  return `
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
            color: #222;
            padding: 24px;
          }

          h1 {
            margin: 0 0 20px 0;
            font-size: 24px;
          }

          .meta {
            margin-bottom: 20px;
          }

          .row {
            margin-bottom: 10px;
            font-size: 15px;
          }

          .label {
            font-weight: 700;
            display: inline-block;
            min-width: 90px;
          }

          .image-wrap {
            margin-top: 20px;
            border: 1px solid #ddd;
            border-radius: 12px;
            overflow: hidden;
            padding: 12px;
          }

          img {
            width: 100%;
            height: auto;
            object-fit: contain;
          }

          .footer {
            margin-top: 24px;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>

      <body>
        <h1>Kvittering</h1>

        <div class="meta">
          <div class="row"><span class="label">Utsteder:</span> ${issuer}</div>
          <div class="row"><span class="label">Dato:</span> ${date}</div>
          <div class="row"><span class="label">Beløp:</span> ${amount}</div>
          <div class="row"><span class="label">Notat:</span> ${note}</div>
        </div>

        <div class="image-wrap">
          <img src="${imageDataUri}" />
        </div>

        <div class="footer">
          Generert av Kvitteringslomma
        </div>
      </body>
    </html>
  `;
}

export async function shareImage(imagePath: string) {
  const isAvailable = await Sharing.isAvailableAsync();

  if (!isAvailable) {
    throw new Error("Deling er ikke tilgjengelig på denne enheten.");
  }

  await Sharing.shareAsync(imagePath, {
    mimeType: getMimeTypeFromPath(imagePath),
    dialogTitle: "Del kvitteringsbilde",
    UTI: "public.image",
  });
}

export async function createReceiptPdf(receipt: Receipt) {
  const imageDataUri = await getImageAsDataUri(receipt.image_path);
  const html = buildReceiptHtml(receipt, imageDataUri);

  const result = await Print.printToFileAsync({
    html,
  });

  return result.uri;
}

export async function shareReceiptPdf(receipt: Receipt) {
  const isAvailable = await Sharing.isAvailableAsync();

  if (!isAvailable) {
    throw new Error("Deling er ikke tilgjengelig på denne enheten.");
  }

  const pdfUri = await createReceiptPdf(receipt);

  await Sharing.shareAsync(pdfUri, {
    mimeType: "application/pdf",
    dialogTitle: "Del kvittering som PDF",
    UTI: ".pdf",
  });
}
