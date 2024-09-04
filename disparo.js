
export class Disparo
{
    constructor(ctx, imagen, arrayDisparos, xNave, yNave)
    {
        this.ctx = ctx;
        this.imagen = imagen;

        this.ancho = 8;
        this.alto = 64;

        this.velY = -8;

        this.x = xNave;
        this.y = yNave;

        this.arrayDisparos = arrayDisparos;
        
        //console.log(this);
    }

    dibuja()
    {
        this.actualiza();

        this.ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
    }

    actualiza()
    {
        this.y += this.velY;

        if (this.y <= -this.alto)
        {
            this.arrayDisparos.shift();
        }
    }
}
