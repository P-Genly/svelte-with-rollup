<script lang="ts">
    import { onMount } from 'svelte';
    export let title: string;
    export let onClick = () => {
        alert('Hi everybody!')
    }

    onMount(() => {
        console.log('test');
    })
</script>

<div>
    <button on:click={onClick}>
        { title }
    </button>
</div>
