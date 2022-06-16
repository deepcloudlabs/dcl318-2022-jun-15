<template>
    <div class="container">
      <p></p>
      <BootstrapCard>
        <BootstrapCardHeader header="Bookstore Admin Console"></BootstrapCardHeader>
        <BootstrapCardBody>
            <BootstrapInputText label="Isbn" :value="book.isbn" @change="book.isbn=$event" >
              <button class="btn btn-primary">Find Book</button>
            </BootstrapInputText>
            <BootstrapInputText label="Title" @change="book.title=$event.target.value" :value="book.title"></BootstrapInputText>
            <BootstrapInputText label="Author" :value="book.author" @change="book.author=$event.target.value" ></BootstrapInputText>
            <BootstrapInputText label="Price" :value="book.price" @change="book.price=$event.target.value" ></BootstrapInputText>
            <BootstrapInputText label="Year" :value="book.year" @change="book.year=$event.target.value"></BootstrapInputText>
            <BootstrapInputText label="Pages" :value="book.pages" @change="book.pages=$event.target.value"></BootstrapInputText>
            <BootstrapInputText label="Publisher" :value="book.publisher" @change="book.publisher=$event.target.value"></BootstrapInputText>
            <div class="input-group">
              <label for="cover" class="form-label">Cover:</label>
              <img id="cover">
              <label>
                <input type="file" style="display: none" class="form-control">
                <span class="btn btn-info">File</span>
              </label>
            </div>
            <div class="input-group">
              <button class="btn btn-success">Create Book</button>
              <button class="btn btn-warning">Update Book</button>
              <button class="btn btn-danger">Remove Book</button>
            </div>
        </BootstrapCardBody>
      </BootstrapCard>
    </div>
</template>

<script>
import BootstrapCard from "@/components/BootstrapCard";
import BootstrapCardHeader from "@/components/BootstrapCardHeader";
import BootstrapCardBody from "@/components/BootstrapCardBody";
import Book from "@/model/book";
import BootstrapInputText from "@/components/BootstrapInputText";
export default {
  name: 'BookstoreAdmin',
  components: {BootstrapInputText, BootstrapCardBody, BootstrapCardHeader, BootstrapCard},
  props: {
    msg: String
  },
  data: function (){
    return {
      book: new Book()
    }
  }
}
</script>

<style scoped>

</style>
