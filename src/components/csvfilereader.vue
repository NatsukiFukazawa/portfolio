<template>
  <div class="csvfilereader">
    <h2>1csvfilereader</h2>
    <p>csvファイルを読み込んで表示します、ダウンロードボタンで表示したcsvファイルをダウンロードできます。</p>
    <div class="form-group">
      <div class="input-group">
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputFile" @change="loadCsvFile" />
          <label class="custom-file-label" for="inputFile" data-browse="参照">
            {{
            message
            }}
          </label>
        </div>
        <div class="input-group-append">
          <button
            v-on:click="Filereset"
            type="button"
            class="btn btn-outline-secondary input-group-text"
            id="inputFileReset"
          >取消</button>
        </div>
      </div>
    </div>

    <table align="center" border="1" v-if="axis1 != []">
      <tr v-for="(worker, index) in axis1" :key="index">
        <td v-for="(column, index) in worker" :key="index">{{ column }}</td>
      </tr>
    </table>
    <button
      type="button"
      class="btn btn-outline-secondary input-group-text download"
      v-on:click="downloadCSV"
    >ダウンロード</button>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/bs-custom-file-input/dist/bs-custom-file-input.js"></script>
<script>
export default {
  name: "csvfilereader",
  data() {
    return {
      message: "ファイルを選択してください(ドラッグでもできます)",
      axis1: [],
    };
  },
  methods: {
    loadCsvFile(e) {
      let vm = this;
      vm.axis1 = [];
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
        lines.pop(); //最初の要素削除
        let linesArr = [];
        for (let i = 0; i < lines.length; i++) {
          linesArr[i] = lines[i].split(",");
        }
        vm.axis1 = linesArr;
      };
    },

    bsCustomFileInput() {
      bsCustomFileInput.init();
    },

    Filereset() {
      this.message = "ファイルを選択して!(ドラッグでもできます)";

      this.axis1 = [];
    },

    downloadCSV() {
      if (this.axis1 == []) {
        this.message = "csvファイルは読み込まれていません";
        return;
      }
      var csv = "\ufeff";
      this.axis1.forEach((worker) => {
        worker.forEach((index) => {
          csv += index + ",";
        });
        csv += "\n";
      });
      let blob = new Blob([csv], { type: "text/csv" });
      let link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "Result.csv";
      link.click();
    },
  },
};
</script>

<style lang="scss" scoped>
.csvfilereader {
  padding: 0 250px;
  .download {
    margin: 0 auto;
  }

  .custom-file-input {
    &:hover {
      color: cyan;
    }
  }
}
</style>
