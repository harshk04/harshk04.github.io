import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const FooterParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles-footer"
      init={particlesInit}
      className="absolute inset-0"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        detectRetina: true,
        background: {
          color: 'transparent',
        },
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            onClick: {
              enable: false,
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.3,
            },
          },
        },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              area: 700,
            },
          },
          color: {
            value: ['#ffffff', '#e0f2ff', '#bde0fe', '#a2d2ff'],
          },
          opacity: {
            value: 0.45,
            random: {
              enable: true,
              minimumValue: 0.3,
            },
            animation: {
              enable: true,
              speed: 0.4,
              minimumValue: 0.3,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: 'none',
            random: true,
            straight: false,
            outModes: {
              default: 'out',
            },
          },
          links: {
            enable: false,
          },
          shape: {
            type: 'circle',
          },
        },
        responsive: [
          {
            maxWidth: 768,
            options: {
              particles: {
                number: {
                  value: 30,
                },
                move: {
                  speed: 0.4,
                },
              },
              interactivity: {
                events: {
                  onHover: {
                    enable: false,
                  },
                },
              },
            },
          },
        ],
      }}
    />
  );
};

export default FooterParticles;
