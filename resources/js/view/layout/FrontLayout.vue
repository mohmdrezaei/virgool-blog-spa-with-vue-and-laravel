<template>
    <div>
        <front-navbar @show-nav="drawer =true"></front-navbar>
        <front-navigation-drawer :drawer="drawer"></front-navigation-drawer>
    </div>
</template>

<script>
import FrontNavbar from "@/components/FrontNavbar";
import FrontNavigationDrawer from "@/components/FrontNavigationDrawer";
export default {
    name: "FrontLayout",
    components: {
        FrontNavbar,
      FrontNavigationDrawer
    },
    data(){
        return{
            drawer:false
        }
    }
}
</script>

<style scoped>

</style>
