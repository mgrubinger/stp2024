<script>

	let count = 0;


	function handleClick() {
		count += 1;
		promise = getEats();
	}

	let promise = getEats();

	async function getEats() {
		let res = await fetch(
			'https://api-euwest.graphcms.com/v1/cjuy4n3t715xs01ghng5jxj1a/master', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({"query":"query {eats {title}}"})
		});
		let todos = await res.json();
		if (res.ok) {
			return todos.data.eats;
		}
		else {
			throw new Error(todos);
		}
	}
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>


{#await promise}
	<p>waiting ...</p>
{:then todos}
	<ul>
		{#each todos as { title, completed }}
			<li>{title}</li>
		{/each}
	</ul>
{:catch error}
	<p>Error: {error.message}</p>
{/await}