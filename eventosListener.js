import { jugador, sonidoDisparo } from './main.js';

export const leerTeclado = document.addEventListener('keydown', (e) =>
{
    //console.log(e);
    console.log(e.key);

    if (e.key === 'ArrowLeft')
    {
        //console.log('izquieda');
        jugador.actualiza(-1);

    }
    else if (e.key === 'ArrowRight')
    {
        //console.log('derecha');
        jugador.actualiza(1);
    }

    if (e.key === ' ')
    {
        console.log('disparo!');
        jugador.instanciaNuevoDisparo();
        sonidoDisparo.play();
    }
});

export const leerTecladoSoltarTecla = document.addEventListener('keyup', (e) =>
{
    //console.log(e);
    console.log(e.key);

    if (e.key === 'ArrowLeft')
    {
        console.log('izquieda');
        jugador.actualiza(0);

    }
    else if (e.key === 'ArrowRight')
    {
        console.log('derecha');
        jugador.actualiza(0);
    }
});
