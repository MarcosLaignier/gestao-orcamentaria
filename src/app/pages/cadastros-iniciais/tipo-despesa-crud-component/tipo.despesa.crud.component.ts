import {Component, Injector, ViewChild} from "@angular/core";
import {AbstractCrud} from "../../../shared/crud/abstract.crud";
import {DxFormComponent} from "devextreme-angular";
import {ModeEnum} from "../../../shared/enum/mode.enum";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {TipoDespesa} from "../../../shared/model/tipo.despesa";
import {SituacaoAtivoInativoEnum} from "../../../shared/enum/situacao.ativo.inativo.enum";
import {TipoDespesaService} from "../../../shared/services/tipo.despesa.service";

@Component({
  selector: 'tipo-despesa',
  templateUrl: './tipo.despesa.crud.component.html',
  styleUrls: ['./tipo.despesa.crud.component.scss']
})
export class TipoDespesaCrudComponent extends AbstractCrud<TipoDespesa,any>  {

  @ViewChild("mainForm",{static:false}) mainForm: DxFormComponent

  Mode:ModeEnum = ModeEnum.List



  tipoDespesa:TipoDespesa;
  protected readonly ModeEnum = ModeEnum;
  situacaoAtivoInativo:string[] = Object.values(SituacaoAtivoInativoEnum);

  constructor(private injector:Injector,
              private mainService:TipoDespesaService,
              private router: Router) {
    super(injector,"/cadastro-despesa");

  }


  protected override doOnInit() {
    if(this.model == null){
      this.model = new TipoDespesa()
    }
    super.doOnInit();
  }


  override doClear(){
    this.mainForm.instance.resetValues()
  }

  novaLoja() {
    // this.router.navigate(['pages', 'cadastro-receita'])
    this.Mode = ModeEnum.Edit
  }


  override beforeDoSave(): Observable<any> | null {
    console.log(this.model)
    return super.beforeDoSave();
  }

  override getMainService(): any {
    return this.mainService;
  }
}
