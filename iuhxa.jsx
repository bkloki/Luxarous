import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

function JewelryModel() {
  // Temporary simple 3D object (replace with your real jewelry model later)
  return (
    <mesh rotation={[0, 0, 0]}>
      <torusKnotGeometry args={[1, 0.4, 100, 16]} />
      <meshStandardMaterial color="gold" metalness={1} roughness={0.2} />
    </mesh>
  );
}

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen bg-[#0d0d0d] overflow-hidden">
      <Canvas>
        {/* Lights for the jewelry */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        {/* Jewelry Model */}
        <JewelryModel />
        {/* OrbitControls for rotation */}
        <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={1} />
        {/* Optional: Soft HDR environment light */}
        <Environment preset="studio" />
      </Canvas>

      {/* Overlayed Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
        <h1 className="text-6xl md:text-8xl font-serif tracking-wide mb-4">LUXAROUS</h1>
        <p className="text-lg md:text-2xl font-light mb-8">Eternal Beauty. Crafted for You.</p>
        <button className="px-8 py-3 border border-white hover:bg-white hover:text-black transition duration-300 rounded-full">
          Explore Collection
        </button>
      </div>
    </div>
  );
}
