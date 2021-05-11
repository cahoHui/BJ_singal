import React, { useState, useEffect } from 'react'
import styles from './homePage.scss'

function Example() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `you click ${count} times`
  })
  return (
    <div className={styles.exampleBox}>
      <p>you click {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  )
}

export default Example
