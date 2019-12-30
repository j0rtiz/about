<template>
  <q-page class="row flex-center fit bg-dark">
    <transition
      appear
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
    >
      <div :class="{ 'main row q-pa-xs': !$q.screen.sm && !$q.screen.xs }">
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
              <q-avatar size="200px">
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
            <q-card-section class="text-white text-center q-pb-xl">
              <p class="content">Meu nome eh</p>
              <p class="title">Jairo Ortiz</p>
              <p class="content">Trabalho na GOVBR Sul como Programador de Sistemas</p>
            </q-card-section>

            <q-card-section
              class="text-white text-center"
              :class="{ 'q-pa-xl': $q.screen.sm || $q.screen.xs }"
            >
              <p class="content">Um pouco mais sobre mim:</p>

              <q-avatar size="80px">
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
export default {
  name: 'PageIndex'
}
</script>
