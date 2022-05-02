# SVG PARA ILUSTRACION Y ANIMACIONES

En `svg` se pueden tener elementos como

- `rect`
- `circle`
- `ellipse`
- `line`
- `polyline`
- `polygon`
- `path` Es la etiqueta mas compleja
- `g`
- `use`
- `defs`
- `symbol`
- `linearGradient`
- `stop`
- `pattern`
- `clipPath`
- `image`
- `mask`

_Estos tag tambien pueden ser alterados desde una hoja de estilos._

## Propiedades

**En general:**

- `width`
- `height`
- `fill` para el color de relleno
- `stroke` Para el color del borde
- `stroke-width` Para el ancho del borde
- `stroke-linejoin` ej. `round` (redondea) o `bevel` (corta en cada esquina), por defecto `miter`
- `viewbox` Este atributo nos permite crear una ventana virtual en el cual nuestro gráfico se va a renderizar, podemos emplearlo para delimitar la parte visible del gráfico, hacer zoom y definir otros comportamientos
- ``

**Para rect**

- `x`
- `y`

**Para circle**

- `cx` para el centro de x
- `cy` para el centro de y
- `r` para el radio

**Para ellipse**

- `cx`
- `cy`
- `rx` para el radio en x
- `ry` para el radio en y

**Para line**

- `x1`
- `y1`
- `x2`
- `y2`
- `stroke` importante
- `stroke-width`
- `stroke-linecap` puede ser `round` o `butt` `square` (genera un cuadrado)

**Para polyline**

- `points`
- `stroke`
- `fill` Por defecto le pone con relleno negro por eso ponemos `fill="none"`

**Para polygon** Se le aplican lo mismo q `polyline` pero este por defecto une el punto inicial con el final.

**Para path**

- M = moveto
- L = lineto
- H = horizontal lineto
- V = vertical lineto
- C = curveto
- S = smooth curveto
- Q = quadratic Bézier curve
- T = smooth quadratic Bézier curveto
- A = elliptical Arc
- Z = closepath

Ejemplo:

```
<path d="M10 10 H 90 V 90 H 10 Z" />
```

- `M10` mueve o inicia el trazo (punto inicial en 10 10)
- `10 H 90 ` Linea horizontal de 10 a 90 como es horizontal no necesitan 4 puntos sino solo 2
- `V 90` Linea vertical (en el eje de y llegara hasta el 90)
- `H 10` Una linea horizontal que llega a 10
- `Z` Cierra el trazo

```
<path d="M10 10 L 200 100" stroke="#e6a57e" />
```

- `L` Marca una linea entre dos puntos

```
<path d="M0,100 Q250,10  500,100" stroke="#e6a57e" />
```

- `Q` Curva cuadratica Bezier, este necesita un punto inicial, otro central (altura de la curva) y el de cierre.

