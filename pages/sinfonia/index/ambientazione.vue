<template>
  <v-container fluid>
    <v-row align="center" align-content="center" justify="center">
      <v-col cols="12">
        <h1 class="text-center fulcron-font" style="font-size: 7vh">
          Ambientazione
        </h1>
      </v-col>

      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        color="primary"
        @click="toTop"
        ><v-icon>fa-arrow-up</v-icon>
      </v-btn>

      <v-col sm="12" md="10" lg="8"
        ><v-banner sticky single-line color="accent" rounded
          ><h2 class="fulcron-font white--text">Cosa è Fulcron?</h2></v-banner
        >
        <br />
        <p>
          Fulcron è un "Anello" senza dubbio, ma solo per quello che ne sappiamo
          noi perchè nessuno ne ha mai varcato i confini esterni. <br />
          Certamente la storia ci insegna che sia sempre stato suddiviso in
          quattro grandi aree e ancor più certamente questa divisione non è
          stata decisa solo da uomini e per divisioni politiche ma dettata da
          qualcosa che va ben oltre la mente di chi abita Fulcron.<br />
          Un mondo con un grande mare al centro e isole dalla rara bellezza.<br />
          Un mondo abitato dalle più svaraite creature e arricchito da molte
          diverse culture.<br />
          Un mondo che ha visto prosperità e guerre, grandi eroi e indelebili
          dannati.<br />
          Un mondo in cui la linea tra bene e male, giusto e sbagliato è molto
          labile.<br />
          Un mondo in cui chi ha cercato la propria strada non sempre è riuscito
          a trovarla o talvolta ha trovato ciò che non si aspettava, ma
          sicuramente ora ha una storia da raccontare.
        </p></v-col
      >

      <v-col sm="12" md="10" lg="8"
        ><v-banner sticky single-line color="accent" rounded
          ><h2 class="fulcron-font text-right white--text">
            La Geografia di Fulcron
          </h2></v-banner
        >
        <br />
        <p>
          Il mondo di Fulcron è singolare, oltre che per le creature fantastiche
          che lo abitano, anche per la sua geografia. La terra conosciuta di
          Fulcron è chiamata L'Anello proprio per la sua forma caratteristica.
          <br /><br />
          Il territorio è un'enorme anello di terra con al centro il così detto
          Mare Interno. I confini esterni oltre i quali solo pochissimi si sono
          avventurati sono diversi:
        </p>
        <ul>
          <li>
            A nord una landa perennemente congelata e sotto le gelide morse del
            freddo
          </li>
          <li>A est un deserto sconfinato e arido</li>
          <li>
            A sud una palude di cui non si conoscono ne i confini ne la sua
            conformazione interna
          </li>
          <li>
            Ad ovest un'altissima catena montuosa che cela agli occhi dei popoli
            qualsiasi cosa possa esserci al di là
          </li>
        </ul>
      </v-col>

      <v-col sm="12" md="10" lg="8"
        ><v-banner sticky single-line color="accent" rounded
          ><h2 class="fulcron-font white--text">
            La Politica di Fulcron
          </h2></v-banner
        >
        <br />
        <p class="text-center">
          Quelle tra Nord, Sud, Est e Ovest sono molto più che mere divisioni
          territoriali.
        </p>
        <p>
          Durante la Grande Guerra, scoppiata nel 2811, erano questi quattro
          grandi regni a combattersi ferocemente l'un l'altro, nel tentativo di
          instaurare la propria supremazia. Dopo la guerra, questi regni si sono
          per la maggior parte disgregati in stati più piccoli, ma la divisione
          rimane ancora molto forte e netta, soprattutto nella mentalità della
          gente comune.
        </p>
      </v-col>

      <v-col sm="12" md="10" lg="8"
        ><v-banner sticky single-line color="accent" rounded
          ><h2 class="fulcron-font white--text text-right">
            Le Razze di Fulcron
          </h2></v-banner
        >
        <br />
        <p class="text-center">7 sono le razze presenti a Fulcron</p>
        <ul>
          <li>
            <strong>Gli Elfi</strong>, dal corpo snello e slanciato, dotati di
            caratteristiche orecchie appuntite e carnagione chiara. La loro
            forza risiede nella saggezza e nelle capacità sensoriali elevate.
          </li>
          <li>
            <strong>I Nani</strong>, dal corpo tozzo e per niente slanciato,
            dotati di folte barbe e particolarmente villosi. La loro forza
            risiede nella resistenza fisica e nella conoscenza della terra e
            dell'industria.
          </li>
          <li>
            <strong>I Raktaag</strong>, i cui corpi sono ricoperti in parte da
            scaglie del tutto simili a quelli dei draghi, e per questo
            conosciuti anche come Uomini-Drago.
          </li>
          <li>
            <strong>Uomini con le branchie</strong>, particolarmente affini agli
            ambienti acquatici. In questo tipo di habitat essi non hanno rivali.
          </li>
          <li>
            <strong>Gli Uomini-Gatto</strong>, i cui corpi presentano i tratti
            tipici dei felini. La loro forza sta nell'astuzia e nella capacità
            di adattamento.
          </li>
          <li>
            <strong>I Maut</strong>, il cui corpo nel corso degli anni va
            incontro a necrosi e deterioramento senza perderne in funzionalità.
            La loro forza sta proprio nella maggiore resistenza alla malattia e
            ai danni fisici.
          </li>
          <li>
            <strong>Uomini</strong>, il cui corpo non presenta particolarità
            molto rilevanti, ma si tratta di una razza molto versatile e
            diffusa.
          </li>
        </ul>
      </v-col>

      <v-col sm="12" md="10" lg="8"
        ><v-banner sticky single-line color="accent" rounded
          ><h2 class="fulcron-font white--text">
            Le Religioni di Fulcron
          </h2></v-banner
        >
        <br />
        <p class="text-center">
          Il pantheon ufficiale di Fulcron è composto da Sette divinità venerate
          come creatrici del mondo e generatrici delle razze intelligenti che
          popolano Fulcron.
        </p>
        <ul>
          <li>Surya, Dio del sole e della vita</li>
          <li>Andhera, Dio della notte e della morte.</li>
          <li>Yud’ah, Dio della guerra e del fuoco.</li>
          <li>Samudra, Dea delle acque.</li>
          <li>Hava, Dea del cielo e dell'aria.</li>
          <li>Samajhadara, Dea della sapienza.</li>
          <li>Mausama, Dio del mutamento.</li>
        </ul>
      </v-col>

      <v-col sm="12" md="10" lg="8"
        ><v-banner sticky single-line color="accent" rounded
          ><h2 class="fulcron-font white--text text-right">
            La Storia di Fulcron
          </h2></v-banner
        >
        <br />
        <h1 class="fulcron-font text-center">Quinta Era</h1>
        <v-timeline align-top reverse>
          <v-timeline-item
            small
            color="accent"
            v-for="event in timeline1"
            :key="event.date"
          >
            <span slot="opposite">{{ event.date }}</span>
            {{ event.event }}
          </v-timeline-item>
        </v-timeline>
        <h1 class="fulcron-font text-center">Sesta Era</h1>
        <v-timeline align-top reverse>
          <v-timeline-item
            small
            color="accent"
            v-for="event in timeline2"
            :key="event.date"
          >
            <span slot="opposite">{{ event.date }}</span>
            {{ event.event }}
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      fab: false,
      timeline1: [
        {
          date: '2000',
          event:
            "Una serie di pietre infuocate cadono su Fulcron causando distruzioni e milioni di vittime. L'evento è ricordato come la Pioggia di Fuoco. Il mondo entra in una fase di profonda crisi e decadenza conosciuta come gli Anni Oscuri.",
        },
        {
          date: '2001',
          event: 'Titus Caius uccide il terribile Drago Viola di Mezuna.',
        },
        {
          date: '2003',
          event:
            'Eklitz von Sharr, nobile del Rorish, recluta un armata per sconfiggere il folle Arnarr Ruu.',
        },
        {
          date: '2197',
          event:
            'Su di una grande voragine formata a seguito della Pioggia di Fuoco viene fondata la città di Partaros.',
        },
        {
          date: '2200 ca.',
          event:
            "Hanami della Camelia mette fine alle guerre tra i Dodici Regni di Jotai e fonda l'Impero dei Dodici Fiori.",
        },
        {
          date: '2228',
          event:
            'Il "Demone del Deserto", o Barghest, viene sigillato dai guaritori e dai sacerdoti di Partaros.',
        },
        {
          date: '2230',
          event:
            "I guaritori di Partaros si uniscono alla battaglia contro il folle Arnarr Ruu. Per l'occasione Zaran Azar viene scelto come ambasciatore.",
        },
        {
          date: '2238',
          event: "A Partaros viene fondato l'Ordine dei Guaritori.",
        },
        {
          date: '2500 ca.',
          event: 'Sul fiume Amdinare viene fondata la città di Theris.',
        },
        {
          date: '2600 ca.',
          event:
            'La città di Partaros estende la sua influenza in gran parte del Grande Deserto, fino a Cyr, creando l’Impero del Sol Levante.',
        },
        {
          date: '2666',
          event: 'Vengono accolte a Theris le nobili famiglie Heat e Claymore.',
        },
        {
          date: '2681',
          event:
            'Battaglia dei Campi di Riso: l’esercito dell’Impero del Sol Levante viene sconfitto da quello di Jotai ed è costretto a ritirarsi verso nord.',
        },
        {
          date: '2710',
          event:
            'L’Impero del Sol Levante estende la sua influenza fino a Theris.',
        },
        {
          date: '2712',
          event:
            'Ritornano alla luce i primi documenti storici dopo gli Anni Oscuri. Inizia la Grande Guerra.',
        },
        {
          date: '2812',
          event:
            'Fine della Grande Guerra e morte dell’ultimo Drago per mano di Iulius Caius.',
        },
        {
          date: '19 Termidoro 3013',
          event: 'Scoppia ufficialmente la guerra tra Est e Nord.',
        },
        {
          date: '20 Termidoro 3014',
          event:
            'Nel grande Muro a Sud viene aperta una breccia. I Diaforos dilagano nelle terre settentrionali.',
        },
      ],
      timeline2: [
        {
          date: '11 Termidoro 3015/Anno 0 della Sesta Era ',
          event:
            'Fulcron viene sconvolta dal Grande Cataclisma. A Nord una grande esplosione devasta tutto lasciando un enorme buco nero. I Draghi tornano improvvisamente ad abitare i cieli di Fulcron.',
        },
        {
          date: '29 Fiorile 3016',
          event:
            'La regina dei pirati Elisha MaGkrafun viene assassinata. La M.A.S. attacca Port Imperial.',
        },
        {
          date: '13 Fruttidoro 3016',
          event: 'La cupola nera comparsa a Nord si dissolve nel nulla.',
        },
        {
          date: '28 Fiorile 3017',
          event:
            "Scoppia la Guerra dell'Occhio, dichiarata dall'Occhio di Hava.",
        },
        {
          date: '1 Vendemmiaio 3017',
          event:
            "Conclusione della Guerra dell'Occhio e vittoria dei popoli liberi.",
        },
      ],
    }
  },

  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
  },

  head() {
    return {
      title: 'Ambientazione',
    }
  },
}
</script>

<style>
li {
  margin-bottom: 5px;
}
</style>
