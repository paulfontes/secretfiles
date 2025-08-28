import { CaseFile } from './models/SecretFiles.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  /** @type {CaseFile[]} */

  caseFiles = [
    new CaseFile({
      agency: 'NFS',
      body: 'I saw bigfoot',
      reportedDate: '2024-08-01'

    }),
    new CaseFile({
      agency: 'SPC',
      body: 'I saw Alien',
      reportedDate: '2021-08-01'

    }),
    new CaseFile({
      agency: 'USPS',
      body: 'Someone is trying to mail ',
      reportedDate: '2001-08-01'

    }),
  ]

  /** @type {CaseFile[]} */
  activeCaseFile = null

}

export const AppState = createObservableProxy(new ObservableAppState())