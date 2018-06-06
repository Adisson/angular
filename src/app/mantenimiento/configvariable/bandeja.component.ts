import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'configvariable-bandeja',
  templateUrl: './bandeja.component.html'
})
export class ConfigVariableBandejaComponent implements OnInit {
  
  mensaje: string;

  constructor(
    /*private config: BackofficeConfigService,
    private SystemParameterService: ExpedientSystemParametersRecordAdministrationService,
    private ConfirmationService: ConfirmationService,
    private ActivatedRoute: ActivatedRoute,
    private Router: Router*/
  ) { }

  ngOnInit() {
    this.mensaje = "qsasasasas";
  }

}
