<script>
	// State variables
	let weight = 0;    			// user's weight
	let height = 0;    			// user's height
	let imc = 0;       			// user's IMC
	let categoryName = ""; 		// Category of IMC
	let categoryIDForCSS = "";  // Category ID for css
  
	// Função para calcular o IMC
	function calculateIMC() {
	  if (weight > 0 && height > 0) {
		imc = (weight / Math.pow(height, 2)).toFixed(2);

		const imcRanges = [
        { name: "Underweight", cssID: "under", min: 0, max: 18.5 },
        { name: "Normal Weight", cssID: "normal", min: 18.6, max: 24.9 },
        { name: "Overweight", cssID: "over", min: 25, max: 29.9 },
        { name: "Obese Class I", cssID: "obese1", min: 30, max: 34.9 },
        { name: "Obese Class II", cssID: "obese2", min: 35, max: 39.9 },
        { name: "Obese Class III", cssID: "obese3", min: 40, max: 1000 },
        ];

		// Determine the IMC category
		for (const range of imcRanges) {
			if (imc >= range.min && imc <= range.max) {
				categoryName = range.name;
				categoryIDForCSS = range.cssID;
				break;
			}
		}

	  } else {
		imc = 0;
		categoryName="";
		categoryIDForCSS="";
	  }

	}
</script>
  
<main>
	<div>
		<h1>IMC Calculator</h1>
		<label>
		Weight (kg): <input type="number" bind:value={weight} on:input={calculateIMC} />
		</label>
		<label>
		Height (m): <input type="number" bind:value={height} on:input={calculateIMC} />
		</label>
		{#if imc > 0}
		<p>Your IMC is: {imc}</p>
		<p id={categoryIDForCSS}>Category: {categoryName}</p>	
		{/if}
	</div>
</main>
  
<style>
	* {
	  margin: 0;
	  padding: 0;
 	  box-sizing: border-box;
	}

	main {
	  font-family: sans-serif;
	  text-align: center;
	  background-color: rgba(12, 11, 11, 0.884);
	  padding: 2rem;
	}
  
	h1 {
	  font-size: 1.5rem;
	  margin-bottom: 1rem;
	  color: cyan
	}
  
	label {
	  display: block;
	  color: white;
	  margin-bottom: 0.5rem;
	}
  
	input {
	  padding: 0.25rem;
	}

	p{
	  padding: 0.25rem;
	  color: cyan;
	}

	p#under {
	background-color: #FFEBEE; /* Light red */
	color: #D32F2F; /* Dark red */
	}

	p#normal {
	background-color: #E8F5E9; /* Light green */
	color: #388E3C; /* Dark green */
	}

	p#over {
	background-color: #FFFDE7; /* Light yellow */
	color: #FBC02D; /* Dark yellow */
	}

	p#obese1 {
	background-color: #FFE0B2; /* Light orange */
	color: #FF5722; /* Dark orange */
	}

	p#obese2 {
	background-color: #FFCCBC; /* Light peach */
	color: #E91E63; /* Dark pink */
	}

	p#obese3 {
	background-color: #E0E0E0; /* Light gray */
	color: #607D8B; /* Dark gray */
	}

</style>
  