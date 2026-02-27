import illustration from "../assets/illustation-face.png";
import { useEffect, useRef, useMemo } from "react";
import Matter from "matter-js";

const SKILLS = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "TensorFlow",
  "FastAPI",
  "Django",
  "React",
  "Java",
  "Go",
  "C",
  "PostgreSQL",
  "Illustrator",
  "MySQL",
  "Git",
  "GitHub",
  "Docker",
  "Power BI",
  "Blender",
  "Adobe",
  "Affinity",
  "Figma",
  "Photoshop",
];

// ── Physics skill cloud ───────────────────────────────────────────────────────
function PhysicsSkills() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Pre-calculate random sizes for each pill so they stay consistent across renders
  const pillData = useMemo(() => {
    return SKILLS.map((skill) => {
      // Random scale between 0.75 and 1.35
      const scale = 0.75 + Math.random() * 0.6;
      const width = Math.round((skill.length * 10 + 40) * scale);
      const height = Math.round(44 * scale);
      const fontSize = (0.88 * scale).toFixed(2);
      return { skill, width, height, fontSize, scale };
    });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const W = el.clientWidth;
    const H = 450;
    const cx = W / 2;
    const cy = H / 2;

    const { Engine, Runner, Bodies, Body, Composite, Events } = Matter;

    // Zero gravity — pure floating world
    const engine = Engine.create({ gravity: { y: 0 } });
    const world = engine.world;

    // Solid boundary walls perfectly aligned to the container edges
    const wallOpts = {
      isStatic: true,
      restitution: 0.8, // Make walls bouncy
      render: { fillStyle: "transparent" },
    };
    Composite.add(world, [
      Bodies.rectangle(cx, -25, W, 50, wallOpts), // Top
      Bodies.rectangle(cx, H + 25, W, 50, wallOpts), // Bottom
      Bodies.rectangle(-25, cy, 50, H, wallOpts), // Left
      Bodies.rectangle(W + 25, cy, 50, H, wallOpts), // Right
    ]);

    // Create solid pills
    const phases = pillData.map(() => Math.random() * Math.PI * 2);
    const bodies = pillData.map((data) => {
      // Start them somewhat centralized to trigger a cool initial "explosion" break
      const x = cx + (Math.random() - 0.5) * 100;
      const y = cy + (Math.random() - 0.5) * 100;

      const body = Bodies.rectangle(x, y, data.width, data.height, {
        isSensor: false, // Solid object! They will now hit walls and each other
        frictionAir: 0.015, // Very low air resistance so they keep moving
        restitution: 0.9, // High bounciness
        friction: 0.1,
        chamfer: { radius: data.height / 2 },
        render: { fillStyle: "transparent" },
        label: data.skill,
      });

      // Give them a random initial velocity
      Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 6,
        y: (Math.random() - 0.5) * 6,
      });

      return body;
    });

    Composite.add(world, bodies);

    // Track mouse for dodge effect
    let mouseX = -1000,
      mouseY = -1000;
    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    let tick = 0;
    Events.on(engine, "beforeUpdate", () => {
      tick++;

      bodies.forEach((body, i) => {
        // Continuous wandering force so they never stop bouncing around
        // Force is scaled by body mass so bigger pills require more force to move
        const wanderX = Math.sin(tick * 0.02 + phases[i]) * 0.00015 * body.mass;
        const wanderY =
          Math.cos(tick * 0.025 + phases[i]) * 0.00015 * body.mass;

        // Subtle mouse dodge
        let mouseDodgX = 0,
          mouseDodgY = 0;
        const mdx = body.position.x - mouseX;
        const mdy = body.position.y - mouseY;
        const mouseDistSq = mdx * mdx + mdy * mdy;
        if (mouseDistSq < 150 * 150) {
          const mDist = Math.sqrt(mouseDistSq) || 1;
          const dodgeForce = (150 - mDist) * 0.0002;
          mouseDodgX = (mdx / mDist) * dodgeForce;
          mouseDodgY = (mdy / mDist) * dodgeForce;
        }

        Body.applyForce(body, body.position, {
          x: wanderX + mouseDodgX,
          y: wanderY + mouseDodgY,
        });

        // Speed limit
        const speed = Math.hypot(body.velocity.x, body.velocity.y);
        if (speed > 4) {
          Body.setVelocity(body, {
            x: (body.velocity.x / speed) * 4,
            y: (body.velocity.y / speed) * 4,
          });
        }
      });
    });

    const runner = Runner.create();
    Runner.run(runner, engine);

    // Sync DOM elements to physics bodies
    const pills = el.querySelectorAll<HTMLElement>(".phys-pill");
    let raf: number;
    function loop() {
      bodies.forEach((body, i) => {
        const pill = pills[i];
        if (!pill) return;
        const data = pillData[i];
        // Now applying rotation since rigid bodies spin when they collide
        pill.style.transform = `translate(${body.position.x - data.width / 2}px, ${
          body.position.y - data.height / 2
        }px) rotate(${body.angle}rad)`;
      });
      raf = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(raf);
      Runner.stop(runner);
      Engine.clear(engine);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [pillData]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: 450,
        overflow: "hidden",
      }}
    >
      {pillData.map((data) => {
        return (
          <span
            key={data.skill}
            className="phys-pill group"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: data.width,
              height: data.height,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 999,
              border: "1px solid rgba(187,119,255,0.25)",
              background: "rgba(35, 35, 40, 0.6)",
              color: "#c8c8d4",
              fontSize: `${data.fontSize}rem`,
              fontWeight: 500,
              fontFamily: "monospace",
              letterSpacing: "0.05em",
              whiteSpace: "nowrap",
              userSelect: "none",
              willChange: "transform",
              backdropFilter: "blur(6px)",
              transition:
                "color 0.3s ease, border-color 0.3s ease, background 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              const t = e.target as HTMLElement;
              t.style.borderColor = "rgba(187,119,255,0.8)";
              t.style.color = "#ffffff";
              t.style.background = "rgba(187,119,255,0.25)";
            }}
            onMouseLeave={(e) => {
              const t = e.target as HTMLElement;
              t.style.borderColor = "rgba(187,119,255,0.25)";
              t.style.color = "#c8c8d4";
              t.style.background = "rgba(35, 35, 40, 0.6)";
            }}
          >
            {data.skill}
          </span>
        );
      })}
    </div>
  );
}

