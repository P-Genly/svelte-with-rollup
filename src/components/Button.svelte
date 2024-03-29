<script lang="ts">
    export let title: string;
    export let onClick = () => {
        alert('Hi everybody!')
    }
</script>

<div>
    <button on:click={onClick}>
        { title }
    </button>
</div>
