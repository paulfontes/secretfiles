import { AppState } from "../AppState.js"
import { caseFilesService } from "../services/CaseService.js"
import { getFormData } from "../utils/FormHandler.js"


export class CaseFilesController {
    constructor(){
        console.log('on case')
        AppState.on('caseFiles', this.drawCaseFilesList)

    }
// 2nd phase after making area in indexhtml for this to go into
    drawCaseFilesList(){
        const caseFileListElement =  document.getElementById('case-file-list')
        AppState.caseFiles.forEach((caseFile) => {
            caseFileListElement.innerHTML += caseFile.listCardTemplate
        })
    }

    createCaseFile(){
        console.log('plus det');
        event.preventDefault()// prevents default action of refreshing for forms
        let form = event.target 
        // let caseFileData = {
        //     agency: form.agency.value,
        //     reportedDate: form.reportedDate.value
        // }
        let caseFileData = getFormData(form)
        console.log('data', caseFileData);
        caseFilesService.createCaseFile(caseFileData)
        // @ts-ignore
        form.reset()
        
        
    }
}