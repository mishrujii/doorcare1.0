import jwt from 'jsonwebtoken'

export const adminLogin = async (req, res) => {
  const { username, password } = req.body;
  if (username === process.env.ADMIN_USERNAME) {
    if (password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(
        {
          userId: process.env.ADMIN_ID,
          role: "admin",
        },
        process.env.JWT_SECRET,
      );
      res.cookie("token", token);
      res.status(200).json({
        message: "Admin Registration Successful",
      });
    } else
      res.status(401).json({
        message: "incorrect password",
      });
  } else
    res.status(404).json({
      message: "user doesn't exist",
    });
};
