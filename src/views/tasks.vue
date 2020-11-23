<template>
  <div>
    <h2 class="content-block">Servidores</h2>
    <dx-data-grid
      class="dx-card wide-card"
      :data-source="tasks"
      :focused-row-index="0"
      :show-borders="false"
      :focused-row-enabled="true"
      :column-auto-width="true"
      :column-hiding-enabled="true"
      key-expr="id"
    >
      <dx-paging :page-size="10" />
      <dx-pager
        :show-page-size-selector="true"
        :show-info="true"
        :allowed-page-sizes="pageSizes"
      />
      <dx-filter-row :visible="true" />

      <dx-column data-field="nome" :hiding-priority="2" caption="Nome" />

      <dx-column
        data-field="cpf"
        caption="CPF"
        :width="190"
        :hiding-priority="8"
      />

      <dx-column
        data-field="endereco"
        width="250"
        caption="Endereço"
        :hiding-priority="1"
      />

      <dx-column
        data-field="funcao"
        width="250"
        caption="Função"
        :hiding-priority="2"
      >
      </dx-column>
      <dx-column data-field="sexo" caption="Sexo" :hiding-priority="2">
      </dx-column>
    </dx-data-grid>
  </div>
</template>

<script>
import axios from "axios";
import DxDataGrid, {
  DxColumn,
  DxFilterRow,
  DxPager,
  DxPaging,
} from "devextreme-vue/data-grid";

export default {
  methods: {},
  data() {
    return {
      pageSizes: [5, 10, 100],
      showDragIcons: true,
      tasks: "",
    };
  },
  created() {
    axios
      .get("http://localhost/laravel-copam-api/copam/public/api/get-servidores")

      .then((response) => {
        this.tasks = response.data;
      });
  },
  mounted() {
    // axios
    //   .get("http://localhost/laravel-copam-api/copam/public/api/task")
    //   .then((response) => {
    //     this.tasks = response.data
    //   });
  },
  components: {
    DxDataGrid,
    DxColumn,
    DxFilterRow,
    DxPager,
    DxPaging,
  },
  computed: {},
};
</script>
<style scoped>
.options {
  padding: 20px;
  background-color: rgba(191, 191, 191, 0.15);
  margin-top: 20px;
}

.caption {
  font-size: 18px;
  font-weight: 500;
}

.option {
  width: 24%;
  display: inline-block;
  margin-top: 10px;
}
</style>
