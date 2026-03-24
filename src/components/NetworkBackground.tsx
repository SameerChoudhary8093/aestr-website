'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Create a custom timer to avoid THREE.Clock deprecation
const useTimer = () => {
    const timer = useMemo(() => new THREE.Timer(), []);
    useFrame(() => {
        timer.update(0.016); // Fixed delta time to avoid Clock
    });
    return timer;
};

const NODE_COUNT = 300;
const CONNECTION_DISTANCE = 4.5;
const MOUSE_RADIUS = 6.0;

function MagneticNetwork() {
    const { viewport } = useThree();
    const groupRef = useRef<THREE.Group>(null!);
    const nodesRef = useRef<THREE.Points>(null!);
    const linesRef = useRef<THREE.LineSegments>(null!);
    const timer = useTimer();

    // Manual Mouse Ref to bypass pointer-events-none issues
    const mouseRef = useRef(new THREE.Vector2(0, 0));

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            // Convert pixels to normalized -1 to +1 range
            mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const data = useMemo(() => {
        const pos = [];
        const basePos = [];
        const vel = [];
        for (let i = 0; i < NODE_COUNT; i++) {
            const p = new THREE.Vector3(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 12
            );
            pos.push(p.clone());
            basePos.push(p.clone());
            vel.push(new THREE.Vector3(0, 0, 0));
        }
        return { pos, basePos, vel };
    }, []);

    const nodesPosition = useMemo(() => new Float32Array(NODE_COUNT * 3), []);
    const nodesColor = useMemo(() => new Float32Array(NODE_COUNT * 3), []);
    const linesPosition = useMemo(() => new Float32Array(NODE_COUNT * NODE_COUNT * 6), []);
    const linesColor = useMemo(() => new Float32Array(NODE_COUNT * NODE_COUNT * 6), []);

    useFrame(() => {
        const time = timer.getElapsed();

        // Map normalized mouse to 3D world space
        const mouseV = new THREE.Vector3(
            (mouseRef.current.x * viewport.width) / 2,
            (mouseRef.current.y * viewport.height) / 2,
            0
        );

        let lineIdx = 0;
        let colorIdx = 0;

        const baseColor = new THREE.Color("#D8F602"); // New Accent Neon
        const activeColor = new THREE.Color("#EAF0BD"); // New Foreground Text Color

        data.pos.forEach((p, i) => {
            const b = data.basePos[i];
            const v = data.vel[i];

            // 1. Target logic: Home vs Mouse Pull
            const target = b.clone();

            const distToMouse = new THREE.Vector2(p.x, p.y).distanceTo(new THREE.Vector2(mouseV.x, mouseV.y));

            if (distToMouse < MOUSE_RADIUS) {
                const power = (1 - distToMouse / MOUSE_RADIUS) * 0.8;
                target.lerp(mouseV, power);
            }

            // 2. Momentum Physics
            const force = target.sub(p).multiplyScalar(0.02);
            v.add(force);
            v.multiplyScalar(0.92); // Damping
            p.add(v);

            // 3. Constant Rotation drift
            p.x += Math.sin(time * 0.3 + i) * 0.002;
            p.y += Math.cos(time * 0.3 + i) * 0.002;

            nodesPosition[i * 3] = p.x;
            nodesPosition[i * 3 + 1] = p.y;
            nodesPosition[i * 3 + 2] = p.z;

            // Reactive Color
            const c = distToMouse < 1.0 ? activeColor : baseColor;
            nodesColor[i * 3] = c.r;
            nodesColor[i * 3 + 1] = c.g;
            nodesColor[i * 3 + 2] = c.b;
        });

        for (let i = 0; i < NODE_COUNT; i++) {
            for (let j = i + 1; j < NODE_COUNT; j++) {
                const p1 = data.pos[i];
                const p2 = data.pos[j];
                const dist = p1.distanceTo(p2);

                if (dist < CONNECTION_DISTANCE) {
                    linesPosition[lineIdx++] = p1.x;
                    linesPosition[lineIdx++] = p1.y;
                    linesPosition[lineIdx++] = p1.z;
                    linesPosition[lineIdx++] = p2.x;
                    linesPosition[lineIdx++] = p2.y;
                    linesPosition[lineIdx++] = p2.z;

                    // Line hover effect
                    const mid = p1.clone().add(p2).multiplyScalar(0.5);
                    const isHot = mid.distanceTo(mouseV) < 1.5;
                    const c = isHot ? activeColor : baseColor;

                    linesColor[colorIdx++] = c.r;
                    linesColor[colorIdx++] = c.g;
                    linesColor[colorIdx++] = c.b;
                    linesColor[colorIdx++] = c.r;
                    linesColor[colorIdx++] = c.g;
                    linesColor[colorIdx++] = c.b;
                }
            }
        }

        if (nodesRef.current && nodesRef.current.geometry.attributes.position) {
            nodesRef.current.geometry.attributes.position.needsUpdate = true;
            nodesRef.current.geometry.attributes.color.needsUpdate = true;
        }
        if (linesRef.current && linesRef.current.geometry.attributes.position) {
            linesRef.current.geometry.attributes.position.needsUpdate = true;
            linesRef.current.geometry.attributes.color.needsUpdate = true;
            linesRef.current.geometry.setDrawRange(0, lineIdx / 3);
        }

        groupRef.current.rotation.y = time * 0.05;
    });

    return (
        <group ref={groupRef}>
            <lineSegments ref={linesRef}>
                <bufferGeometry>
                    <bufferAttribute 
                        attach="attributes-position" 
                         count={linesPosition.length / 3}
                         array={linesPosition}
                         itemSize={3}
                         args={[linesPosition, 3]}
                    />
                    <bufferAttribute 
                        attach="attributes-color" 
                         count={linesColor.length / 3}
                         array={linesColor}
                         itemSize={3}
                         args={[linesColor, 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial vertexColors transparent opacity={0.15} />
            </lineSegments>

            <points ref={nodesRef}>
                <bufferGeometry>
                    <bufferAttribute 
                        attach="attributes-position" 
                         count={nodesPosition.length / 3}
                         array={nodesPosition}
                         itemSize={3}
                         args={[nodesPosition, 3]}
                    />
                    <bufferAttribute 
                        attach="attributes-color" 
                         count={nodesColor.length / 3}
                         array={nodesColor}
                         itemSize={3}
                         args={[nodesColor, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial vertexColors size={0.15} transparent opacity={0.6} sizeAttenuation={true} />
            </points>
        </group>
    );
}

const NetworkBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-[#111111] overflow-hidden">
            {/* Base layer */}
            <div className="absolute inset-0 bg-[#181818] opacity-20" />

            <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
                <MagneticNetwork />
            </Canvas>

            {/* Readability Masks */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#111111_95%)] opacity-90 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none" />
        </div>
    );
};

export default NetworkBackground;
