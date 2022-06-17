<template>
  <div class="container">
    <p></p>
    <BootstrapCard>
      <BootstrapCardHeader header="Business Activity Monitoring (BAM)"></BootstrapCardHeader>
      <BootstrapCardBody>
        <BootstrapTable>
          <BootstrapTableHeader
              :headers="['No','Cover','ISBN','Title','Author','Price','Quantity','Total']"></BootstrapTableHeader>
          <tbody>
          <tr v-for="(item,index) in purchases" :key="index">
            <td>{{ index + 1 }}</td>
            <td><img class="img-thumbnail" style="width: 32px" v-bind:src="item.book.cover"></td>
            <td>{{ item.book.isbn }}</td>
            <td>{{ item.book.title }}</td>
            <td>{{ item.book.author }}</td>
            <td>{{ item.book.price }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.price }}</td>
          </tr>
          </tbody>
        </BootstrapTable>
      </BootstrapCardBody>
    </BootstrapCard>
  </div>
</template>
<script>
import BootstrapCard from "@/components/BootstrapCard";
import BootstrapCardHeader from "@/components/BootstrapCardHeader";
import BootstrapCardBody from "@/components/BootstrapCardBody";
import {io} from "socket.io-client";
import BootstrapTable from "@/components/BootstrapTable";
import BootstrapTableHeader from "@/components/BootstrapTableHeader";

export default {
  name: "BookstoreBam",
  components: {BootstrapCardBody, BootstrapCardHeader, BootstrapCard,BootstrapTable,BootstrapTableHeader},
  mounted() {
    this.wsClient = io("ws://localhost:9001");
    this.wsClient.on("connect", () => {
      this.wsClient.on("bam", purchase => {
        let aggrgatePurchases = [...this.purchases];
        purchase.forEach(item => {
          aggrgatePurchases.forEach(aggregateItem => {
            if (aggregateItem.book.isbn === item.book.isbn) {
              aggregateItem.quantity += item.quantity;
              aggregateItem.price = aggregateItem.quantity * aggregateItem.book.price;
            }
          });
        });
        this.purchases = aggrgatePurchases;
      });
    });
  },
  unmounted() {
    if (this.wsClient)
      this.wsClient.close();
  },
  data: function () {
    return {
      purchases: [],
      books: [],
      wsClient: null
    };
  }
}
</script>

<style scoped>

</style>