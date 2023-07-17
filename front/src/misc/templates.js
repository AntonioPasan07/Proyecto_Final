

export const login = {

    email: {
        validation: {
            required: true,
        },
    },
    username: {
        validation: {
            required: true,
        },
    },
    password: {
        validation: {
            required: true,
            minLength: 4
        },
    },
    evento: {
        validation: {
            required:true,

        }
    },
    fecha: {
        validation: {
            required: true,
        }

    },
    hora: {
        validation: {
            required: true,
        }

    },
    telefono : {
        validation: {
            required: true,
        }

    },
    direccion: {
        validation: {
            required: true,
        }

    },
    descripcion : {
        validation: {
            required: true,
        }

    },
    confirmacion : {
        validation: {
            required: true,
        }

    },
    pagoBizum : {
        validation: {
            required: true,
        }

    },
    estadoBizum : {
        validation: {
            required: true,
        }

    },
    eventToken : {
        validation: {
            required: true,
        }

    },
   
    errors: {
        required: 'This field is mandatory',
        minLength: '4 length at least is required',
    }
};