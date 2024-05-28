const Router = require('express');
const DiagrammController = require('../controllers/diagrammController');

const router = new Router();

router.post('/', DiagrammController.postDiagramm )
router.get('/', DiagrammController.getAll)
router.get('/:id', DiagrammController.getDiagramm)
router.delete('/',DiagrammController.deleteDiagramm)
module.exports = router