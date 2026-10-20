/* =========================================================
   Answer-driver · Ilustraciones
   Cada emoji de la izquierda se reemplaza por la imagen indicada,
   tanto en el letrero de la pregunta como en los túneles.
   Si la imagen todavía no existe en el repo, el juego sigue
   mostrando el emoji (no se rompe nada).
   Para agregar una: sube el PNG a la carpeta indicada y, si es
   un emoji nuevo, añade una línea aquí.
   ========================================================= */
window.AD_IMAGES = {
  /* ---- Animales (Kinder) ---- */
  '🐱':'img/animals/cat.png',
  '🐶':'img/animals/dog.png',
  '🐦':'img/animals/bird.png',
  '🦆':'img/animals/duck.png',
  '🐷':'img/animals/pig.png',
  '🐮':'img/animals/cow.png',
  '🐑':'img/animals/sheep.png',
  '🐓':'img/animals/rooster.png',
  '🐔':'img/animals/hen.png',
  '🐴':'img/animals/horse.png',

  /* ---- Vehículos (1.er grado) ---- */
  '🚌':'img/vehicles/bus.png',
  '🚗':'img/vehicles/car.png',
  '🚲':'img/vehicles/bike.png',
  '🚚':'img/vehicles/truck.png',
  '🚆':'img/vehicles/train.png',
  '🚕':'img/vehicles/taxi.png',

  /* ---- Lugares (2.º grado) ---- */
  '📚':'img/places/library.png',
  '🛝':'img/places/playground.png',
  '🏫':'img/places/school.png',
  '⛪':'img/places/church.png',
  '🌳':'img/places/park.png',
  '🏠':'img/places/home.png',
  '🏋':'img/places/gym.png',

  /* ---- Frutas y mercado (3.er grado) ---- */
  '🍌':'img/fruits/banana.png',
  '🍍':'img/fruits/pineapple.png',
  '🍎':'img/fruits/apple.png',
  '🍊':'img/fruits/orange.png',
  '🥭':'img/fruits/mango.png',
  '🧺':'img/fruits/basket.png',
  '🛒':'img/fruits/cart.png',
  '💵':'img/fruits/money.png',

  /* ---- Almuerzo (4.º grado) ---- */
  '🥪':'img/lunch/sandwich.png',
  '🍚':'img/lunch/rice.png',
  '🍗':'img/lunch/chicken.png',
  '🧃':'img/lunch/juice.png',
  '💧':'img/lunch/water.png'
};

/* =========================================================
   Teñido de vehículos para las preguntas de color (1.er grado).
   Si en la pregunta aparece un círculo de color (🔵🔴🟡🟢🟣🟠),
   el vehículo se pinta de ese color.
   Cada regla dice qué partes de la ilustración se pintan:
     h       = rangos de tono [desde°, hasta°, saturación mínima]
     neutral = [brillo mín, brillo máx] para cuerpos blancos/grises
   ========================================================= */
window.AD_TINT = {
  '🚗':{h:[[330,25,.35]]},
  '🚕':{h:[[35,60,.35]]},
  '🚚':{h:[[10,40,.35]], neutral:[.55,.97]},
  '🚌':{h:[[340,20,.3]], neutral:[.6,.98]},
  '🚲':{h:[[180,230,.15]]},
  '🚆':{h:[[340,20,.35],[35,60,.35]]}
};
window.AD_TINT_COLORS = {          // tono°, saturación
  '🔵':[215,.75], '🔴':[2,.8],  '🟡':[48,.85],
  '🟢':[125,.7],  '🟣':[275,.6], '🟠':[26,.85]
};
