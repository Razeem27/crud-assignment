<template>
  <v-card elevation="0" width="60%" class="ma-auto" color="grey lighten-3">
    <v-form class="elevation-8 mt-10 pa-8" @submit.prevent="handleSubmit">
      <h1 class="text-center mb-7">Student Registration</h1>
      <v-row>
        <v-col>
          <v-text-field
            type="text"
            label="First Name"
            outlined
            v-model="studentData.firstName"
          />
        </v-col>
        <v-col>
          <v-text-field
            type="text"
            label="Last Name"
            outlined
            v-model="studentData.lastName"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-radio-group row class="mt-n4" v-model="studentData.gender">
          <label for="" class="mx-4">Gender:</label>
          <v-radio label="Male" value="male" />
          <v-radio label="Female" value="female" />
        </v-radio-group>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            type="date"
            label="date of Birth"
            outlined
            v-model="studentData.dob"
          />
        </v-col>
        <v-col>
          <v-text-field
            type="number"
            required="true"
            label="Age"
            outlined
              min="18"
            max="50"
            v-model.number="studentData.age"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            type="tel"
            label="Phone Number"
            outlined
            v-model.number="studentData.phoneNo"
            maxlength="10"
          />
        </v-col>
        <v-col>
          <v-text-field
            type="number"
            label="Roll No"
            outlined
            v-model.number="studentData.rollNo"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            type="text"
            label="Register Number"
            outlined
            v-model.number="studentData.registerNo"
            maxlength="6"
          />
        </v-col>
        <v-col>
          <v-autocomplete
            label="Department"
            :items="departmentList"
            v-model="studentData.department"
            outlined
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn outlined color="primary" large type="submit">Register</v-btn>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
import Axios from "@/api/Axios";
import studentMinixs from "@/mixins/studentMinixs";

export default {
  mixins: [studentMinixs],

  methods: {
    async handleSubmit() {
      await Axios.post("/students", this.studentData);
      this.$vToastify.success("Successfully Registered");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped></style>
