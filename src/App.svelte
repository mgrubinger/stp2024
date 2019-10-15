<script>
	import humanizeDuration from 'humanize-duration';
	import FpsCtrl from './fpsctrl'
	
	let target = new Date("2019-11-10 10:00");
	let timeLeft = 0;
	$: timeLeftHuman = humanizeDuration(timeLeft, { language: 'de', spacer: ' ', delimiter: "<br/>", round: true , units: ['y', 'mo', 'w', 'd', 'h', 'm', 's', 'ms'] });
	
	const calcTimeleft = () => {
		timeLeft = target - new Date();
	};

	// create a new FpsCtrl and start it
	var fc = new FpsCtrl(24, function(e) {
		calcTimeleft();
	});
	fc.start();
	
</script>

<style>

main {
	width: auto;
	max-width: 600px;
	margin: 2rem;
	line-height: 150%;
}

h1 {
	color: #fff400;
	font-size: 3rem;
	line-height: 130%;
	hyphens: auto;
}

p {
	font-size: 1.2rem;
	margin-top: 1rem;
	margin-bottom: 1rem;
	font-weight: 500;
}
.time {
	font-size: 3rem;
	line-height: 130%;
	margin-top: 1rem;
	margin-bottom: 2rem;
	hyphens: auto;
}

footer {
	position: fixed;
	bottom: 0;
	right: 0;
	padding: 0.5rem;
}

a {
	color: #fff;
	text-decoration: underline;
}

@media screen and (max-width: 380px) {
	main {
		margin: 10px;
	}
	.time {
		font-size: 2.3rem;
	}
}

</style>

<main>

	<h1>Wird St. Pölten<br/>Kulturhauptstadt 2024?</h1>
	<p>Sie erfahren es auf dieser Seite, und zwar in:</p>
	<h2 class="time">{@html timeLeftHuman}</h2>

</main>
<footer>
	A project by <a href="https://www.grooovinger.com" rel="noopener">grooovinger</a>
</footer>