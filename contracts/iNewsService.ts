import {Result} from "../infra/result"

export interface iNewsService{
    get(id:string);
    getAll(page:number, qtd:number): Promise<Result>;
}