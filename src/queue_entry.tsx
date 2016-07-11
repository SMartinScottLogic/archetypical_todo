'use strict'

import React = __React

interface QueueEntryProp {
  todo: {
    isDone: boolean,
    text: string
  }
}

function rawMarkup(text: string) {
  return { __html: (text || '').toString()}
}
export function QueueEntry(props: QueueEntryProp) {
  const { todo } = props

  const strike = {
    textDecoration: 'line-through'
  }
  const plain = {
  }

  return <span style={todo.isDone ? strike : plain}><span dangerouslySetInnerHTML={rawMarkup(todo.text)}></span></span>
}