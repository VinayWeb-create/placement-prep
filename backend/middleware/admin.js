module.exports = (req, res, next) => {
  // req.user is already set by auth middleware
  // Example decoded token: { id, email, role }

  // TEMP LOGIC (works now, upgrade later)
  if (
    req.user?.role === "admin" ||
    req.user?.email === "admin@gmail.com"
  ) {
    return next();
  }

  return res.status(403).json({
    message: "Admin access required",
  });
};
