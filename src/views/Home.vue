<template>
  <div class="container-fluid p-0">
    <section @mouseenter="autoSlide" @mouseleave="stopAutoSlide" class="home-banner bg-brand text-center text-white">
		<div id="bannerCarousel" class="banner-carousel" data-ride="carousel">

			<div class="banner-carousel-indicators">
				<div class="pt-3">
					<a class="active banner-carousel-indicator px-1" aria-current="true"
						aria-label="Slide 1">01</a>
					<a class="banner-carousel-indicator px-1" aria-label="Slide 2">02</a>
					<a class="banner-carousel-indicator px-1" aria-label="Slide 3">03</a>
					<a class="banner-carousel-indicator px-1" aria-label="Slide 4">04</a>
					<a class="banner-carousel-indicator px-1" aria-label="Slide 5">05</a>
				</div>
        <div class="banner-carousel-arrows pt-3">
					<button @click="slideHeroPrev" class="btn" type="button" aria-label="Slide 1">
						<i v-html="heroLeftArrow"></i>
					</button>
					<button @click="slideHeroNext" class="btn" type="button" aria-label="Slide 2">
            <i v-html="heroRightArrow"></i>
					</button>

				</div>
				<div class="banner-carousel-button">
					<a href="#who-we-are">
						<button class="btn bg-none">
							<i>
								<svg width="16" height="30" viewBox="0 0 16 30" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<rect x="0.5" y="0.5" width="15" height="29" rx="7.5" stroke="white" />
									<line x1="8.5" y1="6" x2="8.5" y2="11" stroke="white" />
								</svg>
							</i>
						</button>
					</a>
					<p class="text-sm">Scroll for more</p>
				</div>
			</div>

			<div class="banner-carousel-content">
				<div class="banner-carousel-item" v-for="(hero, index) in siteHeroes" :key="hero.id" :id="index">
					<img :src="'assets/img/'+ hero.img" class="d-block img-fluid m-auto" alt="">
					<div class="carousel-caption">
						<h2>{{hero.text}}</h2>
						<button
							class="btn bg-none mt-2 mt-sm-3 text-sm border border-inherit rounded home-banner-button">{{hero.action}}</button>
					</div>
				</div>
			</div>

		</div>
	</section>

    <!-- Who We Are  -->
    <section class="container-fluid bg-gray pt-md-extra" id="who-we-are">
      <div class="row">
        <img src="assets/img/who-we-are-collage.png" alt="Who we are image"
          class="img-fluid col-12 col-md-6 pt-5 pb-4 px-5 px-md-1">
        <div class="col-12 col-md-6 pt-4 pb-5 px-5">
          <hr class="leading-line">
          <h3 class="text-xxs text-bold d-inline-block">Who Are We</h3>
          <p class="text-lg text-bold w-md-50">We Test & Analyse Till It’s Bug Free</p>
          <p class="text-sm text-secondary pb-4">Netow Solutions is an independent quality assurance and software
            testing company in Nigeria. As a software testing company, we enable our clients to increase both
            the quality of the software they produce and the efficiency of test delivery by optimizing their
            testing processes.</p>
          <a href="#" class="btn rounded-lg bg-none border border-black border-2 text-sm text-bold">Our
            Services</a>
        </div>
      </div>
    </section>

    <section class="container-fluid bg-pic p-2 pb-4 pt-5">
      <div class="core-services-carousel-container">
          <div class="core-services-carousel text-center">
            <div class="core-services-carousel-prev d-flex align-items-center justify-content-center">
              <a @click="slidePrev" class="core-services-carousel-link"><span class="border rounded-circle border-secondary text-secondary">&#5176;</span></a>
            </div>
            <div class="core-services-carousel-next d-flex align-items-center justify-content-center">
              <a @click="slideNext" class="core-services-carousel-link"><span class="border rounded-circle border-secondary text-secondary">&#5171;</span></a>
            </div>
            <transition-group tag="div" class="core-services-carousel-content text-center" :style="{'justify-content': justification}" name="core-services">
              <div v-for="(service, index) in services" :key="service.id" :id="index" class="core-services-carousel-item p-2 text-brand">
                <div class="core-services-content">
                    <div class="core-services-icon"><i class="" v-html="service.icon"></i></div>
                    <h3>{{service.name}}</h3>
                    <p>{{service.text}}</p>
                    <a href="#0" class="btn bg-gray rounded-circle"><i class="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </transition-group>
          </div>
          <div class="core-services-carousel-indicators-group text-center mt-1">
            <div class="d-inline-block">
              <div class="core-services-carousel-indicator active rounded-circle border border-secondary p-2 d-inline-block mx-1"></div>
              <div class="core-services-carousel-indicator rounded-circle border border-secondary p-2 d-inline-block mx-1"></div>
              <div class="core-services-carousel-indicator rounded-circle border border-secondary p-2 d-inline-block mx-1"></div>
            </div>
          </div>
        </div>
    </section>

    <!-- What We Can Do List (Our Services)-->
    <section class="container-fluid bg-gray home-our-services p-5">
      <div class="row mb-2">
        <h4 class="col-12 text-bold pl-0">What We Can Do</h4>
      </div>

      <div class="row">
        <!--Service items grouped into 3 columns-->
        <div class="home-our-services-group col-12 col-md-4 px-1">
          <div
            class="home-our-services-item d-flex justify-content-between bg-white text-sm text-bold rounded w-100 px-3 py-2 my-2">
            <span class="">Automated Testing</span>
            <a href="#0"><i class="fa fa-arrow-right"></i></a>
          </div>
          <div
            class="home-our-services-item d-flex justify-content-between bg-white text-sm text-bold rounded w-100 px-3 py-2 my-2">
            <span class="">API Testing</span>
            <a href="#0"><i class="fa fa-arrow-right"></i></a>
          </div>
          <div
            class="home-our-services-item d-flex justify-content-between bg-white text-sm text-bold rounded w-100 px-3 py-2 my-2">
            <span class="">Performance Testing</span>
            <a href="#0"><i class="fa fa-arrow-right"></i></a>
          </div>
          <div
            class="home-our-services-item d-flex justify-content-between bg-white text-sm text-bold rounded w-100 px-3 py-2 my-2">
            <span class="">Full Circle Testing</span>
            <a href="#0"><i class="fa fa-arrow-right"></i></a>
          </div>
          <div
            class="home-our-services-item d-flex justify-content-between bg-white text-sm text-bold rounded w-100 px-3 py-2 my-2">
            <span class="">QA Consulting</span>
            <a href="#0"><i class="fa fa-arrow-right"></i></a>
          </div>
        </div>

        <div class="home-our-services-group col-12 col-md-4 px-1">
          <div
            class="home-our-services-item d-flex justify-content-between bg-white text-sm text-bold rounded w-100 px-3 py-2 my-2">
            <span class="">Agile Testing</span>
            <a href="#0"><i class="fa fa-arrow-right"></i></a>
          </div>
          <div
            class="home-our-services-item d-flex justify-content-between bg-white text-sm text-bold rounded w-100 px-3 py-2 my-2">
            <span class="">Dedicated QA Team</span>
            <a href="#0"><i class="fa fa-arrow-right"></i></a>
          </div>
          <div
            class="home-our-services-item d-flex justify-content-between bg-white text-sm text-bold rounded w-100 px-3 py-2 my-2">
            <span class="">Manual Testing</span>
            <a href="#0"><i class="fa fa-arrow-right"></i></a>
          </div>
          <div
            class="home-our-services-item d-flex justify-content-between bg-white text-sm text-bold rounded w-100 px-3 py-2 my-2">
            <span class="">Web Testing</span>
            <a href="#0"><i class="fa fa-arrow-right"></i></a>
          </div>
          <div
            class="home-our-services-item d-flex justify-content-between bg-white text-sm text-bold rounded w-100 px-3 py-2 my-2">
            <span class="">Mobile Automation Testing</span>
            <a href="#0"><i class="fa fa-arrow-right"></i></a>
          </div>
        </div>

        <div class="home-our-services-group col-12 col-md-4 px-1">
          <div
            class="home-our-services-item d-flex justify-content-between bg-white text-sm text-bold rounded w-100 px-3 py-2 my-2">
            <span class="">DevOps</span>
            <a href="#0"><i class="fa fa-arrow-right"></i></a>
          </div>
          <div
            class="home-our-services-item d-flex justify-content-between bg-white text-sm text-bold rounded w-100 px-3 py-2 my-2">
            <span class="">Mobile Testing</span>
            <a href="#0"><i class="fa fa-arrow-right"></i></a>
          </div>
          <div
            class="home-our-services-item d-flex justify-content-between bg-white text-sm text-bold rounded w-100 px-3 py-2 my-2">
            <span class="">QA Outsourcing</span>
            <a href="#0"><i class="fa fa-arrow-right"></i></a>
          </div>
          <div
            class="home-our-services-item d-flex justify-content-between bg-white text-sm text-bold rounded w-100 px-3 py-2 my-2">
            <span class="">Functional Testing</span>
            <i class="fa fa-arrow-right"></i>
          </div>
          <div
            class="home-our-services-item d-flex justify-content-between bg-white text-sm text-bold rounded w-100 px-3 py-2 my-2">
            <span class="">Automated Testing</span>
            <i class="fa fa-arrow-right"></i>
          </div>
        </div>
      </div>



    </section>

    <!-- Timeline -->
    <section class="container-fluid bg-brand timeline-section pr-0 text-white pl-5">
      <div class="row" v-for="timeline in timelines" :key="timeline.id">
        <div class="col-4 col-md-2">
          <div class="fancy-text-box">
            <span class="fancy-text">{{timeline.time[0]}}</span>
            <span class="fancy-text">{{timeline.time[1]}}</span>
          </div>
        </div>

        <div class="col-8 col-md-5 px-5 pb-5">
          <h2 class="text-bold">{{timeline.heading}}</h2>
          <p class="text-sm">{{timeline.text}}</p>
        </div>

        <div class="col-12 col-md-5 timeline-img-container py-5">
          <img :src="'assets/img/'+timeline.img" alt="" class="img-fluid">
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="container-fluid testimonials bg-pic text-center pt-5 pt-md-extra px-4">
      <Testimonials :testimonials="testimonials"/>
      <Brands />
    </section>

    <!-- Articles -->
	<section class="container-fluid bg-gray articles px-5 py-5 pt-md-extra">
		<div class="row">
			<div class="col-12 px-0 pb-4">
				<hr class="leading-line">
				<h3 class="text-xxs text-bold d-inline-block">Who Are We</h3>
				<h4>From the Blog</h4>
			</div>
		</div>
		<div class="row card-group">
			<div class="card" v-for="post in postsData" :key="post.id">
				<img :src="'assets/img/'+post.img" alt="" class="card-img-top">
				<div class="card-body">
					<div class="article-heading d-flex justify-content-between pb-2">
						<span class="text-xxs">{{post.category}}</span>
						<span class="text-xxs text-secondary">.</span>
						<span class="text-xxs text-secondary">{{post.postDate}}</span>
					</div>
					<p class="font-weight-bold pb-1 mb-0">{{post.title}}</p>
					<a href="#0" class="text-xxs">Read more</a>
				</div>
			</div>
		</div>
	</section>

    <!-- Get in touch -->
    <section class="container-fluid home-contact">
      <div class="row">
        <div class="col-12 col-md-6 bg-orange-gradient home-contact-group text-white">
          <div class="pb-2">
            <i>
              <svg width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.40455 13.867L28.4081 0.518455L28.7461 0.34516C28.9181 0.256548 29.1116 0.218288 29.3044 0.234778C29.4972 0.251268 29.6814 0.321836 29.8359 0.438372C29.9904 0.554909 30.1089 0.712678 30.1776 0.893538C30.2464 1.0744 30.2628 1.271 30.2248 1.46075L25.2296 26.6497C25.197 26.8116 25.126 26.9634 25.0225 27.0922C24.9189 27.221 24.786 27.323 24.6349 27.3897C24.4832 27.4567 24.3176 27.4858 24.1522 27.4744C23.9869 27.4631 23.8267 27.4116 23.6857 27.3245L13.9243 21.3387C13.8545 21.2947 13.7763 21.2656 13.6947 21.2533C13.6131 21.2409 13.5298 21.2456 13.4501 21.2671C13.3413 21.2946 13.242 21.3511 13.1629 21.4307C13.0838 21.5103 13.0279 21.6099 13.001 21.7189L12.2147 25.0201C12.1667 25.2391 12.0468 25.4356 11.8742 25.5786C11.7015 25.7215 11.486 25.8025 11.262 25.8088L11.2538 25.8092C11.0285 25.8212 10.8058 25.757 10.6213 25.6271C10.4369 25.4972 10.3015 25.309 10.237 25.0929L8.14113 18.5203C8.11516 18.4383 8.07261 18.3624 8.01611 18.2975C7.95715 18.2341 7.88641 18.1827 7.80785 18.1462L2.45119 15.7184C2.27512 15.6386 2.1251 15.5108 2.01832 15.3497C1.91154 15.1885 1.85231 15.0006 1.84745 14.8073C1.84258 14.6141 1.89226 14.4234 1.99079 14.2571C2.08932 14.0908 2.23273 13.9556 2.40455 13.867L2.40455 13.867ZM2.61984 15.3448L7.9765 17.7726C8.04606 17.8034 8.11195 17.8419 8.1729 17.8874L28.6167 1.09755C28.6347 1.0825 28.6541 1.06926 28.6746 1.058C28.7582 1.01081 28.8556 0.994308 28.9501 1.01135C29.0445 1.02839 29.13 1.0779 29.1918 1.15131C29.2536 1.22473 29.2878 1.31743 29.2885 1.4134C29.2892 1.50936 29.2563 1.60255 29.1956 1.67684L13.8272 20.8596C13.9378 20.8841 14.0434 20.9274 14.1393 20.9878L23.9006 26.9736C23.9852 27.0254 24.0811 27.056 24.1802 27.0628C24.2792 27.0696 24.3784 27.0524 24.4693 27.0126C24.5603 26.9728 24.6403 26.9117 24.7025 26.8344C24.7648 26.7572 24.8075 26.666 24.827 26.5687L29.8222 1.37976C29.8442 1.26609 29.8339 1.14851 29.7924 1.04042C29.7509 0.932332 29.6798 0.838075 29.5874 0.768394C29.4949 0.698713 29.3847 0.656411 29.2694 0.646301C29.154 0.636191 29.0381 0.658681 28.935 0.711212L28.589 0.888946L2.59354 14.2331C2.49035 14.2861 2.40419 14.3672 2.34492 14.467C2.28565 14.5667 2.25567 14.6812 2.25842 14.7972C2.26116 14.9132 2.29651 15.0261 2.36043 15.1229C2.42435 15.2198 2.51425 15.2967 2.61984 15.3448Z"
                  fill="white" />
                <path
                  d="M2.40455 13.867L28.4081 0.518455L28.7461 0.34516C28.9181 0.256548 29.1116 0.218288 29.3044 0.234778C29.4972 0.251268 29.6814 0.321836 29.8359 0.438372C29.9904 0.554909 30.1089 0.712678 30.1776 0.893538C30.2464 1.0744 30.2628 1.271 30.2248 1.46075L25.2296 26.6497C25.197 26.8116 25.126 26.9634 25.0225 27.0922C24.9189 27.221 24.786 27.323 24.6349 27.3897C24.4832 27.4567 24.3176 27.4858 24.1522 27.4744C23.9869 27.4631 23.8267 27.4116 23.6857 27.3245L13.9243 21.3387C13.8545 21.2947 13.7763 21.2656 13.6947 21.2533C13.6131 21.2409 13.5298 21.2456 13.4501 21.2671C13.3413 21.2946 13.242 21.3511 13.1629 21.4307C13.0838 21.5103 13.0279 21.6099 13.001 21.7189L12.2147 25.0201C12.1667 25.2391 12.0468 25.4356 11.8742 25.5786C11.7015 25.7215 11.486 25.8025 11.262 25.8088L11.2538 25.8092C11.0285 25.8212 10.8058 25.757 10.6213 25.6271C10.4369 25.4972 10.3015 25.309 10.237 25.0929L8.14113 18.5203C8.11516 18.4383 8.07261 18.3624 8.01611 18.2975C7.95715 18.2341 7.88641 18.1827 7.80785 18.1462L2.45119 15.7184C2.27512 15.6386 2.1251 15.5108 2.01832 15.3497C1.91154 15.1885 1.85231 15.0006 1.84745 14.8073C1.84258 14.6141 1.89226 14.4234 1.99079 14.2571C2.08932 14.0908 2.23273 13.9556 2.40455 13.867L2.40455 13.867ZM2.61984 15.3448L7.9765 17.7726C8.04606 17.8034 8.11195 17.8419 8.1729 17.8874C8.22768 17.9277 8.278 17.9738 8.32299 18.0248C8.36974 18.0768 8.41083 18.1336 8.44557 18.1942L8.44566 18.1963C8.48207 18.2594 8.51127 18.3264 8.53271 18.3961L10.6284 24.9687C10.6661 25.0988 10.747 25.2123 10.8577 25.2904C10.9685 25.3685 11.1025 25.4066 11.2378 25.3985L11.2419 25.3983C11.3767 25.3958 11.5067 25.3479 11.6108 25.2623C11.715 25.1767 11.7871 25.0584 11.8156 24.9266L12.6019 21.6233C12.6424 21.4533 12.7258 21.2966 12.8439 21.1679C12.9621 21.0392 13.1112 20.9428 13.2771 20.8879L13.2791 20.8879C13.3015 20.8807 13.3238 20.8736 13.3461 20.8685C13.5034 20.8264 13.6685 20.8234 13.8272 20.8596C13.9378 20.8841 14.0434 20.9274 14.1393 20.9878L23.9006 26.9736C23.9852 27.0254 24.0811 27.056 24.1802 27.0628C24.2792 27.0696 24.3784 27.0524 24.4693 27.0126C24.5603 26.9728 24.6403 26.9117 24.7025 26.8344C24.7648 26.7572 24.8075 26.666 24.827 26.5687L29.8222 1.37976C29.8442 1.26609 29.8339 1.14851 29.7924 1.04042C29.7509 0.932332 29.6798 0.838075 29.5874 0.768394C29.4949 0.698713 29.3847 0.656411 29.2694 0.646301C29.154 0.636191 29.0381 0.658681 28.935 0.711212L28.589 0.888946L2.59354 14.2331C2.49035 14.2861 2.40419 14.3672 2.34492 14.467C2.28565 14.5667 2.25567 14.6812 2.25842 14.7972C2.26116 14.9132 2.29651 15.0261 2.36043 15.1229C2.42435 15.2198 2.51425 15.2967 2.61984 15.3448Z"
                  fill="white" />
                <path
                  d="M8.09565 17.9493L8.35654 18.2669L8.44589 18.1951L8.4458 18.193L28.8739 1.41833L13.2793 20.8867L13.2773 20.8868L13.2365 20.94L13.5564 21.1974L13.8274 20.8584L29.1958 1.67566C29.2566 1.60137 29.2894 1.50818 29.2887 1.41222C29.2881 1.31625 29.2538 1.22355 29.192 1.15013C29.1302 1.07671 29.0447 1.0272 28.9503 1.01016C28.8558 0.993123 28.7584 1.00962 28.6749 1.05681C28.6543 1.06807 28.6349 1.08133 28.6169 1.09637L8.17312 17.8862L8.09565 17.9493Z"
                  fill="white" />
              </svg>
            </i>
          </div>
          <p class="mb-2-5">Get in Touch</p>
          <h4 class="pb-4">Have a Project?</h4>
          <a href="#0" class="btn text-sm rounded-lg border-inherit px-4 py-2">Get in Touch</a>
        </div>
        <div class="col-12 col-md-6 home-contact-group">
          <div class="pb-2">
            <i>
              <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.6667 27.8889V26.0555C15.6667 23.8403 18.076 21.7449 19.6389 20.25C21.8419 18.144 23 15.3145 23 12C23 5.88892 18.1317 1.00004 12 1.00004C10.5544 0.99601 9.12215 1.27778 7.78575 1.82915C6.44935 2.38052 5.23512 3.19062 4.21287 4.21287C3.19062 5.23511 2.38053 6.44934 1.82915 7.78574C1.27778 9.12214 0.99601 10.5544 1.00004 12C1.00004 15.1961 2.20775 18.2173 4.36115 20.25C5.91566 21.7174 8.33336 23.8174 8.33336 26.0555V27.8889"
                  stroke="black" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.55554 35.2207H14.4444" stroke="black" stroke-opacity="0.6"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.33325 31.5557H15.6666" stroke="black" stroke-opacity="0.6"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 27.8896V18.1118" stroke="black" stroke-opacity="0.6" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path
                  d="M14.9028 16.8882C14.9028 16.8882 13.2597 18.1104 12.0001 18.1104C10.7404 18.1104 9.09729 16.8882 9.09729 16.8882"
                  stroke="black" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </i>
          </div>
          <p class="mb-2-5">Careers</p>
          <h4 class="pb-4">Want To Work With Us?</h4>
          <a href="#0" class="btn text-sm text-bold rounded-lg px-4 py-2">Send Resume</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapActions, mapState } from "vuex";
