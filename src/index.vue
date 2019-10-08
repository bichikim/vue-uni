<template>
  <span class="text">{{foo}}</span>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend<{ name: string },
    {
      /* Methods */
    },
    {
      /* Computed */
    },
    {
      /* Props */
    }>({
    data() {
      return {name: 'Jane Doe'}
    },
  })
</script>
