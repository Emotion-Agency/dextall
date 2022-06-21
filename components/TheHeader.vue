<template>
  <header class="header container">
    <div class="header__wrapper">
      <NuxtLink to="/" class="header__logo">
        <IconsLogoDesktop class="header__logo-desk" />
        <IconsLogoMobile class="header__logo-mob" />
      </NuxtLink>
      <div class="header__right-elements">
        <ul class="header__navbar">
          <li class="header__li">
            <NuxtLink to="/products/" class="header__text"> Products </NuxtLink>
          </li>
          <li class="header__li">
            <NuxtLink to="/bim/" class="header__text"> Bim solution </NuxtLink>
          </li>
          <li class="header__li">
            <NuxtLink to="/projects/" class="header__text"> Projects </NuxtLink>
          </li>
          <li class="header__li">
            <NuxtLink to="/about/" class="header__text"> About us </NuxtLink>
          </li>
          <li class="header__li">
            <NuxtLink to="/" class="header__text"> News </NuxtLink>
          </li>
        </ul>
        <button class="header__burger">
          <span class="header__line"></span>
          <span class="header__line"></span>
        </button>
      </div>
    </div>
    <button class="header__btn">
      <span class="header__btn-text">Let’s talk</span>
      <span class="header__btn-img"><IconsTheTalk /></span>
    </button>
  </header>
</template>


