<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import VSelect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

// Import third-party components
import { VueGoodTable } from "vue-good-table-next";
import "vue-good-table-next/dist/vue-good-table-next.css";
import VChart from "vue-echarts";

// Import dummy data
import {
  warehousesData,
  reportTodayData,
  stockAlertsData,
  productsData,
  salesData,
  userPermissionsData,
  currentUserData,
  echartSalesData,
  echartProductData,
  echartPaymentData,
  echartCustomerData
} from "./dummyData";

const router = useRouter();

// Replace the i18n import and usage with a simple function
// import { useI18n } from "vue-i18n";
// const { t } = useI18n();

// Simple translation function to use as fallback
const t = (key) => {
  const translations = {
    'Sales': 'Sales',
    'Purchases': 'Purchases',
    'Filter_by_warehouse': 'Filter by warehouse',
    'Choose_Warehouse': 'Choose Warehouse',
    'StockAlert': 'Stock Alert',
    'Top_Selling_Products': 'Top Selling Products',
    'This_Week_Sales_Purchases': 'This Week Sales & Purchases',
    'Payment_Sent_Received': 'Payment Sent & Received',
    'TopCustomers': 'Top Customers',
    'Welcome_to_your_Dashboard': 'Welcome to your Dashboard',
    'Return_Sales': 'Return Sales',
    'Return_Purchases': 'Return Purchases',
    'Product': 'Product',
    'Stock Alert': 'Stock Alert',
    'Current Quantity': 'Current Quantity',
    'Total Sales': 'Total Sales',
    'Customer': 'Customer',
    'Status': 'Status',
    'Payment Status': 'Payment Status',
    'Amount': 'Amount'
  };
  
  return translations[key] || key;
};
// Reactive state with dummy data
const loading = ref(true);
const warehouse_id = ref(null);
const report_today = ref({});
const currentUser = ref(currentUserData);
const warehouses = ref(warehousesData);
const stock_alerts = ref([]);
const products = ref([]);
const sales = ref([]);
const currentUserPermissions = ref(userPermissionsData);

// Chart Data
const echartSales = ref(echartSalesData);
const echartProduct = ref(echartProductData);
const echartPayment = ref(echartPaymentData);
const echartCustomer = ref(echartCustomerData);

// Columns for tables
const columns_stock = ref([
  { label: t("Product"), field: "product_name" },
  { label: t("Stock Alert"), field: "stock_alert" },
  { label: t("Current Quantity"), field: "current_quantity" }
]);

const columns_products = ref([
  { label: t("Product"), field: "product_name" },
  { label: t("Total Sales"), field: "total" }
]);

const columns_sales = ref([
  { label: t("Customer"), field: "customer" },
  { label: t("Status"), field: "statut" },
  { label: t("Payment Status"), field: "payment_status" },
  { label: t("Amount"), field: "amount", type: "number" }
]);

const CurrentMonth = computed(() => new Date().toLocaleString("default", { month: "long" }));

// Fetch Data (Simulated API Call with dummy data)
const fetchData = async () => {
  setTimeout(() => {
    report_today.value = reportTodayData;
    stock_alerts.value = stockAlertsData;
    products.value = productsData;
    sales.value = salesData;
    loading.value = false;
  }, 1000);
};

// Warehouse Selection
const Selected_Warehouse = (id) => {
  warehouse_id.value = id;
  console.log("Selected Warehouse:", id);
  // In a real app, you might refetch data based on warehouse selection
};

// Fetch data on component mount
onMounted(fetchData);
</script>

