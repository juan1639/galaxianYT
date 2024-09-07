
export class Explosiones2
{
    constructor(ctx, ssheet, xOrigen, yOrigen)
    {
        this.ctx = ctx;
        this.ssheet = ssheet;
        this.x = xOrigen;
        this.y = yOrigen;

        this.nroFrames = 10;
        this.ralentiza = 3;// 1=vel-normal, 2=vel-doble-lento, etc...

        this.frame = 0;
        this.duracion = this.nroFrames * this.ralentiza;
    }

    dibuja()
    {
        this.actualiza();

        const clip = this.ssheet.width / this.nroFrames;
        const alto = this.ssheet.height;

        if (this.duracion > 0)
        {
            this.ctx.drawImage(
                this.ssheet, Math.floor(this.frame / this.ralentiza) * clip, 0, clip, alto,
                this.x, this.y, clip, alto
            );
        }
    }

    actualiza()
    {
        this.duracion --;
        this.frame ++;
    }
}
