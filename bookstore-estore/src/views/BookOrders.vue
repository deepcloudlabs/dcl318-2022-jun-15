<template>
  <div class="container">
    <p></p>
    <BootstrapCard>
      <BootstrapCardHeader header="Purchases is empty" v-if="purchases.length === 0"/>
      <BootstrapCardHeader header="Purchases" v-if="purchases.length > 0"/>
      <BootstrapCardBody v-if="purchases.length > 0">
        <BootstrapTable>
          <BootstrapTableHeader
              :headers="['No','Quantity','Total Price']"></BootstrapTableHeader>
          <tbody>
          <tr v-for="(purchase,index) in purchases" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ purchase.reduce((sum,item) => sum+item.quantity, 0) }}</td>
            <td>{{ purchase.reduce((sum,item) => sum+item.price, 0) }}</td>
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
import BootstrapCardHeader from "@/components/BootstrapCardHeader";

export default {
  name: "BookOrders",
  components: {BootstrapCardBody,BootstrapCard,BootstrapTable,BootstrapTableHeader,BootstrapCardHeader},
  computed: {
    purchases() {
      return this.$store.state.purchase.purchases;
    }
  }
}
</script>

<style scoped>

</style>