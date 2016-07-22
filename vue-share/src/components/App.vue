<template>
  <table class="table table-hover">
    <thead v-cloak>
      <tr>
        <th class="text-center" @click="sortBy('id')">序号</td>
        <th class="text-center" @click="sortBy('name')">书名</td>
        <th class="text-center" @click="sortBy('author')">作者</td>
        <th class="text-center" @click="sortBy('price')">价格</td>
        <th class="text-center">操作</td>
      </tr>
    </thead>
    <tr v-for="book in books | orderBy sortParam">
      <td class="text-center">{{book.id}}</td>
      <td class="text-center">{{book.name}}</td>
      <td class="text-center">{{book.author}}</td>
      <td class="text-center">{{book.price}}</td>
      <td class="text-center">
        <template v-if="book.id%2==0">
          <button class="btn btn-danger" @click="delBook(book)">删除书籍</button>
        </template>
        <template v-else>
          <button class="btn btn-info" @click="delBook(book)">删除书籍</button>
        </template>
      </td>
    </tr>
  </table>
  <div class="panel">
    <div class="panel-heading">
      <span class="panel-title">总计金额</span>
      <span class="sum" v-text="sum"></span>
    </div>
  </div>

  <div class="add-book">
    <h3>添加书籍</h3>
    <div class="form-group">
      <label for="">书名</label>
      <input type="text" class="form-control" v-model="book.name">
    </div>
    <div class="form-group">
      <label for="">作者</label>
      <input type="text" class="form-control" v-model="book.author">
    </div>
    <div class="form-group">
      <label for="">价格</label>
      <input type="text" class="form-control" v-model="book.price">
    </div>
    <button class="btn btn-primary btn-block" @click="addBook()">添加</button>
  </div>
</template>

<script>
import store from '../store'

export default {

  name: 'App',

  data () {
    return {
      sortParam: '',
			date: '',
      book: {
        id: 0,
        author: '',
        name: '',
        price: ''
      },
      books: store
    }
  },
   methods: {
    addBook: function () {
      this.book.id = this.books.length + 1;
      this.books.push(this.book);
      this.book = '';
    },
    delBook: function (book) {
      this.books.$remove(book);
    },
    sortBy: function (param) {
      this.sortParam = param;
    },
    getData: function (time) {
      console.log(time);
    }
  },
  computed: {
    sum: function () {
      var price = 0;
      this.books.forEach(function (book) {
        price += parseInt(book.price);
      });
      return price;
    }
  }
}
</script>