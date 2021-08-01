const validatNombre = (req,res,next) => {
    const {nombre} = req.body;
    if (!nombre) {
        return res.status(404).send(' El nombre es requierido')
    } else {
        next();
    }
}
module.exports = {
    validatNombre
}