// pages/api/items.js
import dbConnect from '../../lib/mongodb';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      // Yeni ürünü oluştur
      const product = new Product(req.body);
      // MongoDB'ye kaydet
      const savedProduct = await product.save();
      // Başarılı yanıt gönder
      res.status(201).json(savedProduct);
    } catch (error) {
      // Hata durumunda hata yanıtı gönder
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    // POST dışındaki metodlar için 405 Method Not Allowed hatası gönder
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
