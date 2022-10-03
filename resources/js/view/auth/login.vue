<template>
    <v-container fluid class="ma-0 pa-0" :class="$vuetify.breakpoint.mdAndUp ? 'h-100' : 'h-40'">
        <v-row class="h-100 ma-0 pa-0">
<auth-banner></auth-banner>
            <v-col cols="12" md="4">

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AuthBanner from "@/components/auth/AuthBanner";
export default {
    name: "login",
    components: {AuthBanner}

}
</script>

<style scoped>

</style>
