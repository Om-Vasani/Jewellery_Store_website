theme: {
  extend: {
    keyframes: {
      "slide-up": {
        "0%": { transform: "translateY(50px)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      "fade-in": {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
    animation: {
      "slide-up": "slide-up 0.6s ease-out",
      "fade-in": "fade-in 0.8s ease-in",
    },
  },
},
