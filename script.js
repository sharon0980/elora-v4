/**
 * ELORA EVENTOS - 3D Virtual Gallery Space Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // Lock scroll initially
  document.body.classList.add('intro-active');

  // Setup initial absolute center coordinates for the preloader logo
  const introLogo = document.getElementById('intro-logo');
  if (introLogo) {
    const isMobile = window.innerWidth < 768;
    const startSize = isMobile ? 120 : 200;
    introLogo.style.width = `${startSize}px`;
    introLogo.style.height = `${startSize}px`;
    introLogo.style.left = `${(window.innerWidth - startSize) / 2}px`;
    introLogo.style.top = `${(window.innerHeight - startSize) / 2}px`;
    introLogo.style.animation = 'introLogoPulse 2.2s ease-in-out infinite alternate';
    
    // Force browser reflow to apply coordinates before transitions are active
    introLogo.offsetHeight;

    // Enable CSS transition properties
    introLogo.style.transition = 'top 1.3s cubic-bezier(0.25, 1, 0.3, 1), left 1.3s cubic-bezier(0.25, 1, 0.3, 1), width 1.3s cubic-bezier(0.25, 1, 0.3, 1), height 1.3s cubic-bezier(0.25, 1, 0.3, 1), filter 1.3s cubic-bezier(0.25, 1, 0.3, 1)';
  }

  // Initialize Three.js Scene immediately so it renders behind the dark overlay
  initThreeEngine();
  initUIScrollReveals();
  initCardClickZoom();
  initTimelineProgressFlow();
  initExhibitFiltering();

  // Run the preloader reveal sequence after a short delay (1.4 seconds)
  setTimeout(runPreloaderReveal, 1400);
});

function runPreloaderReveal() {
  const realLogo = document.querySelector('.hero-logo-img');
  const introLogo = document.getElementById('intro-logo');
  const overlay = document.getElementById('intro-overlay');
  const wrapper = document.querySelector('.content-wrapper');
  const canvas = document.getElementById('webgl-canvas');

  if (!realLogo || !introLogo || !overlay) {
    // Fallback if elements do not exist
    document.body.classList.remove('intro-active');
    return;
  }

  // Measure the exact layout coordinates of the hidden hero logo
  const rect = realLogo.getBoundingClientRect();

  // Fly and scale the preloader logo to match the target hero logo
  introLogo.style.left = `${rect.left}px`;
  introLogo.style.top = `${rect.top}px`;
  introLogo.style.width = `${rect.width}px`;
  introLogo.style.height = `${rect.height}px`;
  introLogo.style.filter = 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.1))';

  // Fade out the black overlay
  overlay.style.opacity = '0';

  // Fade in the homepage content and 3D astrolabe background
  if (wrapper) wrapper.classList.add('revealed');
  if (canvas) canvas.classList.add('revealed');

  // Complete preloader tear-down once transitions finish (1.3 seconds)
  setTimeout(() => {
    realLogo.classList.remove('hidden'); // Reveal the real inline logo
    overlay.style.display = 'none'; // Hide preloader overlay completely
    document.body.classList.remove('intro-active'); // Unlock scroll interaction
  }, 1300);
}

/* ==========================================
   1. GLOBAL STATE & DATA
   ========================================== */
