//  Pasar siempre a las naves enemigas como parametro obj1, debido a xForm
//  (en caso de no usar las naves como parametro, llamar xForm en vez de x ...
//  ... al objeto/clase que se pase como obj1)
export function checkColisiones(obj1, obj2)
{
    return obj1.xForm < obj2.x + obj2.ancho && 
            obj1.xForm + obj1.ancho > obj2.x &&
            obj1.y < obj2.y + obj2.alto && 
            obj1.y + obj1.alto > obj2.y;
}
