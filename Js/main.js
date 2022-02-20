

const app = document.getElementById('typewriter');
const typewriter = new Typewriter(app,{
	loop: true,
	delay: 75

});

typewriter
.typeString('Lorem ipsum dolor sit amet')
.pauseFor(200)
.start();