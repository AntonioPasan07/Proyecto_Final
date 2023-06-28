
DROP TABLE IF EXISTS Usuarios CASCADE;
DROP TABLE IF EXISTS Eventos CASCADE;
DROP TABLE IF EXISTS Invitaciones CASCADE;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS Usuarios (
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
);