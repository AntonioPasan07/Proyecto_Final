
DROP TABLE IF EXISTS Usuarios;
DROP TABLE IF EXISTS Eventos;
DROP TABLE IF EXISTS Invitaciones;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS Usuarios (
    ID uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL,
    fecha DATE DEFAULT NEW (),
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Eventos (
    ID uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    evento TEXT NOT NULL,
    fecha_evento DATE DEFAULT NEW(),
    hora TIME NOT NULL,
    Telefono TEXT NOT NULL,
    Direccion TEXT NOT NULL,
    Descripcion TEXT NOT NULL,
    secreto_password TEXT,
    ID_usuario uuid REFERENCES Usuarios(ID) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Invitaciones (
    ID uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    confirmacion TEXT,
    pago_Bizum DECIMAL,
    estado_Bizum TEXT,
    evento_ID uuid REFERENCES Eventos(ID) ON UPDATE CASCADE ON DELETE CASCADE,
    usuario_ID uuid REFERENCES Usuarios(ID) ON UPDATE CASCADE ON DELETE CASCADE
);