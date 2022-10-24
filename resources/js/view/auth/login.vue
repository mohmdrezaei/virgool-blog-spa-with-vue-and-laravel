<template>
    <v-container fluid class="ma-0 pa-0" :class="$vuetify.breakpoint.mdAndUp ? 'h-100' : 'h-40'">
        <v-row class="h-100 ma-0 pa-0">
<auth-banner></auth-banner>
            <v-col cols="12" md="4" class="d-flex align-end">
                <div class="w-100 mx-5">
                    <span class="blue--text font-weight-bold">ورود به حساب کاربری</span>
                    <v-text-field label="نام کاربری یا ایمیل"
                                  outlined
                                  rounded
                                  class="mt-9"
                    ></v-text-field>
                    <v-text-field label="رمز عبور"
                                  outlined
                                  rounded
                    ></v-text-field>
                    <div class="d-flex">
                        <span class=" body-2">فراموشی رمز عبور</span>
                        <v-spacer></v-spacer>
                        <v-btn class="info px-7"
                               rounded
                        >ورود به حساب کاربری ه<v-icon class="mr-2">mdi-chevron-left</v-icon> </v-btn>
                    </div>
                    <div class="d-flex flex-column align-center justify-center mt-9 body-2">
                        <span class="mt-6">ورود با اکانت گوگل</span>
                        <span class="mt-6">ثبت نام در ویرگول به منزله موافقت با قوانین است</span>
                        <router-link :to="{name:'register'}" class="my-6 mt-9">عضو نیستید؟ ثبت نام کنید</router-link>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AuthBanner from "@/components/auth/AuthBanner";
export default {
    name: "login",
    components: {AuthBanner}

}
</script>

<style scoped>

</style>
