<template>
  <div class="home">
    {{ someModel }}
    <b-table class="my-table"
      :data="data"
      bordered
      mobile-cards
      paginated
      per-page="10"
      narrowed
      stripped
    >
    <template slot-scope="props">
      <b-table-column label="Status" centered>
         <template v-if="props.index === 0">
           <b-input v-model.trim="someModel" size="is-small"></b-input>
         </template>
         <template v-else>
           <span>{{ props.row.status }}</span>
         </template>
      </b-table-column>
      <b-table-column label="Name" centered>
         <template v-if="props.index === 0">
           <b-input v-model.trim="someModel" size="is-small"></b-input>
         </template>
         <template v-else>
           <span>{{ props.row.name }}</span>
         </template>
      </b-table-column>
      <b-table-column label="Dept" centered>
         <template v-if="props.index === 0">
           <b-input v-model.trim="someModel" size="is-small"></b-input>
         </template>
         <template v-else>
           <span>{{ props.row.dept_num_sec }}</span>
         </template>
      </b-table-column>
      <b-table-column label="Gereqs" centered>
         <template v-if="props.index === 0">
           <b-input v-model.trim="someModel" size="is-small"></b-input>
         </template>
         <template v-else>
           <span>{{ props.row.gereqs }}</span>
         </template>
      </b-table-column>
      <b-table-column label="Days" centered>
         <template v-if="props.index === 0">
           <b-input v-model.trim="someModel" size="is-small"></b-input>
         </template>
         <template v-else>
           <span>{{ props.row.days }}</span>
         </template>
      </b-table-column>
      <b-table-column label="Times" centered>
         <template v-if="props.index === 0">
           <b-input v-model.trim="someModel" size="is-small"></b-input>
         </template>
         <template v-else>
           <span>{{ props.row.times }}</span>
         </template>
      </b-table-column>
      <b-table-column label="Prof" centered>
         <template v-if="props.index === 0">
           <b-input v-model.trim="someModel" size="is-small"></b-input>
         </template>
         <template v-else>
           <span>{{ props.row.prof }}</span>
         </template>
      </b-table-column>
      <b-table-column label="Rating" centered>
         <template v-if="props.index === 0">
           <b-input v-model.trim="someModel" size="is-small"></b-input>
         </template>
         <template v-else>
           <span>{{ props.row.rating }}</span>
         </template>
      </b-table-column>
      <b-table-column label="Difficulty" centered>
         <template v-if="props.index === 0">
           <b-input v-model.trim="someModel" size="is-small"></b-input>
         </template>
         <template v-else>
           <span>{{ props.row.difficulty }}</span>
         </template>
      </b-table-column>
      <b-table-column label="Reviews" centered>
         <template v-if="props.index === 0">
           <b-input v-model.trim="someModel" size="is-small"></b-input>
         </template>
         <template v-else>
           <span>{{ props.row.reviews }}</span>
         </template>
      </b-table-column>
      <b-table-column label="Prereqs" centered>
         <template v-if="props.index === 0">
           <b-input v-model.trim="someModel" size="is-small"></b-input>
         </template>
         <template v-else>
           <span>{{ props.row.has_prereqs }}</span>
         </template>
      </b-table-column>      
      <b-table-column label="Actions" centered>
         <template v-if="props.index !== 0">
            <button>Add</button>
            <button>View</button>
         </template>
      </b-table-column>
    </template>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  components: {
  },
  created() {
    axios.get('api/courses?term=20191&type=class').then(response => {
      this.data = response.data.courses
    })
  },
  data() {
    return {
      data: [],
      someModel: '',
      top: 'top'
    }
  },
  methods: {
  }
}
</script>

<style link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
.home {
  padding: 30px;
  /*max-width: 1000px;*/
  max-height: 500px;
  margin: 0px auto;
}

.my-table {
  max-height: 50%;
  overflow-y: auto;
}
</style>
