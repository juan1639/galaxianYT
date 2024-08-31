export class Jugador
{
    constructor(ctx, imagen, anchoPantalla, altoPantalla)
    {
        this.ctx = ctx;
        this.imagen = imagen;

        this.ancho = 50;
        this.alto = 80;

        this.x = anchoPantalla / 2;
        this.y = altoPantalla - this.alto;
        
        console.log(this);

    }

    dibuja()
    {
        this.ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
    }
}
