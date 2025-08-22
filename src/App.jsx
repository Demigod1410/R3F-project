import { useState } from 'react'
import './App.css'

import { Canvas } from '@react-three/fiber'
import Earth from '../public/Earth'
import Earth2 from '../public/Earth2'
import Jupiter from '../public/Jupiter'
import { Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas>
        <OrbitControls />
        <Suspense fallback={null}>
          <Earth2 />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  )
}

export default App
