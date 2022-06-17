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
            background-image: url('/images/home/1.jpg');
          "
        ></div>
        <div class="home-1__elements-right">
          <div
            class="big-img home-1__right-image"
            style="
              background-image: url('/images/home/2.jpg');
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
      <p class="home-1__desc">
        A New Norm To Design. Build. Think. powered by Dextall Studio, the BIM
        Solution software
      </p>
      <h1 class="grid home-1__bottom-block">
        <span class="home-1__title">Unitized</span>
        <span class="home-1__title"> prefabricated</span>
        <span class="home-1__title"> exterior</span>
        <span class="home-1__title"> wall</span>
        <span class="home-1__title"> system</span>
      </h1>
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
          <h3 class="home-2__title-block">
            <span class="home-2__title">Breakthrough</span>
            <span class="home-2__title"> In BIM</span>
            <span class="home-2__title"> Technology</span>
          </h3>
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
        <img
          class="home-3__img"
          src="/images/home/9.jpg"
          alt="Building"
        />
      </div>
    </div>
  </section>
  <section class="section home-4">
    <div class="container home-4__wrapper">
      <h2 class="grid home-4__title">
        <span class="home-4__big-text">Test</span>
        <span class="home-4__big-text"> &</span>
        <span class="home-4__big-text"> Engineering</span>
        <span class="home-4__big-text"> Accreditations</span>
      </h2>
      <FloatingCards class="home-4__floating-cards">
        <IconsFloatingCardsImg />
      </FloatingCards>
    </div>
  </section>
  <section class="section home-5">
    <div class="container home-5__wrapper">
      <div class="home-5__line"></div>
      <div class="home-5__main-block">
        <h3 class="home-5__title">
          Dextall wins approved-supplier designation in $30-Million NYSERDA
          Retrofit Initiative
        </h3>
        <p class="home-5__desc">
          Dextall named as first qualified and approved prefab wall panel
          provided in sweeping plan to over-clad existing affordable housing
          projects for the State of New York
        </p>
        <CircleButton class="home-5__btn" />
      </div>
      <div class="home-5__line"></div>
    </div>
  </section>
  <section class="section home-6">
    <div class="container grid home-6__wrapper">
      <div class="home-6__text-block">
        <p class="home-6__small-text">Leader in innovation</p>
        <h2 class="home-6__big-text">
          <span class="home-6__b-text">latest</span>
          <span class="home-6__b-text"> Forbes</span>
          <span class="home-6__b-text"> feature</span>
        </h2>
        <p class="home-6__desc">
          States’ Build Back Better Plans For Affordable Housing Hinge On
          Innovators
        </p>
        <CircleButton class="home-6__btn" />
      </div>
      <div class="home-6__image-top">
        <img
          class="home-6__img"
          src="/images/home/10.jpg"
          alt="Building"
        />
      </div>
      <div class="home-6__image-bottom">
        <img
          class="home-6__img"
          src="/images/home/11.jpg"
          alt="Building"
        />
      </div>
    </div>
  </section>
  <section class="section home-7">
    <div class="container home-7__wrapper">
      <div class="home-7__main-block">
        <h3 class="home-7__title">
          <span class="home-7__span-title">our</span>
          <span class="home-7__span-title"> Projects</span>
        </h3>
        <p class="home-7__desc">
          Highest quality prefab exteriors and BIM Solution that provides
          affordable, sustainable designs and increases design coordination
          efficiency
        </p>
        <CircleButton class="home-7__btn" />
      </div>
      <ImageList />
    </div>
  </section>
  <section class="section home-8">
    <div class="container home-8__wrapper">
      <div class="grid home-8__text-block">
        <h3 class="home-8__title">
          <span class="home-8__span-top">Latest</span>
          <span class="home-8__span-bottom"> News</span>
        </h3>
        <p class="home-8__desc">
          As an AIA/CES Registered Provider, Dextall offers various programs for
          Architects and Certified Installer Program (Dextall CIP) that focuses
          on training for unitized prefab panel installation
        </p>
      </div>
      <TheCards class="home-8__cards" />
    </div>
  </section>
  <section class="section home-9">
    <div class="container grid home-9__wrapper">
      <div class="home-9__text-block">
        <h2 class="home-9__big-text">
          <span class="home-9__b-text">Architect</span>
          <span class="home-9__b-text"> Education</span>
          <span class="home-9__b-text"> and</span>
          <span class="home-9__b-text"> Installer</span>
          <span class="home-9__b-text"> Training</span>
        </h2>
        <p class="home-9__desc">
          As an AIA/CES Registered Provider, Dextall offers various programs for
          Architects and Certified Installer Program (Dextall CIP) that focuses
          on training for unitized prefab panel installation
        </p>
        <CircleButton class="home-9__btn" />
      </div>
      <div class="home-9__image-top">
        <img
          class="home-9__img"
          src="/images/home/17.jpg"
          alt="Building"
        />
      </div>
      <div class="home-9__image-bottom">
        <img
          class="home-9__img"
          src="/images/home/18.jpg"
          alt="Building"
        />
      </div>
    </div>
  </section>
</template>
