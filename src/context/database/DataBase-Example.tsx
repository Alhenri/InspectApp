import { stringify } from "querystring";

// Base de dados para teste
function getRandomInt(min: number, max: number) { // retorna um valor aleatorio entre 2 numeros
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

interface IDataOut{
    Graph: object[],
    List: object[],
    Table: object[]
}

function dataBase(): IDataOut{
    const auxGraph: object[] = [];
    const auxList: object[] = [];
    const auxTable: object[] = [];

    for (let index = 0; index < getRandomInt(5, 20); index++) {
        auxGraph.push({
            Day: `teste ${index}`,
            Azul: getRandomInt(0, 100),
            Vermelho: getRandomInt(0, 100),
            Roxo: getRandomInt(0, 100)
        });
        auxList.push({
            plano: `Plano ${getRandomInt(0, 1000)}`,
            responsavel: `Funcionario ${getRandomInt(0, 100)}`,
            status: `${getRandomInt(0, 2)>0?"true":"false"}`,
            hora: `${getRandomInt(0, 24).toString().padStart(2, "0")
            }:${getRandomInt(0, 60).toString().padStart(2, "0")}h`,
            data: `${getRandomInt(0, 28).toString().padStart(2, "0")
            }/${getRandomInt(0, 12).toString().padStart(2, "0")
            }/${getRandomInt(15, 20).toString().padStart(2, "0")}`
        });
        auxTable.push({
            nome: `Funcionario ${getRandomInt(0, 100)}`,
            planejado: getRandomInt(5, 10),
            realizado: getRandomInt(5, 10),
            lastAtt: `${getRandomInt(0, 24).toString().padStart(2, "0")}:${
            getRandomInt(0, 60).toString().padStart(2, "0")}h 
            ${getRandomInt(0, 28).toString().padStart(2, "0")
            }/${getRandomInt(0, 12).toString().padStart(2, "0")
            }/${getRandomInt(15, 20).toString().padStart(2, "0")}`
        })
    }
    return {
        Graph: auxGraph,
        List: auxList,
        Table: auxTable
    }
}
export default dataBase;