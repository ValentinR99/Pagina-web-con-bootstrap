const app = document.getElementById(`typewriter`);

const typewriter = new Typewriter (app, {
    loop:true,
    delay:95
});

typewriter
.typeString(`la perla del oeste`)
.pauseFor (1300)
.start();