import Testimonials from "@/components/testimonial";
import Brands from "@/components/brands";
import { heroLeftArrow, heroRightArrow } from "@/shared/svg";
export default {
  name: 'Home',
  components: { 
    Testimonials, Brands
    },
  data() {

    return {
      slide_id: 0, reverse_slide_id: 0, hero_slide_id: 0, hero_reverse_slide_id: 0, justification: 'flex-start', heroLeftArrow: heroLeftArrow, heroRightArrow: heroRightArrow, hero_justification: 'flex-start', autoSlideSetInterval: 0,
    }

  },
  created() {
    this.letStoreGetTestimonialsData();
    this.letStoreFetchServices();
    this.letStoreFetchHeroes();
    this.letStoreFetchPosts();
    this.letStoreFetchTimelines();
  },
  computed: {
    ...mapState(['testimonials', 'services', 'siteHeroes', 'postsData', 'timelines']),
  },
  methods: {
    ...mapActions({letStoreGetTestimonialsData: 'fetchTestimonialsData', letStoreFetchServices: 'fetchServicesData', letStoreFetchHeroes: 'fetchSiteHeroes', letStoreFetchPosts: 'fetchPostsData', letStoreFetchTimelines: 'fetchTimelineData',}),
    slidePrev(){
      let slides = document.querySelectorAll('.core-services-carousel-item');
      slides.forEach((el) => {
        if(this.slide_id == el.id){
          console.log(el);
          document.querySelector('.core-services-carousel-content').removeChild(el);
          document.querySelector('.core-services-carousel-content').append(el);
        }
      })
      this.slide_id = (this.slide_id < (slides.length-1)) ? ++this.slide_id : 0;
      this.reverse_slide_id = (this.reverse_slide_id>0) ? --this.reverse_slide_id : 0;
      this.justification = 'flex-start';
      let indicators = Array.from(document.getElementsByClassName('core-services-carousel-indicator'));
      indicators.forEach((el,index) => {
        (this.slide_id == index) ? el.classList.add('active') : el.classList.remove('active');
      });
      

    },
    slideNext(){
      let slides = document.querySelectorAll('.core-services-carousel-item');
      console.log(slides);
      slides.forEach((el) => {
        if(((slides.length -1) - this.reverse_slide_id) == el.id){
          console.log(el);
          document.querySelector('.core-services-carousel-content').removeChild(el);
          document.querySelector('.core-services-carousel-content').prepend(el);
          console.log(document.querySelector('.core-services-carousel-content'), +':' + el);
        }
      })
      this.reverse_slide_id = (this.reverse_slide_id < (slides.length-1)) ? ++this.reverse_slide_id : 0;
      this.slide_id = (this.slide_id>0) ? --this.slide_id : 0;
      this.justification = 'flex-end';
      let indicators = Array.from(document.getElementsByClassName('core-services-carousel-indicator'));
      indicators.forEach((el,index) => {
        (this.reverse_slide_id == index) ? el.classList.add('active') : el.classList.remove('active');
        });
    },
    slideHeroPrev(){
      let slides = document.querySelectorAll('.banner-carousel-item');
      slides.forEach((el) => {
        if(this.hero_slide_id == el.id){
          console.log(el);
          document.querySelector('.banner-carousel-content').removeChild(el);
          document.querySelector('.banner-carousel-content').append(el);
        }
      })
      this.hero_slide_id = (this.hero_slide_id < (slides.length-1)) ? ++this.hero_slide_id : 0;
      this.hero_reverse_slide_id = (this.hero_reverse_slide_id>0) ? --this.hero_reverse_slide_id : 0;
      this.hero_justification = 'flex-start';
      let indicators = Array.from(document.getElementsByClassName('banner-carousel-indicator'));
      indicators.forEach((el,index) => {
        (this.hero_slide_id == index) ? el.classList.add('active') : el.classList.remove('active');
        console.log(el);
      });
    },
    slideHeroNext(){
      let slides = document.querySelectorAll('.banner-carousel-item');
      slides.forEach((el) => {
        if(((slides.length -1) - this.hero_reverse_slide_id) == el.id){
          console.log(el);
          document.querySelector('.banner-carousel-content').removeChild(el);
          document.querySelector('.banner-carousel-content').prepend(el);
          console.log(document.querySelector('.banner-carousel-content'));
        }
      })
      this.hero_reverse_slide_id = (this.hero_reverse_slide_id < (slides.length-1)) ? ++this.hero_reverse_slide_id : 0;
      this.hero_slide_id = (this.hero_slide_id>0) ? --this.hero_slide_id : 0;
      this.hero_justification = 'flex-end';
      let indicators = Array.from(document.getElementsByClassName('banner-carousel-indicator'));
      indicators.forEach((el,index) => {
        (this.hero_reverse_slide_id == index) ? el.classList.add('active') : el.classList.remove('active');
        console.log(el);
        });
        
    },
    autoSlide(){
      this.autoSlideSetInterval = setInterval(this.slideHeroNext, 2000);
    },
    stopAutoSlide(){
      clearInterval(this.autoSlideSetInterval)
    }
  },
}
</script>
