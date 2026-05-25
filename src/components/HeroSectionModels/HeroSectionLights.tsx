const HeroSectionLights = () => {
  return (
    <>
      <hemisphereLight args={["#1a3a4a", "#0a1a20", 2]} />
      <ambientLight intensity={0.8} color="#1a2d3a" />

      {/* Key light */}
      <spotLight
        position={[0, 8, 10]}
        angle={0.5}
        intensity={300}
        penumbra={0.5}
        color="#d8f0ff"
        castShadow
      />

      {/* ✅ Wall wash light — hits the back wall so it glows visibly */}
      <spotLight
        position={[0, 6, -2]}
        angle={0.8}
        intensity={120}
        penumbra={1}
        color="#1a6080"
        target-position={[0, 0, -7]}
      />

      {/* ✅ Floor wash — creates contrast between floor and wall */}
      <spotLight
        position={[2, 2, 4]}
        angle={0.6}
        intensity={80}
        penumbra={1}
        color="#0d3040"
      />

      {/* Left blue fill */}
      <spotLight
        position={[-5, 3, 6]}
        angle={0.6}
        intensity={200}
        penumbra={1}
        color="#4a90d9"
      />

      {/* Right fill */}
      <spotLight
        position={[5, 3, 6]}
        angle={0.6}
        intensity={160}
        penumbra={1}
        color="#7ac8d8"
      />

      {/* Under fill */}
      <pointLight
        position={[0, 0, 8]}
        intensity={100}
        color="#4a8aaa"
        distance={15}
        decay={1.5}
      />

      {/* Screen glow */}
      <pointLight
        position={[3, 2, 3]}
        intensity={25}
        color="#2dd4bf"
        distance={8}
        decay={2}
      />
    </>
  );
};

export default HeroSectionLights;