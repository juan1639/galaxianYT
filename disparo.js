
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

        this.ctx.save();
        this.ctx.filter = 'blur(2px) brightness(2)';

        this.ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
        this.ctx.restore();
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
