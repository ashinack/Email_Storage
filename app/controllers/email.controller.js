const db = require("../dbsetup/models/index");

const addEmail = async (req, res) => {
  const { email } = req.body;
  if (email == null) {
    return res.status(400).json({ error: " cannot be null" });
  }
  try {
    let data = await db.Email.create({
      email: email,
    });
    console.log(data.length, "data");
    if (data.length != 0) {
      return res
        .status(200)
        .json({ message: "Email created successfully", data });
    } else {
      // Handle login failure
      return res.status(401).json({ message: "Failed in creating email" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getEmailList = async (req, res) => {
  try {
    let data = await db.Email.findAll({
      raw: true,
    });
    console.log(data.length, "data");
    if (data.length != 0) {
      return res
        .status(200)
        .json({ message: "Email data loaded successfully", data });
    } else {
      // Handle login failure
      return res.status(401).json({ message: "Failed in getting emails" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { addEmail, getEmailList };
