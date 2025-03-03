// Dummy data for Vue 3 Dashboard

// Warehouse data
export const warehousesData = [
    { id: 1, name: 'Main Warehouse' },
    { id: 2, name: 'North Warehouse' },
    { id: 3, name: 'South Warehouse' },
    { id: 4, name: 'East Distribution Center' },
    { id: 5, name: 'West Distribution Center' }
  ];
  
  // Daily report data
  export const reportTodayData = {
    today_sales: 5680,
    today_purchases: 3245,
    return_sales: 420,
    return_purchases: 180
  };
  
  // Stock alerts data
  export const stockAlertsData = [
    { id: 1, product_name: 'Laptop Pro X1', stock_alert: 5, current_quantity: 3 },
    { id: 2, product_name: 'Wireless Mouse M310', stock_alert: 10, current_quantity: 8 },
    { id: 3, product_name: 'HD Monitor 24"', stock_alert: 8, current_quantity: 2 },
    { id: 4, product_name: 'Bluetooth Keyboard', stock_alert: 15, current_quantity: 4 },
    { id: 5, product_name: 'USB-C Adapter', stock_alert: 20, current_quantity: 5 },
    { id: 6, product_name: 'External SSD 1TB', stock_alert: 12, current_quantity: 7 }
  ];
  
  // Top selling products data
  export const productsData = [
    { id: 1, product_name: 'Smartphone X12', total: 132 },
    { id: 2, product_name: 'Wireless Earbuds', total: 98 },
    { id: 3, product_name: 'Laptop Pro X1', total: 76 },
    { id: 4, product_name: 'Smart Watch Series 5', total: 65 },
    { id: 5, product_name: 'Bluetooth Speaker', total: 54 }
  ];
  
  // Recent sales data
  export const salesData = [
    { id: 1, customer: 'John Smith', statut: 'Completed', payment_status: 'Paid', amount: 1250 },
    { id: 2, customer: 'Lisa Johnson', statut: 'Pending', payment_status: 'Unpaid', amount: 980 },
    { id: 3, customer: 'Michael Brown', statut: 'Delivered', payment_status: 'Paid', amount: 2340 },
    { id: 4, customer: 'Sarah Williams', statut: 'Completed', payment_status: 'Paid', amount: 1840 },
    { id: 5, customer: 'Kevin Jones', statut: 'Processing', payment_status: 'Partially Paid', amount: 3200 }
  ];
  
  // User permissions
  export const userPermissionsData = ['dashboard', 'sales', 'purchases', 'products'];
  
  // Current user data
  export const currentUserData = {
    id: 1,
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'Administrator',
    currency: '$'
  };
  
  // Sales & Purchases Chart Data
  export const echartSalesData = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Sales', 'Purchases']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Sales',
        type: 'bar',
        data: [4200, 3800, 5500, 4900, 6800, 7200, 5500],
        color: '#5D78FF'
      },
      {
        name: 'Purchases',
        type: 'bar',
        data: [3200, 2800, 4100, 3600, 4500, 5200, 3800],
        color: '#E14C86'
      }
    ]
  };
  
  // Top Products Chart Data
  export const echartProductData = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 10,
      data: ['Smartphone X12', 'Wireless Earbuds', 'Laptop Pro X1', 'Smart Watch', 'Bluetooth Speaker']
    },
    series: [
      {
        name: 'Sales',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '16',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 132, name: 'Smartphone X12' },
          { value: 98, name: 'Wireless Earbuds' },
          { value: 76, name: 'Laptop Pro X1' },
          { value: 65, name: 'Smart Watch' },
          { value: 54, name: 'Bluetooth Speaker' }
        ]
      }
    ]
  };
  
  // Payment Chart Data
  export const echartPaymentData = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Received', 'Sent']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Received',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [12000, 13200, 10100, 13400, 19000, 15600, 17200],
        color: '#5D78FF'
      },
      {
        name: 'Sent',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [8200, 9320, 9010, 10340, 10900, 11600, 10200],
        color: '#E14C86'
      }
    ]
  };
  
  // Top Customers Chart Data
  export const echartCustomerData = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: ${c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 10,
      data: ['John Smith', 'Lisa Johnson', 'Michael Brown', 'Sarah Williams', 'Kevin Jones']
    },
    series: [
      {
        name: 'Purchase Amount',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '16',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 6850, name: 'John Smith' },
          { value: 5460, name: 'Lisa Johnson' },
          { value: 4700, name: 'Michael Brown' },
          { value: 3680, name: 'Sarah Williams' },
          { value: 2950, name: 'Kevin Jones' }
        ]
      }
    ]
  };