<template>
  <div>
    <div class="publications-carousel-container bg-brand blog-hero">
        <h2 class="heading text-white pt-3 pb-md-5 text-center px-2">Thoughts, Stories, Researchs and Ideas by Netow Team</h2>
        <div class="publications-carousel text-center">
          <div class="publications-carousel-prev d-flex align-items-center justify-content-center">
            <a @click="slidePrev" class="publications-carousel-link"><i class="fas fa-arrow-left text-white"></i></a>
          </div>
          <div class="publications-carousel-next d-flex align-items-center justify-content-center">
            <a @click="slideNext" class="publications-carousel-link"><i class="fas fa-arrow-right text-white"></i></a>
          </div>
          <div class="publications-carousel-content text-center" :style="{'justify-content': justification}">
            <div v-for="(publication, index) in publications" :key="publication.id" :id="index" class="publications-carousel-item p-3">
              <img :src="'assets/img/'+publication.img" alt="" class="img-fluid">
            </div>
          </div>
        </div>
      </div>

    <section class="blog-posts-group container-fluid px-5">
      <div class="row blog-post">
        <div class="col-12 col-md-6">
          <div class="card">
            <img src="assets/img/blog_post1.jpg" alt="" class="card-img-top">
            <div class="card-body">
              <p class="font-weight-bold pb-1 mb-0">Top Software Testing Services In 2021: Software Testing
                Companies.</p>
              <div class="article-heading d-flex justify-content-between pb-2">
                <span class="text-xxs">News</span>
                <span class="text-xxs text-secondary">.</span>
                <span class="text-xxs text-secondary">19 Jan, 2021</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 text-center">
          <h4 class="text-lg text-bold pt-3 pt-md-5">Start A Career in Softwear Testing</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur aliquid quos eligendi itaque. Odio illum exercitationem repellendus, architecto nemo suscipit modi cum quia natus? Amet voluptates dolore quis rem.
            architecto nemo suscipit modi cum quia natus? Amet voluptates dolore quis rem, 
            architecto nemo suscipit modi cum quia natus? Amet voluptates dolore quis rem, 
            architecto nemo suscipit modi cum quia natus? Amet voluptates dolore quis rem, 
            architecto nemo suscipit modi cum quia natus? Amet voluptates dolore quis rem.
          </p>
        </div>
      </div>
      <hr class="blog-hr pt-3">
      
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {

    return {
      slide_id: 0, reverse_slide_id: 0, justification: 'flex-start'
    }

  },
  created() {
    this.letStoreFetchPublications();
  },
  methods: {
    ...mapActions({letStoreFetchPublications: 'fetchPublicationsData'}),
    slidePrev(){
      let slides = document.querySelectorAll('.publications-carousel-item');
      slides.forEach((el) => {
        if(this.slide_id == el.id){
          console.log(el);
          document.querySelector('.publications-carousel-content').removeChild(el);
          document.querySelector('.publications-carousel-content').append(el);
        }
      })
      this.slide_id = (this.slide_id < (slides.length-1)) ? ++this.slide_id : 0;
      this.reverse_slide_id = (this.reverse_slide_id>0) ? --this.reverse_slide_id : 0;
      this.justification = 'flex-start';
      console.log(`${this.slide_id} : ${this.reverse_slide_id}`);

    },
    slideNext(){
      let slides = document.querySelectorAll('.publications-carousel-item');
      slides.forEach((el) => {
        if(((slides.length -1) - this.reverse_slide_id) == el.id){
          console.log(el);
          document.querySelector('.publications-carousel-content').removeChild(el);
          document.querySelector('.publications-carousel-content').prepend(el);
        }
      })
      this.reverse_slide_id = (this.reverse_slide_id < (slides.length-1)) ? ++this.reverse_slide_id : 0;
      this.slide_id = (this.slide_id>0) ? --this.slide_id : 0;
        this.justification = 'flex-end';
        console.log(`${this.slide_id} : ${this.reverse_slide_id}`);
      },
  },
  computed: {
    ...mapState({publications: 'publications'})
  },
}
</script>

<style>

</style>