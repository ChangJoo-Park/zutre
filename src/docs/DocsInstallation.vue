<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Installation', link: { name: 'installation' }}]" />

      <h4>Installation</h4>

      <p>
        In order to use <strong>Zutre</strong> in your Vue project, install <strong>npm</strong> package:
      </p>

      <z-code lang="bash">
        npm install --save zutre
      </z-code>
    </z-container>
</template>
<script>
export default {
  name: 'DocsInstallation',
}
</script>

<style lang="scss" scoped>
</style>