[Ejemplo](https://codepen.io/thebabydino/pen/EKLNvZ)

**viewBox**

Cuado al svg le ponen un `width` y `height` pero el o los elementos que contienen se definen con mas pixeles este quedaria cortado, para fixear eso usamos la propiedad `viewBox` en la etiqueta `svg` esta crea un contenedor virtual que renderiza el dibujo

```html
<svg width="200" height="200" viewBox="0 0 400 400">
  <circle
    cx="200"
    cy="200"
    r="150"
    fill="#d0bcac"
    stroke="#f5bfd2"
    stroke-width="10"
  />
</svg>
```

Cuando las medidas width y height no coincide con el viewBox nosotros podemos decidir como se va redimencionar con `preserveAspectRatio` eg. `preserveAspectRatio="none"` con esto se ajusta.

```html
<svg width="200" height="100" viewBox="0 0 200 100">...</svg>
```

**text**

- `x` con valor de `50%`
- `y` con valor de `50%`
- `font-size`
- `font-family`
- `text-anchor` con el valor de `middle` se centra horizontalmente
- `dominant-baseline` con el valor `middle` se centra verticalmente
- `dx` para desplazar en el eje x
- `dy` para desplazar en el eje y
- **tspan** es como `span` podemos usar este para dar otro estilo

## Organizacion SVG

Estas etiquetas nos van a permitir agrupar elementos SVG, definirlos y reutilizarlos, ahorrando muchas líneas de código.

**group g**

`<g></g>`

**use**

Usamos use para volver a usar un trazo que hayamos definido con un id

```
<path id="ejemplo" d="..." />
<use x="50" y="50" xlink:href="#ejemplo" />
```

**Definiciones defs**

Definimos trazos, degradados que inicialmente no se usaran, mas tarde los podemos usar en en algun elemento llamandolo con `xlink:href`

```
<defs>
  <path id="ejemplo" d="..." />
</defs>

<textPath xlink:href="#ejemplo" ></textPath>
```

**symbol**

Es quiza la unica etiqueta q puede tener `viewBox`. Podemos crear el svg y volverlo a usar muchas veces.

```
<svg style="display: none;">
  <symbol id="ejemplo" viewBox="0 0 100 100">
  ...
  </symbol>
</svg>

<svg>
  <use xlink:href="#ejemplo" />
</svg>
<svg>
  <use xlink:href="#ejemplo" />
</svg>
```

## Incorporando SVG a la web

## Cargar SVG a la web

Es necesario usar el atributo `xmlns` para q se renderize adecuadamente

```
<svg
  xmlns="http://www.w3.org/2000/svg"
>
</svg>
```

Y si ocupamos el protocolo `xlink` por ejemplo para vincular una imagen

```
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
</svg>
```

Si agregamos svg como imagenes o de fondo en css, por ejemplo:

```
<img src="logo.svg" />
```

```
.element {
  background-image: url(logo.svg);
}
```

Estas no podran ser controladas por css o js

Lo mejor es tal cual svg o con `object`

```
<object type="image/svg+xml" data="logo.svg">
</object>
```

https://github.com/jonathantneal/svg4everybody

### Sistema de iconos

https://icomoon.io/

### SVG responsive

```
<defs>
  <style>
    @media screen and (max-width:900px) {
      .star-1 {
        display: none;
      }
    }
    @media screen and (max-width:600px) {
      .star-2 {
        display: none;
      }
    }
  </style>
</defs>
```

El stroke no escalara como lo hacen el grafico:

```
.exa{
  stroke: green;
  stroke-width: 3px;
  vector-effect: non-scaling-stroke;
}
```

### Accesibilidad SVG

Poner la etiqueta `title` para los lectores de pantalla, esta no afecta al renderizado. El atributo `aria-labelledby` nos ayuda a enlazar este

La etiqueta `desc` nos ayuda a poner una descripcion del svg

El atributo `role` tambien nos ayuda

```
<svg aria-labelledby="titulo descripcion" role="img">
  <title id="titulo">Mi titulo</title>
  <desc id="descripcion">
  Mis descripcion
  </desc>
</svg>
```

### Soporte de navegadores

[caniuse.com](https://caniuse.com/) Podemos analizar el soporte para `svg` para los diferentes navegadores

## Efectos SVG

Similar a la de CSS

```html
<rect transform="rotate(20)" />
<rect transform="scale(1.2)" />
<rect transform="translate(20 20)" /> // en el eje (x y)
<rect transform="skewX(20)" />
<rect transform="skewY(-10)" />
```

Tambien lo podemos poner en CSS

```css
.rectangulo {
  transform: scale(1.5) translate(5px, 0) rotate(50deg);
}
```

Cuando los elementos de SVG rotan no lo hacen desde el centro, sino desde la esquina superior izquierda

```css
.rect-2 {
  animation: rotacion 3s linear infinite;
  transform-origin: 50% 50%;
}
@keyframes rotacion {
  to {
    transform: rotate(360deg);
  }
}
```

En google este se mueve desde su centro, en firefox es diferente ya que lo aplica desde el SVG

```css
.rect-2 {
  animation: rotacion 3s linear infinite;
  transform-origin: 50% 50%;
  transform-box: fill-box; // con esta linea se arregla de firefox
}
```

### Degradados

Por defecto el degradado es horizontal

```html
<svg>
  <defs>
    <linearGradient id="degradado">
      <stop offset="0%" stop-color="#ffff00" />
      <stop offset="100%" stop-color="#ffa500" />
    </linearGradient>
  </defs>
  <rect fill="url(#degradado)" x="0" y="0" width="100%" height="100%" />
</svg>
```

Para in degradado en diagonal:
En `linearGradient` le damos el inicio `x1` y `y1` y el final `x2` y `y2`

```html
<svg width="400" height="200">
  <defs>
    <linearGradient id="degradado2" x1="0" y1="100%" x2="100%" y2="0">
      <stop offset="0%" stop-color="#ffff00" />
      <stop offset="50%" stop-color="hotpink" />
      <stop offset="100%" stop-color="#ffa500" />
    </linearGradient>
  </defs>
  <rect fill="url(#degradado2)" x="0" y="0" width="100%" height="100%" />
</svg>
```

### Patrones

```html
<svg width="400" height="400">
  <defs>
    <pattern
      id="patron"
      x="0"
      y="0"
      width="5"
      height="5"
      patternUnits="userSpaceOnUse"
    >
      <rect width="5" height="5" fill="#762647" />
      <circle cx="3" cy="3" r="1" fill="#e3be70" />
    </pattern>
  </defs>
  <path
    fill="url(#patron)"
    stroke="#ef615f"
    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
    transform="scale(8)"
  />
</svg>
```

### Mascaras y clipping paths

### Filtros

```html
<svg width="400" height="400" viewBox="0 0 600 400">
  <defs>
    <filter id="desenfoca">
      <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
    </filter>
  </defs>
  <image
    filter="url(#desenfoca)"
    xlink:href="https://upload.wikimedia.org/wikipedia/commons/c/c5/CircusTent02.jpg"
    x="-25%"
    y="0"
    height="100%"
    width="100%"
  />
</svg>
```

En index vemos aplicado en hover.

https://testdrive-archive.azurewebsites.net/graphics/hands-on-css3/hands-on_svg-filter-effects.htm

## Animacion en SVG

### Tipos de animacion

SVG tiene un lenguaje propio de animación llamado SMIL, pero está dejando de usarse en favor de la animación con CSS y con JavaScript. Vamos a ver porqué y cuáles son las principales diferencias entre estos métodos

- Animacion CSS: keyframes
- Animacion SMIL: (Algunos navegadores ya no le dan soporte)
- Animacion JS: con librerias
  - Ejemplos: [Estrella](https://codepen.io/jessenwells/pen/WvORge) [Atomo](https://codepen.io/joshy/pen/qBrNdL)

### Animacion de secuencia

[Ejemplo](https://codepen.io/htmlboy/pen/MJzdGW)

### Animacion de dibujado

Un efecto muy llamativo y relativamente simple es el hecho de animar los bordes de una ilustración, dando la impresión de que se dibuja a sí misma.

```html
<svg width="400" height="300" viewBox="0 0 600 500">
  <rect id="rect-draw" x="100" y="50" width="300" height="300" />
</svg>
```

```css
#rect-draw {
  fill: none;
  stroke: #ef615f;
  stroke-width: 5px;
  stroke-dasharray: 1200px;
  stroke-dashoffset: 1200px;
  animation: draw 2s forwards;
}
@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
```

[Ejemplo](https://codepen.io/htmlboy/pen/zNMzVJ)
[Ejemplo firma](https://codepen.io/ghepting/pen/vYLqgr)
[Ejempo heart](https://valhead.com/2017/03/03/three-illustrator-tricks-for-better-svg-stroke-animations/)

### Animacion interactiva

[Ejmplo bombilla](https://codepen.io/htmlboy/pen/bgQXGB)
[Ejemplo bombilla boton](https://codepen.io/htmlboy/pen/MpOzzZ)
[Cubic bezier](https://cubic-bezier.com/#.17,.67,.83,.67)
