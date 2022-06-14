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
            background: url('/images/home/1.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          "
        ></div>
        <div class="home-1__elements-right">
          <div
            class="big-img home-1__right-image"
            style="
              background-image: url('/images/home/2.jpg');
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
                style="background-image: url('/images/home/3.jpg')"
              ></div>
            </li>
            <li class="home-1__li">
              <p class="home-1__number">002</p>
              <div
                class="small-img home-1__small-img"
                style="background-image: url('/images/home/4.jpg')"
              ></div>
            </li>
            <li class="home-1__li">
              <p class="home-1__number">003</p>
              <div
                class="small-img home-1__small-img"
                style="background-image: url('/images/home/5.jpg')"
              ></div>
            </li>
            <li class="home-1__li">
              <p class="home-1__number">004</p>
              <div
                class="small-img home-1__small-img"
                style="background-image: url('/images/home/6.jpg')"
              ></div>
            </li>
            <li class="home-1__li">
              <p class="home-1__number">005</p>
              <div
                class="small-img home-1__small-img"
                style="background-image: url('/images/home/7.jpg')"
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
  <section class="section home-2">
    <div
      class="home-2__background"
      style="background-image: url('/images/home/8.jpg')"
    ></div>
    <div class="container">
      <div class="home-2__wrapper">
        <div class="home-2__block">
          <p class="home-2__text">
            Dextall innovative technology solutions empower architects, GCs,
            business owners and developers to design and build smarter, cost
            effective, sustainable and more beautiful buildings
          </p>
        </div>
        <div class="home-2__block">
          <h2 class="home-2__title-block">
            <span class="home-2__title">Breakthrough</span>
            <span class="home-2__title"> In BIM</span>
            <span class="home-2__title"> Technology</span>
          </h2>
          <p class="home-2__desc">
            Architects Fuse Design And Constructability Together, Empowering
            them to design Mid- To High-Rise Projects by Reducing
            design-to-installation timelines by more than 80%, providing
            architects instantaneous data into a whole-project federated model
          </p>
        </div>
        <div class="home-2__block">
          <p class="home-2__text">
            Driven by technology innovation we accelerate sustainable building
            practices TODAY, and bring affordable and efficient solutions to the
            construction industry
          </p>
        </div>
        <div class="home-2__block">
          <p class="home-2__text">
            The most advanced and cost effective exterior prefab solutions and
            the only BIM solution that utilizes technological advancement to
            save money, time and recourses
          </p>
        </div>
      </div>
    </div>
    <!-- <div
      class="home-2__background"
      style="background-image: url('/images/home/8.jpg')"
    >
      <div class="container home-2__wrapper"></div>
      <div class="container home-2__wrapper"></div>
      <div class="container home-2__wrapper"></div>
      <div class="container home-2__wrapper"></div>
    </div> -->
  </section>
  <section class="section home-3">
    <TheTicker />
    <div class="container grid home-3__wrapper">
      <div class="home-3__left-block">
        <p class="home-3__text">
          Dextall named as first qualified and approved prefab wall panel
          provided in sweeping plan to over-clad existing affordable housing
          projects for the State of New York
        </p>
        <ul class="home-3__list">
          <li class="home-3__li">
            <div class="home-3__line"></div>
            <div class="grid home-3__content">
              <p class="home-3__medium-text">80% faster</p>
              <div class="home-3__group-text">
                <p class="home-3__regular-text">Exterior Installation</p>
                <p class="home-3__small-text">
                  Get tenants in faster | Save on carrying costs
                </p>
              </div>
            </div>
          </li>
          <li class="home-3__li">
            <div class="home-3__line"></div>
            <div class="grid home-3__content">
              <p class="home-3__medium-text">15-20% less</p>
              <div class="home-3__group-text">
                <p class="home-3__regular-text">
                  Cost Lower than onsite construction
                </p>
                <p class="home-3__small-text">
                  Pass savings directly to your client
                </p>
              </div>
            </div>
          </li>
          <li class="home-3__li">
            <div class="home-3__line"></div>
            <div class="grid home-3__content">
              <p class="home-3__medium-text">20 Times Less</p>
              <div class="home-3__group-text">
                <p class="home-3__regular-text">Reduce Onsite Labor</p>
                <p class="home-3__small-text">
                  Lower Cost and Carbon Footprint
                </p>
              </div>
            </div>
            <div class="home-3__line"></div>
          </li>
        </ul>
      </div>
      <div class="home-3__right-block">
        <img class="home-3__img" src="/images/home/9.jpg" alt="Building" />
      </div>
    </div>
  </section>
  <section class="section home-4">
    <div class="container home-4__wrapper"></div>
  </section>
</template>
