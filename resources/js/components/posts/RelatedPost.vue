<template>
    <v-img
        :src="data.image"
        min-height="300px"
        max-height="300px"
        gradient="rgba(20,18,10,.17), rgba(15,15,10,.4)"
        class="d-flex align-end white--text rounded-lg"
    >
        <v-card-title >{{ data.title }}</v-card-title>
        <v-card-actions class="mr-3 mb-3">
            <v-avatar>
                <v-img :src="data.user.profile">
                </v-img>
            </v-avatar>
            <div class="d-flex flex-column mr-3">
                <span>{{data.user.name}}</span>
                <span>3 روز پیش</span>
            </div>
        </v-card-actions>
    </v-img>
</template>

<script>
export default {
    name: "RelatedPost",
    props:{
        data:{
            type: Object,
            required:true
        }
    }
}
</script>

<style scoped>

</style>
