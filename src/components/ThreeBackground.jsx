import { useContext, useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ColourContext } from "./Views";

const ThreeBackground = () => {
  const canvasRef = useRef(null);
  const { colour } = useContext(ColourContext);
  const shade1_starsRef = useRef([]);
  const shade2_starsRef = useRef([]);
  const shade3_starsRef = useRef([]);

  useEffect(() => {
    let scene, camera, renderer;
    let normalStars = [];

    const initScene = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);

      camera.position.z = 5;

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: canvasRef.current,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor("#1a2229");

      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      ambientLight.castShadow = true;
      scene.add(ambientLight);

      const spotlight = new THREE.SpotLight(0xffffff, 1);
      spotlight.castShadow = true;
      spotlight.position.set(0, 64, 32);
      scene.add(spotlight);

      const addStar = (amount, type, array, normal, colour) => {
        let starGeometry = new THREE.TorusGeometry();

        if (type === 1) {
          starGeometry = new THREE.DodecahedronGeometry();
        } else if (type === 2) {
          starGeometry = new THREE.IcosahedronGeometry();
        }

        const material = normal
          ? new THREE.MeshNormalMaterial({})
          : new THREE.MeshStandardMaterial({
              color: colour,
              emissive: "#ffffff",
              emissiveIntensity: 0.01,
            });

        Array(amount)
          .fill()
          .forEach(() => {
            const star = new THREE.Mesh(starGeometry, material);

            const [x, y, z] = Array(3)
              .fill()
              .map(() => THREE.MathUtils.randFloatSpread(40));

            star.position.set(x, y, z);
            scene.add(star);
            array.push(star);
          });
      };

      addStar(3, 1, shade1_starsRef.current, false, colour[0]);
      addStar(3, 2, shade1_starsRef.current, false, colour[0]);
      addStar(3, 1, shade2_starsRef.current, false, colour[1]);
      addStar(3, 2, shade2_starsRef.current, false, colour[1]);
      addStar(3, 1, shade3_starsRef.current, false, colour[2]);
      addStar(3, 2, shade3_starsRef.current, false, colour[2]);
    };

    const animate = () => {
      shade1_starsRef.current.forEach((star) => {
        star.rotation.x += Math.random() * (0.015 - 0.002) + 0.002;
        star.rotation.y += Math.random() * (0.015 - 0.002) + 0.002;
        star.rotation.z += Math.random() * (0.015 - 0.002) + 0.002;
      });

      shade2_starsRef.current.forEach((star) => {
        star.rotation.x += Math.random() * (0.015 - 0.002) + 0.002;
        star.rotation.y += Math.random() * (0.015 - 0.002) + 0.002;
        star.rotation.z += Math.random() * (0.015 - 0.002) + 0.002;
      });

      shade3_starsRef.current.forEach((star) => {
        star.rotation.x += Math.random() * (0.015 - 0.002) + 0.002;
        star.rotation.y += Math.random() * (0.015 - 0.002) + 0.002;
        star.rotation.z += Math.random() * (0.015 - 0.002) + 0.002;
      });

      normalStars.forEach((star) => {
        star.rotation.x += Math.random() * (0.015 - 0.002) + 0.002;
        star.rotation.y += Math.random() * (0.015 - 0.002) + 0.002;
        star.rotation.z += Math.random() * (0.015 - 0.002) + 0.002;
      });

      const radius = 40; // Radius of the circular path
      const speed = 0.0001; // Angular speed
      const angle = Date.now() * speed; // Calculate the angle based on time

      // Calculate the new position using trigonometry
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      camera.position.set(x, 0, z); // Set the new position of the camera
      camera.lookAt(0, 0, 0); // Make the camera look at the origin (0, 0, 0)

      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    
    const handleResize = () => {
      const width = window.innerWidth;

      if (width !== previousWidth) {
        const canvas = renderer.domElement;
        const width = window.innerWidth;
        const height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);

        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
      }
    };
    
    let previousWidth = window.innerWidth;
    window.addEventListener("resize", handleResize);
    handleResize();
    initScene();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateStar = (starRef, idx) => {
    starRef.forEach((star) => {
      var initial = new THREE.Color(star.material.color.getHex());
      var value = new THREE.Color(colour[idx]);

      gsap.to(initial, 1, {
        r: value.r,
        g: value.g,
        b: value.b,

        onUpdate: function () {
          star.material.color = initial;
        },
      });
    });
  };

  useEffect(() => {
    // Update the color of the stars when the color changes
    updateStar(shade1_starsRef.current, 0);
    updateStar(shade2_starsRef.current, 1);
    updateStar(shade3_starsRef.current, 2);
  }, [colour]);

  return <canvas ref={canvasRef} />;
};

export default ThreeBackground;
