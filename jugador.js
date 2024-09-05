import { Disparo } from "./disparo.js";

export class Jugador
{
    constructor(ctx, imagen, imagenDisparo, arrayDisparos, anchoPantalla, altoPantalla)
    {
        this.ctx = ctx;
        this.imagen = imagen;
        this.imagenDisparo = imagenDisparo;

        this.ancho = 50;
        this.alto = 80;

        this.velX = 18;

        this.x = anchoPantalla / 2;
        this.y = altoPantalla - this.alto;

        this.arrayDisparos = arrayDisparos;
        
        console.log(this);
    }

    dibuja()
    {
        this.ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
    }

    instanciaNuevoDisparo()
    {
        this.arrayDisparos.push(new Disparo(this.ctx, this.imagenDisparo, this.arrayDisparos,
            this.x + this.ancho / 2 - this.imagenDisparo.width / 2, this.y - this.alto / 1.3));

        console.log(this.arrayDisparos);
    }

    izquierda()
    {
        this.x -= this.velX;
    }

    derecha()
    {
        this.x += this.velX;
    }
}
