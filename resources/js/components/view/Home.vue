<template>
    <div>
        <front-navbar @show-nav="drawer =true"></front-navbar>
        <front-navigation-drawer :drawer="drawer"></front-navigation-drawer>
    </div>
</template>

<script>
import FrontNavbar from "../FrontNavbar";
import FrontNavigationDrawer from "../FrontNavigationDrawer";
export default {
    name: "Home",
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

<style>
.v-toolbar__content {
    padding: 0 !important;
}
</style>
