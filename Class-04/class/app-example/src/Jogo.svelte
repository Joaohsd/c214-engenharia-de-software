<script>
	import Jogador from "./Jogador.svelte";
	
	function scoreGoal(){
		console.log("Scored a goal!");
	}

</script>

<main>

	<h1>
		Show the information when a goal is scored!
	</h1>
	<Jogador acao = {scoreGoal}/>

</main>