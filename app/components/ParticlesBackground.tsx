"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
// ❌ import { loadSlim } from "@tsparticles/slim";
import { loadFull } from "tsparticles"; // ✅ load full features
import { loadImageShape } from "@tsparticles/shape-image";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine); // ✅ full bundle includes images
      await loadImageShape(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles container:", container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "#000000" },
      },
      fullScreen: {
        enable: false, // keep inside HeroSection only
      },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 20 },
        shape: { type: "circle" },
        size: { value: 3 },
        move: {
          enable: true,
          speed: 1,
          direction: "right",
          outModes: { default: "out" },
        },
        opacity: { value: 0.5 },
        color: { value: "#ffffff" },
      },
      emitters: {
        position: { x: 0, y: 50 },
        rate: { delay: 4, quantity: 1 },
        size: { width: 0, height: 100 },
        particles: {
          shape: {
            type: "images",
            options: {
              images: [
                {
                  src: "/amongus/blue.png",
                  width: 500,
                  height: 634,
                },
                {
                  src: "/amongus/red.png",
                  width: 500,
                  height: 634,
                },
                {
                  src: "/amongus/yellow.png",
                  width: 500,
                  height: 634,
                },
                {
                  src: "/amongus/green.png",
                  width: 500,
                  height: 634,
                },
              ],
            },
          },
          size: { value: 40 },
          move: {
            speed: 6,
            straight: true,
            outModes: { default: "none", right: "destroy" },
          },
          rotate: {
            value: { min: 0, max: 360 },
            animation: { enable: true, speed: 7, sync: true },
          },
          zIndex: { value: 0 },
        },
      },
    }),
    []
  );

  if (!init) return null;

  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Particles
        id="amongus"
        particlesLoaded={particlesLoaded}
        options={options}
        className="w-full h-full"
      />
    </div>
  );
}
