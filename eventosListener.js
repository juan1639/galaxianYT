import { jugador, sonidoDisparo } from './main.js';

export const leerTeclado = document.addEventListener('keydown', (e) =>
{
    console.log(e);
    console.log(e.key);

    if (e.key === 'ArrowLeft')
    {
        console.log('izquieda');
        jugador.izquierda();

    }
    else if (e.key === 'ArrowRight')
    {
        console.log('derecha');
        jugador.derecha();
    }

    if (e.key === ' ')
    {
        console.log('disparo!');
        jugador.instanciaNuevoDisparo();
        sonidoDisparo.play();
    }
});
