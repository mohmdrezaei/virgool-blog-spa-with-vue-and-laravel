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
    name: "register",
    components: {AuthBanner}
}
</script>

<style >
.gra-bg{
    background-image: linear-gradient(to bottom right,#054592 0,#1897d4);
}
.h-100{
    height: 100%;
}
.h-40{
    height: 40%;
}
.v-responsive__content{
    width: 300px !important
}
</style>
