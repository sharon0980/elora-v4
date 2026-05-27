/**
 * ELORA EVENTOS - 3D Scroll-Flight Exhibition Gallery Engine
 */

// Complete Exhibition Database: 31 Audited, Relevant Event Types & Services
const EXHIBITIONS_LIST = [
  {
    title: "Media Conferences",
    category: "Corporate Events",
    brief: "Sleek presentation stages, precise microphone setups, and high-speed media desks designed to manage press coverage professionally.",
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600"
  },
  {
    title: "Seminars",
    category: "Corporate Events",
    brief: "Industrial summits, informative slide sync displays, and high-fidelity sound layouts to deliver corporate knowledge clearly.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600"
  },
  {
    title: "Management Events",
    category: "Corporate Events",
    brief: "Corporate retreats, leadership panels, and review summits arranged in structured layouts to foster executive collaboration.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600"
  },
  {
    title: "Training Programs",
    category: "Corporate Events",
    brief: "Interactive training settings, workspace setups, and presentation cues to ensure high-engagement employee learning.",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600"
  },
  {
    title: "Launching Events",
    category: "Corporate Events",
    brief: "Product reveal curtains, high-intensity spot lights, laser arrays, and smoke FX to create massive impact for incoming products.",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600"
  },
  {
    title: "Annual Functions",
    category: "Corporate Events",
    brief: "Corporate celebrations, milestone anniversaries, soundstages, and custom lighting screens to commemorate company success.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600"
  },
  {
    title: "Promotional Events",
    category: "Corporate Events",
    brief: "Experiential pop-up booths, high-traffic banners, and lead capture points to drive public product interaction.",
    img: "https://images.unsplash.com/photo-1531058020387-3be344559be6?q=80&w=600"
  },
  {
    title: "Brand Promotions",
    category: "Corporate Events",
    brief: "Thematic brand displays, logo backdrops, photo stations, and product showcases built around distinct corporate guidelines.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600"
  },
  {
    title: "Business Meetings",
    category: "Corporate Events",
    brief: "Intimate boardrooms, high-definition conferencing setups, and premium catering for critical executive alignments.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600"
  },
  {
    title: "Royal Weddings",
    category: "Adult Events",
    brief: "Bespoke floral architecture, traditional jasmine drapes, mandapam structures, and elegant lighting for elite destination weddings.",
    img: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=600"
  },
  {
    title: "Milestone Birthdays",
    category: "Adult Events",
    brief: "Premium social gather setups, custom neon signs, champagne towers, and outdoor cocktail bars to celebrate major milestones.",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600"
  },
  {
    title: "Celebration of Life",
    category: "Adult Events",
    brief: "Intimate, warm, and highly respectful family memorial gathering coordinates designed to celebrate legacy with grace.",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600"
  },
  {
    title: "Baby Showers",
    category: "Adult Events",
    brief: "Elegant high-tea catering, pastel balloon canopies, comfortable mother lounge setups, and fun baby shower games.",
    img: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=600"
  },
  {
    title: "Anniversary Parties",
    category: "Adult Events",
    brief: "Milestone celebration banquets, nostalgic slide projections, live musicians, and elegant table arrangements.",
    img: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=600"
  },
  {
    title: "Engagement Parties",
    category: "Adult Events",
    brief: "Matrimonial ring ceremony staging, background acoustics, floral arches, and fine dining layouts for welcoming family.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600"
  },
  {
    title: "Retirement Parties",
    category: "Adult Events",
    brief: "Respectful milestones, career collage screens, keynote microphones, and family banquets to celebrate career achievements.",
    img: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=600"
  },
  {
    title: "Graduation Parties",
    category: "Adult Events",
    brief: "Energetic student social settings, dynamic lighting, custom photo backdrops, and buffet tables to celebrate success.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600"
  },
  {
    title: "Holiday Parties",
    category: "Adult Events",
    brief: "Festive styling, warm fairy lights, cocktail bars, themed tablescapes, and dance floors for corporate or family holiday gathers.",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600"
  },
  {
    title: "Productions & Shoots",
    category: "Adult Events",
    brief: "Custom photo backdrops, lighting grids, camera tracks, and soundstages for video recordings or commercial media shoots.",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600"
  },
  {
    title: "Kids' Birthdays",
    category: "Children Events",
    brief: "Enchanting themed play stages, cartoon backdrops, safe game zones, magic shows, and whimsical candy buffet displays.",
    img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600"
  },
  {
    title: "Summer Celebrations",
    category: "Children Events",
    brief: "Poolside children's play rigs, cooling juice bars, water slides, and interactive outdoor sports setups.",
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950ba?q=80&w=600"
  },
  {
    title: "Kitty Parties",
    category: "Children Events",
    brief: "Playful indoor socials, themed finger food buffets, board game coordinates, and colorful setups for social groups.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600"
  },
  {
    title: "Baptisms & Christenings",
    category: "Children Events",
    brief: "Pure white and gold naming ceremonies, floral-rich cradles, pathway candles, and elegant family banquet luncheons.",
    img: "https://images.unsplash.com/photo-1519689680058-324335c77ebe?q=80&w=600"
  },
  {
    title: "Bridal Makeup",
    category: "Services",
    brief: "Premium vanity setups, professional bridal artists, and luxury beauty consultations for complete matrimonial preparation.",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600"
  },
  {
    title: "Creative Photography",
    category: "Services",
    brief: "High-fidelity camera rigs, candid captures, wedding reels direction, and safe digital delivery coordinates.",
    img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=600"
  },
  {
    title: "Event Management",
    category: "Services",
    brief: "3D concept planning, stage blueprints fabrication, security details coordination, and real-time cue directions.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600"
  },
  {
    title: "Food & Catering",
    category: "Services",
    brief: "Multi-course banquets, authentic traditional Sadya platters, high-tea pastries, and gourmet cocktail bars.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=600"
  },
  {
    title: "Travels & Logistics",
    category: "Services",
    brief: "Luxury guest transport fleets, entry validation gates, airport pickups, and hospitality booking coordinates.",
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600"
  },
  {
    title: "Musical Events",
    category: "Services",
    brief: "Classical Nadaswaram, live fusion bands, DJ soundstage trusses, and high-fidelity acoustics arrays.",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600"
  },
  {
    title: "Entertainment Shows",
    category: "Services",
    brief: "Cultural Panchavadyam welcomes, magical performances, fire artists coordinates, and themed choreographies.",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600"
  },
  {
    title: "Rooms & Accommodation",
    category: "Services",
    brief: "Luxury suite coordinates, resort lounge bookings, and 24/7 guest service reception setup.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600"
  }
];

