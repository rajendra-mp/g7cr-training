//1. static typing
//2. compile type checking

import { add, call, chooseAppDb, chooseDb } from "./operations";
import { DBType } from "./types";

call(add, 10, 20)
chooseDb("mongodb")
chooseAppDb(DBType.mongodb)
console.log('done')
console.log('trying...')