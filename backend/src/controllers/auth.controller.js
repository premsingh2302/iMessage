export async function checkAuth(req, res, next) {
    const user = req.user; // This is set by the protectRoute middleware
    if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
  res.status(200).json(user);
}
