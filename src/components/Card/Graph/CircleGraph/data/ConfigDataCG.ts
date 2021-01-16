/* 
    Essa classe está recebendo dados de fora e pode os manipular
    para diferentes finalidades (exemplo: definições na configuração do card)
*/

interface IDataIn{ // Interface dos dados que entram
    Day: string,
    Azul: number,
    Vermelho: number,
    Roxo: number
}

interface IDataOut{ // Interface dos dados que saem apropiados para os gráficos
    id: string,
    value: number
}

export class DataCicleGraph {
    outData: IDataOut[];

    constructor(DataDefault: IDataIn[]){
        this.outData = [
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
        ]; // Meu retorno vai seguir esse modelo
    }

    // Função que converte os dados para o grafico
    dataConverter(data: IDataIn[]){
        data.map(
            (dat)=>{
                this.outData[0].value += dat.Azul
                this.outData[1].value += dat.Roxo
                this.outData[2].value += dat.Vermelho
            }
        )
    }

    // Convertendo tirando a média
    dataConvertMedia(data: IDataIn[]){
        data.map(
            (dat) => {
                this.outData[0].value += Math.round(dat.Azul/data.length);
                this.outData[1].value += Math.round(dat.Roxo/data.length);
                this.outData[2].value += Math.round(dat.Vermelho/data.length);
            }
        )
    }
}