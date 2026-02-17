export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
      return res.status(200).json({ message: "เข้าสู่ระบบสำเร็จ" });
    } else {
      return res.status(401).json({ message: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" });
    }
  }

  res.status(405).json({ message: "Method not allowed" });
}
