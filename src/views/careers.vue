<template>
  <div>
    <section class="container-fluid careers text-center bg-pic mb-5">
        <div class="row mb-5 pb-5 career-hero">
            <div class="col-12 col-md-6 text-left px-1">
                <h5 class="text-uppercase text-brand">Welcome To Netow</h5>
                <h2 class="heading-md text-brand font-weight-bold">Creative Software Testing Comapany</h2>
                <p class="text-md text-brand">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam nihil sequi
                    distinctio sint.
                </p>
                <a href="#"><button class="btn btn-md btn-outline-none rounded px-3 px-md-5 py-1 py-md-3 mt-2 mt-md-4 mb-3 mb-md-0 text-white bg-brand font-weight-bold">Join
                        Us</button></a>
            </div>
            <div class="col-12 col-md-6 px-1"><img src="assets/img/career.PNG" alt="" class="img-fluid rounded-lg"></div>
        </div>

        <!--Brands we work with-->
        <Brands />
    </section>
    
    <!-- Testimonials -->
    <section class="container-fluid px-4 pb-5">
        <!--Testimonials-->
        <Testimonials :testimonials="testimonials"/>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Testimonials from "@/components/testimonial";
import Brands from "@/components/brands";
export default {
  data() {

    return {
      
    }

  },
  components: {
    Testimonials, Brands
  },
  created() {
    this.letStoreGetTestimonials();
  },
  computed: {
    ...mapState(['testimonials']),
  },
  methods: {
    ...mapActions({letStoreGetTestimonials: 'fetchTestimonialsData'}),
  },
}
</script>

<style>

</style>