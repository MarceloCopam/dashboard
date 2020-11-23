<template>
<div>
    
    <DxDataGrid
    data-source="http://localhost/laravel-copam-api/copam/public/api/get-servidores"
    :columns="columns"
    :dataField="dataField"
    :show-borders="true"

  />
  
</div>
</template>
<script>
import {
  DxDataGrid,
} from 'devextreme-vue/data-grid';
// import DxDataGrid from 'devextreme-vue/data-grid';

export default {
  components: {
    DxDataGrid,  
  },
  data() {
    return {
      columns: ['nome', 'cpf'],
      dataField: ['Nome', 'CPF']
    };
  }
};
</script>