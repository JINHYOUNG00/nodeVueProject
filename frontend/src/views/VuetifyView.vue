<template>
    <div>vuetify</div>
    <v-data-table :items="items"></v-data-table>
    <v-pagination :length="5" :start="1" @update:modelValue="goPage"></v-pagination>
    <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" color="surface-variant" text="Open Dialog" variant="flat"></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card title="Dialog">
                <v-card-text>
                    dddd
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    name: 'African Elephant',
                    species: 'Loxodonta africana',
                    diet: 'Herbivore',
                    habitat: 'Savanna, Forests',
                },
                // ... more items
            ]
        }
    },
    created() {

    },
    methods: {
        goPage: function (page) {
            console.log(page);
        }
    }
}
</script>

<style></style>