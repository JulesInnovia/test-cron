const cron = {
  cron1(req, res) {
    console.log("Je suis le Cron N1");
    res.status(200).json({ success: true, msg: "Cron job executed" });
  },

  cron2(req, res) {
    console.log("Je suis le Cron N2");
    res.status(200).json({ success: true, msg: "Cron job executed" });
  },
};

module.exports = cron;
