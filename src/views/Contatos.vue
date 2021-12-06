<template>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="8"
    >
      <v-card>
        <v-card-title class="purple">
          <span class="text-h5 white--text">PetShop Goes</span>

          <v-spacer></v-spacer>

          <v-btn
            dark
            icon
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>

          <v-btn
            dark
            icon
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn
            dark
            icon
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-card-title>

        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>(15)1234-5678</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>(15)9 8765-4321</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-email</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>petshopgoes@email.com</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-map-marker</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Estado de São Paulo</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-img
          src="../../public/img/Phone.jpg"
          height="420px"
          width="100%"
        ></v-img>
      </v-card>
    </v-col>
  </v-row>
</template>