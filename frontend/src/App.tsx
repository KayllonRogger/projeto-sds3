import BarCharts from "components/BarCharts";
import DataTable from "components/DataTable/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import DonutsChart from "components/DonutsChart";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
            <BarCharts />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas vendas</h5>
            <DonutsChart />
          </div>
        </div>
        <div className="py 3">
          <h1 className="text-primary">Todas vendas</h1>
          <DataTable />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
