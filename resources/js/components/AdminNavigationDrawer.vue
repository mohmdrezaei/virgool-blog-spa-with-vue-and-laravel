<template>
    <v-navigation-drawer
        right
        app
        v-model="drawer"
    >
        <v-list>
            <v-list-item two-line>
                <v-list-item-avatar size="70">
                    <v-avatar size="70">
                        <v-img src="https://files.virgool.io/upload/users/1738701/avatar/fcOEHy.png?x-img=v1/resize,h_120,w_120/optimize,q_100"></v-img>
                    </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>نام کاربر</v-list-item-title>
                    <v-list-item-subtitle class="body-2 mt-2">نقش کاربر</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
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
    name: "AdminNavigationDrawer",
    props :['drawer'],
    data() {
        return {
            items: [
                {
                    text: "داشبورد",
                    class: "white--text"
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>
