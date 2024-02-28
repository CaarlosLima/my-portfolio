/* eslint-disable react/no-unknown-property */

'use client'

import { useFrame, useLoader } from '@react-three/fiber'
import { BufferGeometry, DoubleSide, Material, Mesh, NormalBufferAttributes, Object3DEventMap, TextureLoader } from 'three'

import { useRef } from 'react'
import EarthCloudsMap from '../../assets/textures/2k_earth_clouds.jpg'
import EarthDayMap from '../../assets/textures/2k_earth_daymap.jpg'
import EarthNormalMap from '../../assets/textures/2k_earth_normal_map.jpg'
import EarthSpecularMap from '../../assets/textures/2k_earth_specular_map.jpg'

export function Earth() {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
    EarthDayMap.src,
    EarthNormalMap.src,
    EarthSpecularMap.src,
    EarthCloudsMap.src
  ])

  const earthRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>(null)

  const cloudRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>(null)

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()

    if (earthRef.current && cloudRef.current) {
      earthRef.current.rotation.y = elapsedTime / 6
      cloudRef.current.rotation.y = elapsedTime / 6
    }
  })

  return (
    <>
      <pointLight color="#f6f3ea" position={[-0.43, 0.9, 3.5]} intensity={10} />

      <group scale={[0.5, 0.5, 0.1]} position={[1.25, 0.9, 3]}>
        <mesh ref={cloudRef}>
          <sphereGeometry args={[1.005, 32, 32]} />

          <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={DoubleSide} />
        </mesh>

        <mesh ref={earthRef} rotation={[0.1, 0, 0]}>
          <sphereGeometry args={[1, 32, 32]} />

          <meshPhongMaterial specularMap={specularMap} />

          <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.9} />
        </mesh>
      </group>
    </>
  )
}
