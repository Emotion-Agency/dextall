<script setup lang="ts">
import { useTransition } from '~/composables/transition'
useTransition()
</script>

<template>
  <main>
    <section class="section section--nm about-1">
      <div class="container about-1__wrapper">
        <img
          v-for="(_,idx) in 4"
          :key="idx"
          :data-parallax="(4 - idx) * 0.08"
          :data-parallax-dir="-1"
          class="about-1__img"
          :src="`/images/about/${idx + 1}.jpg`"
          alt="Building"
        />
        <div class="about-1__text-block">
          <h1 class="about-1__title">
            <span class="about-1__span-title">Our</span>
            <span class="about-1__span-title"> mission</span>
          </h1>
        </div>
        <p class="about-1__desc">A Real solution to a real problem</p>
      </div>
    </section>
    <section class="section about-2">
      <div class="container about-2__wrapper">
        <div class="about-2__line"></div>
        <h3 class="about-2__title">
          To accelerate decarbonization of the environment TODAY by bringing
          affordable and efficient solutions to build sustainably
        </h3>
        <div class="about-2__line"></div>
      </div>
    </section>
    <section class="section about-3">
      <div
        class="about-3__bg"
        style="background-image: url('/images/about/5.jpg')"
      ></div>
      <div class="container about-3__wrapper">
        <div class="grid about-3__text">
          <h3 class="about-3__title">
            Sustainable Practicies should not be a luxury, they should be part of
            our everyday lives
          </h3>
          <p class="about-3__desc">
            At Dextall, we focus on creating long term economic, social, and
            environmental value for our clients. Our team works hand in hand with
            architects, contractors, and owners to ensure sustainability is
            imprinted throughout the design and installation process of our
            panelized wall system.
          </p>
          <p class="about-3__desc">
            We believe technological advancements should be accessible and
            affordable to all if we are to battle climate change. With decades of
            experience, our team's sole goal is to set a new norm in the
            construction industry for building better, more efficient, and
            affordable buildings for our communities
          </p>
        </div>
      </div>
    </section>
    <section class="section about-4">
      <div class="container about-4__wrapper">
        <div class="about-4__line"></div>
        <h3 class="about-4__title">
          Approximately 16 trillion dollars of new buildings are built worldwide
          every year. We want to ensure that those buildings exceed local, state,
          and national environmental regulations while providing a healthy
          lifestyle for their occupants
        </h3>
        <div class="about-4__line"></div>
      </div>
    </section>
    <section class="section about-5">
      <div class="container about-5__wrapper">
        <h2 class="about-5__title">
          When <span class="about-5__span-title">Decarbonizing</span> With Dextall
        </h2>
        <ul class="about-5__list">
          <li class="about-5__li">
            <div class="about-5__line"></div>
            <div class="grid about-5__text-wrapper">
              <h3 class="about-5__list-title">Increase Value</h3>
              <ul class="about-5__content-list">
                <li class="about-5__content-li">
                  <div class="about-7__mob-line"></div>
                  <p class="about-5__text">
                    Favorable NOI — energy, insurance costs, maintenance — to
                    property owners (retrofits)
                  </p>
                  <div class="about-5__line"></div>
                </li>
                <li class="about-5__content-li">
                  <p class="about-5__text">
                    Low-maintenance, durability and resilience
                  </p>
                  <div class="about-5__line"></div>
                </li>
                <li class="about-5__content-li">
                  <p class="about-5__text">
                    15-20% projected project cost savings
                  </p>
                  <div class="about-5__line"></div>
                </li>
              </ul>
            </div>
          </li>
          <li class="about-5__li">
            <div class="about-5__line"></div>
            <div class="grid about-5__text-wrapper">
              <h3 class="about-5__list-title">
                Comply With regulations and local laws
              </h3>
              <ul class="about-5__content-list">
                <li class="about-5__content-li">
                  <div class="about-7__mob-line"></div>
                  <p class="about-5__text">
                    Favorable NOI — energy, insurance costs, maintenance — to
                    property owners (retrofits)
                  </p>
                  <div class="about-5__line"></div>
                </li>
                <li class="about-5__content-li">
                  <p class="about-5__text">
                    Favorable NOI — energy, insurance costs, maintenance — to
                    property owners (retrofits)
                  </p>
                  <div class="about-5__line"></div>
                </li>
                <li class="about-5__content-li">
                  <p class="about-5__text">
                    Low-maintenance, durability and resilience
                  </p>
                  <div class="about-5__line"></div>
                </li>
              </ul>
            </div>
          </li>
          <li class="about-5__li">
            <div class="about-5__line"></div>
            <div class="grid about-5__text-wrapper">
              <h3 class="about-5__list-title">Exceed Quality Standards</h3>
              <ul class="about-5__content-list">
                <li class="about-5__content-li">
                  <div class="about-7__mob-line"></div>
                  <p class="about-5__text">
                    Favorable NOI — energy, insurance costs, maintenance — to
                    property owners (retrofits)
                  </p>
                  <div class="about-5__line"></div>
                </li>
                <li class="about-5__content-li">
                  <p class="about-5__text">
                    Favorable NOI — energy, insurance costs, maintenance — to
                    property owners (retrofits)
                  </p>
                  <div class="about-5__line"></div>
                </li>
                <li class="about-5__content-li">
                  <p class="about-5__text">
                    Low-maintenance, durability and resilience
                  </p>
                  <div class="about-5__line"></div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="section about-6">
      <div class="about-6__wrapper">
        <div class="container about-6__left-block">
          <h2 class="about-6__title">Few Facts</h2>
          <p class="about-6__desc">
            Buildings are 40% of the world's carbon emissions
          </p>
        </div>
        <div class="container about-6__right-block">
          <div class="about-6__ellipse"></div>
          <h2 class="about-6__number">
            40<span class="about-6__span-number">%</span>
          </h2>
          <p class="about-6__text">
            Buildings are 40% of the world's carbon emissions
          </p>
        </div>
      </div>
    </section>
    <section class="section about-7">
      <div class="container about-7__wrapper">
        <h2 class="about-7__title">A Real Solution To A Real Problem</h2>
        <p class="about-7__desc">
          We bridge the gap between the design of prefabricated exteriors within
          the AEC industry and the final exterior wall execution at the job site
          through automation, cost optimization and transparent practices.
        </p>
        <ul class="about-7__list">
          <li class="about-7__li">
            <div class="about-7__line"></div>
            <div class="grid about-7__text-wrapper">
              <div class="about-7__list-text-wrapper">
                <h3 class="about-7__list-title about-7__list-title--mb">
                  EFFICIENT
                </h3>
                <p class="about-7__list-desc">BIM Solution — Dextall Studio</p>
              </div>
              <ul class="about-7__content-list">
                <li class="about-7__content-li">
                  <div class="about-7__mob-line"></div>
                  <p class="about-7__text">
                    20X faster exterior envelope design process
                  </p>
                  <div class="about-7__line"></div>
                </li>
                <li class="about-7__content-li">
                  <p class="about-7__text">
                    24 months reduction in exterior wall coordination process
                  </p>
                  <div class="about-7__line"></div>
                </li>
                <li class="about-7__content-li">
                  <p class="about-7__text">
                    80% faster building enclosure process
                  </p>
                  <div class="about-7__line"></div>
                </li>
                <li class="about-7__content-li">
                  <p class="about-7__text">
                    Fastest in market exterior solution for renovations
                  </p>
                  <div class="about-7__line"></div>
                </li>
              </ul>
            </div>
          </li>
          <li class="about-7__li">
            <div class="about-7__line"></div>
            <div class="grid about-7__text-wrapper">
              <h3 class="about-7__list-title">Affordable</h3>
              <ul class="about-7__content-list">
                <li class="about-7__content-li">
                  <div class="about-7__mob-line"></div>
                  <p class="about-7__text">
                    10%-15% lower cost than onsite construction
                  </p>
                  <div class="about-7__line"></div>
                </li>
                <li class="about-7__content-li">
                  <p class="about-7__text">
                    10X less laborers needed on the jobsite
                  </p>
                  <div class="about-7__line"></div>
                </li>
              </ul>
            </div>
          </li>
          <li class="about-7__li">
            <div class="about-7__line"></div>
            <div class="grid about-7__text-wrapper">
              <h3 class="about-7__list-title">Sustainable</h3>
              <ul class="about-7__content-list">
                <li class="about-7__content-li">
                  <div class="about-7__mob-line"></div>
                  <p class="about-7__text">
                    40% better energy efficiency than code
                  </p>
                  <div class="about-7__line"></div>
                </li>
                <li class="about-7__content-li">
                  <p class="about-7__text">
                    Suitable solution for Passive House and Net Zero
                  </p>
                  <div class="about-7__line"></div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="section about-8">
      <div class="container about-8__wrapper">
        <div class="grid about-8__text-wrapper">
          <p class="about-8__text">our story</p>
          <h2 class="about-8__title">
            With decades of experience, we rise to the challenge
          </h2>
        </div>
        <ul class="about-8__list">
          <li class="grid about-8__li">
            <div class="about-8__left-block">
              <div
                class="about-8__image"
                style="background-image: url('/images/about/6.jpg')"
              ></div>
            </div>
            <div class="about-8__right-block about-8__right-block--reverse">
              <div
                class="about-8__image about-8__image--half"
                style="background-image: url('/images/about/7.jpg')"
              ></div>
              <p class="about-8__desc">
                Dextall is a team of leading industry professionals who bring to
                bear decades of experience in engineering, design, technology, and
                innovation in the sustainable building and construction industries
                to develop succinct processes and smart labor solutions in
                exterior design and construction of commercial buildings around
                the world
              </p>
            </div>
          </li>
          <li class="grid about-8__li">
            <div class="about-8__left-block">
              <h3 class="about-8__content-title">Dextall’s CEO</h3>
              <p class="about-8__desc">
                Aurimas Sabulis is a serial entrepreneur in innovative
                construction technology committed to striving for high-performing,
                resilient, and environmentally-sustainable industrialized
                transformation of our built space
              </p>
            </div>
            <div class="about-8__right-block">
              <div
                class="block-img about-8__image"
                style="background-image: url('/images/about/8.jpg')"
              ></div>
            </div>
          </li>
          <li class="grid about-8__li">
            <div class="about-8__left-block">
              <div
                class="block-img about-8__image"
                style="background-image: url('/images/about/9.jpg')"
              ></div>
            </div>
            <div class="about-8__right-block">
              <h3 class="about-8__content-title">
                More than 20 years of practical experience
              </h3>
              <p class="about-8__desc about-8__desc--transform">
                Aurimas' 20-plus year career in construction has been dedicated to
                utilizing technologies to advance the fields of design and
                construction, with a track record of award-winning and
                groundbreaking projects within the United States. Mr. Sabulis
                believes the power of technology combined with smart business
                solutions can favorably bend cost curves as it unleashes
                sustainability and long-term value in mid to high-rise building
                construction.
                <br />
                <br />
                Aurimas is also the founder of INTUS Windows, were he launched the
                groundbreaking 1-Window-1-Tree initiative, which planted trees in
                communities around the United States for each window sold by the
                company.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
