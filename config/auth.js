module.exports = {
  secret: process.env.AUTH_SECRET || "Prueba",
  expires: process.env.AUTH_EXPIRES || "2h",
  rounds: process.env.AUTH_ROUNDS || 10,
};
