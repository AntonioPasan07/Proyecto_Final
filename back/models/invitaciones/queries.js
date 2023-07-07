const {sql} = require('slonik')



const insertInvitaciones = (confirmacion, pagoBizum, estadoBizum, eventToken, email) => sql.unsafe`
INSERT INTO invitaciones (confirmacion, pago_bizum, estado_bizum, evento_id, usuario_id)
VALUES (${confirmacion},${pagoBizum},${estadoBizum},
  (SELECT id FROM eventos WHERE secreto_password = ${eventToken}),
  (SELECT id FROM usuarios WHERE email LIKE ${email}))
`



const selectInvitaciones = (eventToken)=> sql.unsafe`SELECT u.username, i.pago_bizum, e.evento, e.fecha_evento
FROM eventos AS e
INNER JOIN invitaciones AS i
ON e.id = i.evento_id
INNER JOIN usuarios AS u
ON u.id = i.usuario_id
WHERE secreto_password LIKE ${eventToken};`

 /*const selectInvitaciones = (id) => sql.unsafe`select u.username
from usuarios u
inner join invitaciones i on u.id = i.usuario_id
inner join eventos e on i.evento_id = e.id
Where e.secreto_password = ${id}`*/


module.exports = {
    insertInvitaciones,
    selectInvitaciones,
}

