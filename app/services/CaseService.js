import { AppState } from "../AppState.js"
import { CaseFile } from "../models/SecretFiles.js";

class CaseFilesService {

    /** @param caseFileData  */
    createCaseFile(caseFileData){
        console.log('case data');
        
        let caseFile = new CaseFile(caseFileData)
        console.log('data transformed');
        
        AppState.caseFiles.push(caseFileData)

    }

}
export const caseFilesService = new CaseFilesService()