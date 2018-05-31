<template>
  <div class="main-color">
    <base-header />
    <h2 class="md-title">schedule</h2>


    <v-container fluid>
      <v-flex>
        <v-select
          :items="items"
          v-model="e1"
          label="Select"
          single-line
        ></v-select>
      </v-flex>

    </v-container>

    <v-btn color="success"@click="next_page">test</v-btn>

  </div>
</template>

<script>
import baseHead from '@/components/modules/base-header'
export default {
  name: 'scheduleDetails',
  components: {
    baseHead: 'base-header'
  },
  methods: {
    next_page :function(){
      console.log("test")
      router.push('/')
    }
  },
  data: function () {
    return{
      e1: null,
      e2: null,
      e3: null,
      e4: null,
      items: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
        { text: 'State 5' },
        { text: 'State 6' },
        { text: 'State 7' }
      ],
      maintext: `test`,
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`

    }
  },
}
</script>
<style scoped>
</style>
