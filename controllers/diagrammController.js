const {Diagramm} = require("../models/models")
const ApiError = require('../error/ApiError')


class DiagrammController{
    async postDiagramm(req,res){//добавить диаграмму
        const {model} = req.body
        const diagramm = await Diagramm.create({model})
        return res.json(diagramm)

    }
    async getAll(req,res){//показать все диаграммы

    }
    async getDiagramm(req,res){//открыть одну диаграмму

    }
    async deleteDiagramm(req,res){//удалить диаграмму

}
}

module.exports = new DiagrammController()