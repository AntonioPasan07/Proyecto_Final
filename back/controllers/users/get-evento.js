const { mostrarEvento } = require("../../models/user");
const error = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { user } = res.locals;
  console.log(user);
  const result = await mostrarEvento(await db)(user);
  console.log(result);
  if (!result.ok) return next(error[400]);

  res.status(200).json({
    success: true,
    data: {
      data: result.response,
      username: user.username,
    },
  });
};
