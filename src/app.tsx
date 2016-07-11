'use strict'

import React = __React

import { render } from 'react-dom'

import {Provider} from 'react-redux'

import {List, Map} from 'immutable'

import {store} from './store'
import { fetchPosts } from './actions'
import { QueueList as QL} from './containers'
import { QueueEntry } from './queue_entry'

const Hammer = require('react-hammerjs')

function handleTap() {
    console.log('tap', arguments)
    fetchPosts('queue')(store.dispatch)
}
function handleSwipe() {
    console.log('swipe', arguments)
}
function handlePan(event: any) {
    console.log('pan2', arguments)

    let pos = event.deltaX
    if (event.type === 'panend') {
        pos = 0
    }
    event.target.style.transform = `translate3d(${pos}px, 0, 0)`
    event.target.style.mozTransform = `translate3d(${pos}px, 0, 0)`
    event.target.style.webkitTransform = `translate3d(${pos}px, 0, 0)`
}

const QueueList = QL(QueueEntry)

render(
    <Provider store={store}>
        <div>
            <QueueList>
            <Hammer onTap={handleTap} onSwipe={handleSwipe} onPan={handlePan} onPanEnd={handlePan}>
                <span style = {{ display: 'inline-block', transition: 'all .3s', WebkitTransition: 'all .3s' } }>
                'Tap Me'
                </span>
            </Hammer>
            </QueueList>
        </div>
    </Provider>,
    document.getElementById('app')
)
