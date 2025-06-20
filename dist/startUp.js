"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const videosController_1 = __importDefault(require("./controller/videosController"));
const galeriaController_1 = __importDefault(require("./controller/galeriaController"));
const db_1 = __importDefault(require("./infra/db"));
const newsController_1 = __importDefault(require("./controller/newsController"));
class StartUp {
    constructor() {
        this._db = new db_1.default();
        this.app = (0, express_1.default)();
        this._db.createConnection();
        this.routes();
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ versao: "0.0.2" });
        });
        //news
        this.app.route("/api/v1/news/:page/:qtd").get((req, res) => {
            return newsController_1.default.get(req, res);
        });
        this.app.route("/api/v1/news/:id").get((req, res) => {
            return newsController_1.default.getById(req, res);
        });
        //videos
        this.app.route("/api/v1/videos/:page/:qtd").get((req, res) => {
            return videosController_1.default.get(req, res);
        });
        this.app.route("/api/v1/videos/:id").get((req, res) => {
            return videosController_1.default.getById(req, res);
        });
        //galeria
        this.app.route("/api/v1/galeria/:page/:qtd").get((req, res) => {
            return galeriaController_1.default.get(req, res);
        });
        this.app.route("/api/v1/galeria/:id").get((req, res) => {
            return galeriaController_1.default.getById(req, res);
        });
    }
}
exports.default = new StartUp();
