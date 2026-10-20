# Ilustraciones de Answer-driver

El juego ya está listo para usar ilustraciones. Cada imagen reemplaza a un emoji en el letrero de la pregunta y en los túneles. Mientras una imagen no exista, el juego sigue mostrando el emoji, así que se pueden subir poco a poco.

## Cómo agregarlas

1. Genera la imagen con el prompt de abajo (ChatGPT o Gemini).
2. Guárdala en **PNG cuadrado, 512 × 512, fondo transparente**, con el nombre exacto de la tabla.
3. Súbela al repo en la carpeta indicada, por ejemplo `img/animals/cat.png`.
4. Vercel la publica sola. No hay que tocar código.

Para una imagen nueva que no esté en la lista, agrega una línea en `data/imagenes.js`: `'🦒':'img/animals/giraffe.png',`

## Prompt base (mismo estilo para todas)

> Cute cartoon illustration of **[SUJETO]**, children's picture-book style, bright cheerful colors, soft thick outlines, simple shapes, centered, whole subject visible, transparent background, no text, no letters, square 1:1.

Cambia solo **[SUJETO]**. Si sale con fondo, pide: *"same image with transparent background"*.

## Lista

### Kinder · `img/animals/`

| Archivo | Sujeto |
|---|---|
| cat.png | a friendly orange cat sitting |
| dog.png | a happy brown puppy sitting |
| bird.png | a small blue bird |
| duck.png | a yellow duck standing |
| pig.png | a pink pig standing |
| cow.png | a black and white cow standing |
| sheep.png | a fluffy white sheep |
| rooster.png | a colorful rooster crowing |
| hen.png | a brown hen |
| horse.png | a brown horse standing |

### 1.er grado · `img/vehicles/`

| Archivo | Sujeto |
|---|---|
| bus.png | a city bus, side view |
| car.png | a small car, side view |
| bike.png | a bicycle, side view |
| truck.png | a delivery truck, side view |
| train.png | a passenger train engine, side view |
| taxi.png | a yellow taxi car, side view |

> Usa colores neutros o variados en los vehículos: el color lo da la pregunta (🔵, 🔴…).

### 2.º grado · `img/places/`

| Archivo | Sujeto |
|---|---|
| library.png | a small library building with books sign |
| playground.png | a playground with a slide and swings |
| school.png | a small school building |
| church.png | a small white church |
| park.png | a park with trees, grass and a bench |
| home.png | a small family house |
| gym.png | a gym with dumbbells |

### 3.er grado · `img/fruits/`

| Archivo | Sujeto |
|---|---|
| banana.png | one banana |
| pineapple.png | one pineapple |
| apple.png | one red apple |
| orange.png | one orange fruit |
| mango.png | one ripe mango |
| basket.png | an empty woven basket |
| cart.png | a shopping cart |
| money.png | a few dollar bills |

### 4.º grado · `img/lunch/`

| Archivo | Sujeto |
|---|---|
| sandwich.png | a sandwich |
| rice.png | a bowl of white rice |
| chicken.png | a roasted chicken drumstick |
| juice.png | a juice box with a straw |
| water.png | a bottle of water |

## Recomendaciones

- Que cada imagen pese menos de 100 KB. Si pesa más, pásala por un compresor (por ejemplo squoosh.app) antes de subirla.
- En los números (🍌🍌🍌) cada emoji se reemplaza por la misma imagen, así que conviene que la fruta salga sola, sin grupo.
