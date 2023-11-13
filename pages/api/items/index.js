// pages/api/items/index.js

import dbConnect from '../../../lib/mongodb';
import Item from '../../../models/Item';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      // Manuel veri
      const manualData = {
        name: 'Örnek Ürün',
        description: 'Bu bir örnek ürün açıklamasıdır.',
        price: 9.99,
        // Diğer gerekli alanlar...
      };

      // Yeni ürünü oluştur
      const product = new Item(manualData);
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
    res.status(405).json({ success: false, error: 'Hata' });
  }
}

