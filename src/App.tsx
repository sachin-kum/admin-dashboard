import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { lazy } from "react";
import Loading from "./Loading";
import NewProduct from "./components/management/Newproduct";
import Productmanagement from "./components/management/productmanagement";
import TransactionManagement from "./components/management/transactionmanagement";
import BarCharts from "./pages/charts/BarCharts";
import PieCharts from "./pages/charts/PieCharts";
import Linecharts from "./pages/charts/LineCharts";
import Stopwatch from "./pages/apps/StopWatch";
import Coupon from "./pages/apps/Cupons";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));

const Customers = lazy(() => import("./pages/Customers"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/transaction" element={<Transaction />} />
            <Route path="/admin/customer" element={<Customers />} />
            {/* charts */}
            <Route path="/admin/chart/bar" element={<BarCharts />} />
            <Route path="/admin/chart/pie" element={<PieCharts />} />
            <Route path="/admin/chart/line" element={<Linecharts />} />

            {/* management */}
            <Route path="/admin/product/new" element={<NewProduct />} />
            <Route path="/admin/product/:id" element={<Productmanagement />} />
            <Route
              path="/admin/transaction/:id"
              element={<TransactionManagement />}
            />

            {/* Apps */}
            <Route path="/admin/app/coupon" element={<Coupon />} />
            <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
            {/* <Route path="/admin/app/toss" element={<Toss />} /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
