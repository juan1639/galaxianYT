import { DisparoEnemigo } from "./disparosEnemigos.js";

export class Enemigo
{
    constructor(ctx, ssheet, x, y, id, arrayDisparosEnemigos, imagenDisparoEne)
    {
        this.ctx = ctx;
        this.ssheet = ssheet;
        this.id = id;

        this.arrayDisparosEnemigos = arrayDisparosEnemigos;
        this.imagenDisparoEne = imagenDisparoEne;

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

        this.instanciaDisparoEnemigo();
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

        this.activarDisparo();
    }

    instanciaDisparoEnemigo()
    {
        this.arrayDisparosEnemigos[this.id] = new DisparoEnemigo(this.ctx, this.imagenDisparoEne,
            this.x + this.ancho / 2 - this.imagenDisparoEne.width / 2, this.y + this.alto / 1.3, this.id);
        
    }

    activarDisparo()
    {
        if (!this.alive) return;// IMPORTANTE, Se me olvido que el enemigo tiene que existir, si no, nos disparan desde la 'nada' xD

        const rnd = Math.floor(Math.random() * 10000);
        if (rnd > 9) return;

        this.arrayDisparosEnemigos[this.id].activo = true;// ACTIVAR DISPARO ENEMIGO

        this.arrayDisparosEnemigos[this.id].x = this.x + this.ancho / 2 - this.imagenDisparoEne.width / 2;
        this.arrayDisparosEnemigos[this.id].y = this.y + this.alto / 1.3, this.id;
    }
}
