<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid rid-list-md>



    <v-layout row wrap>
      <v-flex d-flex xs6 sm6 md3>
        <v-card color="purple" dark>
          <v-card-title primary class="title">画像</v-card-title>
          <v-card-text>{{ lorem1 }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs6 sm6 md3>
        <v-card color="purple" dark>
          <v-card-title primary class="title">グラフ</v-card-title>
          <v-card-text>{{ lorem2 }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md6>
        <v-card color="indigo" dark>
          <v-card-text>スケジュール
            <v-btn icon class="mx-0" @click="">
              <v-icon color="teal">add_circle</v-icon>
            </v-btn>
          </v-card-text>

          <v-data-table
            :headers="headers"
            :items="users"
            hide-actions
            color="indigo"
            class="elevation-1"
          >
            <template slot="items" slot-scope="props" color="indigo">
              <td class="text-xs-right">{{ props.item.date }}</td>
              <td class="text-xs-right">{{ props.item.category }}</td>
              <td class="text-xs-right">{{ props.item.place }}</td>
              <td class="justify-center layout px-0">
                <v-menu bottom offset-y>
                  <v-btn icon class="mx-0" slot="activator">
                    <v-icon color="teal">toys</v-icon>
                  </v-btn>
                  <v-list>
                    <v-list-tile v-for="(item, i) in item_list" :key="i" @click="">
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              </td>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md6 child-flex>
        <v-card color="green lighten-2" dark>
          <v-card-text>メンバーリスト</v-card-text>
          <v-list two-line>
            <template v-for="(item, index) in items">
              <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
              <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
              <v-list-tile v-else :key="item.title" avatar @click="">
                <v-list-tile-avatar class="number-style">
                  <img src="https://placeimg.com/40/40/people/5">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm12 md6>
        <v-card color="blue lighten-2" dark>
          <v-card-text>{{ lorem2 }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>


      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'test',
    data: () => ({
      drawer: true
    }),
    props: {
      source: String
    }
  }
</script>