<template>
  <div class="main-content">
    <div v-if="loading" class="loading_page spinner spinner-primary mr-3"></div>

    <div v-else-if="currentUserPermissions.includes('dashboard')">
      <!-- Warehouse Selection -->
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class="form-group">
            <label>{{ t('Filter_by_warehouse') || 'Filter by warehouse' }}</label>
            <VSelect
              v-model="warehouse_id"
              :options="warehouses.map(w => ({ label: w.name, value: w.id }))"
              @change="Selected_Warehouse"
              :searchable="true"
              :placeholder="t('Choose_Warehouse') || 'Choose Warehouse'"
            />
          </div>
        </div>
      </div>

      <!-- Dashboard Cards -->
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <router-link to="/app/sales/list">
            <div class="card card-icon-bg card-icon-bg-primary text-center">
              <i class="i-Full-Cart"></i>
              <div class="content">
                <p class="text-muted mt-2 mb-0">{{ t("Sales") || 'Sales' }}</p>
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ currentUser.currency }} {{ report_today.today_sales || 0 }}
                </p>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <router-link to="/app/purchases/list">
            <div class="card card-icon-bg card-icon-bg-primary text-center">
              <i class="i-Add-Cart"></i>
              <div class="content">
                <p class="text-muted mt-2 mb-0">{{ t("Purchases") || 'Purchases' }}</p>
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ currentUser.currency }} {{ report_today.today_purchases || 0 }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
        
        <div class="col-lg-3 col-md-6 col-sm-12">
          <router-link to="/app/sales/returns">
            <div class="card card-icon-bg card-icon-bg-primary text-center">
              <i class="i-Return"></i>
              <div class="content">
                <p class="text-muted mt-2 mb-0">{{ t("Return_Sales") || 'Return Sales' }}</p>
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ currentUser.currency }} {{ report_today.return_sales || 0 }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
        
        <div class="col-lg-3 col-md-6 col-sm-12">
          <router-link to="/app/purchases/returns">
            <div class="card card-icon-bg card-icon-bg-primary text-center">
              <i class="i-Return-2"></i>
              <div class="content">
                <p class="text-muted mt-2 mb-0">{{ t("Return_Purchases") || 'Return Purchases' }}</p>
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ currentUser.currency }} {{ report_today.return_purchases || 0 }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Sales Chart -->
      <div class="row">
        <div class="col-lg-8 col-md-12 col-sm-12">
          <div class="card mb-30">
            <div class="card-body">
              <h4 class="card-title">{{ t("This_Week_Sales_Purchases") || 'This Week Sales & Purchases' }}</h4>
              <div class="chart-wrapper" style="height: 300px;">
                <v-chart :option="echartSales" autoresize></v-chart>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-12 col-sm-12">
          <div class="card mb-30">
            <div class="card-body">
              <h4 class="card-title">{{ t("Top_Selling_Products") || 'Top Selling Products' }} ({{ new Date().getFullYear() }})</h4>
              <div class="chart-wrapper" style="height: 300px;">
                <v-chart :option="echartProduct" autoresize></v-chart>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stock Alert -->
      <div class="row">
        <div class="col-md-8">
          <div class="card mb-30">
            <div class="card-body">
              <h5 class="card-title border-bottom p-3 mb-2">{{ t("StockAlert") || 'Stock Alert' }}</h5>
              <vue-good-table 
                :columns="columns_stock" 
                :rows="stock_alerts" 
                :search-options="{
                  enabled: true
                }"
                :pagination-options="{
                  enabled: true,
                  perPage: 5
                }"
              />
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card mb-30">
            <div class="card-body">
              <h5 class="card-title border-bottom p-3 mb-2">{{ t("Top_Selling_Products") || 'Top Selling Products' }} ({{ CurrentMonth }})</h5>
              <vue-good-table 
                :columns="columns_products" 
                :rows="products"
                :pagination-options="{
                  enabled: true,
                  perPage: 5
                }"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Payment Sent & Received -->
      <div class="row">
        <div class="col-lg-8 col-md-12 col-sm-12">
          <div class="card mb-30">
            <div class="card-body">
              <h4 class="card-title">{{ t("Payment_Sent_Received") || 'Payment Sent & Received' }}</h4>
              <div class="chart-wrapper" style="height: 300px;">
                <v-chart :option="echartPayment" autoresize></v-chart>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-12 col-sm-12">
          <div class="card mb-30">
            <div class="card-body">
              <h4 class="card-title">{{ t("TopCustomers") || 'Top Customers' }} ({{ CurrentMonth }})</h4>
              <div class="chart-wrapper" style="height: 300px;">
                <v-chart :option="echartCustomer" autoresize></v-chart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <h4>{{ t("Welcome_to_your_Dashboard") || 'Welcome to your Dashboard' }}</h4>
    </div>
  </div>
</template>

