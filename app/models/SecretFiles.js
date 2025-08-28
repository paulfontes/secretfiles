import { generateId } from "../utils/GenerateId.js"

export class CaseFile {
    constructor(data) {
        this.id = data.id || generateId()
        this.agency = data.agency
        this.caseNumber = this.id.slice(this.id.length - 4).toUpperCase()
        this.body = data.body || ''
        this.reportedDate = new Date(data.reportedDate)
        // Ternary is like inline 'if' statement
        this.redactedDate = new Date(data.redactedDate) 
        

    }

    get listCardTemplate(){
        return `
        <article  class="mb-2 card py-1 case-file-card"  onclick="app.caseFilesController.selectActiveCaseFile('${this.id}')" >
            <b>${this.agency}-<span class="text-success">-${this.caseNumber}</b>
            <div class="d-flex">
                <span class="text-secondary">${this.reportedDate}</span>
            </div>
        </article>
        `
    }
    get activeCaseFileTemplate(){
        return`
        <article class="card">
            <div class="card-body">
                <h2>${this.agency} - ${this.caseNumber}</h2>
                <div class="">${this.longReportDate}</div>
                <div class="">${this.redactedDate}</div>
                </div>
                
                <form name="body" onsubmit="app.caseFilesController.saveActiveCaseFile()">
                <textarea class="form-control case-file-body">${this.body}</textarea>
                <button class="btn btn-teal">Save</button>
                </form>
        </article>
        `
    }

    get shortReportedDate(){
        return this.reportedDate.toLocaleDateString()
    }

    get longReportDate(){
        return this.reportedDate.toLocaleDateString('en-US', {
            year: "2-digit",
            month: "long",
            weekday: "long",
            day: "2-digit"

        })
    }
}