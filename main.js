const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".section__container h3", {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal(".grid", {
    ...scrollRevealOption,
    origin: "top",
    delay: 300,
  });
  ScrollReveal().reveal(".grid__2", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
  });
  ScrollReveal().reveal(".grid__3", {
    ...scrollRevealOption,
    origin: "right",
    delay: 600,
  });
  ScrollReveal().reveal(".gallery", {
    ...scrollRevealOption,
    origin: "top",
    delay: 300,
  });
  ScrollReveal().reveal(".beauty__video", {
    ...scrollRevealOption,
    origin: "left",
    delay: 100,
  });
  ScrollReveal().reveal(".section__title--subtitle", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".section__title--sub", {
    ...scrollRevealOption,
    origin: "top",
    delay: 600,
  });
  ScrollReveal().reveal(".third__header", {
    ...scrollRevealOption,
    origin: "right",
    delay: 400,
  });
  ScrollReveal().reveal(".section__container h1", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
  });
  ScrollReveal().reveal(".section__container h2", {
    ...scrollRevealOption,
    origin: "right",
    delay: 1000,
  });
  ScrollReveal().reveal(".section__container button", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  ScrollReveal().reveal(".nav__links li", {
    ...scrollRevealOption,
    origin: "top",
    interval: 300,
    delay: 2000,
  });
  
  ScrollReveal().reveal(".socials a", {
    duration: 1000,
    interval: 500,
    delay: 4000,
  });