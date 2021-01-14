import dados from '../../BarGraph/data/data-example.json'

// Essa função ta recebendo os dados no modelo do grafico de barras

interface IDataIn{ // Interface dos dados que entram (barra != circulo) que importam
    Day: string,
    Azul: number,
    Vermelho: number,
    Roxo: number
}

interface IDataOut{ // Interface dos dados que saem
    id: string,
    value: number
}

export function dataFilter(data: object[]){ // object array são jsons
    let DataOut: IDataOut[] = [
        {
            id: "Azul",
            value: 0
            },
            {
                id: "Roxo",
                value: 0
            },
            {
                id: "Vermelho",
                value: 0
            }
    ]; // Meu retorno segue o modelo
    const DataIn: IDataIn[] = dados as unknown as IDataIn[]; // confia na call

    DataIn.map((data)=>{
        DataOut[0].value += data.Azul
        DataOut[1].value += data.Roxo
        DataOut[2].value += data.Vermelho
    })

    console.log(DataOut);

    return DataOut;
}