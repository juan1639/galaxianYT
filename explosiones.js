
export class Explosiones
{
    constructor(ctx, nroFragmentos, xOrigen, yOrigen)
    {
        this.ctx = ctx;

        this.nroFragmentos = nroFragmentos;
        this.xOrigen = xOrigen;
        this.yOrigen = yOrigen;
        this.creaFragmentos(nroFragmentos, xOrigen, yOrigen);

        console.log(this.totalFragmentos);
    }

    creaFragmentos(nroFragmentos, xOrigen, yOrigen)
    {
        let arrayColores = ['red', 'red', 'orangered', 'yellowgreen', 'lighgreen', 'lightyellow', 'yellow'];
        let fragmento;
        this.totalFragmentos = [];

        for (let i = 0; i < nroFragmentos; i ++)
        {
            const angulo = Math.floor(Math.random() * 360);
            const elegirColor = Math.floor(Math.random() * arrayColores.length);
            const color = arrayColores[elegirColor];

            fragmento = new Fragmento(
                xOrigen, yOrigen,
                angulo * Math.PI / 180,
                Math.floor(Math.random() * 15) + 3,
                Math.floor(Math.random() * 6) + 2,
                color
            );

            this.totalFragmentos.push(fragmento);
        }
    }

    dibuja()
    {
        this.totalFragmentos.forEach(frag =>
        {
            frag.x += Math.cos(frag.angulo) * frag.vel;
            frag.y += Math.sin(frag.angulo) * frag.vel;

            this.ctx.fillStyle = frag.color;
            this.ctx.fillRect(frag.x, frag.y, frag.size, frag.size);
        });

    }
}

// ===========================================================================
class Fragmento
{
    constructor(xOrigen, yOrigen, angulo, vel, size, color)
    {
        this.x = xOrigen;
        this.y = yOrigen;
        this.angulo = angulo;
        this.vel = vel;
        this.size = size;
        this.color = color;
    }
}
