<template>


        <v-content>
            <v-container>
                <v-row>
                    <v-col :cols="post.col" v-for="(post,index) in posts" :key="index">
                        <related-post :data="post"></related-post>
                    </v-col>
                </v-row>
            </v-container>

            <v-container>
                <v-row>
                    <v-col cols="12" md="8" >
                        <new-post v-for="item in  10"> {{ item }}</new-post>
                    </v-col>
                    <v-col cols="4" class="hidden-sm-and-down">
                        <popular-posts></popular-posts>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
</template>

<script>
import RelatedPost from "@/components/posts/RelatedPost";
import NewPost from "@/components/posts/NewPost";
import PopularPosts from "@/components/posts/PopularPosts";

export default {
    name: "Home",
    components: {
        PopularPosts,
        NewPost,
        RelatedPost,
    },

    data() {
        return {
            drawer: false,
            posts: [
                {
                    col: 8,
                    image: "https://files.virgool.io/upload/users/1738701/posts/ejamvuku98ka/thcnfaw74ga9.jpeg?x-img=v1/resize,w_700/optimize,q_100",
                    title: "عقده ی ادیپ چیست؟",
                    user: {
                        profile: "https://files.virgool.io/upload/users/1738701/avatar/fcOEHy.png?x-img=v1/resize,h_120,w_120/optimize,q_100",
                        name: "محمد رضایی"
                    }
                },
                {
                    col: 4,
                    image: "https://files.virgool.io/upload/users/189201/posts/tmy9g7masjck/gq7astbk1xq0.jpeg?x-img=v1/resize,w_700/optimize,q_100",
                    title: "یک آزمون خودارزیابی برای مدیران عامل",
                    user: {
                        profile: "https://files.virgool.io/upload/users/189201/avatar/0V29Um.jpg?x-img=v1/resize,h_120,w_120/optimize,q_100",
                        name: "پویا حسینلو"
                    }
                },
                {
                    col: 4,
                    image: "https://files.virgool.io/upload/users/189201/posts/tmy9g7masjck/gq7astbk1xq0.jpeg?x-img=v1/resize,w_700/optimize,q_100",
                    title: "یک آزمون خودارزیابی برای مدیران عامل",
                    user: {
                        profile: "https://files.virgool.io/upload/users/189201/avatar/0V29Um.jpg?x-img=v1/resize,h_120,w_120/optimize,q_100",
                        name: "پویا حامدی"
                    }
                },
                {
                    col: 8,
                    image: "https://files.virgool.io/upload/users/92127/posts/oawr3oilvn5l/smphxjarfjnt.jpeg?x-img=v1/resize,w_700/optimize,q_100",
                    title: "زندان شرم",
                    user: {
                        profile: "https://files.virgool.io/upload/users/92127/avatar/Cc8JiU.png?x-img=v1/resize,h_120,w_120/optimize,q_100",
                        name: "مجتبی شکوری"
                    }
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
