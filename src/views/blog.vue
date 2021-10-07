<template>
  <div>
    <div class="publications-carousel-container bg-brand">
        <h2 class="heading text-white pt-3 pb-md-5 text-center">Thoughts, Stories, Researchs and Ideas by Netow Team</h2>
        <div class="publications-carousel text-center">
          <div class="publications-carousel-prev d-flex align-items-center justify-content-center">
            <a @click="slidePrev" class="publications-carousel-link"><span class="border rounded-circle border-white">&#5176;</span></a>
          </div>
          <div class="publications-carousel-next d-flex align-items-center justify-content-center">
            <a @click="slideNext" class="publications-carousel-link"><span class="border rounded-circle border-white">&#5171;</span></a>
          </div>
          <div class="publications-carousel-content text-center" :style="{'justify-content': justification}">
            <div v-for="(publication, index) in publications" :key="publication.id" :id="index" class="publications-carousel-item p-3">
              <img :src="'assets/img/'+publication.img" alt="" class="img-fluid">
            </div>
          </div>
        </div>
      </div>

    <!-- Blog Posts -->
    <section class="blog-posts-group container-fluid px-5">
      <div class="row blog-post mb-4" v-for="post in postsData" :key="post.id">
        <div class="col-12 col-md-6">
          <div class="card">
            <img :src="'assets/img/'+post.img" alt="" class="card-img-top">
            <div class="card-body pb-1">
              <p class="font-weight-bold pb-1 mb-0">{{post.title}}</p>
              <div class="article-heading pb-2">
                <span class="text-xxs pr-4">{{post.category}}</span>
                <span class="text-xxs text-secondary pr-3">.</span>
                <span class="text-xxs text-secondary">{{post.postDate}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 text-center">
          <h4 class="text-lg text-bold pt-md-5">{{post.subTitle}}</h4>
          <p>{{post.body}}
          </p>
        </div>
        <hr class="blog-hr mt-2 p-0 col-12">
      </div>
      
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
    this.letStoreFetchPostsData();
  },
  methods: {
    ...mapActions({letStoreFetchPublications: 'fetchPublicationsData', letStoreFetchPostsData: 'fetchPostsData'}),
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
    ...mapState({publications: 'publications', postsData: 'postsData'}),
  },
}
</script>

<style>

</style>