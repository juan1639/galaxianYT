import { Jugador } from './jugador.js';
import { Enemigo } from './enemigo.js';

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

const enemigosImg = new Image();
enemigosImg.src = "./anima-enemigosGalaxian.png";

//  OBJETOS
let jugador;
let enemigos = [];

let formacion =
{
    direccion: 2,
    x: 0,
};

// ========================================================
//  FUNCION INICIALIZADORA
// --------------------------------------------------------
window.onload = function()
{
    canvas.width = ANCHO_PANTALLA;
    canvas.height = ALTO_PANTALLA;

    jugador = new Jugador(ctx, jugadorImg, ANCHO_PANTALLA, ALTO_PANTALLA);

    for (let y = 0; y < 4; y ++)
    {
        for (let x = 0; x < 8; x ++)
        {
            enemigos.push(new Enemigo(ctx, enemigosImg, x, y));
        }
    }

    buclePrincipal();
}

//  BUCLE PRINCIPAL (LOOP)
function buclePrincipal()
{
    window.requestAnimationFrame(buclePrincipal);
    //console.log('running');

    ctx.clearRect(0, 0, ANCHO_PANTALLA, ALTO_PANTALLA);

    ctx.drawImage(fondoImg, 0, 0, ANCHO_PANTALLA, ALTO_PANTALLA);
    ctx.drawImage(planetaTierraImg, 200, 200, 180, 180);

    jugador.dibuja();

    formacion.x += formacion.direccion;

    if (formacion.x > 100 && formacion.direccion > 0) formacion.direccion *= -1;
    if (formacion.x < -60 && formacion.direccion < 0) formacion.direccion *= -1;

    enemigos.forEach(ene =>
    {
        ene.dibuja(formacion.x);
    });
}
