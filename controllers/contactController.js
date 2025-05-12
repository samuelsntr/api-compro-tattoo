const db = require("../models");
const ContactInfo = db.ContactInfo;

exports.getInfo = async (req, res) => {
  try {
    const info = await ContactInfo.findOne();
    if (!info) {
      return res.status(404).json({ message: "Contact info not found" });
    }
    res.json(info);
  } catch (error) {
    console.error("Error fetching contact info:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateInfo = async (req, res) => {
  const { address, phone, email, mapEmbedUrl, instagram, facebook, tiktok } = req.body;

  if (!address || !phone || !email) {
    return res.status(400).json({ message: "address, phone, and email are required." });
  }

  try {
    const [contactInfo, created] = await ContactInfo.findOrCreate({ where: { id: 1 } });

    await contactInfo.update({
      address,
      phone,
      email,
      mapEmbedUrl,
      instagram,
      facebook,
      tiktok,
    });

    res.json({
      message: created ? "Contact info created" : "Contact info updated",
      data: contactInfo,
    });
  } catch (error) {
    console.error("Error updating contact info:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