const EXHIBIT_DATA = {
  corporate: {
    category: "Corporate & Conclaves",
    title: "Executive Business Staging",
    intro: "We engineer professional environments that facilitate seamless communication, academic knowledge sharing, and commercial deal-making.",
    subtypes: [
      "Media Conferences",
      "Seminars / Industrial Events",
      "Management Events",
      "Training Programs",
      "Business Meetings"
    ],
    timeline: [
      { phase: "Phase 1: Alignment", title: "Agenda & Setup Calibration", body: "We map out presentation schedules, speaker requirements, and custom slide parameters to ensure the technical crew is completely synced." },
      { phase: "Phase 2: Build", title: "High-Tech Stage Assembly", body: "Installation of gloss-black staging, glass podiums, surround-sound line-arrays, and fine-pitch LED display backdrops." },
      { phase: "Phase 3: Run", title: "Technical Cue Management", body: "Our backstage directors run seamless transitions for live AV feeds, slides, timers, and Q&A microphone coordinates." },
      { phase: "Phase 4: Wrap", title: "Attendee Analytics & Media Wrap", body: "We compile attendance check-in metrics, distribute digital media folders, and execute site teardowns." }
    ]
  },
  promotions: {
    category: "Brand & Launches",
    title: "Experiential Commercial Shows",
    intro: "Translating corporate identities and product offerings into interactive, physical spaces that capture media and public attention.",
    subtypes: [
      "Launching Events",
      "Promotional Campaigns",
      "Brand Promotion Events"
    ],
    timeline: [
      { phase: "Phase 1: Conception", title: "Brand Identity Extraction", body: "We study the product's USP to formulate a spatial theme, lighting palette, and public interaction points." },
      { phase: "Phase 2: Installation", title: "Experiential Pop-Up Setup", body: "Assembly of custom media walls, fabric installations, product reveal screens, and lighting schemes." },
      { phase: "Phase 3: Launch", title: "High-Impact Reveal Show", body: "Managing product reveals with synchronized laser light arrays, sound effects, smoke, and press coverage." },
      { phase: "Phase 4: Engagement", title: "Influencer & Lead Capture", body: "Guiding guests through registration booths, interactive photobooths, and digital QR contact cards." }
    ]
  },
  weddings: {
    category: "Royal Weddings",
    title: "Bespoke Matrimonial Art",
    intro: "We elevate traditional weddings into royal, monumental experiences with exquisite floral architectures and elite guest services.",
    subtypes: [
      "Traditional Weddings",
      "Engagement Parties",
      "Anniversary Parties"
    ],
    timeline: [
      { phase: "Phase 1: Design", title: "Floral & Structural Mappings", body: "Coordinating floorplans, Mandapam wood carvings, fabric drapes, and traditional jasmine layout schemes." },
      { phase: "Phase 2: Assembly", title: "Stage & Lighting Rigging", body: "Creating floating structures, warm backdrop spot lighting, traditional oil lamps, and seating arrays." },
      { phase: "Phase 3: Ceremony", title: "Sacred Hour Hospitality", body: "Greeting guests with instrumental Nadaswaram, coordinating ritual timelines, and plating the grand feast." },
      { phase: "Phase 4: Reception", title: "Evening Toast & Gala", body: "Transforming the venue with modern fairy lights, live musicians, and champagne table toast setups." }
    ]
  },
  parties: {
    category: "Private Parties",
    title: "Elite Social Gatherings",
    intro: "Curating highly sophisticated and memorable environments for life's personal milestones, from birthdays to memorials.",
    subtypes: [
      "Birthdays",
      "Baby Showers",
      "Graduation Parties",
      "Retirement Parties",
      "Holiday Parties",
      "Celebration of Life"
    ],
    timeline: [
      { phase: "Phase 1: Theme selection", title: "Color Schemes & Backdrop Layouts", body: "Drafting color palettes, custom neon slogans, and table decoration styles suitable for the milestone." },
      { phase: "Phase 2: Dress", title: "Atmospheric Setup", body: "Suspending balloon arches, setting up dessert counters, putting up photo screens, and arranging cocktail bars." },
      { phase: "Phase 3: Toast", title: "Milestone Celebration & Toast", body: "Coordinating cake cutting, managing champagne towers, and running MC speeches." },
      { phase: "Phase 4: Dance", title: "Interactive DJ & Socializing", body: "Activating outdoor fairy-lit dance floors and live DJ arrays to close the celebration." }
    ]
  },
  productions: {
    category: "Productions",
    title: "Creative Shoots & Functions",
    intro: "Engineering large-scale structural stage setups and high-fidelity video recording environments for media and corporate functions.",
    subtypes: [
      "Photography Shoots",
      "Video Shoots",
      "Annual Functions"
    ],
    timeline: [
      { phase: "Phase 1: Storyboard", title: "Shoot Mapping & Timing", body: "Aligning camera schedules, lighting angles, and backdrop displacements for perfect capture frames." },
      { phase: "Phase 2: Rigging", title: "Trussing & Lighting Rigs", body: "Installing complex overhead light trusses, softboxes, background screens, and multi-cam platforms." },
      { phase: "Phase 3: Recording", title: "Performance Capture", body: "Managing direct audio outputs, camera crane swings, and live action cues for flawless takes." },
      { phase: "Phase 4: Render", title: "Post-Production Delivery", body: "Color grading, cinematic edit cuts, and delivering high-fidelity digital media folders." }
    ]
  }
};

