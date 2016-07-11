'use strict'

import { List, Map } from 'immutable'
import {Action} from './actions'

const init: List<Map<{}, {}>> = List([])

export function Reducer(todos = init, action: Action): any {
    switch (action.type) {
        default:
            return todos
    }
}