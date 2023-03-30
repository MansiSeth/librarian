<template>
  <div>
    <div class="app-header">
      <v-row dense>
        <v-col cols="2" class="text-right">
          <v-btn text @click="$emit('add')">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <!-- searchbar -->

      <v-row>
        <v-col>
          <v-text-field
            placeholder="Search"
            append-icon="mdi-magnify"
            @input="$emit('search', $event)"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