let threeGlobal = {
  camera: null,
  scene: null,
  renderer: null,
  sculpture: null,
  sculptureContainer: null,
  particles: null,
  targetFov: 45,
  originalPositions: [],
  clock: new THREE.Clock()
};

/* ==========================================
   2. THREE.JS 3D ENGINE
   ========================================== */
function initThreeEngine() {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas) return;

  // Scene
  const scene = new THREE.Scene();
  threeGlobal.scene = scene;

  // Camera
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 8;
  threeGlobal.camera = camera;

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: false
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0x070707, 1); // Matches CSS --bg-dark
  threeGlobal.renderer = renderer;

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.35); // Dim ambient to emphasize specular gold highlights
  scene.add(ambientLight);

  // Key light with shadow mapping (warm gold spotlight)
  const dirLight = new THREE.DirectionalLight(0xfff5e0, 1.3);
  dirLight.position.set(10, 15, 10);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.width = 1024;
  dirLight.shadow.mapSize.height = 1024;
  dirLight.shadow.camera.near = 0.5;
  dirLight.shadow.camera.far = 40;
  dirLight.shadow.bias = -0.001;
  scene.add(dirLight);

  // Fill Light from opposite side (softer gold fill)
  const fillLight = new THREE.DirectionalLight(0xb58e3d, 0.95);
  fillLight.position.set(-10, -5, -5);
  scene.add(fillLight);

  // Group container for sculpture to handle mouse tilt
  const sculptureContainer = new THREE.Group();
  scene.add(sculptureContainer);
  threeGlobal.sculptureContainer = sculptureContainer;

  // Procedural Gold Sculpture: The "Cosmic Astrolabe" (Celestial Armillary Sphere)
  // Consists of a central pulsing dodecahedron, three independent gold orbits with satellite spheres, and intersecting coordinate rods.
  const astrolabeMaterial = new THREE.MeshStandardMaterial({
    color: 0xD4AF37,
    roughness: 0.15,
    metalness: 0.95,
    side: THREE.DoubleSide
  });

  // 1. Central Crystalline Core (dodecahedron)
  const coreGeom = new THREE.DodecahedronGeometry(0.9, 0);
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0xD4AF37,
    roughness: 0.1,
    metalness: 0.92,
    wireframe: true,
    transparent: true,
    opacity: 0.75
  });
  const astrolabeCore = new THREE.Mesh(coreGeom, coreMat);
  astrolabeCore.castShadow = true;
  sculptureContainer.add(astrolabeCore);
  threeGlobal.astrolabeCore = astrolabeCore;

  // 2. Intersecting Structural Coordinate Rods with end caps
  const rodMat = new THREE.MeshStandardMaterial({
    color: 0xD4AF37,
    roughness: 0.22,
    metalness: 0.92
  });
  const capGeom = new THREE.SphereGeometry(0.07, 16, 16);
  const rodLength = 6.2;

  // X-axis rod
  const rodXGeom = new THREE.CylinderGeometry(0.015, 0.015, rodLength, 8);
  const rodX = new THREE.Mesh(rodXGeom, rodMat);
  rodX.rotation.z = Math.PI / 2;
  sculptureContainer.add(rodX);

  // Y-axis rod
  const rodYGeom = new THREE.CylinderGeometry(0.015, 0.015, rodLength, 8);
  const rodY = new THREE.Mesh(rodYGeom, rodMat);
  sculptureContainer.add(rodY);

  // Z-axis rod
  const rodZGeom = new THREE.CylinderGeometry(0.015, 0.015, rodLength, 8);
  const rodZ = new THREE.Mesh(rodZGeom, rodMat);
  rodZ.rotation.x = Math.PI / 2;
  sculptureContainer.add(rodZ);

  // End caps
  const capPositions = [
    [rodLength / 2, 0, 0],
    [-rodLength / 2, 0, 0],
    [0, rodLength / 2, 0],
    [0, -rodLength / 2, 0],
    [0, 0, rodLength / 2],
    [0, 0, -rodLength / 2]
  ];
  capPositions.forEach(pos => {
    const cap = new THREE.Mesh(capGeom, rodMat);
    cap.position.set(pos[0], pos[1], pos[2]);
    sculptureContainer.add(cap);
  });

  // 3. Three Concentric Tilted Orbital Rings & Orbiting Satellite Spheres
  const orbits = [];
  const orbitCount = 3;
  const orbitRadii = [1.5, 2.15, 2.8];
  const orbitSpeeds = [0.65, 0.45, 0.3];
  
  for (let i = 0; i < orbitCount; i++) {
    const radius = orbitRadii[i];
    const tubeRadius = 0.028;
    const ringGeom = new THREE.TorusGeometry(radius, tubeRadius, 16, 100);
    const ringMesh = new THREE.Mesh(ringGeom, astrolabeMaterial);
    ringMesh.castShadow = true;
    ringMesh.receiveShadow = true;
    
    // Position/tilt orbits on distinct planes
    if (i === 0) ringMesh.rotation.x = Math.PI / 3.5;
    if (i === 1) ringMesh.rotation.y = Math.PI / 4.5;
    if (i === 2) {
      ringMesh.rotation.x = Math.PI / 6;
      ringMesh.rotation.y = Math.PI / 6;
    }
    
    sculptureContainer.add(ringMesh);
    
    // Satellite Sphere gliding along this orbital ring
    const satGeom = new THREE.SphereGeometry(0.1, 32, 32);
    const satMat = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      roughness: 0.05,
      metalness: 0.98
    });
    const satMesh = new THREE.Mesh(satGeom, satMat);
    satMesh.castShadow = true;
    satMesh.receiveShadow = true;
    ringMesh.add(satMesh); // Add as child of the ring mesh
    
    orbits.push({
      ring: ringMesh,
      satellite: satMesh,
      radius: radius,
      orbitSpeed: orbitSpeeds[i],
      rotSpeedX: 0.2 + i * 0.15,
      rotSpeedY: 0.25 - i * 0.08,
      rotSpeedZ: 0.15 + i * 0.12
    });
  }
  threeGlobal.orbits = orbits;

  // Atmospheric Gold Particle System (250 floating particles)
  const particleCount = 250;
  const particleGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12; // X
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12; // Y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12; // Z
  }
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  const particleMaterial = new THREE.PointsMaterial({
    color: 0xD4AF37,
    size: 0.038, // Slightly smaller for delicate elegance
    transparent: true,
    opacity: 0.55, // Softer alpha
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending, // Elegant overlapping glows
    depthWrite: false // Avoid blocky overlay clippings with standard meshes
  });
  
  const particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);
  threeGlobal.particles = particles;

  // Handle Resize
  window.addEventListener('resize', onWindowResize);

  // Handle Mouse Tilt (Parallax)
  let mouseX = 0, mouseY = 0;
  let targetRotationX = 0, targetRotationY = 0;

  window.addEventListener('mousemove', (e) => {
    // Normalize coordinates (-1 to 1)
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    
    // Set target rotations based on cursor
    targetRotationX = mouseY * 0.35;
    targetRotationY = mouseX * 0.35;
  });

  // Handle Scroll Transition (Morph position/scale)
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrollPercent = Math.min(1, scrollY / viewportHeight);
    
    // Lerp-like scale reduction and push to the right corner
    const scaleFactor = 1 - (scrollPercent * 0.55); // Scales down from 1 to 0.45
    sculptureContainer.scale.setScalar(scaleFactor);
    
    // Push the 3D model to the right side on PC view
    if (window.innerWidth > 768) {
      sculptureContainer.position.x = scrollPercent * 3.8;
      sculptureContainer.position.y = scrollPercent * 0.5;
    } else {
      // Stack under title on mobile view
      sculptureContainer.position.x = 0;
      sculptureContainer.position.y = -scrollPercent * 1.5;
    }
  });

  // Animation Frame Loop
  function animate() {
    requestAnimationFrame(animate);

    const time = threeGlobal.clock.getElapsedTime();
    // 1. Procedural Astrolabe kinetics: core pulsing and rotations
    if (threeGlobal.astrolabeCore) {
      // Pulse scale gently over time
      const pulse = 1.0 + Math.sin(time * 1.5) * 0.08;
      threeGlobal.astrolabeCore.scale.setScalar(pulse);
      // Slow structural rotation
      threeGlobal.astrolabeCore.rotation.x += 0.005;
      threeGlobal.astrolabeCore.rotation.y += 0.007;
    }

    if (threeGlobal.orbits) {
      threeGlobal.orbits.forEach(orbit => {
        // Rotate the orbit ring mesh
        orbit.ring.rotation.x += 0.002 * orbit.rotSpeedX;
        orbit.ring.rotation.y += 0.003 * orbit.rotSpeedY;
        orbit.ring.rotation.z += 0.001 * orbit.rotSpeedZ;

        // Glide the satellite sphere along its local circular orbit track
        const angle = time * orbit.orbitSpeed;
        orbit.satellite.position.x = Math.cos(angle) * orbit.radius;
        orbit.satellite.position.y = Math.sin(angle) * orbit.radius;
        orbit.satellite.position.z = 0;
      });
    }

    // 3. Smooth Mouse-Move Parallax Tilt (lerping)
    sculptureContainer.rotation.x += (targetRotationX - sculptureContainer.rotation.x) * 0.08;
    sculptureContainer.rotation.y += (targetRotationY - sculptureContainer.rotation.y) * 0.08;

    // 4. Smooth Camera Zoom (for modal trigger)
    camera.fov += (threeGlobal.targetFov - camera.fov) * 0.08;
    camera.updateProjectionMatrix();

    // 5. Atmospheric Gold Particles organic floating drift & wobble
    if (threeGlobal.particles) {
      const positions = threeGlobal.particles.geometry.attributes.position.array;
      const count = positions.length / 3;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        // Pseudo-random speeds based on point index
        const speedY = 0.002 + (i % 6) * 0.0008; // Gentle upward drift
        const wobbleSpeed = 0.4 + (i % 3) * 0.25;
        const wobbleScale = 0.0018 + (i % 4) * 0.0006;
        
        // Upward movement
        positions[i3 + 1] += speedY;
        // Float wiggles
        positions[i3] += Math.sin(time * wobbleSpeed + i) * wobbleScale;
        positions[i3 + 2] += Math.cos(time * wobbleSpeed * 0.8 + i) * wobbleScale;
        
        // Recycle particle to bottom when it drifts past top viewport threshold (Y > 6)
        if (positions[i3 + 1] > 6) {
          positions[i3 + 1] = -6;
          positions[i3] = (Math.random() - 0.5) * 12;
          positions[i3 + 2] = (Math.random() - 0.5) * 12;
        }
      }
      threeGlobal.particles.geometry.attributes.position.needsUpdate = true;
      
      // Slow background cosmic rotation
      threeGlobal.particles.rotation.y = time * 0.015;
    }

    renderer.render(scene, camera);
  }

  animate();
}

