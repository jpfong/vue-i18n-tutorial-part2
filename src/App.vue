<template>
  <div id="app">
    <p>{{ $t("message.hello") }}</p>
    <p>{{ $t("message.bold") }}</p>
    <p v-html="$t('message.bold')"></p>
    <p>{{ $t("message.namedExample", { amount: 30 })}}</p>
    <p>{{ $tc("message.cake", 1) }}</p>
    <p>{{ $tc("message.cake", 2) }}</p>
    <p>{{ $tc("message.candy", 0) }}</p>
    <p>{{ $tc("message.candy", 1) }}</p>
    <p>{{ $tc("message.candy", 10, { count: 10 }) }}</p>
    <p>{{ $d(new Date(), 'short') }}</p>
    <p>{{ $d(new Date(), 'long') }}</p>
    <p>{{ $d(new Date(), 'long', 'fr') }}</p>
    <p>{{ $n(100, 'currency') }}</p>
    <p>{{ $n(100, 'currency', 'fr') }}</p>
    <p>{{ $n(0.53, 'percent') }}</p>
    <button v-on:click="switchLocale()">{{ displayLocale }}</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    switchLocale () {
      if (this.$i18n.locale === 'fr') {
        this.$i18n.locale = 'en'
      } else {
        this.$i18n.locale = 'fr'
      }
    }
  },
  computed: {
    displayLocale () {
      let other = 'fr'
      if (this.$i18n.locale === 'fr') {
        other = 'en'
      }
      return other
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
