<template>
<div>
  <div class="form-group">
    <label for="inputFile">File input</label>
    <div class="input-group">
      <div class="custom-file">
        <input type="file" class="custom-file-input" id="inputFile" @change="loadCsvFile">
        <label class="custom-file-label" for="inputFile" data-browse="参照">ファイルを選択(ここにドロップすることもできます)</label>
      </div>
      <div class="input-group-append">
        <button v-on:click="Filereset" type="button" class="btn btn-outline-secondary input-group-text" id="inputFileReset">取消</button>
      </div>
    </div>
  </div>
  
  
    <p>{{ message }}</p>
 
    <table align ="center" border="1">
      <tr v-for="(worker, index) in workers" :key="index">
        <td  v-for="(column, index) in worker" :key="index">{{ column }}</td>
        
      </tr>
    </table>
    
    <button type="button" class="btn btn-success" v-on:click="downloadCSV">ダウンロード</button>
    
  </div>
</template>
 

 <script src="https://cdn.jsdelivr.net/npm/bs-custom-file-input/dist/bs-custom-file-input.js"></script>
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


    bsCustomFileInput(){
      bsCustomFileInput.init();
    },


    Filereset(){
      bsCustomFileInput.init();
      document.getElementById('inputFileReset').addEventListener('click', function() {
        var elem = document.getElementById('inputFile');
        elem.value = '';
        elem.dispatchEvent(new Event('change'));
        this.workers =[]
      });
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
div{
  padding:0 40px
}

</style>