import { Jugador } from './jugador.js';
import { Enemigo } from './enemigo.js';
import { Explosiones } from './explosiones.js';
import { leerTeclado, leerTecladoSoltarTecla} from './eventosListener.js';
import { checkColisiones } from './funciones.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const ANCHO_PANTALLA = 800;
const ALTO_PANTALLA = 600;

//  IMAGENES
const fondoImg = new Image();
fondoImg.src = "./fondo-espacial-geralt.jpg";

const planetaTierraImg = new Image();
planetaTierraImg.src = "./planet.png";

const jugadorImg = new Image();
jugadorImg.src = "./nava-galaxian200x200.png";

const disparoImg = new Image();
disparoImg.src = "./blaster-2.png";

const enemigosImg = new Image();
enemigosImg.src = "./anima-enemigosGalaxian2.png";

//  AUDIO
const sonidoDisparo = new Audio("./audio/disparo_corto.mp3");
const sonidoExplosion = new Audio("./audio/explosion.wav");

//  OBJETOS
let jugador;
let arrayDisparos = [];
let arrayEnemigos = [];
let explosion;

let formacion =
{
    direccion: 2,
    x: 0,
};

// ====================================================================
//  FUNCION INICIALIZADORA
//  
// --------------------------------------------------------------------
window.onload = function()
{
    canvas.width = ANCHO_PANTALLA;
    canvas.height = ALTO_PANTALLA;

    jugador = new Jugador(ctx, jugadorImg, disparoImg, arrayDisparos, ANCHO_PANTALLA, ALTO_PANTALLA);

    for (let y = 0; y < 4; y ++)
    {
        for (let x = 0; x < 8; x ++)
        {
            arrayEnemigos.push(new Enemigo(ctx, enemigosImg, x, y));
        }
    }

    console.log(arrayEnemigos);

    buclePrincipal();
}

// ===================================================================
//  BUCLE PRINCIPAL (LOOP)
//  
// -------------------------------------------------------------------
function buclePrincipal()
{
    window.requestAnimationFrame(buclePrincipal);
    //console.log('running');

    ctx.clearRect(0, 0, ANCHO_PANTALLA, ALTO_PANTALLA);

    ctx.drawImage(fondoImg, 0, 0, ANCHO_PANTALLA, ALTO_PANTALLA);
    ctx.drawImage(planetaTierraImg, 200, 200, 180, 180);

    jugador.dibuja();

    arrayDisparos.forEach(disp =>
    {
        disp.dibuja();
    });

    formacion.x += formacion.direccion;

    if (formacion.x > 100 && formacion.direccion > 0) formacion.direccion *= -1;
    if (formacion.x < -60 && formacion.direccion < 0) formacion.direccion *= -1;

    arrayEnemigos.forEach((ene, index) =>
    {
        ene.dibuja(formacion.x);

        arrayDisparos.forEach((disp, i) =>
        {
            if (checkColisiones(ene, disp))
            {
                if (ene.alive)
                {
                    console.log('colision ' + index);
                    ene.alive = false;
                    arrayDisparos.splice(i, 1);

                    explosion = new Explosiones(ctx, 40, ene.xForm, ene.y);
                    sonidoExplosion.play();
                }
            }
        });
    });

    if (explosion) explosion.dibuja(); 
}

export { jugador, sonidoDisparo };
