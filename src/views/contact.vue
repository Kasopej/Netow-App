<template>
    <div>
        <!-- Contact Intro -->
    <section
      class="container-fluid contact-intro bg-brand text-center text-white"
    >
      <h2 class="heading">Let’s Help You Test It’s Bug Free</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cu
      </p>
    </section>

    <!-- Contact form & icons-->
    <section class="container-fluid bg-pic contact-main">
      <div class="row">
        <div class="col-12 mb-3">
          <form action="#" class="form m-auto bg-white p-3 rounded-lg">
            <div class="d-flex input-group">
              <div class="input-item col-12 col-md-6 py-2 px-3">
                <label for="#name" class="small">Your Name*</label>
                <input
                  type="text"
                  class="col-12 p-3 rounded"
                  id="name"
                  required
                />
              </div>
              <div class="input-item col-12 col-md-6 py-2 px-3">
                <label for="#email" class="small">Contact Email*</label>
                <input
                  type="text"
                  class="col-12 p-3 rounded"
                  id="email"
                  required
                />
              </div>
            </div>

            <div class="d-flex input-group">
              <div class="input-item col-12 col-md-6 py-2 px-3">
                <label for="#phone" class="small">Phone Number*</label>
                <input
                  type="text"
                  class="col-12 p-3 rounded"
                  id="phone"
                  required
                />
              </div>
              <div class="input-item col-12 col-md-6 py-2 px-3">
                <label for="#location" class="small">Location*</label>
                <input
                  type="text"
                  class="col-12 p-3 rounded"
                  id="location"
                  required
                />
              </div>
            </div>

            <div class="d-flex input-group">
              <div class="input-item col-12 py-2 px-3">
                <label for="#message" class="small">Message*</label>
                <textarea
                  type="text"
                  class="col-12 p-3 rounded"
                  id="message"
                  required
                >
                </textarea>
              </div>
            </div>
            <div class="input-group pt-5 px-3">
              <button class="btn bg-brand text-white p-3 rounded-lg">
                <input type="submit" value="CONTACT US" class="bg-none" />
              </button>
            </div>
          </form>
        </div>

        <!-- Contact option icons-->
        <div
          class="col-12 col-md-4 pb-4 pb-md-1 text-center contact-option"
          id="contact-option-1"
        >
          <div>
            <i v-html="mailRectIcon">
              
            </i>
          </div>
          <h3 class="heading">Email Us</h3>
          <p class="text-md">
            Every single project is a challenge we await eagerly. Let's
            implement ideas together!
          </p>
        </div>

        <div class="col-12 col-md-4 pb-4 pb-md-1 text-center contact-option">
          <div>
            <i v-html="phoneRectIcon">
            </i>
          </div>
          <h3 class="heading">Call Us</h3>
          <p class="text-md">
            Every single project is a challenge we await eagerly. Let's
            implement ideas together!
          </p>
        </div>

        <div class="col-12 col-md-4 pb-4 pb-md-1 text-center contact-option">
          <div>
            <i v-html="earphonesRectIcon">     
            </i>
          </div>
          <h3 class="heading">Support</h3>
          <p class="text-md">
            Every single project is a challenge we await eagerly. Let's
            implement ideas together!
          </p>
        </div>
      </div>
    </section>
    </div>
</template>

<script>

import { mailRectIcon, phoneRectIcon, earphonesRectIcon } from "../shared/svg";
export default {
  data() {
    return {
      mailRectIcon: mailRectIcon, phoneRectIcon: phoneRectIcon, earphonesRectIcon: earphonesRectIcon,
    }
  },
}
</script>