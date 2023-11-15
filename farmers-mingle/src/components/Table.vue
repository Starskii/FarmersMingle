<script setup lang="ts">

defineProps<{
  members: [{name: string, role: string; trophies: string, tag: string}]
}>();
</script>

<template>
    <table id="tableComponent" class="table table-bordered table-striped">
        <thead>
        <tr>
            <!-- loop through each value of the fields to get the table header -->
            <th v-for="attribute in  Object.keys(members[0])" :key='attribute'>
                {{ attribute }} <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
            </th>
        </tr>
        </thead>
        <tbody>
            <!-- Loop through the list get the each student data -->
            <tr v-for="player in members">
                <td v-for="attributeValue in player" :key='attributeValue'>{{ attributeValue }}</td>
            </tr>
        </tbody>
    </table>
</template>