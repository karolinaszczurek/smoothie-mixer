<template>
  <div class="index container">
    <!--container wszystko centruje na stronie-->
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <!--class układa divy w karty, to klasa z materialize-->
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
        <h2 class="indigo-text">{{ smoothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ingredient, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ingredient }}</span>
          </li>
        </ul>
      </div>
      <span class="btn-floating btn-large halfway-fab pink">
        <router-link :to="{name: 'EditSmoothie', params: {smoothie_slug: smoothie.slug} }">
          <i class="material-icons edit">edit</i>

        </router-link>
      </span>

    </div>

  </div>
</template>

<script>
  import db from '@/firebase/init'

  export default {
    name: 'Index',
    data() {
      return {
        //z index.vue wyrzucamy zahardcodowane dummy data, ale zostawiamy tablicę smoothies
        smoothies: [],
      }
    },
    methods: {
      deleteSmoothie(id) {

        //  delete doc form firestore

        db.collection('smoothies').doc(id).delete()
          .then(() => {

            this.smoothies = this.smoothies.filter(smoothie => {
              return smoothie.id !== id

              // bierzemy zaimportowaną bazę db, wskazujemy jaka kolekcja (smoothie)
              //  szukamy specyficznego dokumentu z przekazanym parametrem id
              //  delete() zwraca promise, bo potrzebuje trochę czasu
              //  i callback ES6 który aktualizuje naszą frontendową tablicę smoothies


              // jeśli będą różne to return zwróci true i smoothie zostanie w tablicy, a jeśli będą
              // takie same to zwróci false i wyfiltruje z tablicy
            })

          })

        //bierzemy zaimportowaną bazę db, wskazujemy jaka kolekcja (smoothie)
        //  szukamy specyficznego dokumentu z przekazanym parametrem id
        //  delete() zwraca promise, bo potrzebuje trochę czasu
        //  i callback ES6 który aktualizuje nasz fronte

      }
    },

    created() {
      //  fetch data from firestore
      db.collection('smoothies').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let smoothie = doc.data()
            smoothie.id = doc.id
            this.smoothies.push(smoothie)
          })

        })
      //  snapshot - to obecny stan bazy (zawiera 2 dokumenty)
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  .index {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /*czyli chcę mieć 3-kolumnowego grida, każda kolumna będzie miała
    1 frakcje szerekości */
    grid-gap: 30px;
    margin-top: 60px;
  }

  .index h2 {
    font-size: 1.8em;
    text-align: center;
    margin-top: 0;
  }

  .index .ingredients {
    margin: 30px auto;
  }

  .index .ingredients li {
    display: inline-block;
  }

  .index .delete {
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
    color: #aaa;
    font-size: 1.4em;
  }



</style>
