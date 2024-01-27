import { FC } from 'react'
import { useCounterStore } from './store'

export const Main: FC = () => {
  const { count, decrement, increment } = useCounterStore((state) => state)

  return (
    <div>
      <h1>Counter</h1>
      <p>value: {count}</p>
      <div>
        <button onClick={increment}>inc +1</button>
        <button onClick={decrement}>dec -1</button>
      </div>
    </div>
  )
}
