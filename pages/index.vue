<script setup lang="ts">
import { useTransition } from '~/composables/transition'
useTransition()
</script>

<template>
  <div class="page">
    <section class="section section--nm home">
      <div class="container home__wrapper">
        <div class="grid home__top-block">
          <div class="home__elements-left">
            <img class="home__big-img home__big-img--1" src="/images/building-1.jpg" alt="Building" />
          </div>
          <div class="home__elements-right">
            <img class="home__big-img home__big-img--2" src="/images/building-2.jpg" alt="Building" />
            <ul class="grid home__small-buildings">
              <li class="home__li">
                <p class="home__number">001</p>
                <img
                  class="home__small-img"
                  src="/images/small-building-1.jpg"
                  alt="Building"
                />
              </li>
              <li class="home__li">
                <p class="home__number">002</p>
                <img
                  class="home__small-img"
                  src="/images/small-building-2.jpg"
                  alt="Building"
                />
              </li>
              <li class="home__li">
                <p class="home__number">003</p>
                <img
                  class="home__small-img"
                  src="/images/small-building-3.jpg"
                  alt="Building"
                />
              </li>
              <li class="home__li">
                <p class="home__number">004</p>
                <img
                  class="home__small-img"
                  src="/images/small-building-4.jpg"
                  alt="Building"
                />
              </li>
              <li class="home__li">
                <p class="home__number">005</p>
                <img
                  class="home__small-img"
                  src="/images/small-building-5.jpg"
                  alt="Building"
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="grid home__bottom-block">
          <p class="home__desc">
            A New Norm To Design. Build. Think. powered by Dextall Studio, the
            BIM Solution software
          </p>
          <span class="home__title">Unitized</span>
          <span class="home__title">prefabricated</span>
          <span class="home__title">exterior</span>
          <span class="home__title">Wall</span>
          <span class="home__title">system</span>
        </div>
      </div>
    </section>
  </div>
</template>
