const { Diagramm } = require("../models/models");
const ApiError = require("../error/ApiError");

class DiagrammController {
  async postDiagramm(req, res, next) {
    //добавить диаграмму
    try {
      const { model } = req.body;

      const diagramm = await Diagramm.create({ model });
      return res.json(diagramm);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    //показать все диаграммы
    try {
      const models = await Diagramm.findAll();
      return res.json(models);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getDiagramm(req, res) {
    //открыть одну диаграмму
    const { id } = req.params;
    try {
      const diagramm = await Diagramm.findOne({
        where: { id },
        // include: [{ model: Diagramm, as: "diagramm" }],
        // вот эта строчка пока лишняя, если ты ищешь по id
        // она вроде как нужна будет при поиске по пользователю
        // когда все упало запускаq с помощью ctrl+shift+B или npm run debug
      });
      return res.json(diagramm);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async deleteDiagramm(req, res) {
    //удалить диаграмму
    const { id } = req.params;
    try {
      const diagramm = await Diagramm.destroy({ where: { id } });
      return res.json(diagramm);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new DiagrammController();
