import { iNewsService } from "../contracts/iNewsService";
import {Result} from "../infra/result";
import { NewsRepository } from "../repository/newsRepository";
import { News } from "../models/news";

export class NewsService implements iNewsService{
    async get(_id:string):Promise<News>{
        let result = await NewsRepository.findById(_id);
        return result;
    }
    async getAll(page:number, qtd:number):Promise<Result<News>>{
        let result = new Result<News>();
        result.Page = page;
        result.Qtd = qtd;
        result.Total = await NewsRepository.length;
        result.Data = await NewsRepository.find({}).skip((page*qtd)-qtd).limit(qtd);
        return result;
    }
}