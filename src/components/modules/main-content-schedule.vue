<template>
    <v-container fluid grid-list-md>
        <v-card-text>
            <v-icon color="teal">calendar_today</v-icon>
            schedule
            <v-btn icon class="mx-0" @click.stop="dialog = true">
            <v-icon color="teal">add_circle</v-icon>
            </v-btn>
        </v-card-text>
        <v-data-table
            :headers="headers"
            :items="scheduleList"
            hide-actions
            color="indigo"
            class="elevation-1"
        >
            <template slot="items" slot-scope="props" color="indigo">
                <td class="text-xs-right">{{ props.item.date }}</td>
                <td class="text-xs-right">{{ props.item.category }}</td>
                <!-- <td class="text-xs-right">{{ props.item.place }}</td> -->
                <td class="justify-center layout px-0">
                    <v-btn icon class="mx-0" @click="dialog5 = true">
                        <v-icon color="teal">toys</v-icon>
                    </v-btn>
                </td>
            </template>
        </v-data-table>

        <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            scrollable
        >
            <v-card tile>
                <v-toolbar card dark color="primary">
                    <v-btn icon dark @click.native="dialog = false">
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Settings</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark flat @click.native="dialog = false">登録</v-btn>
                    </v-toolbar-items>
                    <v-menu bottom right offset-y>
                        <v-btn slot="activator" dark icon>
                            <v-icon>more_vert</v-icon>
                        </v-btn>
                        <v-list>
                            <v-list-tile v-for="(item, i) in items" :key="i" @click="">
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                </v-toolbar>
                <v-card-text>
                    <v-list three-line subheader>
                        <v-list-tile avatar>
                            <v-list-tile-content>
                                <v-list-tile-title>開催日：{{date}}</v-list-tile-title>
                                <v-btn dark icon @click.native.stop="dialog1 = true">
                                    <v-icon>date_range</v-icon>
                                </v-btn>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile avatar>
                            <v-list-tile-content>
                                <v-list-tile-title>開催時刻：{{time}}</v-list-tile-title>
                                <v-btn dark icon @click.native.stop="dialog2 = true">
                                    <v-icon>query_builder</v-icon>
                                </v-btn>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile avatar>
                            <v-list-tile-content>
                                <v-list-tile-title>開催場所</v-list-tile-title>
                                <v-list-tile-sub-title>
                                    <v-text-field
                                        id="testing"
                                        name="input-1"
                                    ></v-text-field>
                                </v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-container fluid>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                        name="input-1"
                                        label="備考"
                                        textarea
                                        dark
                                        ></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-list>
                </v-card-text>
                <div style="flex: 1 1 auto;"></div>
            </v-card>

            <v-dialog v-model="dialog1" max-width="290">
                <v-card>
                    <v-date-picker v-model="date"></v-date-picker>
                </v-card>
            </v-dialog>

            <v-dialog v-model="dialog2" max-width="290">
                <v-card>
                    <v-time-picker v-model="time" format="24hr"></v-time-picker>
                </v-card>
            </v-dialog>

        </v-dialog>

        <!-- ステータス変更用ダイアログ -->
        <v-dialog v-model="changeStatusDialog" persistent max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="headline">スケジュール詳細</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs6 sm6 md4>
                                <v-text-field label="開催日" required></v-text-field>
                            </v-flex>
                            <v-flex xs6 sm6 md4>
                                <v-text-field label="開催場所" required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field label="回答期限" required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field
                                name="input-1"
                                label="備考"
                                textarea
                                dark
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-select
                                :items="['参加', '不参加']"
                                label="回答ステータス"
                                required
                                ></v-select>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click.native="changeStatusDialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="changeStatusDialog = false">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import { SCHEDULE_LIST } from '@/store/mutation-types'
    
export default {
    name: 'main-content-schedule',
    components: {
    },
    methods: {
    },
    mounted () {
        this.$store.dispatch('SCHEDULE_LIST')
        this.scheduleList = this.$store.state.scheduleList
    },
    data: function () {
        return{
            scheduleList: this.$store.state.scheduleList
            ,date: null
            ,dialog1: false
            ,dialog2: false
            ,time: null
            ,dialog: false
            ,changeStatusDialog: false
            ,notifications: false
            ,sound: true
            ,widgets: false
            ,headers: [
                { text: 'date', value: 'date' }
                ,{ text: 'category', value: 'category' }
                // ,{ text: 'place', value: 'place' }
                ,{ text: 'actions', value: 'actions', sortable: false    }
            ]
            ,items: [
                {
                    title: 'Click Me'
                },
                {
                    title: 'Click Me'
                },
                {
                    title: 'Click Me'
                },
                {
                    title: 'Click Me 2'
                }
            ]
            ,select: [
                { text: 'State 1' },
                { text: 'State 2' },
                { text: 'State 3' },
                { text: 'State 4' },
                { text: 'State 5' },
                { text: 'State 6' },
                { text: 'State 7' }
            ]
        }
    }
}
</script>
<style scoped>
    .main-color {
        background-color: #403C3B;
    }
    .flex-styel {
        border: solid 2px red;
    }
</style>
