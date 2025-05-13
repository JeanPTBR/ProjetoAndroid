import Efi from 'sdk-node-apis-efi';
import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  client_id: process.env.EFI_CLIENT_ID,
  client_secret: process.env.EFI_CLIENT_SECRET,
  certificate: path.resolve(__dirname, './key_prod.p12'),  // mudar certificado para homologação ou produção
  sandbox: false,
  // PRODUÇÃO = false
  // HOMOLOGAÇÃO = true
};

const efi = new Efi(options);

export const pixCreateImmediateCharge = (...args) => efi.pixCreateImmediateCharge(...args);
export const pixGenerateQRCode = (...args) => efi.pixGenerateQRCode(...args);
