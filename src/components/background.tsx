'use client'

import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Earth } from './ui/earth'

export function Background() {
  return (
    <div className="absolute -z-50 h-full w-full overflow-hidden blur-[1px] transition-all">
      <Canvas>
        <Stars radius={300} depth={60} count={10000} factor={7} saturation={0} fade />

        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  )
}
