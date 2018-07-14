<template>
    <v-container class="header-style">
        <v-container>
                    <v-toolbar color="orange darken-3" dark fixed clipped app >
                        <v-toolbar-side-icon @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
                        <v-toolbar-title>HEADER</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="nextp('logout')">
                            <v-icon>exit_to_app</v-icon>
                        </v-btn>
                    </v-toolbar>
        </v-container>

        <v-navigation-drawer
            temporary
            v-model="drawer"
            :mini-variant="mini"
            dark
            absolute
            style="background-color:#78909C;"
        >
            <v-list class="pa-1">
                <v-list-tile v-if="mini" @click.stop="mini = !mini">
                    <v-list-tile-action>
                        <v-icon>chevron_right</v-icon>
                    </v-list-tile-action>
                </v-list-tile>
                <v-list-tile avatar tag="div">
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg" >
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>gotomypage</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon @click.stop="mini = !mini">
                            <v-icon>chevron_left</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
            <v-list class="pt-0" dense>
                <v-divider light></v-divider>
                <v-list-tile v-for="item in items" :key="item.title" @click="nextp('main')">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

    </v-container>
</template>

<script>
import router from '@/router'
  export default {
    name: 'base-header',
        methods: {
            nextp: function(ntype) {
                if(ntype == 'main'){
                    router.push('main')
                } else if(ntype == 'logout') {
                    router.push('/')
                }
            }
        },
    data: function() {
      return {
                drawer: null,
                mini: false,
                right: null,
                items: [
                    { title: 'Home', icon: 'dashboard' }
                    ,{ title: 'member', icon: 'group' }
                    ,{ title: 'Achievement', icon: 'insert_chart_outlined' }
                    ,{ title: 'mypage', icon: 'accessibility_new' }
                    ,{ title: 'logout', icon: 'exit_to_app' }
                ]
      }
    }
  }
</script>
<style scoped>
.red {
    background-color: red;
}
@media screen and (max-width: 960px) {
     .header-style {
        height: 48px; padding: 0px;
    }
}
@media screen and (max-width: 603px) {
     .header-style {
        height: 56px; padding: 0px;
    }
}
</style>
