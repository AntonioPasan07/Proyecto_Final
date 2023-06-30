

module.exports = () => async (req, res, next)=> {
    const {username} = res.locals
console.log(username)
    res.status(200).json({
        success: true,
        data: {
            username,
        }
    })
 
}