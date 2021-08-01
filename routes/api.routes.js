const { Router } = require('express');
const { getArticulos, postArticulos, putArticulos, deleteArticulos } = require('../controllers/api.controllers.js');
const { validatNombre } = require('../middlewares/middlewares.js');
const router = Router();

router.get('/',
    getArticulos
);
router.post('/',
    [validatNombre], //middlewares
    postArticulos
);
router.put('/:id',
    [validatNombre],//middlewares
    putArticulos
);
router.delete('/:id',
    deleteArticulos
);
module.exports = router;