<template>
  <v-row justify="center">
    <v-dialog :value="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit Student Data</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="First name"
                  v-model="studentData.firstName"
                  required
                  type="text"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Last Name"
                  type="text"
                  v-model="studentData.lastName"
                />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Age"
                  type="number"
                  v-model.number="studentData.age"
                />
              </v-col>
              <v-col cols="4">
                <v-text-field
                  type="date"
                  label="date of Birth"
                  v-model="studentData.dob"
                />
              </v-col>
              <v-col cols="5" sm="6">
                <v-text-field
                  type="text"
                  label="Register Number"
                  v-model.number="studentData.registerNo"
                />
              </v-col>
              <v-col cols="2">
                <v-text-field
                  type="number"
                  label="Roll No"
                  v-model.number="studentData.rollNo"
                />
              </v-col>
              <v-col cols="6">
                <v-autocomplete
                  label="Department"
                  :items="departmentList"
                  v-model="studentData.department"
                ></v-autocomplete>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  type="tel"
                  label="Phone Number"
                  v-model.number="studentData.phoneNo"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeIt"> Close </v-btn>
          <v-btn color="blue darken-1" text @click="handleSave"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Axios from "@/api/Axios";
import studentMinixs from "@/mixins/studentMinixs";
export default {
  props: ["dialog", "closeIt", "editData"],
  mixins: [studentMinixs],
  methods: {
    async handleSave() {
      try {
        console.log(this.editData.id);
        await Axios.put(`/students/${this.editData.id}`, {
          ...this.studentData,
        });
        this.$emit("fetch");
        this.$vToastify.success("Successfully updated");
        this.closeIt();
      } catch (err) {
        console.log(err);
      }
    },
  },
  watch: {
    editData() {
      this.studentData = this.editData;

      console.log(this.studentData);
    },
    deep: true,
  },
};
</script>

<style lang="scss" scoped></style>
