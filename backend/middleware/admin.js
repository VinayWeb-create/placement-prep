module.exports = (req, res, next) => {
  // auth middleware must run before this
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
