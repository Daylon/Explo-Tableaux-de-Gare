import { animate, linear, easeInOut } from "popmotion"
import fastdom from "fastdom"

// un calcul bien compliqué pour singer le css
// … Mais qui nous servira ensuite à avoir une référence sur la place dispo dans le viewport par rapport au nombre de tableaux
// on présuppose qu'un tableau fera peu ou prou la largeur du viewport (peu ou prou car margin/paddings, etc.)
const tableWidth = 360 * .75 - 16; //cf. css, donc


// le conteneur des tableaux
const timetablesContainer = document.getElementById('timetables-list');
// l'ensemble des tableaux affichés
const timetables = document.querySelectorAll('.timetable')
// on prépare un tableau qui contiendra les différentes tailles de tableaux
const heights = new Array()

//const threshold = .5 // useless, ça crée du bug pour le premier élément; le mieux serait d'enfermer la valeur du scroll dans une "boîte" mais c'est un proto rapide donc exit cette solution

// on mémorise "qui" est affiché ("actif") vs. qui *pourrait* ou *devra* être affiché
let currentActive = 0
let candidateSnapPoint = 0
// mem alloc, tout ça
let currentHeight = -1
let targetHeight = -1
// va servir à créer un buffer entre les évènements de scroll et un état "au repos" de la page
let scrollTimer = -1
// pour éviter que ça danse la gigue dans le viewport, on bloque l'accès à popmotion si on a déjà déclenché une anim
let lockAnimation = false

// on va chercher les tailles des différents horaires à intégrer en HP
fastdom.measure(() => {
    timetables.forEach((table, index ) => {
        heights.push( table.getBoundingClientRect().height )
    });
})

// si la page est au repos, alors on checke s'il existe une différence entre le tableau actif et celui "retenu"
let scrollFinished = () => {
    if(
        currentActive != candidateSnapPoint
        && lockAnimation === false
    ){
        lockAnimation = true
        runMutation()                
    }
}

// tout scrollevent. Comme en web desk/mobile, c'est un peu le bazar, c'est de facto fourre-tout comme event
let scrollEvent = (e) => {
    fastdom.measure(() => {
        candidateSnapPoint = Math.round( timetablesContainer.scrollLeft / tableWidth )
        if (scrollTimer != -1) clearTimeout(scrollTimer)
        scrollTimer = window.setTimeout(scrollFinished, 150)
    })
}

// on va lancer une anim un peu smooth pour changer la taille du conteneur
let runMutation = () => {
    animate({
        from: heights[currentActive], 
        to: heights[candidateSnapPoint],
        ease: easeInOut,
        onUpdate: latest => {
            timetablesContainer.style.height = `${latest}px`
        },
        onComplete: () => {
            currentActive = candidateSnapPoint
            lockAnimation = false
        }
    })
}

// listerner et autres inits
timetablesContainer.addEventListener('scroll', scrollEvent)

