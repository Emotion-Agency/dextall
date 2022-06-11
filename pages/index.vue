<script setup lang="ts">
import { useTransition } from '~/composables/transition'
useTransition()
</script>

<template>
  <section class="section section--nm home-1">
    <div class="container home-1__wrapper">
      <div class="grid home-1__top-block">
        <div
          class="big-img home-1__elements-left"
          style="
            background: url('/images/building-1.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          "
        ></div>
        <div class="home-1__elements-right">
          <div
            class="big-img home-1__right-image"
            style="
              background-image: url('/images/building-2.jpg');
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
            "
          ></div>
          <ul class="grid home-1__small-buildings">
            <li class="home-1__li">
              <p class="home-1__number">001</p>
              <div
                class="small-img home-1__small-img"
                style="
                  background-image: url('/images/small-building-1.jpg');
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: cover;
                "
              ></div>
            </li>
            <li class="home-1__li">
              <p class="home-1__number">002</p>
              <div
                class="small-img home-1__small-img"
                style="
                  background-image: url('/images/small-building-2.jpg');
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: cover;
                "
              ></div>
            </li>
            <li class="home-1__li">
              <p class="home-1__number">003</p>
              <div
                class="small-img home-1__small-img"
                style="
                  background-image: url('/images/small-building-3.jpg');
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: cover;
                "
              ></div>
            </li>
            <li class="home-1__li">
              <p class="home-1__number">004</p>
              <div
                class="small-img home-1__small-img"
                style="
                  background-image: url('/images/small-building-4.jpg');
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: cover;
                "
              ></div>
            </li>
            <li class="home-1__li">
              <p class="home-1__number">005</p>
              <div
                class="small-img home-1__small-img"
                style="
                  background-image: url('/images/small-building-5.jpg');
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: cover;
                "
              ></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="grid home-1__bottom-block">
        <span class="home-1__title">Unitized</span>
        <span class="home-1__title"> prefabricated</span>
        <span class="home-1__title"> exterior</span>
        <span class="home-1__title"> Wall</span>
        <span class="home-1__title"> system</span>
        <p class="home-1__desc">
          A New Norm To Design. Build. Think. powered by Dextall Studio, the BIM
          Solution software
        </p>
      </div>
    </div>
  </section>
</template>
