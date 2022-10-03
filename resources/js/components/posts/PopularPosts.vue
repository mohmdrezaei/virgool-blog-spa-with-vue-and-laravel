<template>
    <v-banner sticky>
        <v-list>
            <v-subheader class="subtitle-2 font-weight-bold">محبوب ترین نوشته ها</v-subheader>
            <v-list-item-group>
                <v-list-item v-for="item in [1,1,1,1,1]">
                    <v-list-item-icon>
                        <v-avatar size="35">
                            <v-img
                                src="https://files.virgool.io/upload/users/2919/avatar/r9Faw3.jpeg?x-img=v1/resize,h_120,w_120/optimize,q_100"></v-img>
                        </v-avatar>
                    </v-list-item-icon>
                    <v-list-item-content>
                                            <span
                                                class="caption d-inline-block text-truncate"
                                                style="max-width: 240px"
                                            >تحلیلی بر گزارش فصل پاییز کافه بازار (قسمت اول)</span>
                        <span class="grey--text overline">میلاد چراغعلی خانی</span>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-banner>
</template>

<script>
export default {
    name: "PopularPosts"
}
</script>

<style scoped>

</style>
