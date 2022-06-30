<script setup lang="ts">
import { useTransition } from '~/composables/transition'
useTransition()
useObserver('.section')

</script>

<template>
  <main>
    <section class="section section--nm bim-1">
      <div class="container bim-1__wrapper">
        <div class="bim-1__text-block">
          <p class="bim-1__top-text">Simple, efficient, optimized</p>
          <TheTicker
            text="BIM Solution: Dextall Studio"
            class="bim-1__ticker"
          />
          <p class="bim-1__bottom-text">
            Technology platform that bridges the gap between the design of
            prefabricated exteriors within the AEC industry and the final exterior
            wall execution at the job site
          </p>
        </div>
        <CircleButton class="bim-1__btn"> Get access </CircleButton>
      </div>
    </section>
    <section class="section bim-2">
      <div class="container bim-2__wrapper">
        <h2 class="bim-2__title">
          <span class="bim-2__span-title">
            Exterior design and coordination process is reduced
          </span>
          from 24 month to 2 days
        </h2>
        <div class="grid bim-2__content">
          <p class="bim-2__text">
            Our Platform offers optimized, end-to-end architectural, automated
            design and engineering review process
          </p>
          <p class="bim-2__text">
            Get access to a Digital Library of templated, realistic detailed
            facade design, renderings and more
          </p>
          <TextButton class="bim-2__btn">Get access</TextButton>
        </div>
      </div>
      <div
        class="bim-2__bg"
        style="background-image: url('/images/bim/1.jpg')"
      ></div>
    </section>
    <section class="section bim-3">
      <div class="container bim-3__wrapper">
        <h2 class="grid bim-3__title">
          <span class="bim-3__span-title">Dextall</span>
          <span class="bim-3__span-title"> Studio</span>
          <span class="bim-3__span-title"> Benefits</span>
        </h2>
        <ul class="bim-3__list">
          <li class="bim-3__li">
            <div class="bim-3__line"></div>
            <p class="bim-3__text">
              Software optimization algorithm reduces material waste factor by 30%
            </p>
          </li>
          <li class="bim-3__li">
            <div class="bim-3__line"></div>
            <p class="bim-3__text">
              Exterior system optimized for architectural Revit models
            </p>
          </li>
          <li class="bim-3__li">
            <div class="bim-3__line"></div>
            <p class="bim-3__text">
              Realistic and detailed façade design & Renderings
            </p>
          </li>
          <li class="bim-3__li">
            <div class="bim-3__line"></div>
            <p class="bim-3__text">
              3D high LOD wall section renderings and shop drawings
            </p>
          </li>
          <li class="bim-3__li">
            <div class="bim-3__line"></div>
            <p class="bim-3__text">Drawings satisfy specBIM requirements</p>
          </li>
          <li class="bim-3__li">
            <div class="bim-3__line"></div>
            <p class="bim-3__text">
              Dashboard for data driven design and analytics
            </p>
            <div class="bim-3__line"></div>
          </li>
        </ul>
        <div class="bim-3__slider-wrapper">
          <div class="bim-3__btns">
            <button class="bim-3__btn">
              <IconsArrowLeft class="bim-3__arrow" />
            </button>
            <button class="bim-3__btn">
              <IconsArrowRight class="bim-3__arrow" />
            </button>
          </div>
          <div class="bim-3__slider">
            <img
              class="bim-3__slider-img"
              src="/images/bim/2.jpg"
              alt="Building"
            />
            <img
              class="bim-3__slider-img"
              src="/images/bim/3.jpg"
              alt="Building"
            />
            <img
              class="bim-3__slider-img"
              src="/images/bim/4.jpg"
              alt="Building"
            />
            <img
              class="bim-3__slider-img"
              src="/images/bim/2.jpg"
              alt="Building"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="section bim-4">
      <div class="container bim-4__wrapper">
        <h2 class="bim-4__title">Results</h2>
        <ul class="bim-4__list">
          <li class="bim-4__li">
            <div class="bim-4__line"></div>
            <div class="grid bim-4__content-wrapper">
              <div class="bim-4__text-wrapper">
                <h3 class="bim-4__content-title">For Architects</h3>
                <p class="bim-4__content-desc">
                  Optimize with flexibility and accuracy
                </p>
              </div>
              <ul class="bim-4__content-list">
                <li class="bim-4__content-li">
                  <div class="bim-4__mob-line"></div>
                  <p class="bim-4__content-text bim-4__content-text--nm">
                    Less mistakes means more time to fuel your creativity
                  </p>
                  <div class="bim-4__line"></div>
                </li>
                <li class="bim-4__content-li">
                  <p class="bim-4__content-text">
                    Faster design process and real-time exterior skin cost updates
                  </p>
                  <div class="bim-4__line"></div>
                </li>
                <li class="bim-4__content-li">
                  <p class="bim-4__content-text">
                    Fully optimized to work with retrofit projects in Revit
                  </p>
                  <div class="bim-4__line"></div>
                </li>
              </ul>
            </div>
          </li>
          <li class="bim-4__li">
            <div class="bim-4__line"></div>
            <div class="grid bim-4__content-wrapper">
              <div class="bim-4__text-wrapper">
                <h3 class="bim-4__content-title">
                  For GCs and construction managers
                </h3>
                <p class="bim-4__content-desc">
                  Easily obtain installation manuals and 3D high detailed
                  renderings
                </p>
              </div>
              <ul class="bim-4__content-list">
                <li class="bim-4__content-li">
                  <div class="bim-4__mob-line"></div>
                  <p class="bim-4__content-text bim-4__content-text--nm">
                    Less time spend installing and lower overall cost
                  </p>
                  <div class="bim-4__line"></div>
                </li>
                <li class="bim-4__content-li">
                  <p class="bim-4__content-text">
                    Less mistakes during installations
                  </p>
                  <div class="bim-4__line"></div>
                </li>
                <li class="bim-4__content-li">
                  <p class="bim-4__content-text">
                    Fully optimized to work with retrofit projects on site
                  </p>
                  <div class="bim-4__line"></div>
                  <p class="bim-4__about-text">
                    Support: video chat support.<br />
                    Education: training on plug-in options
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="section bim-5">
      <div
        class="bim-5__bg"
        style="background-image: url('/images/bim/5.jpg')"
      >
        <div class="container bim-5__wrapper">
          <h2 class="bim-5__title">
            <span class="bim-5__span-title">try</span>
            <span class="bim-5__span-title"> Dextall Studio</span>
          </h2>
          <p class="bim-5__desc">Get Access Now!</p>
          <CircleButton class="bim-5__btn">Register</CircleButton>
        </div>
      </div>
    </section>
  </main>
</template>
