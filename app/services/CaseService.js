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

    selectActiveCaseFile(caseFileId){
        console.log('service');
        
    }

     saveTheActiveCaseFile(updatedData){
            const activeCaseFile = AppState.activeCaseFile
            console.log('active case file');
            activeCaseFile.body = updatedData.body
            
        }

}
export const caseFilesService = new CaseFilesService()