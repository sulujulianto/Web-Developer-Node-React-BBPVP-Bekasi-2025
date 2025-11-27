const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const r = 7;
  const t = parseFloat(req.query.tinggi);

  if (isNaN(t)) {
    return res.status(400).send('Tinggi harus berupa angka');
  }

  const luas = 2 * Math.PI * r * (r + t);
  const volume = Math.PI * r * r * t;

  res.json({
    jariJari: r,
    tinggi: t,
    luasPermukaan: parseFloat(luas.toFixed(2)),
    volume: parseFloat(volume.toFixed(2))
  });
});

module.exports = router;