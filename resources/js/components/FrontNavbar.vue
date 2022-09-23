<template>
    <v-app-bar
        color="#fff"
        flat
        :height="$vuetify.breakpoint.smAndDown ? 80 :160"
    >
        <v-container fluid>
            <v-row>
                <v-container>
                    <v-row>
                        <v-col cols="auto d-flex flex-row">
                            <v-app-bar-nav-icon class="hidden-md-and-up"
                            @click="$emit('show-nav')"
                            > </v-app-bar-nav-icon>
                            <v-img src="/images/logo.png"
                                   alt="website logo"
                                   max-height="50px"
                                   max-width="150px"
                            ></v-img>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="auto">
                           <v-menu
                               v-model="search"
                               :close-on-content-click="false"
                               top
                               :offset-y="offset"
                               absolute
                               min-width="100%"
                           >
                               <template v-slot:activator="{on}">
                                   <v-btn @click="search=true" text>
                                       <v-icon>mdi-magnify</v-icon>
                                   </v-btn>
                               </template>
                               <v-list class="d-flex  align-center">
                                   <v-text-field class="mr-10" placeholder="در بین مقالات، نویسندگان و… جستجو کنید"></v-text-field>
                                   <v-btn class="ml-10 title" text large
                                   @click="search= false"
                                   >x</v-btn>
                               </v-list>
                           </v-menu>
                            <v-btn :to="{name: 'login' }"
                                   title="ورود به حساب کاربری"
                                   text
                                   small
                                   color="primary"
                            >
                                ورود
                            </v-btn>
                            <v-btn :to="{name: 'register'}"
                                   title="ثبت نام در وبلاگ"
                                   color="primary"
                                   small
                                   class="px-7 "
                            >
                                ثبت نام
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>

            <v-row class="blue darken-2" v-if="$vuetify.breakpoint.mdAndUp">
                <v-container>
                    <v-row>
                        <v-col cols="12" class="py-4">
                                <v-hover
                                    v-for="item in items"
                                    :key="item.text"
                                    v-slot:default="{hover}"
                                >
                                    <span class=" body-2 pl-3"

                                          :class="item.class + ' ' +(hover || item.class === 'white--text' ? 'white--text': 'blue--text')"
                                    >
                                    {{ item.text }}
                                </span>
                                </v-hover>
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script>
export default {
    name: "FrontNavbar",
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