function onWindowResize() {
  const camera = threeGlobal.camera;
  const renderer = threeGlobal.renderer;
  if (!camera || !renderer) return;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

/* ==========================================
   3. SCROLL REVEALS (CARDS GRID)
   ========================================== */
function initUIScrollReveals() {
  const elements = document.querySelectorAll('.showcase-card, .timeline-card');
  if (elements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Add slightly delayed stagger for portfolio showcase cards
        if (entry.target.classList.contains('showcase-card')) {
          const cards = document.querySelectorAll('.showcase-card');
          const index = Array.from(cards).indexOf(entry.target);
          entry.target.style.transitionDelay = `${index * 0.15}s`;
        }
      }
    });
  }, {
    root: null,
    threshold: 0.15
  });

  elements.forEach(el => observer.observe(el));
}

/* ==========================================
   4. CARD CLICK CAMERA ZOOM NAVIGATOR
   ========================================== */
function initCardClickZoom() {
  const cards = document.querySelectorAll('.showcase-card');
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault(); // Pause standard navigation
      const targetUrl = card.getAttribute('href');
      
      // Trigger Three.js Zoom-In Camera Animation
      threeGlobal.targetFov = 20; // Tight zoom
      
      // Delay navigation to let zoom transition complete
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 550);
    });
  });
}

