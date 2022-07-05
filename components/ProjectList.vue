<template>
  <ul class="image-list">
    <li
      v-for="(_,idx) in 3"
      :key="idx"
      class="image-list__li"
    >
      <NuxtLink
        to="/"
        class="image-list__link"
      >
        <div class="image-list__text">
          <h4 class="image-list__title">The Heritage, NY</h4>
          <div class="image-list__desc-wrapper">
            <p class="image-list__number">(001)</p>
            <p class="image-list__desc">
              A transformative modern "hybrid" renovation to reduce the
              buildings energy consumption and increase comfort for tenants.
            </p>
          </div>
        </div>
        <div class="grid image-list__img-wrapper">
          <ParallaxImg
            src="/images/home/12.jpg"
            :transform="false"
            class="image-list__img"
          />
          <ParallaxImg
            src="/images/home/13.jpg"
            :transform="false"
            class="image-list__img"
          />
          <ParallaxImg
            src="/images/home/14.jpg"
            :transform="false"
            class="image-list__img"
          />
          <ParallaxImg
            src="/images/home/15.jpg"
            :transform="false"
            class="image-list__img"
          />
          <!-- <img
            class="image-list__img"
            src="/images/home/12.jpg"
            alt="Building"
          />
          <img
            class="image-list__img"
            src="/images/home/13.jpg"
            alt="Building"
          />
          <img
            class="image-list__img"
            src="/images/home/14.jpg"
            alt="Building"
          />
          <img
            class="image-list__img"
            src="/images/home/15.jpg"
            alt="Building"
          /> -->
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>
