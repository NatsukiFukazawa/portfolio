<template>
  <div>
    <input type="file" @change="loadCsvFile" />
    <p>{{ message }}</p>
 
    <table align ="center" border="1">
      <tr v-for="(worker, index) in workers" :key="index">
        <td  v-for="(column, index) in worker" :key="index">{{ column }}</td>
        
      </tr>
    </table>
    <button v-on:click="downloadCSV">ダウンロード</button>
  </div>
</template>
 
<script>
export default {
    name:"csvfilereader",
  data() {
    return {
      message: "",
      workers: []
    };
  },
  methods: {
    loadCsvFile(e) {
      let vm = this;
      vm.workers = [];
      vm.message = "";
      let file = e.target.files[0];
 
      if (!file.type.match("text/csv")) {
        vm.message = "CSVファイルを選択してください";
        return;
      }
 
      let reader = new FileReader();
      reader.readAsText(file);
 
      reader.onload = () => {
        let lines = reader.result.split("\n");
        lines.shift();//最初の要素削除
        let linesArr = [];
        for (let i = 0; i < lines.length; i++) {
          linesArr[i] = lines[i].split(",");
        }
        vm.workers = linesArr;
      };
    },

    downloadCSV () {
      var csv ='\ufeff';
      this.workers.forEach(worker => {
        worker.forEach(index=>{
          csv += index + ","
        });
        csv += "\n";
      })
      let blob = new Blob([csv], { type: 'text/csv' })
      let link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'Result.csv'
      link.click()
    }

  }
};
</script>

<style scoped>


</style>