<template>
  <div>
  ID: {{ id }}
  </div>
</template>

<script>
export default {
  name: 'Character',
  computed: {
    id () {
      return this.$route.params.id
    },
    character () {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>
