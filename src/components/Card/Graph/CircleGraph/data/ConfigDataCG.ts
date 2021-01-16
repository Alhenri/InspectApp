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
    inData: IDataIn[];

    constructor(DataDefault: object[]){
        this.inData = DataDefault as IDataIn[];
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
    dataConverter(){
        this.inData.map(
            (dat)=>{
                this.outData[0].value += dat.Azul
                this.outData[1].value += dat.Roxo
                this.outData[2].value += dat.Vermelho
            }
        )
    }

    // Convertendo tirando a média
    dataConvertMedia(){
        this.inData.map(
            (dat) => {
                this.outData[0].value += Math.round(dat.Azul/this.inData.length);
                this.outData[1].value += Math.round(dat.Roxo/this.inData.length);
                this.outData[2].value += Math.round(dat.Vermelho/this.inData.length);
            }
        )
    }
}