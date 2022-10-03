<template>
    <v-col cols="12" md="8" class="gra-bg d-flex flex-column align-center justify-center">
        <v-img src="/images/logo.png"
               :max-height="$vuetify.breakpoint.mdAndUp ? '100px' : '60px' "
               :max-width="$vuetify.breakpoint.mdAndUp ? '100%' : '250px' "
        >

        </v-img>
        <span class="white--text   font-weight-bold"
              :class="$vuetify.breakpoint.mdAndUp ? 'mt-7 headline' : 'title '"
        >به سایت ما خوش آمدید</span>
        <span class="black--text mt-4 hidden-sm-and-down">همین حالا حساب کاربری خودت را بساز و دوران جدید وبلاگ نویسی را شروع کن.</span>

    </v-col>

</template>

<script>
export default {
    name: "AuthBanner"
}
</script>

<style scoped>

</style>
