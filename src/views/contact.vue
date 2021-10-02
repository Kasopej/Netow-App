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
            <i>
              <svg
                width="123"
                height="123"
                viewBox="0 0 123 123"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="123"
                  height="123"
                  rx="5"
                  fill="#E93314"
                  fill-opacity="0.15"
                />
                <path
                  d="M61.5 26L47.7395 34.655H35.95V41.9897L28.5405 46.7206C26.4235 48.0041 25 50.3146 25 52.9917V89.6653C25 91.6106 25.7691 93.4762 27.1381 94.8517C28.5071 96.2272 30.3639 97 32.3 97H90.7C94.7515 97 98 93.7361 98 89.6653V52.9917C98 50.3146 96.5765 48.0041 94.4595 46.7206L87.05 41.9897V34.655H75.2605L61.5 26ZM43.25 41.9897H79.75V59.8864L61.5 71.3285L43.25 59.8864V41.9897ZM46.9 45.657V51.1581H76.1V45.657H46.9ZM35.95 50.718V55.3022L32.3 52.9917L35.95 50.718ZM87.05 50.718L90.7 52.9917L87.05 55.3022V50.718ZM46.9 54.8254V60.3264H76.1V54.8254H46.9Z"
                  fill="#E93314"
                />
              </svg>
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
            <i>
              <svg
                width="123"
                height="123"
                viewBox="0 0 123 123"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.625 57.75C49 66.5 56.5 73.6875 65.25 78.375L72.125 71.5C73.0625 70.5625 74.3125 70.25 75.25 70.875C78.6875 72.125 82.4375 72.75 86.5 72.75C88.375 72.75 89.625 74 89.625 75.875V86.5C89.625 88.375 88.375 89.625 86.5 89.625C57.125 89.625 33.375 65.875 33.375 36.5C33.375 34.625 34.9375 33.375 36.5 33.375H47.4375C49.3125 33.375 50.5625 34.625 50.5625 36.5C50.5625 40.25 51.1875 44 52.4375 47.75C52.75 48.6875 52.4375 49.9375 51.8125 50.875L44.625 57.75ZM67.75 33.375C65.875 33.375 64.625 34.625 64.625 36.5C64.625 38.375 65.875 39.625 67.75 39.625C69.625 39.625 70.875 38.375 70.875 36.5C70.875 34.625 69.625 33.375 67.75 33.375ZM77.125 33.375C75.25 33.375 74 34.625 74 36.5C74 38.375 75.25 39.625 77.125 39.625C79 39.625 80.25 38.375 80.25 36.5C80.25 34.625 79 33.375 77.125 33.375ZM86.5 33.375C84.625 33.375 83.375 34.625 83.375 36.5C83.375 38.375 84.625 39.625 86.5 39.625C88.375 39.625 89.625 38.375 89.625 36.5C89.625 34.625 88.375 33.375 86.5 33.375ZM67.75 42.75C65.875 42.75 64.625 44 64.625 45.875C64.625 47.75 65.875 49 67.75 49C69.625 49 70.875 47.75 70.875 45.875C70.875 44 69.625 42.75 67.75 42.75ZM77.125 42.75C75.25 42.75 74 44 74 45.875C74 47.75 75.25 49 77.125 49C79 49 80.25 47.75 80.25 45.875C80.25 44 79 42.75 77.125 42.75ZM86.5 42.75C84.625 42.75 83.375 44 83.375 45.875C83.375 47.75 84.625 49 86.5 49C88.375 49 89.625 47.75 89.625 45.875C89.625 44 88.375 42.75 86.5 42.75ZM67.75 52.125C65.875 52.125 64.625 53.375 64.625 55.25C64.625 57.125 65.875 58.375 67.75 58.375C69.625 58.375 70.875 57.125 70.875 55.25C70.875 53.375 69.625 52.125 67.75 52.125ZM77.125 52.125C75.25 52.125 74 53.375 74 55.25C74 57.125 75.25 58.375 77.125 58.375C79 58.375 80.25 57.125 80.25 55.25C80.25 53.375 79 52.125 77.125 52.125ZM86.5 52.125C84.625 52.125 83.375 53.375 83.375 55.25C83.375 57.125 84.625 58.375 86.5 58.375C88.375 58.375 89.625 57.125 89.625 55.25C89.625 53.375 88.375 52.125 86.5 52.125Z"
                  fill="#E93314"
                />
                <rect
                  width="123"
                  height="123"
                  rx="5"
                  fill="#E93314"
                  fill-opacity="0.15"
                />
              </svg>
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
            <i>
              <svg
                width="123"
                height="123"
                viewBox="0 0 123 123"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M80.4 55.2C80.4 50.1874 78.4088 45.3801 74.8643 41.8357C71.3199 38.2912 66.5126 36.3 61.5 36.3C56.4874 36.3 51.6801 38.2912 48.1357 41.8357C44.5912 45.3801 42.6 50.1874 42.6 55.2V89.85H36.3C34.6291 89.85 33.0267 89.1863 31.8452 88.0048C30.6637 86.8233 30 85.2209 30 83.55V70.95C30 69.2791 30.6637 67.6767 31.8452 66.4952C33.0267 65.3138 34.6291 64.65 36.3 64.65V55.2C36.3 48.5165 38.955 42.1068 43.6809 37.3809C48.4068 32.655 54.8165 30 61.5 30C68.1835 30 74.5932 32.655 79.3191 37.3809C84.045 42.1068 86.7 48.5165 86.7 55.2V64.65C88.3709 64.65 89.9733 65.3138 91.1548 66.4952C92.3363 67.6767 93 69.2791 93 70.95V83.55C93 85.2209 92.3363 86.8233 91.1548 88.0048C89.9733 89.1863 88.3709 89.85 86.7 89.85H80.4V55.2ZM67.8 61.5H77.25V93H67.8V61.5ZM45.75 61.5H55.2V93H45.75V61.5Z"
                  fill="#E93314"
                />
                <rect
                  width="123"
                  height="123"
                  rx="5"
                  fill="#E93314"
                  fill-opacity="0.15"
                />
              </svg>
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