// ── About section ─────────────────────────────────────────────────────────────
function About() {
  return (
    <div className="bg-[#232328] font-mono pb-6 pt-10">
      <div className="flex flex-row items-center lg:w-[80%] lg:m-auto">
        <h1 className="text-4xl font-bold text-white m-auto my-6 lg:mb-0 lg:mr-0">
          About me
        </h1>
      </div>

      <div className="m-auto flex flex-col-reverse w-[80%] lg:flex-row">
        <div className="bg-white w-72 h-72 m-auto my-7 transition-all duration-300 ease-in-out hover:rounded-[50%]">
          <img
            src={illustration}
            alt="img"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div className="m-auto lg:w-[60%] lg:mr-0">
          <p className="text-justify text-white text-lg lg:text-xl">
            {/* I'm a engineering student who is interested in technology and
            innovation. I enjoy designing and venturing into the limitless
            opportunities of machine learning and engineering. */}
            I’m Manovikram K, a final year engineering student focused on
            building optimal and scalable systems.
          </p>
          <br className="hidden lg:block" />
          <br />
          <p className="text-justify text-white text-lg lg:text-xl">
            {/* With ML engineering, product development, and software solution
            expertise, I aim to develop meaningful, real-world applications.
            Whether developing AI applications, creating product animations, or
            propelling digital transformation, I'm always excited to learn,
            test, and innovate. */}
            As a designer and developer, I aim to develop solutions that are
            clean, minimal and highly functional. My work involves full-stack
            development and Machine Learning to develop structured, end-to-end
            applications that go from idea to deployment.
          </p>
          <br />
          <p className="justify-between flex text-white opacity-50 text-xs lg:text-xs">
            <p>CREATE.DEVELOP.DEPLOY.</p> <p>#createsomethingdifferent</p>
          </p>

          {/* I’m Manovikram K, a final year engineering student focused on building optimal and scalable systems.

As a designer and developer, I aim to develop solutions that are clean, minimal and highly functional. My work involves full-stack development and Machine Learning to develop structured, end-to-end applications that go from idea to deployment.

Previously, I was the Vice President at DEVS REC, where I was involved in developing the technical learning and problem-solving culture among students.

I enjoy building systems from scratch, tackling complex challenges, and pushing concepts into production-ready solutions. */}
        </div>
      </div>

      <div>
        <p className="text-center text-white text-lg  opacity-50 lg:text-xl m-10 lg:mt-24">
          Skills and Tools.
        </p>
        <PhysicsSkills />
        <p className="text-center text-white text-xs opacity-40 lg:text-sm mt-10">
          * Sizes are random
        </p>
      </div>
    </div>
  );
}

export default About;