// Global Variables
let scene, camera, renderer, particles, tunnel;
const cardsArray = [];
const tempV = new THREE.Vector3();
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;
const clock = new THREE.Clock();

// Target Z bounds based on scroll height
let targetZ = 60; // Start at Z = 60 (looking at first card)

// Custom cursor coordinates
let cursorX = -100, cursorY = -100;
let trailX = -100, trailY = -100;

document.addEventListener('DOMContentLoaded', () => {
  initThree();
  build3DHTMLCards();
  initListeners();
  animate();
});

// Initialize Three.js Backstage scene
function initThree() {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas) return;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, targetZ);

  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x070707, 1);

  // Soft Gold Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  const dirLight1 = new THREE.DirectionalLight(0xfff3d1, 1);
  dirLight1.position.set(5, 10, 20);
  scene.add(dirLight1);

  // Cosmic gold dust particles organized in a Double Helix
  const isMobile = window.innerWidth < 768;
  const particleCount = 500;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const helixRadius = isMobile ? 4.2 : 8.5;

  for (let i = 0; i < particleCount; i++) {
    // Spaced Z along the flight corridor from Z = -100 to Z = 70
    const z = 70 - (i / particleCount) * 170;
    const angle = z * 0.12; // spiral angle speed
    const spiralOffset = (i % 2 === 0) ? 0 : Math.PI; // offset for double helix
    
    // Slight random deviation to form a starry path
    const noiseX = (Math.random() - 0.5) * 1.8;
    const noiseY = (Math.random() - 0.5) * 1.8;
    const noiseZ = (Math.random() - 0.5) * 3.0;

    positions[i * 3] = Math.cos(angle + spiralOffset) * helixRadius + noiseX;
    positions[i * 3 + 1] = Math.sin(angle + spiralOffset) * helixRadius + noiseY;
    positions[i * 3 + 2] = z + noiseZ;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particleMaterial = new THREE.PointsMaterial({
    color: 0xD4AF37,
    size: 0.045, // Elegant fine dust
    transparent: true,
    opacity: 0.65,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  particles = new THREE.Points(geometry, particleMaterial);
  scene.add(particles);

  // Rotating octagonal architectural portals (Space Truss Frames)
  tunnel = new THREE.Group();
  scene.add(tunnel);

  const portalMat = new THREE.MeshBasicMaterial({
    color: 0xD4AF37,
    wireframe: true,
    transparent: true,
    opacity: 0.08, // Subtle luxury lines
    side: THREE.DoubleSide
  });

  const portalCount = 12;
  const portalSpacing = 15;
  const outerRad = isMobile ? 4.5 : 9.5;
  const innerRad = isMobile ? 2.5 : 5.5;

  for (let i = 0; i < portalCount; i++) {
    const portalZ = 70 - i * portalSpacing;
    // Octagon portal with concentric rings and cross-braces
    // RingGeometry(innerRadius, outerRadius, thetaSegments, phiSegments)
    // 8 thetaSegments = octagon; 2 phiSegments = radial brace structures
    const ringGeom = new THREE.RingGeometry(innerRad, outerRad, 8, 2);
    const portalMesh = new THREE.Mesh(ringGeom, portalMat);
    portalMesh.position.set(0, 0, portalZ);
    portalMesh.rotation.z = (i * Math.PI) / 8; // spiral rotational layout
    tunnel.add(portalMesh);
  }
}

// Robust click tracking for elements moving in 3D WebGL space
// Distinguishes tap/click from touch scroll or drag, and works around browser focus drop on moving elements
function attachRobustClickListener(element, callback) {
  let startX = 0;
  let startY = 0;
  let startTime = 0;

  element.addEventListener('pointerdown', (e) => {
    startX = e.clientX;
    startY = e.clientY;
    startTime = Date.now();
  });

  element.addEventListener('pointerup', (e) => {
    const diffX = Math.abs(e.clientX - startX);
    const diffY = Math.abs(e.clientY - startY);
    const duration = Date.now() - startTime;

    // Click is valid if movement is within 15px and duration is under 300ms
    if (diffX < 15 && diffY < 15 && duration < 300) {
      callback();
    }
  });
}

// Generate the 3D spiral tunnel coordinates for our 31 HTML cards
function build3DHTMLCards() {
  const container = document.getElementById('floating-gallery');
  if (!container) return;

  const count = EXHIBITIONS_LIST.length;
  const isMobile = window.innerWidth < 768;

  EXHIBITIONS_LIST.forEach((item, idx) => {
    let x, y;
    if (isMobile) {
      // Elegant staggered center-flight layout for mobile portrait viewports
      const angle = idx * 1.5; // spiral angle
      const radius = 1.35; // tight radius to fit mobile viewport width
      x = Math.cos(angle) * radius;
      y = Math.sin(angle) * radius * 1.2; // slightly taller vertically
    } else {
      // Original wide PC spiral tunnel coordinates
      const angle = idx * 0.95; // angle step
      const radius = 6.2 + (idx % 2 === 0 ? 1.2 : -1.2); // cylindrical radius
      x = Math.cos(angle) * radius;
      y = Math.sin(angle) * radius;
    }
    
    // Spread Z depth evenly from Z = -70 (deepest) to Z = 50 (closest)
    const z = 50 - (idx / count) * 110;

    // Create Card element
    const cardEl = document.createElement('div');
    cardEl.className = 'floating-card-3d';
    cardEl.innerHTML = `
      <h4>${item.title}</h4>
      <span>${item.category}</span>
    `;

    // Clicks open the details brief modal via robust tracker
    attachRobustClickListener(cardEl, () => {
      openDetailPopup(item);
    });

    container.appendChild(cardEl);

    // Save state
    cardsArray.push({
      element: cardEl,
      x: x,
      y: y,
      z: z,
      wobbleOffset: Math.random() * 100 // unique offset for floating wiggles
    });
  });
}

// Track cursor movement for parallax camera tilts & scroll for flight depth
function initListeners() {
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  window.addEventListener('mousemove', (e) => {
    // Normalize client coordinates to -1 -> 1
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    
    // Smooth target coordinates (tilt scale)
    targetX = mouseX * 2.2;
    targetY = mouseY * 2.2;

    // Track coordinates for our custom cursor
    cursorX = e.clientX;
    cursorY = e.clientY;

    const cursorDot = document.getElementById('custom-cursor');
    if (cursorDot) {
      cursorDot.style.left = `${cursorX}px`;
      cursorDot.style.top = `${cursorY}px`;
    }
  });

  // Map Page Scroll Position to Camera Z Position (Flight mechanism)
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = maxScroll > 0 ? scrollY / maxScroll : 0;
    
    // Map scroll percentage to camera Z coordinates (flight from Z=60 to Z=-75)
    targetZ = 60 - (scrollFraction * 135);

    // Smooth transform / fade for centered intro brand logo on scroll
    const introLogo = document.getElementById('gallery-hero-logo');
    if (introLogo) {
      if (scrollY > 900) {
        introLogo.style.display = 'none';
      } else {
        introLogo.style.display = 'flex';
        const logoOpacity = Math.max(0, 1 - scrollY / 700); // Fades completely by 700px
        const logoScale = Math.max(0.6, 1 - scrollY / 1800);
        const logoTranslateZ = -scrollY * 0.55;
        introLogo.style.opacity = logoOpacity;
        introLogo.style.transform = `translate(-50%, -50%) translate3d(0, 0, ${logoTranslateZ}px) scale(${logoScale})`;
      }
    }
  });

  // Delegate mouse hover triggers for custom cursor expansion
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('a, button, .floating-card-3d, .interactive-el, input, textarea');
    if (target) {
      document.getElementById('custom-cursor')?.classList.add('hover');
      document.getElementById('custom-cursor-trail')?.classList.add('hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('a, button, .floating-card-3d, .interactive-el, input, textarea');
    if (target) {
      document.getElementById('custom-cursor')?.classList.remove('hover');
      document.getElementById('custom-cursor-trail')?.classList.remove('hover');
    }
  });

  // Brief modal close triggers
  document.getElementById('close-brief').addEventListener('click', () => {
    document.getElementById('brief-popup').classList.remove('active');
  });

  document.getElementById('brief-popup').addEventListener('click', (e) => {
    if (e.target === document.getElementById('brief-popup')) {
      document.getElementById('brief-popup').classList.remove('active');
    }
  });

  // Update mobile instructions dynamically
  const isMobile = window.innerWidth < 768;
  const instructionEl = document.querySelector('.gallery-instruction span');
  if (instructionEl && isMobile) {
    instructionEl.innerHTML = "Scroll to Fly • Auto-Weaving View • Tap to Inspect";
  }
}

