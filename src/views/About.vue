<template>
  <div>
    <!-- About hero section -->
    <section class="about-hero container-fluid bg-brand pt-2">
      <div class="about-hero-text text-center text-white">
        <h2 class="heading">Netow Solutions Initiative</h2>
        <p class="heading" style="font-weight: 300;">We Test & Analyse Till it's Bug Free</p>
      </div>
      <div class="about-hero-images row justify-content-center">
        <figure class="about-hero-img-container">
          <figcaption class="p-2">Ideate</figcaption>
        </figure>
        <figure class="about-hero-img-container">
          <figcaption class="p-2">Present</figcaption>
        </figure>
        <figure class="about-hero-img-container">
          <figcaption class="p-2">Test</figcaption>
        </figure>
        <figure class="about-hero-img-container">
          <figcaption class="p-2">Analyse</figcaption>
        </figure>
      </div>
    </section>

    <!-- Other sections to come in here -->
    <section class="bg-pic our-story text-center">
      <h2>Our Story</h2>
      <div class="about-carousel">
        <p class="pb-3" v-for="(story, index) in ourStory" :key="story.id" :id="index">{{story.text}}</p>
      </div>
      <div class="about-carousel-controls-group">
        <div class="about-carousel-controls d-inline-block mx-auto mt-4">
          <a @click="slide()" class="mx-3 border rounded-circle"><span>&#8592;</span></a>
          <span>{{current_slide_id + 1}}/2</span>
          <a @click="slide()" class="mx-3 border rounded-circle"><span>&#8594;</span></a>
        </div>
      </div>
      <div class="about-carousel-image-group px-3 px-md-5">
        <div class="about-carousel-img d-none" v-for="(story, index) in ourStory" :key="story.id" :id="'story-img-'+index"><img :src="'assets/img/'+story.img" alt="" class="img-fluid"></div>
      </div>
    </section>

    <!-- Our Team (range slider) section-->
    <section class="team pt-4">
      <h2 class="text-lg text-bold px-5">Our <span class="text-brand">Team</span></h2>
      <div class="team-carousel-container pb-4">
        <div class="team-carousel-content" :style="{'left': '-'+ leftSlide + 'px'}">
          <div class="card bg-brand" v-for="member in team" :key="member.id">
            <div class="card-body">
                <p class="card-title small text-white">{{member.role}}</p>
                <p class="card-text display-6 text-white mb-0">{{member.name.split(' ')[0]}}</p>
                <p class="card-text display-6 text-white">{{member.name.split(' ')[1]}}</p>
                <div><img :src="'assets/img/'+ member.img" alt="" class="img-fluid"></div>
            </div>
          </div>
        </div>
      <input type="range" name="team" id="teamSlider" min="0" :max="maxRange" value="0" step="0.01" @input="rangeSlide">
      </div>
      
    </section>
    <!-- Values Section -->
    <section class="values container-fluid">
      <div class="row">
        <div class="col-12 col-md-6 pt-3 pb-4 px-5 px-md-5 pt-5">
          <h2 class="text-lg text-bold">Our <span class="text-brand">Values</span></h2>
          <img src="assets/img/values.png" alt="" class="img-fluid">
        </div>
        
        <div class="values-text col-12 col-md-6 pt-3 pb-4 px-5 px-md-5">
          <div>
            <h3 class="text-md text-bold pb-3 text-brand">Selfless</h3>
            <p class="pb-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus </p>
            <hr class="values-hr">
          </div>
          <div>
            <h3 class="text-md text-bold pb-3 text-brand">Selfless</h3>
            <p class="pb-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus </p>
            <hr class="values-hr">
          </div>
          <div>
            <h3 class="text-md text-bold pb-3 text-brand">Selfless</h3>
            <p class="pb-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus </p>
            <hr class="values-hr">
          </div>
        </div>

      

      </div>

    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {

    return {
      current_slide_id: 0, leftSlide: 0, maxRange: 0,
    }

  },
  created() {
    this.letStoreGetStories();
    this.letStoreGetTeam();
  },
  mounted() {
    let el = document.getElementById('story-img-0')
    el.classList.add('show');
    console.log(document.getElementById('story-img-0'));
    this.maxRange = (this.viewWidth < 768) ? this.team.length-1 :  this.team.length-4
  },
  computed: {
    ...mapState(['ourStory', 'team',]),
    viewWidth(){
      return document.body.clientWidth;
    }
  },
  methods: {
    ...mapActions({letStoreGetStories: 'fetchStoryData', letStoreGetTeam: 'fetchTeamData',}),
    slide(){
      let slides = document.querySelectorAll('.about-carousel > p');
      slides.forEach((el, index) => {
        let img = document.getElementById('story-img-'+index)
        img.classList.toggle('show');
        if(this.current_slide_id == el.id){
          console.log(el);
          document.querySelector('.about-carousel').removeChild(el);
          document.querySelector('.about-carousel').append(el);
        }
      })
      this.current_slide_id = (this.current_slide_id == 0) ? 1 : 0;
    },
    rangeSlide(ev){
      console.log(ev.target.value);
      this.leftSlide = (this.viewWidth < 768) ? ev.target.value * (0.85 * this.viewWidth) : ev.target.value * (0.85 * this.viewWidth * 0.35);
    }
  },
}
</script>

<style>

</style>