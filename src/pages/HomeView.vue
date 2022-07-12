<template>
  <div>
    <TableComp
      :studentData="studentData"
      @fetchAgain="fetchData"
      :openEdit="handleEdit"
    />
    <EditPopup :dialog="dialog" :closeIt="() => (dialog = false)" :editData="editUser" @fetch="fetchData" />
  </div>
</template>

<script>
import TableComp from "@/components/TableComp.vue";
import Axios from "../api/Axios";
import EditPopup from "@/components/EditPopup.vue";
export default {
  data() {
    return {
      studentData: [],
        dialog: false,
        editUser: {}
    };
  },
  components: { TableComp, EditPopup },
  async mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let { data } = await Axios.get("/students");
      this.studentData = data;
    },
    async handleEdit(id) {
      this.dialog = true;
      let { data } = await Axios.get(`/students/${id}`);
        this.editUser = data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
