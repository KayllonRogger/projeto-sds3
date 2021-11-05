import BarCharts from "components/BarCharts";
import DataTable from "components/DataTable/DataTable";
import DonutsChart from "components/DonutsChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function Dashboard() {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <>
                <div className="container-fluid">
                    <NavBar />
                    <h1 className="text-primary py-3">Dashboard de Vendas</h1>
                    <div className="row px-3">
                        <div className="col-sm-6">
                            <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
                            <BarCharts />
                        </div>
                        <div className="col-sm-6">
                            <h5 className="text-center text-secondary">Todas as vendas</h5>
                            <DonutsChart />
                        </div>
                    </div>
                    <div className="row py 3">
                        <h1 className="text-primary">Todas as vendas</h1>
                        <DataTable />
                    </div>
                    <Footer />
                </div>
            </>
        </div>
    );
}

export default Dashboard;