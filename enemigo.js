
export class Enemigo
{
    constructor(ctx, ssheet, x, y)
    {
        this.ctx = ctx;
        this.ssheet = ssheet;

        this.ancho = 64;
        this.alto = 48;

        this.gap = 20;
        this.marginX = 60;
        this.marginY = 60;

        this.x = this.marginX + x * (this.ancho + this.gap);
        this.y = this.marginY + y * (this.alto + this.gap);

        this.alive = true;

        this.frame = 0;
        
        this.intervalo = setInterval(() =>
        {
            this.frame ++;
            if (this.frame > 2) this.frame = 0; 
        }, 200);
    }

    dibuja(formacionX)
    {
        this.actualiza(formacionX);

        const clipX = Math.floor(this.ssheet.width / 3);

        if (this.alive)
        {
            this.ctx.drawImage(this.ssheet,
                this.frame * clipX, 0, clipX, this.ssheet.height,
                this.xForm, this.y, this.ancho, this.alto);
        }
    }

    actualiza(formacionX)
    {
        this.xForm = this.x + formacionX;
    }
}
