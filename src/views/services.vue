<template>
  <div>
    <!--Main Content Container for Our Services-->
    <section class="container-fluid services-main padding p-5">
        <div v-for="(service, index) in services" :key="service.id" class="row px-3 py-4 our-services-box text-center">
            <div class="col-12 col-md-6"><img :src="'assets/img/'+service.img" alt="" class="img-fluid">
            </div>
            <div class="col-12 col-md-6" :class="index%2 === 1 ? 'order-md-first' :'order-md-last'">
                <div class="our-services-content pt-md-4 mt-md-4">
                    <div class="our-services-icon"><i class="" v-html="service.icon"></i></div>
                    <h1>{{service.name}}</h1>
                    <p class="display-6">{{service.text}}</p>
                </div>
            </div>
        </div>

        <!--Services Carousel within Our Services Container-->
        <div class="services-carousel-container bg-brand py-5">
          <h2 class="heading text-white pt-3 pb-5 text-center">What We Can Do</h2>
          <div class="services-carousel text-center">
            <div class="services-carousel-prev d-flex align-items-center justify-content-center">
              <a @click="slidePrev" class="services-carousel-link"><i class="fas fa-arrow-left text-white"></i></a>
            </div>
            <div class="services-carousel-next d-flex align-items-center justify-content-center">
              <a @click="slideNext" class="services-carousel-link"><i class="fas fa-arrow-right text-white"></i></a>
            </div>
            <transition-group tag="div" class="services-carousel-content text-center" :style="{'justify-content': justification}" name="services">
              <div v-for="(offer, index) in offers" :key="offer.id" :id="index" class="services-carousel-item bg-white p-3 text-brand">
                <h4>{{offer.name}}</h4>
                <p>{{offer.text}}</p>
                <button class="btn bg-none">Learn More</button>
              </div>
            </transition-group>
          </div>
          <div class="services-carousel-indicators-group text-center mt-4">
            <div class="d-inline-block">
              <div class="services-carousel-indicator active rounded-circle border border-white p-2 d-inline-block mx-1"></div>
              <div class="services-carousel-indicator rounded-circle border border-white p-2 d-inline-block mx-1"></div>
              <div class="services-carousel-indicator rounded-circle border border-white p-2 d-inline-block mx-1"></div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: 'Services',
  data() {

    return {
      slide_id: 0, reverse_slide_id: 0, justification: 'flex-start'
    }

  },
  created() {
    this.letStoreFetchServices();
    this.letStoreFetchOffers();
  },
  methods: {
    ...mapActions({letStoreFetchServices: 'fetchServicesData', letStoreFetchOffers: 'fetchOffersData'}),
    slidePrev(){
      let slides = document.querySelectorAll('.services-carousel-item');
      slides.forEach((el) => {
        if(this.slide_id == el.id){
          console.log(el);
          document.querySelector('.services-carousel-content').removeChild(el);
          document.querySelector('.services-carousel-content').append(el);
        }
      })
      this.slide_id = (this.slide_id < (slides.length-1)) ? ++this.slide_id : 0;
      this.reverse_slide_id = (this.reverse_slide_id>0) ? --this.reverse_slide_id : 0;
      this.justification = 'flex-start';
      let indicators = Array.from(document.getElementsByClassName('services-carousel-indicator'));
      indicators.forEach((el,index) => {
        (this.slide_id == index) ? el.classList.add('active') : el.classList.remove('active')
      })
      

    },
    slideNext(){
      let slides = document.querySelectorAll('.services-carousel-item');
      slides.forEach((el) => {
        if(((slides.length -1) - this.reverse_slide_id) == el.id){
          console.log(el);
          document.querySelector('.services-carousel-content').removeChild(el);
          document.querySelector('.services-carousel-content').prepend(el);
        }
      })
      this.reverse_slide_id = (this.reverse_slide_id < (slides.length-1)) ? ++this.reverse_slide_id : 0;
      this.slide_id = (this.slide_id>0) ? --this.slide_id : 0;
        this.justification = 'flex-end';
        console.log(`${this.slide_id} : ${this.reverse_slide_id}`);
      },
      
  },
  computed: {
    ...mapState({services: 'services', offers: 'offers'}),
    minSlides(){
      return 2-1;
    }
  },
}
</script>

<style>

</style>