<script>
    import Header from "./Components/Header.svelte";
	import { v4 as uuidv4 } from 'uuid';

	// State Variables
	let tasks = [];
	let taskName = '';

	function addTask(){
		if(taskName.trim() === ""){
			return;
		}
		else{
			tasks = [...tasks, {id:uuidv4(), name:taskName, completed:false}];
			taskName = "";
		}
	}

	function removeTask(id){
		tasks = tasks.filter(task => task.id !== id);
	}

</script>

<!-- Header -->
<Header title="To Do List"/>

<!-- Main content -->
<main>
	<span>
		<input type="text" placeholder="Add new task" bind:value={taskName}/>
  		<button on:click={addTask}>Add</button>
	</span>
	{#if tasks.length > 0}
	<table>
		<thead>
			<tr>
			<th>Name</th>
			<th>Completed</th>
			<th>Remove</th>
			</tr>
		</thead>
		<tbody>
			{#each tasks as task (task.id)}
			<tr>
				<td>{task.name}</td>
				<td>
				<input type="checkbox" bind:checked={task.completed} />
				</td>
				<td>
				<button on:click={() => removeTask(task.id)}>Remover</button>
				</td>
			</tr>
			{/each}
		</tbody>
	</table>
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		flex: 1;
		align-items: center;
		height: 100vh;
		padding: 1.5em;
		max-width: 380px;
		margin: 0 auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	th, td {
		padding: 8px;
		text-align: left;
		border-bottom: 2px solid #ddd;
		white-space: nowrap; 
		overflow: hidden; 
		text-overflow: ellipsis;
	}

	/*Keeping the proportionality for each column*/

	/* Adjust the width of columns as needed */
	th:first-child,
	td:first-child {
		width: 50%;
	}

	th:nth-child(2),
	td:nth-child(2) {
		width: 25%;
	}

	th:nth-child(3),
	td:nth-child(3) {
		width: 25%;
	}

	button{
		color: cyan;
		background-color: rgba(12, 11, 11, 0.884);
		border-radius: 10px;
	}

	td button{
		color: rgba(12, 11, 11, 0.884);
		background-color: cyan;
		border-radius: 10px;
	}

</style>