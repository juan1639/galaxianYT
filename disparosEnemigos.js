
export class DisparoEnemigo
{
    constructor(ctx, ssheet, xNave, yNave, id)
    {
        this.ctx = ctx;
        this.ssheet = ssheet;
        this.id = id;

        this.ancho = 18;
        this.alto = 39;

        this.velY = 5;

        this.x = xNave;
        this.y = yNave;

        this.frame = 0;
        
        this.intervalo = setInterval(() =>
        {
            this.frame ++;
            if (this.frame > 2) this.frame = 0; 
        }, 200);

        this.activo = false;
    }

    dibuja()
    {
        this.actualiza();

        const clipX = Math.floor(this.ssheet.width / 4);

        this.ctx.drawImage(this.ssheet,
            this.frame * clipX, 0, this.ancho, this.alto,
            this.x, this.y, this.ancho, this.alto
        );
        
        // this.ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
    }

    actualiza()
    {
        const ALTO_PANTALLA = 600;

        this.y += this.velY;

        if (this.y >= ALTO_PANTALLA)
        {
            this.activo = false;
        }
    }
}
