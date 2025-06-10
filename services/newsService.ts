import { iNewsService } from "../contracts/iNewsService";
import {Result} from "../infra/result";
import { NewsRepository } from "../repository/newsRepository";

export class NewsService implements iNewsService{
    async get(_id:string){
        let result = await NewsRepository.findById(_id);
        return result;
    }
    async getAll(page:number, qtd:number){
        let result = new Result();
        result.Page = page;
        result.Qtd = qtd;
        result.Total = await NewsRepository.length;
        result.Data = await NewsRepository.find({}).skip((page*qtd)-qtd).limit(qtd);
        return result;
    }
}