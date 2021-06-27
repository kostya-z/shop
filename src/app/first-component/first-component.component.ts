import { Component, OnInit, Inject, Optional  } from '@angular/core';
import { CategoryEnum } from './categoryEnum';
import { ConstantsServiceConst, ConstantsService} from '../core/services/constant.service';
import { ConstantModel } from '../core/models/constant.model';
import { generatedString, generatorFactory } from './../core/services/generator.factory';
import { GeneratorService } from '../core/services/generator.service';
import { LocalStorage, LocalStorageService } from './../core/services/localStorageService ';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
  providers: [GeneratorService,
    {
      provide: ConstantsService, useValue: ConstantsServiceConst
    },
    {
        provide: generatedString, useFactory: generatorFactory(10), deps: [GeneratorService]
    },
    {
      provide: LocalStorageService, useValue: LocalStorage
    }
]
})
export class FirstComponentComponent implements OnInit {

  name = 'name';
  desciption = 'description';
  price = 100;
  category: CategoryEnum = CategoryEnum.Category2;
  isAvailable = true;

  generatedId = -1;

  constructor(
    @Optional() @Inject(ConstantsService) public constantService2: ConstantModel,
    @Optional() @Inject(generatedString) private generateString: string,
    @Optional() private generatorService: GeneratorService,
    @Optional() @Inject(LocalStorageService) private localStorageService: typeof LocalStorage
    ) { }

  ngOnInit(): void {
    console.log(this.constantService2);

    console.log(this.generateString);

    this.localStorageService.setValue('keyTest', 'valueTest');
    console.log(this.localStorageService.getValue('keyTest'));
  }

  // test generator Id
  onGenerateId(): void {
    this.generatedId = this.generatorService.getNewID();
  }

}
