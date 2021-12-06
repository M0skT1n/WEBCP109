<template>
  <v-container>
    <v-row style="padding-bottom: 50px">
      <v-card class="mx-auto" max-width="800" tile>
        <v-img height="100%" src="../../public/img/dog.jpg">
          <v-row align="end" class="fill-height">
            <v-col align-self="start" class="pa-0" cols="12">
              <v-avatar class="profile" color="grey" size="180" tile>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                ></v-img>
              </v-avatar>
            </v-col>
            <v-col class="py-0">
              <v-list-item color="rgba(0, 0, 0, .4)" dark>
                <v-list-item-content>
                  <v-list-item-title class="text-h6">
                    Marcus Goes
                  </v-list-item-title>
                  <v-list-item-subtitle>Veterinário</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
    </v-row>
    <v-row class="mx-auto">
      Minha inspiração para abrir este Petshop foi para dar aos clientes um
      cuidado de excelência para com seus amados bichinhos, pois eles também
      fazem parte de nossa família.
    </v-row>
  </v-container>
</template>