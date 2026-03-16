import * as FileSystem from "expo-file-system";

const receiptsDir = `${FileSystem.documentDirectory}receipts/`;

export async function ensureReceiptsDirExists() {
  const dirInfo = await FileSystem.getInfoAsync(receiptsDir);

  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(receiptsDir, { intermediates: true });
  }
}

export async function copyImageToReceiptsDir(sourceUri: string) {
  await ensureReceiptsDirExists();

  const fileName = `receipt_${Date.now()}.jpg`;
  const destinationUri = `${receiptsDir}${fileName}`;

  await FileSystem.copyAsync({
    from: sourceUri,
    to: destinationUri,
  });

  return destinationUri;
}
