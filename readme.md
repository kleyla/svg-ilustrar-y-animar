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
-

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

- `d`
- ``
- ``

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

## Optimizacion SVG

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

## Incorporando SVG a la web
