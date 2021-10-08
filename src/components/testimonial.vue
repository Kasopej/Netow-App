<template>
  <div class="row text-center testimonials">
            <p class="col-12 font-weight-bold mb-1">Testimonials</p>
            <h3 class="col-12 bolder mb-5">What Clients Say</h3>
            <div class="col-12 col-md-4 testimonials-box" v-for="testimonial in testimonials" :key="testimonial.id">
                <blockquote>
                    <i class="fa fa-quote-right"></i>
                    <p class="display-6">
                        {{testimonial.text}}
                    </p>
                </blockquote>
                <div class="pointer"></div>
                <br>
                <img :src="'assets/img/'+ testimonial.img" alt="" class="rounded-circle">
                <p class="display-6 mb-0 mt-2 font-weight-bold">{{testimonial.name}}</p>
                <p><small>{{testimonial.role}}</small></p>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Testimonials',
    props: {
        testimonials: {type: Array, default: () => []},
    }
}
</script>

<style>

</style>