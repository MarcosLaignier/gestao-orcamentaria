import {Component, Injector, ViewChild} from "@angular/core";
import {TipoReceita} from "../../../shared/model/tipo.receita";
import {TipoReceitaService} from "../../../shared/services/tipo.receita.service";
import {AbstractCrud} from "../../../shared/crud/abstract.crud";
import {DxFormComponent} from "devextreme-angular";
import {ModeEnum} from "../../../shared/enum/mode.enum";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {SituacaoAtivoInativoEnum} from "../../../shared/enum/situacao.ativo.inativo.enum";

@Component({
  selector: 'tipo-receita',
  templateUrl: './tipo.receita.crud.component.html',
  styleUrls: ['./tipo.receita.crud.component.scss']
})
export class TipoReceitaCrudComponent extends AbstractCrud<TipoReceita,any>  {

  @ViewChild("mainForm",{static:false}) mainForm: DxFormComponent

  Mode:ModeEnum = ModeEnum.List



  tipoReceita:TipoReceita;
  protected readonly ModeEnum = ModeEnum;
  situacaoAtivoInativo:string[] = Object.values(SituacaoAtivoInativoEnum);

  constructor(private injector:Injector,
              private mainService:TipoReceitaService,
              private router: Router) {
    super(injector,"/cadastro-receita");

  }


  protected override doOnInit() {
    if(this.model == null){
      this.model = new TipoReceita()
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
    return super.beforeDoSave();
  }

  override getMainService(): any {
    return this.mainService;
  }
}
