import { generateId } from "../utils/GenerateId.js"

export class CaseFile {
    constructor(data) {
        this.id = generateId()
        this.agency = data.agency
        this.body = data.body
        this.reportedDate = data.reportedDate
        this.redactedDate = data.redactedDate
        

    }


}