import { AppState } from "../AppState.js"
import { CaseFile } from "../models/SecretFiles.js";
import { loadState, saveState } from "../utils/Store.js";

class CaseFilesService {

    /** @param caseFileData  */
    createCaseFile(caseFileData){
        console.log('case data');
        
        let caseFile = new CaseFile(caseFileData)
        console.log('data transformed');
        
        AppState.caseFiles.push(caseFileData)
        this.saveCaseFileToLocal()
    }

    selectActiveCaseFile(caseFileId){
        console.log('service');
        
    }

     saveTheActiveCaseFile(updatedData){
            const activeCaseFile = AppState.activeCaseFile
            console.log('active case file');
            activeCaseFile.body = updatedData.body
            this.saveCaseFileToLocal()
        }

    saveCaseFileToLocal(){
        let caseFiles = AppState.caseFiles
        saveState('case-files', caseFiles)
    }

    loadCaseFileFromLocal(){
        let caseFiles = loadState('case-files', [CaseFile])
        AppState.caseFiles = caseFiles
    }

}
export const caseFilesService = new CaseFilesService()