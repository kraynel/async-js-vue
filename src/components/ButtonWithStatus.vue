<template>
    <div class="buttonWithStatus">
        <button
            class="buttonToggleUpsideDown"
            v-on:click="toggleCall"
        >
            {{buttonText}}
        </button>
        <span>{{strangerStatus}}</span>
    </div>
</template>

<script>
export default {
  name: 'ButtonWithStatus',
  props: ['buttonText', 'toggleCall', 'strangerStatus']
}
</script>