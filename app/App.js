import { CaseFilesController } from './controllers/CaseFileController.js';
import { ExampleController } from './controllers/ExampleController.js';

class App {

 caseFilesController = new CaseFilesController()

}

window['app'] = new App()


