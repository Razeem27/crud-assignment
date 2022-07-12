<template>
  <div>
    <v-card class="mt-7" color="grey lighten-2">
      <v-card-title>
        Student Data
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        items-per-page="5"
        :headers="getHeading"
        :items="studentData"
        :search="search"
        :loading="studentData[0] == undefined"
        loading-text="Loading...."
      >
        <template slot="item.delete" slot-scope="props">
          <v-btn class="mx-2" icon @click="handleDelete(props.item.id)">
            <v-icon color="error">mdi-delete</v-icon>
          </v-btn>
        </template>
        <template slot="item.edit" slot-scope="props">
          <v-btn class="mx-2" icon @click="openEdit(props.item.id)">
            <v-icon color="primary">mdi-pencil</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import Axios from "@/api/Axios";
export default {
  props: ["studentData", "openEdit"],
  data() {
    return {
      search: "",
    };
  },
  computed: {
    getHeading() {
      let { id, ...obj } = this.studentData[0] || {};
      console.log(id);
      let keys = Object.keys(obj).map(item => ({
        text: item.toUpperCase(),
        value: item,
      }));

      return [
        ...keys,
        { text: "EDIT", sortable: false, value: "edit" },
        { text: "DELETE", value: "delete", sortable: false },
      ];
    },
  },
  methods: {
    async handleDelete(id) {
      await Axios.delete(`/students/${id}`);
      this.$vToastify.success("Successfully deleted");
      this.$emit("fetchAgain");
    },
    handleEdit(id) {
      console.log(id);
    },
  },
};
</script>

<style scoped>
td {
}
</style>
