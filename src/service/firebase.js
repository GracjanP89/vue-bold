import {initializeApp} from 'firebase'
import config from '../../config/firebase'

const app = initializeApp(config)

export const db = app.database()
