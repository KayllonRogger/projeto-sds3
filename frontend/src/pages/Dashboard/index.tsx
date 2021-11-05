import BarCharts from "components/BarCharts";
import DataTable from "components/DataTable/DataTable";
import DonutsChart from "components/DonutsChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function Dashboard() {
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
                        <h5 className="text-center text-secondary">Todas as vendas</h5>
                        <DonutsChart />
                    </div>
                </div>
                <div className="row py 3">
                    <h1 className="text-primary">Todas as vendas</h1>
                    <DataTable />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;