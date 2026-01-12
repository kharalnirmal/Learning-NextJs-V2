"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <style jsx>{`
        @keyframes flicker {
          0%,
          100% {
            opacity: 1;
          }
          41%,
          43% {
            opacity: 0.8;
          }
          45% {
            opacity: 0.6;
          }
          47% {
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff,
              0 0 40px #0ff;
          }
          50% {
            text-shadow: 0 0 20px #0ff, 0 0 40px #0ff, 0 0 60px #0ff,
              0 0 80px #0ff;
          }
        }

        .neon-text {
          animation: flicker 4s infinite, glow 2s ease-in-out infinite;
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        .glitch {
          position: relative;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch::before {
          left: 2px;
          text-shadow: -2px 0 #ff00de;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim 2s infinite linear alternate-reverse;
        }

        .glitch::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9;
          clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim 3s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0% {
            clip: rect(61px, 9999px, 90px, 0);
          }
          20% {
            clip: rect(33px, 9999px, 71px, 0);
          }
          40% {
            clip: rect(25px, 9999px, 99px, 0);
          }
          60% {
            clip: rect(95px, 9999px, 15px, 0);
          }
          80% {
            clip: rect(46px, 9999px, 82px, 0);
          }
          100% {
            clip: rect(88px, 9999px, 43px, 0);
          }
        }
      `}</style>

      <div className="text-center float-animation">
        <h1
          className={`text-9xl font-bold mb-4 neon-text ${
            glitchActive ? "glitch" : ""
          }`}
          data-text="404"
          style={{
            color: "#0ff",
            textShadow:
              "0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff",
          }}
        >
          404
        </h1>

        <h2
          className="text-4xl mb-8 neon-text"
          style={{
            color: "#f0f",
            textShadow: "0 0 10px #f0f, 0 0 20px #f0f, 0 0 30px #f0f",
          }}
        >
          Page Not Found
        </h2>

        <p
          className="text-xl mb-8"
          style={{
            color: "#0f0",
            textShadow: "0 0 5px #0f0",
          }}
        >
          The page you're looking for doesn't exist in the matrix
        </p>

        <button
          onClick={() => router.push("/")}
          className="px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-110"
          style={{
            color: "#0ff",
            border: "2px solid #0ff",
            background: "transparent",
            boxShadow: "0 0 10px #0ff, inset 0 0 10px rgba(0, 255, 255, 0.2)",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(0, 255, 255, 0.1)";
            e.target.style.boxShadow =
              "0 0 20px #0ff, inset 0 0 20px rgba(0, 255, 255, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.boxShadow =
              "0 0 10px #0ff, inset 0 0 10px rgba(0, 255, 255, 0.2)";
          }}
        >
          Return Home
        </button>
      </div>
    </div>
  );
}
