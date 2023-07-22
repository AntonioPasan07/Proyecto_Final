const { getUruariosInvitados } = require("../../models/invitaciones");
const error = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;

  const result = await getUruariosInvitados(await db)(id);
  console.log(result);

  if (!result.ok) return next(error[400]);

  res.status(200).json({
    success: true,
    data: {
      username: result.response,
    },
  });
};
