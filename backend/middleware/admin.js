module.exports = (req, res, next) => {
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
