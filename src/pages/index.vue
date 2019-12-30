<template>
  <q-page class="row flex-center fit bg-dark">
    <transition
      appear
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
    >
      <div
        v-if="enter"
        :class="{ 'main row q-pa-xs': !$q.screen.sm && !$q.screen.xs }"
      >
        <div
          class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"
          :class="{ 'q-pa-xs': !$q.screen.sm && !$q.screen.xs }"
        >
          <q-card
            class="fit"
            dark
            flat
          >
            <q-card-section class="text-center q-pa-xl">
              <q-avatar
                class="cursor-pointer"
                size="200px"
                @click="leave"
              >
                <img src="statics/img/j0rtiz.jpg">
              </q-avatar>
            </q-card-section>
          </q-card>
        </div>

        <div
          class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12"
          :class="{ 'q-pa-xs': !$q.screen.sm && !$q.screen.xs }"
        >
          <q-card
            class="fit"
            dark
            flat
          >
            <q-card-section class="text-center q-pb-xl">
              <div class="content">
                <p>Meu nome eh</p>
                <p class="title">Jairo Ortiz</p>
                <p>
                  Trabalho na
                  <span
                    class="cursor-pointer"
                    @click="openURL('http://www.govbrsul.com.br')"
                  >
                    <span class="text-blue">GOV</span>
                    <span class="text-green">BR</span>
                  </span>
                  como Programador de Sistemas
                </p>
              </div>
            </q-card-section>

            <q-card-section
              class="text-center"
              :class="{ 'q-pa-xl': $q.screen.sm || $q.screen.xs }"
            >
              <p class="content">Um pouco mais sobre mim:</p>

              <q-avatar
                class="cursor-pointer"
                size="80px"
                @click="openURL('https://github.com/j0rtiz')"
              >
                <img src="statics/img/github.png">
              </q-avatar>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </transition>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'PageIndex',
  data () {
    return {
      enter: true
    }
  },
  methods: {
    openURL (url) {
      openURL(url)
    },
    leave () {
      this.enter = false

      setTimeout(() => {
        this.enter = true
      }, 3000)
    }
  }
}
</script>
