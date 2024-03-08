function handleCron(req, res) {
  res.status(200).json({ success: true, date: Date.now() });
}

module.exports = handleCron;
