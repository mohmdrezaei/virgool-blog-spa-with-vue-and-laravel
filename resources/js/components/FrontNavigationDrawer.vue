<template>
    <v-navigation-drawer
        right
        app
        temporary
        v-model="drawer"
    >
        <v-list>
            <v-list-item v-for="item in items" :key="item.text">
                <v-list-item-content>
                    <p>{{ item.text }}</p>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "FrontNavigationDrawer",
    props :['drawer'],
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
