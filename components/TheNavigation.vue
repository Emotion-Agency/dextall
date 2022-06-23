<template>
  <div class="navigation">
    <div class="navigation__left-block">
      <div
        class="navigation__img"
        style="background-image: url('/images/1.jpg')"
      ></div>
    </div>
    <div class="container navigation__right-block">
      <button class="navigation__close-btn">
        <span class="navigation__btn-line"></span>
        <span class="navigation__btn-line"></span>
      </button>
      <ul class="navigation__list">
        <li class="navigation__li">
          <div class="navigation__line"></div>
          <a
            href="#"
            class="navigation__link"
          > Home </a>
        </li>
        <li class="navigation__li">
          <div class="navigation__line"></div>
          <NuxtLink
            to="/"
            class="navigation__link"
          > Products </NuxtLink>
        </li>
        <li class="navigation__li">
          <div class="navigation__line"></div>
          <NuxtLink
            to="/"
            class="navigation__link"
          > BIM Solution </NuxtLink>
        </li>
        <li class="navigation__li">
          <div class="navigation__line"></div>
          <NuxtLink
            to="/"
            class="navigation__link"
          > Projects </NuxtLink>
        </li>
        <li class="navigation__li">
          <div class="navigation__line"></div>
          <NuxtLink
            to="/"
            class="navigation__link"
          > News </NuxtLink>
          <div class="navigation__line"></div>
        </li>
      </ul>
      <div class="grid navigation__info-block">
        <TheSocial class="navigation__social" />
        <ul class="navigation__info-list">
          <li class="navigation__info-li">
            <div class="navigation__line"></div>
            <NuxtLink
              to="/"
              class="navigation__info-link"
            > Careers </NuxtLink>
          </li>
          <li class="navigation__info-li">
            <div class="navigation__line"></div>
            <NuxtLink
              to="/"
              class="navigation__info-link"
            >
              Education and Training
            </NuxtLink>
          </li>
          <li class="navigation__info-li">
            <div class="navigation__line"></div>
            <NuxtLink
              to="/"
              class="navigation__info-link"
            > About Us </NuxtLink>
          </li>
          <li class="navigation__info-li">
            <div class="navigation__line"></div>
            <NuxtLink
              to="/"
              class="navigation__info-link"
            >
              Contact Us
            </NuxtLink>
            <div class="navigation__line"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
