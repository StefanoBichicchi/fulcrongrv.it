<template>
  <v-container fluid>
    <v-row  align="start" justify="center">
      <v-col cols="12">
        <h1 class="fulcron-font text-center" style="font-size: 7vh">
          Regolamento
        </h1>
        <h1 class="fulcron-font text-center subtitle">
          Regole basilari per ogni tipo di LARP (o gioco di ruolo dal vivo)
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
      <v-col sm="12" lg="7" md="8">
        <v-card color="white" rounded outlined elevation="12">
          <v-card-title class="fulcron-font"
            >Correttezza e rispetto verso gli altri</v-card-title
          >
          <v-card-text class="body-1">
            <p>
              Giochiamo per divertirci, ma la libertà di un Giocatore non deve
              limitare quella degli altri.<br /><br />
              Durante gli Eventi, lo Staff, a proprio insindaca­bile giudizio,
              allontanerà chiunque commetta azioni pericolose per se stesso o per
              altri, chiunque assuma atteggiamenti offensivi o aggres­sivi fuori
              dal gioco e chiunque, per questi o altri motivi, impedisca ad altri
              Giocatori di divertirsi.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="12" lg="7" md="8">
        <v-card color="white" rounded outlined elevation="12">
          <v-card-title class="fulcron-font">Onestà</v-card-title>
          <v-card-text class="body-1">
            <p>
              Sono molte le situazioni in cui il Giocatore potrebbe “barare” a
              van­taggio del Personaggio.<br />
              Farlo non apporta nessun reale beneficio al Giocatore dato che nel
              nostro gioco non si “vince” nel senso tradizio­nale del termine, ma
              rappresenta una grave mancanza di rispetto verso gli altri
              Giocatori. Violare questa Linea Guida può comportare conseguenze
              molto gravi per il PG interpretato dal Socio (per esempio essere
              soggetto alla chiamata "<strong>IMPERIUM muori</strong>") e sanzioni
              per il socio stesso. A mero titolo di esempio:<br /><br />

              <ul>
                <li>Non è lecito utilizzare informazioni acquisite Fuori Gioco</li>
                <li>Non è lecito divulgare informazioni acquisite correttamente mentre il Personaggio del Giocatore non sarebbe in grado di fornirle (perché il PG è imprigionato o morto, per esempio), nemmeno sotto forma di diari o scritti “postumi” del PG che contengano informazioni di Gioco</li>
                <li>Non è lecito, per evitare situazioni equivoche, ad un Giocatore fare in modo che i suoi Personaggi siano legati da un rapporto di qualunque natura.</li>
              </ul>
              <br /><br />

              <u>Un comportamento palesemente scorretto deve essere segnalato e conseguentemente punito.</u>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="12" lg="7" md="8">
        <v-card color="white" rounded outlined elevation="12">
          <v-card-title class="fulcron-font">Sicurezza</v-card-title>
          <v-card-text class="body-1">
            <p>
            In nessun caso il Giocatore può agire in modo da mettere a rischio la propria incolumità o quella di altri. <br /><br />

            I Giocatori non sono autorizzati ad agire a proprio rischio neppure sotto la propria responsabilità. Atteggiamenti rischiosi o pericolosi sono puniti con l’immediato allontanamento dall’Evento, cui potranno seguire gravi provvedimenti e persino l’espulsione.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="12" lg="7" md="8">
        <v-card color="white" rounded outlined elevation="12">
          <v-card-title class="fulcron-font">Differenza fra "In Gioco" e "Fuori Gioco"</v-card-title>
          <v-card-text class="body-1">
            <p>
              Nella dinamica di un Gioco di Ruolo dal Vivo, il Personaggio e il Gioca­tore non vanno identificati. In particolare, le azioni della persona re­ale (il Giocatore) influenzano quelle del Personaggio immaginario (il Personaggio) in modi che devono essere regolamentati, per evitare equivoci.
              <br /><br />
            </p>
              <ul>
                <li>Per le azioni di Gioco si usa il termine In Gioco (IG)</li>
                <li>Per azioni non legate alle dinamiche di gioco si usa il termine Fuori Gioco (FG)</li>
              </ul> <br /><br />
            <p>
              È essenziale saper distinguere le cose In Gioco da quelle Fuori Gioco ed agire di conseguenza, a partire dalle cose più semplici.<br /><br />
              Per esempio, IG non è corretto dire:
            </p>
            <blockquote>
              “Quel PNG ha 3 PF e non dichiara nulla di strano: possiamo farcela!”
            </blockquote> <br />
            <p>
              mentre è molto più corretta un’affermazione sul genere
            </p>
            <blockquote>
              “Ho visto combattere quell’Orco, non è robusto come si dice e le sue armi paiono di pessima fattura: è nostro!”
            </blockquote> <br />
            <p>
              Allo stesso modo, vanno evitate frasi come
            </p>
            <blockquote>
              “Ci serve un’arma che dichiari HOLY”
            </blockquote> <br />
            <p>
              Molto meglio
            </p>
            <blockquote>
              “Abbiamo bisogno di una spada sacra”
            </blockquote>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="12" lg="7" md="8">
        <v-card color="white" rounded outlined elevation="12">
          <v-card-title class="fulcron-font">PG, PNG & PGOS: tre modi di giocare</v-card-title>
          <v-card-text class="body-1">
            <p>
              Sei sei nel mondo del Gioco di Ruolo dal vivo da un po', saprai già cosa significa essere PG o PNG, ma di sicuro non conosci i PGOS. <br /> <br />
              Per i neofiti, il PG (Personaggio Giocante) è il proprio personaggio, creato da zero, che ha la possibilità di scegliere background, abilità, obiettivi e caratteristiche, grazie ai PAB (Punti Abilità) ottenibili giocando. <br /><br />
              I png (personaggi non giocanti) sono creati dai registi con l'obiettivo di creare gioco e ambientazione: ricevono precise indicazioni su cosa dovranno fare durante la giornata di gioco. <br /><br />
              La vera novità però sono i PGOS, ovvero i Personaggi Giocanti da One Shot. Non farti impressionare dal nome lungo, sono dei personaggi creati dalla regia per rendere ancora più vivo il mondo di gioco, infatti a differenza dei PNG, questi giocheranno come qualsiasi altro personaggio, con background, obiettivi, caratteristiche e talvolta abilità. <br /><br />
              Inoltre, proprio come succede con i PG, non sapranno nulla della trama e degli avvenimenti dell'evento, cosa che facilita invece il lavoro del PNG.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="12" md="8" lg="7">
        <v-card color="white" rounded outlined elevation="12">
          <v-card-title class="fulcron-font">I PAB, la moneta di scambio</v-card-title>
          <v-card-text class="body-1">
            <p>
              Se pensi di voler un PG per muoverti nel mondo di Fulcron, allora sarai assolutamente interessato ai PAB.
              I PAB (Punti Abilità) sono la moneta che ti permette di migliorare il tuo personaggio e di svilupparlo come meglio credi: ogni giocatore ha spendibili sin dall'inizio 130 PAB su ogni personaggio, che gli permettono di modellare il personaggio in maniera bene definita. Per ogni giornata in cui partecipi, qualunque sia il tuo ruolo guadagni almeno 10 PAB, ma aiuntando , sistemare dopo gli eventi, aiutando in cucina, ecc. potrai guadagnare altri PAB per far crescerre il tuo personaggio più velocemente!
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="12" lg="7" md="8">
        <v-card color="white" rounded outlined elevation="12">
          <v-card-title class="fulcron-font">Il nostro regolamento (Versione 4.1)</v-card-title>
          <v-card-text class="body-1">
            <p>
              Il nostro regolamento prevede l’utilizzo di armi in lattice, e l’apprendimento di alcune semplice regole che indicano magie, effetti o colpi all’interno del gioco, in modo da integrare in maniera ottimale la magia e particolari abilità. <br /><br/>
              Per favorire questo, abbiamo un vero e proprio documento del regolamento, comodamente scaricabile qui!
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn text href="/documents/RegolamentoEventi.pdf">Regolamento eventi</v-btn>
            <v-btn text href="/documents/Abilità.pdf">Abilità generiche</v-btn>
            <v-btn text href="/documents/Magia.pdf">Magia</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

  data() {
    return {
      fab: false
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
      title: 'Regolamento'
    }
  }
}
</script>

<style>
blockquote {
  border-left-style: solid;
  border-left-width: 5px;
  border-left-color: #002d40;
  padding-left: 10px;
  font-style: italic;
}
</style>
