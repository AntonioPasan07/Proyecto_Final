const {sql} = require('slonik')

const usersEvent = (user) => sql.unsafe`
SELECT u.username, e.evento, e.fecha_evento, e.hora, e.direccion, e.descripcion
FROM Usuarios u
JOIN Eventos e ON u.ID = e.ID_usuario
WHERE u.username = ${user.username}`

module.exports ={
    usersEvent,
}

/*CREATE TABLE IF NOT EXISTS Usuarios (
    ID uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL,
    fecha DATE DEFAULT NOW(),
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Eventos (
    ID uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    evento TEXT NOT NULL,
    fecha_evento DATE DEFAULT NOW(),
    hora TIME NOT NULL,
    Telefono TEXT NOT NULL,
    Direccion TEXT NOT NULL,
    Descripcion TEXT,
    secreto_password TEXT,
    ID_usuario uuid REFERENCES Usuarios(ID) 
    ON UPDATE CASCADE
     ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Invitaciones (
    ID uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    confirmacion TEXT,
    pago_Bizum DECIMAL,
    estado_Bizum TEXT,
    evento_ID uuid REFERENCES Eventos(ID)
     ON UPDATE CASCADE
     ON DELETE CASCADE,
    usuario_ID uuid REFERENCES Usuarios(ID) 
    ON UPDATE CASCADE 
    ON DELETE CASCADE
); */