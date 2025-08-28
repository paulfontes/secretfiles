import { AppState } from "../AppState.js"
import { caseFilesService } from "../services/CaseService.js"
import { getFormData } from "../utils/FormHandler.js"


export class CaseFilesController {
    constructor(){
        console.log('on case')
        this.drawCaseFilesList()
        this.drawActiveCaseFile()
        AppState.on('caseFiles', this.drawCaseFilesList)
        AppState.on('active-case-file', this.drawActiveCaseFile)
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
        
        selectActiveCaseFile(caseFileId) {
            console.log('clicked on Case');
            caseFilesService.selectActiveCaseFile(caseFileId)
            let selectedCaseFile = AppState.caseFiles.find((caseFile) =>
                caseFile.id == caseFileId)
            console.log(selectedCaseFile);
            AppState.activeCaseFile = selectedCaseFile
            
            
        }

        drawActiveCaseFile(){
            const activeCaseFileElement = document.getElementById('active-case-file')
            const activeCaseFile = AppState.activeCaseFile
            if (activeCaseFile != null){
                activeCaseFileElement.innerHTML = activeCaseFile.activeCaseFileTemplate
            } else {
    
                activeCaseFileElement.innerHTML = `
                <div class="card">
                    <h2>Please Select</h2>
                </div>
                `
                }
            }

        saveActiveCaseFile(){
            console.log('save file');
            event.preventDefault()
            let form = event.target
            let formData = getFormData(form)
            
        }

       
    }