module.exports={
    400: {
        statusCode: 400,
        error: new Error ('all fields are mandatory'),
    },
    wrond_data: {
        statusCode:400,
        error: new Error ('username or password incorrects'),
    },
    401:{
        statusCode: 401,
        error: new Error ('unauthorized'),
    },
    cors: {
        statusCode: 401,
        error: new Error('unauthorized by CORS error'),
    },

    404:{
        statusCode: 404,
        error: new Error('path not found')
    },

    500: {
        statusCode: 500,
        error: new Error ('something went wrong!'),
    },
}