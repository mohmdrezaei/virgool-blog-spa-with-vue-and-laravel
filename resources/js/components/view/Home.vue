<template>
    <div>
        <v-app-bar
            color="#fff"
            flat
            height="160"
        >
            <v-container fluid>
                <v-row>
                    <v-container>
                        <v-row>
                            <v-col cols="auto">
                                <sapn>وبلاگ</sapn>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="auto">
                                <v-icon class="pl-4">mdi-magnify</v-icon>
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
                                       class="px-7"
                                >
                                    ثبت نام
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-row>

                <v-row class="blue">
                    <v-container>
                        <v-row>
                            <v-col cols="12" class="py-4">
                                <span class=" body-1 caption pl-3"
                                      v-for="item in items"
                                      :key="item.text"
                                      :class="item.class"
                                >
                                    {{ item.text }}
                                </span>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-row>
            </v-container>
        </v-app-bar>

    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
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
                    class: 'blue--text text--lighten-5'
                },
                {
                    text: 'دلنوشته ',
                    class: 'blue--text text--lighten-5'
                },
                {
                    text: 'زندگی ',
                    class: "blue--text text--lighten-5"
                },
                {
                    text: 'کتاب ',
                    class: "blue--text text--lighten-5"
                },
                {
                    text: 'خلاقیت ',
                    class: "blue--text text--lighten-5"
                },
                {
                    text: 'طنز ',
                    class: "blue--text text--lighten-5"
                },
                {
                    text: 'حال خوبتو با من تقسیم کن ',
                    class: "blue--text text--lighten-5"
                },
            ]
        }
    }
}
</script>

<style>
.v-toolbar__content {
    padding: 0 !important;
}
</style>
