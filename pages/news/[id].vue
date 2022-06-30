<script setup lang="ts">
import { useTransition } from '~/composables/transition'
useTransition()
useObserver('.section')

</script>

<template>
  <main>
    <section class="section section--nm internal-news-1">
      <div class="container internal-news-1__wrapper">
        <h1 class="internal-news-1__title">
          Dextall’s latest Forbes magazine feature on our construction
          innovation
        </h1>
      </div>
      <div
        class="internal-news-1__bg"
        style="background-image: url('/images/news/internal-news/1.jpg')"
      ></div>
    </section>
    <section class="section internal-news-2">
      <div class="container internal-news-2__wrapper">
        <div class="internal-news-2__line"></div>
        <div class="grid internal-news-2__content-wrapper">
          <div class="internal-news-2__filter">
            <button class="internal-news-2__switch">Heading 1</button>
            <button class="internal-news-2__switch">Heading 2</button>
            <button class="internal-news-2__switch">Heading 3</button>
            <button class="internal-news-2__switch">Heading 4</button>
          </div>
          <div class="internal-news-2__content">
            <h2 class="internal-news-2__title">
              As Construction’s Labor Crisis Intensifies, Dextall Design And
              Building Innovations Impact Solutions
            </h2>
            <p class="internal-news-2__desc">
              End-to-End, from pre-construction to completion, here are 5 ways
              Dextall adds to skilled worker capability. Construction’s labor
              crisis – widely-known and entrenched over the past decade or
              longer – burst to an order of magnitude worse with the onset of
              the COVID-19 pandemic.
              <br />
              <br />
              Only two solutions can relieve the crisis. One, increasingly
              unlikely, would be a return to days of new, trained, inexpensive,
              skilled-workforce. The other, more and more necessary, is
              transformation of human and technological capability in
              construction through innovation.
              <br />
              <br />
              An innovator like Dextall, which has developed and project-proven
              a simplified tech-enabled path – from project planning, through
              factory prefabrication, all the way to one-step installation of
              building exteriors that outperform and outlast conventional
              construction approaches, and do so in 80% less time and skilled
              labor – can turn the tide from a labor constraint crisis to a boom
              in throughput capability.
            </p>
            <img
              class="internal-news-2__img"
              src="/images/news/internal-news/2.jpg"
              alt="Building"
            />
            <h3 class="internal-news-2__sub-title">
              As Construction’s Labor Crisis Intensifies, Dextall Design And
              Building Innovations Impact Solutions
            </h3>
            <p class="internal-news-2__desc">
              • Support the team in the design of digital strategies<br />
              • Collect information, analyze needs, study best practices
              (benchmarking), analyze visit trends, identify performance
              indicators (KPIs)<br />
              • Actively participate in the conversation in order to create an
              effective tree structure and wireframe.<br />
              • Monitor new practices and trends
            </p>
            <CircleButton class="internal-news-2__btn">Register</CircleButton>
          </div>
        </div>
      </div>
    </section>
    <section class="section internal-news-3">
      <div class="container internal-news-3__wrapper">
        <h2 class="internal-news-3__title">Other news</h2>
        <div class="internal-news-3__images">
          <NewsImages />
        </div>
      </div>
    </section>
  </main>
</template>
