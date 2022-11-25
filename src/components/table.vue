<template>
  <div>
    <el-table
      :data="tableData"
      highlight-current-row
      style="width: 100%">
      <!-- <el-table-column
        type="index"
        width="100">
      </el-table-column> -->
      <el-table-column
        property="city"
        label="注册地址">
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="Pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="limit"
        layout="total, prev, pager, next"
        :total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getDatas } from '@/api/getData'

export default {
  name: 'Table',
  data () {
    return {
      limit: 20,
      totalCount: 0,
      tableData: [],
      currentPage: 1,
    }
  },
  created() {
    this.initData();
  },
  methods: {
    async initData(){
      try{
          const datas = await getDatas();
          if (datas.code === 0) {
              this.totalCount = datas.totalCount;
              this.tableData = datas.data;
          }else{
              throw new Error('获取数据失败');
          }
      }catch(err){
          console.log('获取数据失败', err);
      }
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
        this.currentPage = val;
        // this.offset = (val - 1)*this.limit;
        this.getResturants()
    },
    handleEdit(index, row) {
      // this.selectTable = row;
      // this.dialogFormVisible = true;
      // this.selectedCategory = row.category.split('/');
      // if (!this.categoryOptions.length) {
      //     this.getCategory();
      // }
    },
    async handleDelete(index, row) {
      // try {
      //     const res = await deleteResturant(row.id);
      //     if (res.status == 1) {
      //         this.$message({
      //             type: 'success',
      //             message: '删除成功'
      //         });
      //         this.tableData.splice(index, 1);
      //     }else{
      //         throw new Error(res.message)
      //     }
      // } catch(err){
      //     this.$message({
      //         type: 'error',
      //         message: err.message
      //     });
      //     console.log('删除失败')
      // }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
