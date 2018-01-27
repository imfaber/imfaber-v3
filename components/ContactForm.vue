<template>
    <form @submit.prevent>

        <div class="block block--transparent">
            <div class="input--kozakura"
                 :class="{'input--filled': isFilled('name')}">
                <input class="input__field input__field--kozakura"
                       v-validate="'required'"
                       name="name"
                       :class="{'input': true, 'is-danger': errors.has('name') }"
                       v-model="name"/>
                <label
                  class="input__label input__label--kozakura">Your name *</label>
                <svg class="graphic graphic--kozakura" width="300%"
                     height="100%" viewBox="0 0 1200 60"
                     preserveAspectRatio="none">
                    <path
                      d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z"></path>
                </svg>
            </div>
        </div>
        <span v-show="errors.has('name')"
              class="help is-danger">{{ errors.first('name') }}</span>

        <div class="block block--transparent">
            <div class="input--kozakura"
                 :class="{'input--filled': isFilled('email')}">
                <input class="input__field input__field--kozakura"
                       v-validate="'required|email'"
                       name="email"
                       :class="{'input': true, 'is-danger': errors.has('email') }"
                       v-model="email"/>
                <label
                  class="input__label input__label--kozakura">Your email *</label>
                <svg class="graphic graphic--kozakura" width="300%"
                     height="100%" viewBox="0 0 1200 60"
                     preserveAspectRatio="none">
                    <path
                      d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z"></path>
                </svg>
            </div>
        </div>
        <span v-show="errors.has('email')"
              class="help is-danger">{{ errors.first('email') }}</span>

        <div class="block block--transparent">
            <div class="input--kozakura"
                 :class="{'input--filled': isFilled('subject')}">
                <input class="input__field input__field--kozakura"
                       v-validate="'required'"
                       name="subject"
                       :class="{'input': true, 'is-danger': errors.has('subject') }"
                       v-model="subject"/>
                <label
                  class="input__label input__label--kozakura">Subject *</label>
                <svg class="graphic graphic--kozakura" width="300%"
                     height="100%" viewBox="0 0 1200 60"
                     preserveAspectRatio="none">
                    <path
                      d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z"></path>
                </svg>
            </div>
        </div>
        <span v-show="errors.has('subject')"
              class="help is-danger">{{ errors.first('subject') }}</span>

        <div class="block block--transparent">
            <div class="input--kozakura input--textarea"
                 :class="{'input--filled': isFilled('message')}">
                <textarea
                  v-validate="'required'"
                  name="message"
                  :class="{'input': true, 'is-danger': errors.has('message') }"
                  class="input__field input__field--kozakura "
                  v-model="message"></textarea>
                <label class="input__label input__label--kozakura">Your message *</label>
                <svg class="graphic graphic--kozakura" width="300%"
                     height="100%" viewBox="0 0 1200 60"
                     preserveAspectRatio="none">
                    <path
                      d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z"></path>
                </svg>
            </div>
        </div>
        <span v-show="errors.has('message')"
              class="help is-danger">{{ errors.first('message') }}</span>

        <div class="block block--transparent">
            <div class="has-text-centered">
                <button class="button is-primary" :class="{'is-loading': sending}" @click="submit">
                    Send your message
                </button>
                <span v-show="error"
                      class="help is-danger">{{ error }}</span>
            </div>
        </div>


    </form>
</template>

<script>


  export default {
    data() {
      return {
        name:    '',
        email:   '',
        subject: '',
        message: '',
        error:   '',
        success: '',
        sending: false,
      }
    },
    computed: {},
    methods:  {
      isFilled(input) {
        return this[input];
      },
      submit(){
        this.$validator.validateAll().then(valid => {
          if (valid) {
            this.sending = true
            this.$store.dispatch('contact/sendMessage', {
              name:    this.name,
              email:   this.email,
              subject: this.subject,
              message: this.message,
            }).then(response => {
              console.log(response);
              this.sending = false
              this.error = false
            }).catch(error => {
              this.sending = false
              this.error = 'Something went wrong! Please try again later.'
            })
          }
        }).catch(() => {
          this.error = 'Something went wrong! Please try again later.'
        })
      }
    },
  }
</script>
