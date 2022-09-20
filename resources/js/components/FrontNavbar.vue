<template>
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
                            <span class="headline font-weight-bold blue--text text--darken-3">وبلاگ</span>
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
                                   class="px-7 "
                            >
                                ثبت نام
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>

            <v-row class="blue darken-2">
                <v-container>
                    <v-row>
                        <v-col cols="12" class="py-4">
                                <span class=" body-2 pl-3"
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
</template>

<script>
export default {
    name: "FrontNavbar",
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
                    class: 'blue--text text--lighten-4'
                },
                {
                    text: 'دلنوشته ',
                    class: 'blue--text text--lighten-4'
                },
                {
                    text: 'زندگی ',
                    class: "blue--text text--lighten-4"
                },
                {
                    text: 'کتاب ',
                    class: "blue--text text--lighten-4"
                },
                {
                    text: 'خلاقیت ',
                    class: "blue--text text--lighten-4"
                },
                {
                    text: 'طنز ',
                    class: "blue--text text--lighten-4"
                },
                {
                    text: 'حال خوبتو با من تقسیم کن ',
                    class: "blue--text text--lighten-4"
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>
