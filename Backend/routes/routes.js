import {Router} from 'express';

const route = Router();

route.get('/created', (req, res) => {
    return res.status(201).json ({
        msg: 'Ok'
    })
})

route.get('/personajes-principales', (req, res) => {
    return res.status(200).json ({
        personajes: [
            {
                nombre: 'Meliodas',
                img: 'http://pm1.narvii.com/7501/7cb5300bf8c279547801c2b6ef7ec109efeba89ar1-735-664v2_uhq.jpg',
                naturaleza: 'Demonio',
                habilidad: 'Contra-ataque',
                pecado: 'Ira',
                simbolo: 'Dragón'
            },
            {
                nombre: 'Ban',
                img: 'https://botmake.io/storage/6f9d6adaae980280dbe34854367f4b72/users/d2dfe137b63a42b0571990feffa31f5a.jpg?v=1619963972',
                naturaleza: 'Humano',
                habilidad: 'Snatch',
                pecado: 'Avaricia',
                simbolo: 'Zorro'
            },
            {
                nombre: 'King',
                img: 'https://i.pinimg.com/originals/c6/3f/d7/c63fd7feed1b12af9a2d154d5d765070.jpg',
                naturaleza: 'Hada',
                habilidad: 'Disaster',
                pecado: 'Pereza',
                simbolo: 'Grizzly'
            },
            {
                nombre: 'Merlin',
                img: 'http://pm1.narvii.com/6758/a8cf9524e90982ea3c681414718192e77bad21cfv2_00.jpg',
                naturaleza: 'Humana',
                habilidad: 'Infinidad',
                pecado: 'Gula',
                simbolo: 'Jabalí'
            },
            {
                nombre: 'Escanor',
                img: 'https://i.pinimg.com/originals/5d/e0/32/5de0326ba9d4614cef36341802746331.jpg',
                naturaleza: 'Humano',
                habilidad: 'Sunshine',
                pecado: 'Soberbia',
                simbolo: 'León'
            },
            {
                nombre: 'Gowther',
                img: 'https://laverdadnoticias.com/__export/1614029365022/sites/laverdad/img/2021/02/22/gowther_seven_deadly_sins.jpg_423682103.jpg',
                naturaleza: 'Muñeco',
                habilidad: 'Invasión',
                pecado: 'Lujuria',
                simbolo: 'Cabra'
            },
            {
                nombre: 'Diane',
                img: 'https://www.ecured.cu/images/thumb/8/8d/DianeAnime7PecadosCapitales.jpg/260px-DianeAnime7PecadosCapitales.jpg',
                naturaleza: 'Gigante',
                habilidad: 'Creation',
                pecado: 'Envidia',
                simbolo: 'Serpiente'
            }

        ],
        descripcion: "Personajes principales de la serie Los Siete Pecados Capitales"
    })
})

export default route;