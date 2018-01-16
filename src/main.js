// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

Vue.config.productionTip = false

const messages = {
  en: {
    message: {
      bold: 'There is a <b>bold</b> text',
      cake: 'cake | cakes',
      candy: 'no candies | one candy | {count} candies',
      hello: 'hello world',
      namedExample: 'You owe me: $ {amount}'
    }
  },
  fr: {
    message: {
      bold: 'Il y a un texte en <b>gras</b>',
      cake: 'gâteau | gâteaux',
      candy: 'pas de bonbons | un bonbon | {count} bonbons',
      hello: 'Bonjour monde',
      namedExample: 'Vous me devez : {amount} $'
    }
  }
}

const dateTimeFormats = {
  'en': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }
  },
  'fr': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric'
    }
  }
}

const numberFormats = {
  'en': {
    currency: {
      style: 'currency', currency: 'USD'
    },
    percent: {
      style: 'percent'
    }
  },
  'fr': {
    currency: {
      style: 'currency', currency: 'EUR'
    },
    percent: {
      style: 'percent'
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'fr', // set locale
  messages, // set locale messages
  dateTimeFormats, // set date and time formats
  numberFormats // set number formats
})

/* eslint-disable no-new */
const app = new Vue({
  i18n,
  el: '#app',
  template: '<App/>',
  components: { App }
})

export default app