/* ==========================================
   5. TIMELINE EVENT FLOW SCROLL ANIMATION
   ========================================== */
function initTimelineProgressFlow() {
  const timelineBox = document.querySelector('.timeline-box');
  const flowLine = document.querySelector('.timeline-flow-line');
  if (!timelineBox || !flowLine) return;

  const updateFlow = () => {
    const boxRect = timelineBox.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate scroll percentage of the timeline container relative to the screen height
    // We trigger the flow as the container moves up past 75% of the viewport height
    const startPoint = windowHeight * 0.75;
    const totalHeight = boxRect.height;
    const scrolled = startPoint - boxRect.top;
    
    let percent = (scrolled / totalHeight) * 100;
    percent = Math.max(0, Math.min(100, percent));
    
    flowLine.style.height = `${percent}%`;
    
    // Highlight passed nodes and animate elements as they enter the flow
    const cards = timelineBox.querySelectorAll('.timeline-card');
    cards.forEach(card => {
      const cardRect = card.getBoundingClientRect();
      // If the top of the card has passed the startPoint threshold, mark as passed
      if (cardRect.top < startPoint) {
        card.classList.add('flow-passed');
      } else {
        card.classList.remove('flow-passed');
      }
    });
  };

  window.addEventListener('scroll', updateFlow);
  window.addEventListener('resize', updateFlow);
  updateFlow(); // Trigger initial execution
}

/* ==========================================
   6. EXHIBIT CATEGORY FILTER SYSTEM (ADULTS VS CHILDREN)
   ========================================== */
function initExhibitFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.showcase-card');
  if (filterBtns.length === 0 || cards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Avoid double triggering if already active
      if (btn.classList.contains('active')) return;

      // Toggle active states on button pills
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // Staggered fade out of all current cards
      cards.forEach(card => {
        card.style.transition = 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
      });

      // Wait for fade out to complete, then change visibility and fade back in
      setTimeout(() => {
        let visibleIdx = 0;
        cards.forEach(card => {
          const group = card.getAttribute('data-group');
          
          if (group === filterValue) {
            card.style.display = 'flex';
            // Reflow trigger
            card.offsetHeight;

            // Apply card scroll reveal styles with staggered delays
            card.style.transitionDelay = `${visibleIdx * 0.1}s`;
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            
            // Re-add revealed class for scroll reveals
            card.classList.add('revealed');
            visibleIdx++;
          } else {
            card.style.display = 'none';
            card.classList.remove('revealed');
          }
        });
      }, 420);
    });
  });
}


