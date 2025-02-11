import react from "../public/assets/react.svg";
import k8s from "../public/assets/k8s.svg";
import code from "../public/assets/code.png";
import smallDeer from "../public/assets/small-deer.svg";
import {
  ClickMode,
  HoverMode,
  type ISourceOptions,
  MoveDirection,
  OutMode,
  ThemeMode,
} from "tsparticles-engine";
import {
  PolygonMaskType,
  PolygonMaskInlineArrangement,
} from "tsparticles-plugin-polygon-mask";

export type TFrame = {
  backgroundColor: string;
  name: string;
  options?: ISourceOptions;
  slug: string;
};

export const frames: TFrame[] = [
  {
    backgroundColor: "linear-gradient(135deg, #606c88 0%, #3f4c6b 100%)",
    name: "Simple",
    options: {
      fpsLimit: 120,
      particles: {
        number: {
          value: 50,
        },
        size: {
          value: 3,
        },
        move: {
          enable: true,
        },
        links: {
          enable: true,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: HoverMode.repulse,
          },
        },
      },
    },
    slug: "simple",
  },
  {
    backgroundColor: "#232741",
    name: "Bubbles",
    options: {
      fpsLimit: 120,
      particles: {
        number: {
          value: 160,
          density: {
            enable: false,
          },
        },
        size: {
          value: { min: 0.3, max: 3 },
          animation: {
            speed: 4,
          },
        },
        links: {
          enable: false,
        },
        move: {
          enable: true,
          random: true,
          speed: 1,
          direction: MoveDirection.top,
          outModes: OutMode.out,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: HoverMode.bubble,
          },
          onClick: {
            enable: true,
            mode: ClickMode.repulse,
          },
        },
        modes: {
          bubble: {
            distance: 250,
            duration: 2,
            size: 0,
            opacity: 0,
          },
          repulse: {
            distance: 400,
            duration: 4,
          },
        },
      },
    },
    slug: "bubbles",
  },
  {
    backgroundColor:
      "linear-gradient(to bottom, #a90329 0%,#8f0222 44%,#6d0019 100%)",
    name: "Snow",
    options: {
      fpsLimit: 120,
      particles: {
        number: {
          value: 160,
          density: {
            enable: false,
          },
        },
        size: {
          value: { min: 1, max: 10 },
        },
        move: {
          enable: true,
          direction: MoveDirection.bottom,
          outModes: OutMode.out,
        },
        links: {
          enable: false,
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: ClickMode.remove,
          },
        },
        modes: {
          remove: {
            quantity: 10,
          },
        },
      },
    },
    slug: "snow",
  },
  {
    backgroundColor: "linear-gradient(45deg, #2d364c 0%,#252d3f 100%)",
    name: "Night Sky",
    options: {
      fpsLimit: 120,
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            area: 1500,
          },
        },
        links: {
          enable: true,
          opacity: 0.02,
        },
        move: {
          enable: true,
          direction: MoveDirection.right,
          speed: 0.05,
        },
        size: {
          value: 1,
        },
        opacity: {
          value: { min: 0.05, max: 1 },
          animation: {
            enable: true,
            speed: 1,
          },
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: ClickMode.push,
          },
        },
        modes: {
          push: {
            quantity: 1,
          },
        },
      },
      detectRetina: true,
    },
    slug: "night-sky",
  },
  {
    backgroundColor: "linear-gradient(45deg, #7d7e7d 0%,#0e0e0e 100%)",
    name: "Multiple images",
    options: {
      fpsLimit: 120,
      particles: {
        number: {
          value: 8,
          density: {
            enable: true,
            area: 800,
          },
        },
        links: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 1,
          outModes: OutMode.out,
        },
        shape: {
          type: ["image", "circle"],
          options: {
            image: [
              {
                src: react,
                height: 20,
                width: 23,
              },
              {
                src: k8s,
                height: 20,
                width: 20,
              },
              {
                src: code,
                height: 20,
                width: 20,
              },
            ],
          },
        },
        color: {
          value: "#CCC",
        },
        size: {
          value: { min: 10, max: 30 },
          animation: {
            enable: true,
            speed: 4,
            sync: false,
          },
        },
      },
      detectRetina: false,
    },
    slug: "images",
  },
  {
    backgroundColor: "linear-gradient(45deg, #45484d 0%,#000000 100%)",
    name: "Polygon mask",
    options: {
      fpsLimit: 60,
      particles: {
        number: {
          value: 200,
          density: {
            enable: false,
          },
        },
        links: {
          enable: true,
          distance: 30,
          opacity: 0.4,
        },
        move: {
          enable: true,
          speed: 1,
          outModes: OutMode.bounce,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 2,
            sync: false,
          },
          value: { min: 0.05, max: 0.4 },
        },
        size: {
          value: 1,
        },
      },
      polygon: {
        enable: true,
        scale: 0.5,
        type: PolygonMaskType.inline,
        move: {
          radius: 10,
        },
        url: smallDeer,
        inline: {
          arrangement: PolygonMaskInlineArrangement.equidistant,
        },
        draw: {
          enable: true,
          stroke: {
            color: "rgba(255, 255, 255, .2)",
          },
        },
      },
      detectRetina: false,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: HoverMode.bubble,
          },
        },
        modes: {
          bubble: {
            size: 6,
            distance: 40,
          },
        },
      },
    },
    slug: "mask",
  },
  {
    backgroundColor: "black",
    name: "Themes",
    options: {
      themes: [
        {
          name: "light",
          default: {
            value: true,
            auto: true,
            mode: ThemeMode.light,
          },
          options: {
            background: {
              color: "#ffffff",
            },
            particles: {
              color: {
                value: ["#000000", "#0000ff"],
              },
            },
          },
        },
        {
          name: "dark",
          default: {
            value: true,
            auto: true,
            mode: ThemeMode.dark,
          },
          options: {
            background: {
              color: "#000000",
            },
            particles: {
              color: {
                value: ["#ffffff", "#ff0000"],
              },
            },
          },
        },
        {
          name: "red",
          options: {
            background: {
              color: "#ff0000",
            },
            particles: {
              color: {
                value: ["#ffffff", "#000000"],
              },
            },
          },
        },
        {
          name: "green",
          options: {
            background: {
              color: "#00ff00",
            },
            particles: {
              color: {
                value: ["#000000", "#0000ff"],
              },
            },
          },
        },
        {
          name: "blue",
          options: {
            background: {
              color: "#0000ff",
            },
            particles: {
              color: {
                value: ["#ffffff", "#00ff00"],
              },
            },
          },
        },
        {
          name: "yellow",
          options: {
            background: {
              color: "#ffff00",
            },
            particles: {
              color: {
                value: ["#000000", "#ff0000"],
              },
            },
          },
        },
        {
          name: "cyan",
          options: {
            background: {
              color: "#00ffff",
            },
            particles: {
              color: {
                value: ["#000000", "#ff00ff"],
              },
            },
          },
        },
        {
          name: "grey",
          options: {
            background: {
              color: "#777777",
            },
            particles: {
              color: {
                value: ["#ffffff", "#000000"],
              },
            },
          },
        },
      ],
      fpsLimit: 60,

      particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        shape: {
          type: ["circle", "square"],
        },
        opacity: {
          value: 1,
        },
        size: {
          value: 30,
          random: {
            enable: true,
            minimumValue: 15,
          },
        },
        rotate: {
          value: 0,
          direction: "random",
          animation: {
            speed: 5,
            enable: true,
          },
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          out_mode: "out",
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
      },
      detectRetina: true,
    },
    slug: "themes",
  },
  {
    backgroundColor: "black",
    name: "No particles",
    options: undefined,
    slug: "no-particles",
  },
];
