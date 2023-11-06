import {AbstractCrudService} from "./abstract.crud.service";
import {TipoReceita} from "../model/tipo.receita";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {TipoDespesa} from "../model/tipo.despesa";

@Injectable()
export class TipoDespesaService extends AbstractCrudService<TipoDespesa, any>{

  constructor(http: HttpClient) {
    super(http, "tipoDespesa");
  }
}
