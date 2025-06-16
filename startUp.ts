import express, {Application, Request, Response} from "express";
import VideosController from "./controller/videosController";
import GaleriaController from "./controller/galeriaController";
import database from "./infra/db";
import NewsController from "./controller/newsController";

class StartUp{

    public app: Application;
    private _db: database = new database();

    constructor(){
        this.app = express();
        this._db.createConnection();
        this.routes();
    }
    routes(){
        this.app.route("/").get((req, res)=>{
            res.send({versao:"0.0.2"});
        });
        //news
        this.app.route("/api/v1/news/:page/:qtd").get((req:Request,res:Response)=>{
            return NewsController.get(req, res);
        })
        this.app.route("/api/v1/news/:id").get((req:Request, res:Response)=>{
            return NewsController.getById(req, res);
        });
        //videos
        this.app.route("/api/v1/videos/:page/:qtd").get((req:Request,res:Response)=>{
            return VideosController.get(req,res);
        })
        this.app.route("/api/v1/videos/:id").get((req:Request, res:Response)=>{
            return VideosController.getById(req, res);
        })
        //galeria
        this.app.route("/api/v1/galeria/:page/:qtd").get((req:Request,res:Response)=>{
            return GaleriaController.get(req,res);
        })
        this.app.route("/api/v1/galeria/:id").get((req:Request, res:Response)=>{
            return GaleriaController.getById(req, res);
        })
    }
}

export default new StartUp();