<template>
    <v-app-bar
        color="#fff"
        flat
        app
    >
        <v-container fluid>
            <v-row>
                <v-container>
                    <v-row>
                        <v-col cols="auto d-flex flex-row">
                            <v-app-bar-nav-icon @click="$emit('show-nav')"> </v-app-bar-nav-icon>
                            <v-img src="/images/logo.png"
                                   alt="website logo"
                                   max-height="50px"
                                   max-width="150px"
                            ></v-img>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="auto">
                            <span class="red--text">خروج</span>
                      <v-icon class="red--text">mdi-exit-to-app</v-icon>
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>


        </v-container>
    </v-app-bar>
</template>
<script>
export default {
    name: "AdminNavbar",
    data() {
        return {
            search:false,
            items: [
                {
                    text: "جدیدترین پست ها",
                    class: "white--text"
                },
                {
                    text: 'پست های دوستان ',
                    class: 'white--text'
                },
                {
                    text: 'استارتاپ ',
                    class: ' text--lighten-4'
                },
                {
                    text: 'دلنوشته ',
                    class: ' text--lighten-4'
                },
                {
                    text: 'زندگی ',
                    class: " text--lighten-4"
                },
                {
                    text: 'کتاب ',
                    class: " text--lighten-4"
                },
                {
                    text: 'خلاقیت ',
                    class: " text--lighten-4"
                },
                {
                    text: 'طنز ',
                    class: " text--lighten-4"
                },
                {
                    text: 'حال خوبتو با من تقسیم کن ',
                    class: " text--lighten-4"
                },
            ]
        }
    }
}
</script>

<style>
.v-input__control .v-input__slot::before{
    border: none !important;
}
.v-menu__content{
    top:0 !important;
    left: 0 !important;
    box-shadow: unset;
    border-radius: 0;
}

</style>
