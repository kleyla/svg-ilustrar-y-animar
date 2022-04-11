# SVG PARA ILUSTRACION Y ANIMACIONES

En `svg` se pueden tener elementos como

- `rect`
- `circle`
- `ellipse`
- `line`
- `polyline`
- `polygon`
- `path` Es la etiqueta mas compleja
- ``
- ``

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
