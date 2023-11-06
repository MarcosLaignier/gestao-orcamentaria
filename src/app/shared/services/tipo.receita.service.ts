import {AbstractCrudService} from "./abstract.crud.service";
import {TipoReceita} from "../model/tipo.receita";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class TipoReceitaService extends AbstractCrudService<TipoReceita, any>{

  constructor(http: HttpClient) {
    super(http, "tipoReceita");
  }
}
