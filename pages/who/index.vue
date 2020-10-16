<template>
  <div>
    <v-parallax src="/immagini/origini_1.jpg" :height="customHeight">
      <v-container>
        <v-row align="center" justify="center">
          <v-col class="text-left">
            <h1 class="mb-4 fulcron-font" style="font-size: 6vh">
              Le nostre origini
            </h1>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    <v-row align="left" justify="center">
      <v-col cols="8">
        <p>
          <strong>Salve, viandante.</strong><br /><br />
          FulcronGRV è un’associazione di gioco di ruolo dal vivo nata da un
          gruppo di amici e dalla loro voglia di vivere in mondi fantastici. Tra
          i boschi dell’Appennino Tosco-Emiliano, questa voglia ha continuato a
          spingerci anche fin dove non avremmo mai pensato.<br /><br />
          Durante lo svolgersi della campagna, grandi guerre, conquiste e
          rivoluzioni hanno segnato ogni landa di Fulcron, l’Anello, come lo
          chiamano in molti. <br /><br />
          Fulcron è il mondo teatro delle nostre avventure. La sua geografia, la
          sua storia, la sua mitologia sono originali, ispirate a periodo
          storici e culture differenti come ad esempio il medioevo europeo, la
          cultura classica greca, le giungle dell’America centrale, la cultura
          araba e quella giapponese dell’epoca Edo.<br /><br />
          La nostra associazione organizza da tempo una campagna continuativa,
          ma realizza anche one-shot con temi e ambientazioni diverse, come ad
          esempio Tear Asunder, Sunless Dawn o la Teoria del Nulla.
        </p>
      </v-col>
    </v-row>
    <v-parallax src="/immagini/origini_2.jpg" :height="customHeight">
      <v-container>
        <v-row align="center" justify="center">
          <v-col class="text-right">
            <h1 class="mb-4 fulcron-font" style="font-size: 6vh">
              La Sinfonia dei Sette
            </h1>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    <v-row align="center" justify="center">
      <v-col cols="8">
        <p class="text-right">
          La campagna Fulcron segue da diversi anni le gesta di un gruppo di
          avventurieri, impegnati a sopravvivere nell’Anello, il mondo
          fantastico e originale in cui prendono vita le nostre avventure.<br /><br />
          Le terre di Fulcron sono intrappolate tra grandi barriere naturali:
          lande ghiacciate senza fine a Nord, deserti sconfinati ad Est, paludi
          malsane a Sud e alte montagne ad Ovest. Un grande mare sorge
          all’interno di Fulcron, rendendolo così noto come l’Anello tra la
          gente comune.<br /><br />
          La campagna è a tema Fantasy e riunisce al suo interno diversi spunti,
          amalgamati per creare un mondo coerente e vivo che risponde alle
          azioni dei giocatori. Cerchiamo di proporre eventi equilibrati, in cui
          si alternano momenti di conflitto, intrighi, preghiere e diplomazia.
          La magia e il combattimento sono gestiti da un regolamento
          stratificato, che permette ai nuovi entrati di comprendere in fretta
          le basi per giocare ma che dona un buon senso di progressione ai
          veterani della campagna.<br /><br />
          Per volere di un destino che va al di là della cognizione dei mortali
          stessi, i protagonisti della campagna si sono imbattuti in segreti
          perduti e misteri irrisolti a cui hanno cercato di dare risposta.
          <br /><br />
          Tanti sono gli interrogativi sul passato di Fulcron, i suoi celati
          giochi di potere e le gesta dei suoi figli. In particolare, l’ultimo
          anno di campagna ha visto i giocatori impegnati nella lotta contro un
          grande e antico Signore Vampiro. Più volte messi in scacco e sconfitti
          da queste oscure creature, create secoli fa da un uomo il cui potere
          sfiorava quello degli dei, i personaggi hanno seguito un percorso
          tracciato molto tempo prima. Una strada lastricata da una dea con
          lacrime e sangue, che li ha condotti fino a trovare, nel vampiro che
          temevano, un uomo sospeso tra l’oscurità in lui instillata e la luce
          che in lui aveva sempre albergato.<br /><br />
          Alcuni sono caduti, altri si sono salvati, ma dopo che anche questa
          Ultima Lacrima ha toccato il suolo, gli avventurieri hanno
          ricominciato la loro marcia, tra antiche profezie e nuove storie da
          raccontare.<br /><br />
        </p>
        <p class="text-center text-fulcron-blue bold">
          Fulcron può essere una terra inospitale, a volte crudele e infame, ma
          sa ricompensare ampiamente chiunque abbia il coraggio di
          avventurarcisi: è un mondo vivo, che non riposa mai e avrà sempre
          storie nuove da raccontare per chi avrà l’audacia di ascoltarle.
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    customHeight() {
      return this.$vuetify.breakpoint.mobile ? 300 : 500
    },
  },

  head() {
    return {
      title: 'Chi siamo',
    }
  },
}
</script>

<style>
.bold {
  font-weight: 500;
}
</style>
