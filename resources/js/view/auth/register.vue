<template>
    <v-container fluid class="ma-0 pa-0" :class="$vuetify.breakpoint.mdAndUp ? 'h-100' : 'h-40'">
        <v-row class="h-100 ma-0 pa-0">
            <auth-banner></auth-banner>
            <v-col cols="12" md="4" class="d-flex align-end">
                <v-form class="w-100 mx-5"
                        ref="registerForm">
                    <span class="blue--text font-weight-bold">ایجاد حساب کاربری</span>
                    <v-text-field label="آدرس ایمیل"
                                  outlined
                                  rounded
                                  v-model="form.email"
                                  :rules="emailRules"
                                  :error-messages="errors.email"
                                  class="mt-9"
                    ></v-text-field>
                    <v-text-field label="رمز عبور"
                                  outlined
                                  rounded
                                  v-model="form.password"
                                  :rules="passwordRules"
                                  :error-messages="errors.password"
                                  type="password"
                    ></v-text-field>
                    <div class="d-flex">
                        <v-spacer></v-spacer>
                        <v-btn class="info px-7"
                               rounded
                               @click="register"
                        >
                            <template v-if="loading">
                                <v-progress-circular
                                    color="white"
                                    :indeterminate="true"
                                >
                                </v-progress-circular>
                            </template>
                            <template v-else>
                                ایجاد حساب کاربری
                                <v-icon class="mr-2">mdi-chevron-left</v-icon>
                            </template>
                        </v-btn>
                    </div>
                    <div class="d-flex flex-column align-center justify-center mt-9 body-2">
                        <span class="mt-6">ورود با اکانت گوگل</span>
                        <span class="mt-6">ثبت نام در ویرگول به منزله موافقت با قوانین است</span>
                        <router-link :to="{name:'login'}" class="my-6 mt-9">قبلا عضو شده اید؟ رفتن به صفحه ورود
                        </router-link>
                    </div>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AuthBanner from "@/components/auth/AuthBanner";
import {ref} from "@vue/composition-api"

export default {
    name: "register",
    components: {AuthBanner},

    setup() {
        const registerForm = ref(null)
        const form = ref({
            email: null,
            password: null
        });
        const errors = ref({
            email: null,
            password: null,
        });

        const emailRules = ref([
            value => !!value || 'ایمیل الزامی است',
            value => /.+@+./.test(value) || 'یک ایمبل درست را وارد کنید',
            value => (value ? value.length <= 255 : false) || 'طول ایمیل نباید بیشتر از 255 کاراکتر باشد'
        ]);
        const passwordRules = ref([
            value => !!value || 'رمز عبور الزامی است',
            value => (value ? value.length >= 8 : false) || 'طول رمز عبور باید بیشتر از 8 کاراکتر باشد'
        ]);
        const loading = ref(false)
   function register() {
       if (registerForm.value.validate()) {
           loading.value = true;
           axios.post('/register', form.value)
               .catch((error) => {
                   errors.value.email = error.response.data.errors.email[0]
                   errors.value.password = error.response.data.errors.password[0]
               })
               .finally(() => loading.value = false)
       }
   }
        return {
            form,
            errors,
            emailRules,
            passwordRules,
            loading,
            registerForm,
            register
        }

    },

}
</script>

<style>
.gra-bg {
    background-image: linear-gradient(to bottom right, #054592 0, #1897d4);
}


</style>
