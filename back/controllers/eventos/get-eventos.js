const error = require("../../misc/errors");
const { eventoUsers } = require("../../models/eventos");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;
  const { email } = res.locals.user;

  const result = await eventoUsers(await db)(id);

  if (!result.ok) return next(error[400]);

  res.status(200).json({
    success: true,
    data: {
      evento: result.response,
    },
  });
};
