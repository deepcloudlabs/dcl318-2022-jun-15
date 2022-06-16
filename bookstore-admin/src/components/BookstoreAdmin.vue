<template>
    <div class="container">
      <p></p>
      <BootstrapCard>
        <BootstrapCardHeader header="Bookstore Admin Console"></BootstrapCardHeader>
        <BootstrapCardBody>
            <BootstrapInputText label="Isbn" value="book.isbn">
              <button class="btn btn-primary">Find Book</button>
            </BootstrapInputText>
            <BootstrapInputText label="Title" value="book.title"></BootstrapInputText>
            <BootstrapInputText label="Author" value="book.author"></BootstrapInputText>
            <BootstrapInputText label="Price" value="book.price"></BootstrapInputText>
            <BootstrapInputText label="Year" value="book.year"></BootstrapInputText>
            <BootstrapInputText label="Pages" value="book.pages"></BootstrapInputText>
            <BootstrapInputText label="Publisher" value="book.publisher"></BootstrapInputText>
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