// Open modal and load detail fields dynamically
function openDetailPopup(item) {
  document.getElementById('popup-category').innerText = item.category;
  document.getElementById('popup-title').innerText = item.title;
  document.getElementById('popup-desc').innerText = item.brief;
  
  const imgEl = document.getElementById('popup-img');
  imgEl.src = item.img;
  imgEl.alt = `${item.title} Presentation Image`;

  document.getElementById('brief-popup').classList.add('active');
}

// Mathematical frame loop
function animate() {
  requestAnimationFrame(animate);

  const time = clock.getElapsedTime();
  const isMobile = window.innerWidth < 768;

  // 1. Smoothly interpolate trailing cursor outer ring
  if (!isMobile) {
    const cursorTrail = document.getElementById('custom-cursor-trail');
    if (cursorTrail) {
      trailX += (cursorX - trailX) * 0.15;
      trailY += (cursorY - trailY) * 0.15;
      cursorTrail.style.left = `${trailX}px`;
      cursorTrail.style.top = `${trailY}px`;
    }
  }

  // 2. Gently rotate individual octagonal portal frames in alternating directions
  if (tunnel && tunnel.children) {
    tunnel.children.forEach((portal, idx) => {
      const dir = (idx % 2 === 0) ? 1 : -1;
      portal.rotation.z += 0.001 * dir;
    });
  }

  if (isMobile) {
    // Gently wave/tilt camera target coordinates automatically over time on mobile
    targetX = Math.sin(time * 0.4) * 0.9;
    targetY = Math.cos(time * 0.35) * 0.5;
  }

  // 3. Lerp Camera Position (Scroll flight + Cursor Parallax tilt)
  camera.position.z += (targetZ - camera.position.z) * 0.1;
  camera.position.x += (targetX - camera.position.x) * 0.08;
  camera.position.y += (targetY - camera.position.y) * 0.08;

  // Gently tilt camera toward path center
  camera.lookAt(new THREE.Vector3(0, 0, camera.position.z - 15));

  // Center portals relative to camera X/Y to avoid edge clipping, but keep Z static so we fly through them
  if (tunnel) {
    tunnel.position.x = camera.position.x;
    tunnel.position.y = camera.position.y;
  }

  // 4. Cosmic particle rotation (slowly twist the double helix vortex)
  if (particles) {
    particles.rotation.z = time * 0.012;
  }

  // 5. Project 3D Card Coordinates onto 2D viewport coordinates
  cardsArray.forEach(card => {
    // Add simple float wiggles to X/Y using math equations
    const curX = card.x + Math.sin(time * 0.8 + card.wobbleOffset) * 0.06;
    const curY = card.y + Math.cos(time * 0.6 + card.wobbleOffset) * 0.06;

    // Load coordinate vector
    tempV.set(curX, curY, card.z);

    // Project coordinates onto camera 2D screen coordinate box
    tempV.project(camera);

    // Calculate distance to camera to apply fade/scale logic
    const distToCam = camera.position.distanceTo(new THREE.Vector3(curX, curY, card.z));

    // Define visibility thresholds:
    // Hide cards that are behind the camera (tempV.z > 1) or too far away (distance > 60)
    // or too close (distance < 2.5) to avoid camera clipping box shapes
    const isBehind = tempV.z > 1;
    const isTooFar = distToCam > 60;
    const isTooClose = distToCam < 3.2;

    if (isBehind || isTooFar || isTooClose) {
      card.element.style.display = 'none';
      card.element.style.opacity = '0';
    } else {
      card.element.style.display = 'block';

      // Transform normalized device coordinates (-1 to +1) to viewport pixels
      const px = (tempV.x * 0.5 + 0.5) * window.innerWidth;
      const py = (tempV.y * -0.5 + 0.5) * window.innerHeight;

      // Scale card size and opacity based on depth distance
      // PC limits: range [0.45, 1.8], factor 9.5
      // Mobile limits: range [0.35, 1.0], factor 5.5 (prevents screen clipping)
      const baseScale = isMobile ? 5.5 : 9.5;
      const maxScale = isMobile ? 1.0 : 1.8;
      const minScale = isMobile ? 0.35 : 0.45;
      const scale = Math.max(minScale, Math.min(maxScale, baseScale / distToCam));
      
      // Soft fade limits (blend into background void)
      let opacity = 1.0;
      if (distToCam > 40) {
        opacity = 1 - (distToCam - 40) / 20; // fade out in deep space
      } else if (distToCam < 8) {
        opacity = (distToCam - 3.2) / 4.8; // soft fade out right before camera passing
      }
      opacity = Math.max(0, Math.min(1, opacity));

      // SENSATIONAL SCROLL REVEAL: Cards remain hidden/faded when logo is active
      const scrollY = window.scrollY;
      if (scrollY < 1400) {
        opacity *= Math.max(0, Math.min(1, (scrollY - 600) / 800));
      }

      // Update card inline styles
      card.element.style.transform = `translate(-50%, -50%) translate3d(${px}px, ${py}px, 0px) scale(${scale})`;
      card.element.style.opacity = opacity;
      
      // Calculate CSS Z-Index based on depth (closer cards stack on top of deeper ones)
      card.element.style.zIndex = Math.round((100 - distToCam) * 10);
    }
  });

  renderer.render(scene, camera);
}
