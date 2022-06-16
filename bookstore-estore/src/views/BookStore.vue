<template>
  <div class="container">
    <p></p>
    <BootstrapCard>
      <BootstrapCardHeader header="Bookstore"/>
      <BootstrapCardBody>
        <BootstrapTable>
          <BootstrapTableHeader
              :headers="['No','Cover','ISBN','Title','Author','Price','Page','Publisher','Operations']"></BootstrapTableHeader>
          <tbody>
          <tr v-for="(kitap,index) in books" :key="kitap.isbn">
            <td>{{ index + 1 }}</td>
            <td><img class="img-thumbnail" style="width: 32px" v-bind:src="kitap.cover"></td>
            <td>{{ kitap.isbn }}</td>
            <td>{{ kitap.title }}</td>
            <td>{{ kitap.author }}</td>
            <td>{{ kitap.price}}</td>
            <td>{{ kitap.pages }}</td>
            <td>{{ kitap.publisher }}</td>
            <td><button class="btn btn-warning">Add to basket</button></td>
          </tr>
          </tbody>
        </BootstrapTable>
      </BootstrapCardBody>
    </BootstrapCard>
  </div>
</template>

<script>
import BootstrapCardBody from "@/components/BootstrapCardBody";
import BootstrapCard from "@/components/BootstrapCardBody";
import BootstrapTable from "@/components/BootstrapTable";
import BootstrapTableHeader from "@/components/BootstrapTableHeader";
export default {
  name: "BookStore",
  components: {BootstrapCardBody,BootstrapCard,BootstrapTable,BootstrapTableHeader},
  mounted() {
    fetch("http://localhost:9001/books",{
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    }).then( res => res.json()).then( books => this.books=books );
  },
  data: function(){
    return { books : [] }
  }
}
</script>

<style scoped>

</style>