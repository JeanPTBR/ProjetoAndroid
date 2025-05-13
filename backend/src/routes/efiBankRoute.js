import { Router } from 'express';
const router = Router();
import { pixCreateImmediateCharge, pixGenerateQRCode } from '../config/efibank-config.js';

router.post('/', async (req, res) => {
  const { valor, nome, email } = req.body;

  const body = {
    calendario: { expiracao: 180 },
    devedor: {
      nome: nome || 'Cliente App',
      cpf: process.env.EFI_PIX_KEY,
    },
    valor: { original: Number(valor).toFixed(2) },
    chave: process.env.EFI_PIX_KEY,
    solicitacaoPagador: 'Efetuar pagamento',
    infoAdicionais: [
      { nome: 'Nome', valor: nome },
      { nome: 'Email', valor: email },
    ],
  };

  try {
    const charge = await pixCreateImmediateCharge({}, body);
    const locId = charge.loc.id;
    const qrCode = await pixGenerateQRCode({ id: locId });

    res.json({
      brcode: qrCode.qrcode,
      image: qrCode.imagemQrcode,
    });

  } catch (err) {
    console.error('Erro ao gerar cobrança:', err);
    res.status(500).json({ error: 'Erro ao gerar cobrança Pix' });
  }
});

export default router;
